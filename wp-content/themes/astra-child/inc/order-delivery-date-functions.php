<?php
/**
 * order-delivery-date-functions.php.php
 *
 * Custom order delivery date function
 *
 * @author  Anusha Priyamal <rdanusha@gmail.com>
 */

//HELPER FUNCTIONS

/**
 * Get all orders for current date
 * @return int[]|WP_Post[]
 */
function get_orders_for_selected_delivery_date()
{
    global $wpdb;
    $date = (isset($_SESSION["delivery_date"]) && !empty($_SESSION["delivery_date"])) ? $_SESSION["delivery_date"] : date('Y-m-d');
    $selected_delivery_date = date('j F, Y', strtotime($date));

    $customer_orders = get_posts(array(
        'numberposts' => -1,
        'meta_query' => array(

            array('key' => 'Delivery Date',
                'value' => $selected_delivery_date,
                'compare' => '=',
            ),
        ),
        'post_type' => array('shop_order'),
        'post_status' => array('wc-processing', 'wc-completed'),
    ));
    return $customer_orders;
}

/**
 * Get order items for given order
 * @param $order
 * @return array
 */
function get_order_items($order)
{
    $order_items = [];
    $order = wc_get_order($order);
    foreach ($order->get_items() as $item_id => $item) {
        $product_id = $item->get_product_id();
        $quantity = $item->get_quantity();
        $order_items[$product_id] = $quantity;
    }
    return $order_items;
}

/**
 * Get already ordered product quantity for given product on current date
 * @param $product_id
 * @return float|int
 */
function get_already_ordered_quantity_for_selected_delivery_date($product_id)
{
    $customer_orders = get_orders_for_selected_delivery_date();
    if (count($customer_orders)) {
        $order_items_arr = [];
        foreach ($customer_orders as $customer_order) {
            $order = wc_get_order($customer_order);
            $order_items = get_order_items($order);
            $order_items_arr[$order->ID] = $order_items;
        }
        return array_sum(array_column($order_items_arr, $product_id));
    }
}

/**
 * Get remaining product quantity for user selected delivery date
 * @param $product_id
 * @return float|int|mixed
 */
function get_remain_product_quantity_for_selected_delivery_date($product_id)
{
    $daily_static_product_qty = get_post_meta($product_id, 'static_quantity', true);
    $already_ordered_quantity = get_already_ordered_quantity_for_selected_delivery_date($product_id);
    return $daily_static_product_qty - $already_ordered_quantity;
}


//SHORTCODE

/**
 * Delivery Date shortcode : [delivery-date-field]
 * @return string
 */
function delivery_date_shortcode_function()
{

    $action_url = esc_url(admin_url("admin-post.php"));
    $popup_message =  (get_option( 'popup_message', 1 ))?nl2br(get_option( 'popup_message', 1 )):'';


    $date = (isset($_SESSION["delivery_date"]) && !empty($_SESSION["delivery_date"])) ? $_SESSION["delivery_date"] : date('Y-m-d');

    $html = "<form action='$action_url' method='post'>";
    $html .= "<label>Delivery Date: </label>";
    $html .= "<input type='text' required class='delivery-date' id='delivery-date' name='delivery-date' value='$date'>";
    $html .= "<input type='hidden' id='action' name='action' value='set_delivery_date'>";
    $html .= "<button class='btn submit pum-close popmake-close' type='submit' name='set-del'>Submit</button>";
    $html .= "<button class='btn cancel' type='reset' name='cancel'>Cancel</button>";
    $html .= "</form>";
    $html .= "</form>";
    $html .= "<p>$popup_message</p>";

    $maxDate = (get_option( 'max_date', 1 ))?get_option( 'max_date', 1 ):'null';


    $html .= "<script>
                jQuery(document).ready(function($) {
                    $('.delivery-date').datepicker({
                          dateFormat: 'yy-mm-dd',
                          maxDate: $maxDate,
                          minDate: 0
                        });
                    });
                </script>";
    return $html;
}

