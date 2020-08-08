jQuery(document).ready(function ($) {
    $(".pum-close").on('click', function (e) {
        e.preventDefault();
        let delivery_date = $('#delivery-date').val();
        var data = {
            action: 'set_delivery_date',
            delivery_date: delivery_date,
            security: ajax_settings.security,
        };
        $.post(ajax_settings.ajaxurl, data, function (response) {
            //alert("Response: " + response);
            location.reload(true);
        });
    });
    $(".cancel").on('click', function (e) {
        e.preventDefault();
        location.reload(true);
    });
});