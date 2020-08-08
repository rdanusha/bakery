<?php
/**
 * astra_child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package astra_child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define('CHILD_THEME_ASTRA_CHILD_VERSION', '1.0.0');

/**
 * Register Session
 */
function register_session()
{
    if (!session_id()) {
        session_start();
    }
}

add_action('init', 'register_session');

/**
 * Enqueue styles
 */
function child_enqueue_styles()
{

    wp_enqueue_style('astra_child-theme-css', get_stylesheet_directory_uri() . '/assets/css/styles.css', array('astra-theme-css'), CHILD_THEME_ASTRA_CHILD_VERSION, 'all');
   // $plugin_url = plugins_url('/order-delivery-date', 'order-delivery-date');

    // Load the datepicker script (pre-registered in WordPress).
    wp_enqueue_script('jquery-ui-datepicker');

    // You need styling for the datepicker. For simplicity I've linked to the jQuery UI CSS on a CDN.
    wp_register_style('jquery-ui', 'https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css');
    wp_enqueue_style('jquery-ui');


  //  wp_enqueue_script('initialize-datepicker-functions-orddd', $plugin_url . '/js/initialize-datepicker-functions.js', array('initialize-datepicker-orddd'), '', false);

  //  wp_enqueue_script('initialize-datepicker-orddd', $plugin_url . '/js/initialize-datepicker.js', array('jquery'), '', false);

    // Register the script
    wp_register_script('astra_child-theme-scripts', get_stylesheet_directory_uri() . '/assets/js/scripts.js');

    // Localize the script with new data
    $script_data_array = array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'security' => wp_create_nonce("wpdocs-special-string")
    );
    wp_localize_script('astra_child-theme-scripts', 'ajax_settings', $script_data_array);
    // Enqueued script with localized data.
    wp_enqueue_script('astra_child-theme-scripts');

}

add_action('wp_enqueue_scripts', 'child_enqueue_styles', 15);

require 'inc/order-delivery-date-functions.php';