/**
 * Register Delivery Date shortcode
 */
function register_shortcodes()
{
    add_shortcode('delivery-date-field', 'delivery_date_shortcode_function');
}

add_action('init', 'register_shortcodes');

//HOOKS AND ACTIONS

/**
 * Set delivery date submit ajax callback
 */
function set_delivery_date_ajax_callback()
{
    check_ajax_referer('wpdocs-special-string', 'security');
    $date = $_POST['delivery_date'];
    $_SESSION["delivery_date"] = $date;
    global $woocommerce;
    $woocommerce->cart->empty_cart();
    exit;
}

add_action('wp_ajax_set_delivery_date', 'set_delivery_date_ajax_callback');
add_action('wp_ajax_nopriv_set_delivery_date', 'set_delivery_date_ajax_callback');

/**
 * Display change delivery date link on pages
 */
function display_change_delivery_date_link()
{
    $date = (isset($_SESSION["delivery_date"]) && !empty($_SESSION["delivery_date"])) ? $_SESSION["delivery_date"] : date('Y-m-d');
    $formatted_date = date('j F, Y', strtotime($date));
    $alt_text = (get_option( 'popup_message', 1 ))?get_option( 'popup_message', 1 ):'';
    $html = '<a href="javascript:void(0)" title="' . $alt_text . '" class="button popmake-delivery-date" id="change-delivery-date">Change Delivery Date</a>';
    $html .= '<p>Selected Delivery Date: '.$formatted_date.'</p>';
    echo $html;
}

add_action('woocommerce_review_order_before_payment', 'display_change_delivery_date_link', 10, 0);
add_action('woocommerce_archive_description', 'display_change_delivery_date_link', 10, 0);

/**
 * Add backend custom field to store product daily static quantity
 */
function add_static_stock_quantity_field()
{
    $args = array(
        'label' => 'Daily Stock Quantity',
        'class' => 'short wc_input_stock',
        'id' => 'static_quantity',
        'name' => 'static_quantity',
        'custom_attributes' => array('required' => 'required'),
        'type' => 'number',
    );
    woocommerce_wp_text_input($args);
}

add_action('woocommerce_product_options_stock', 'add_static_stock_quantity_field');

function add_maximum_selectable_date_setting($settings)
{
    $updated_settings = array();
    foreach ($settings as $section) {
        // at the bottom of the General Options section
        if (isset($section['id']) && 'general_options' == $section['id'] &&
            isset($section['type']) && 'sectionend' == $section['type']) {
            $updated_settings[] = array(
                'name' => __('Maximum selectable date', 'max_date'),
                'id' => 'max_date',
                'type' => 'text',
                'css' => 'min-width:300px;',
                'default' => '4',  // WC >= 2.0
                'desc' => __('The maximum selectable date on delivery date calender. When set to 0, there is no maximum.', 'max_date'),
            );
            $updated_settings[] = array(
                'name' => __('Popup message', 'max_date'),
                'id' => 'popup_message',
                'type' => 'textarea',
                'css' => '',
                'default' => 'If you change the delivery date you have to add products to cart again.',  // WC >= 2.0
                'desc' => __('Add message to display on delivery date popup', 'max_date'),
            );
        }
        $updated_settings[] = $section;
    }
    return $updated_settings;
}

add_filter('woocommerce_general_settings', 'add_maximum_selectable_date_setting');

/**
 * Save custom filed value in database
 * @param $post_id
 */
function save_static_stock_quantity($post_id)
{
    $static_quantity = isset($_POST['static_quantity']) ? sanitize_text_field($_POST['static_quantity']) : '';
    $product = wc_get_product($post_id);

    $product->update_meta_data('static_quantity', $static_quantity);
    $product->save();
}

add_action('woocommerce_process_product_meta', 'save_static_stock_quantity');

/**
 * Add custom field on checkout page to keep and display user selected delivery date
 * @param $checkout
 */
function add_custom_checkout_field($checkout)
{
    $date = (isset($_SESSION["delivery_date"]) && !empty($_SESSION["delivery_date"])) ? $_SESSION["delivery_date"] : date('Y-m-d');
    $formatted_date = date('j F, Y', strtotime($date));
    echo '<div  style="display: block" >';

    woocommerce_form_field('delivery_date', array(
        'type' => 'text',
        'required' => true,
        'id' => 'delivery_date',
        'name' => 'delivery_date',
        'custom_attributes' => array('readonly' => 'readonly'),
        'class' => array('my-field-class form-row-wide'),
        'label' => __('Selected Delivery Date'),
    ), $formatted_date);
    echo '</div>';

}

add_action('woocommerce_checkout_order_review', 'add_custom_checkout_field');

/**
 * Overwrite delivery date values of Order Delivery Date plugin
 * @param $order_id
 */
function action_woocommerce_before_checkout_process($order_id)
{
    update_post_meta($order_id, 'Delivery Date', sanitize_text_field($_POST['delivery_date']));
    update_post_meta($order_id, '_orddd_timestamp', sanitize_text_field(strtotime($_POST['delivery_date'])));
}

add_action('woocommerce_checkout_order_processed', 'action_woocommerce_before_checkout_process');

/**
 * Overwrite availability text on single product view
 * @param $availability
 * @param $product
 * @return mixed
 */
function change_availability_text_on_single_product($availability, $product)
{
    $product_id = $product->get_id();
    $remain_quantity = get_remain_product_quantity_for_selected_delivery_date($product_id);

    if ($remain_quantity) {
        $availability['availability'] = __("$remain_quantity in stock", 'woocommerce');
    } else {
        $availability['availability'] = __("Out of stock", 'woocommerce');
    }
    return $availability;
}

add_filter('woocommerce_get_availability', 'change_availability_text_on_single_product', 1, 2);

/**
 * Changing the maximum quantity validation according to the remaining products quantity on selected delivery date
 * @param $args
 * @param $product
 * @return mixed
 */
function limit_woocommerce_quantity_changes($args, $product)
{

    $product_id = $product->get_id();
    $remain_quantity = get_remain_product_quantity_for_selected_delivery_date($product_id);

    $args['max_value'] = $remain_quantity; // Max quantity (default = -1)
    $args['min_value'] = 1; // Min quantity (default = 0)
    $args['step'] = 1; // Increment/decrement by this value (default = 1)

    return $args;
}

add_filter('woocommerce_quantity_input_args', 'limit_woocommerce_quantity_changes', 10, 2);

/**
 * Hide add to cart button when the product quantity is not available for selected delivery date
 * @param $is_purchasable
 * @param $product
 * @return bool
 */
function hide_add_to_cart_button($is_purchasable, $product)
{
    $product_id = $product->get_id();
    $remain_quantity = get_remain_product_quantity_for_selected_delivery_date($product_id);

    if ($remain_quantity) {
        $is_purchasable = true;
    } else {
        $is_purchasable = false;
    }
    return $is_purchasable;
}

add_filter('woocommerce_is_purchasable', 'hide_add_to_cart_button', 10, 2);

/**
 * Add product availability details on shop landing page
 */
function add_product_availability_text_on_product_landing_page()
{
    global $product;
    $product_id = $product->get_id();
    $remain_quantity = get_remain_product_quantity_for_selected_delivery_date($product_id);
    $date = (isset($_SESSION["delivery_date"]) && !empty($_SESSION["delivery_date"])) ? $_SESSION["delivery_date"] : date('Y-m-d');

    if ($remain_quantity > 0) {
        echo '<div class="remaining"><b>' . number_format($remain_quantity, 0, '', '') . '</b>' . __(" in stock available on $date", 'woocommerce') . '</div>';
    } else {
        echo '<div class="out-of-stock"> ' . __("Out of stock", 'woocommerce') . '</div>';
    }
}

add_action('woocommerce_after_shop_loop_item', 'add_product_availability_text_on_product_landing_page', 9);
