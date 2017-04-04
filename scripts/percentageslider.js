$(document).ready(function () {
    $(".slider").slider({
        create: function () {
            var handle = $(this).find(".ui-slider-handle");
            var inputId = $(this).prev().attr("id");
            // set aria attributes:
            handle.attr("role", "slider");
            handle.attr("aria-valuemin", 0);
            handle.attr("aria-valuemax", 100);
            handle.attr("aria-valuenow", 0);
            handle.attr("aria-controls", inputId);
        },
        change: function (event, ui) {
            var sum = 0;
            $(".slider").each(function () {
                sum += Number($(this).slider("option", "value"));
            });
            var val = ui.value;
            // set running total:
            $("#totalpercentage").html(sum + "%");
        },
        slide: function (event, ui) {
            $(this).prev().val(ui.value);
            $(this).find(".ui-slider-handle").attr("aria-valuenow", ui.value);
        }
    }).promise().done(function () {
        // allow for the sliders to finish initialising
        $(".slider").each(function (ind, obj) {
            if ($(obj).prev().val() != "") {
                // set slider value and aria attributes:
                $(obj).slider("option", "value", $(obj).prev().val());
                $(obj).find(".ui-slider-handle").attr("aria-valuenow", $(obj).prev().val());
            }
        });
    });

    $(".input-percent").on("blur", function () {
        // set slider value when target field changes:
        if ($(this).val() > 100)
            $(this).val(100);
        if ($(this).val() < 0)
            $(this).val(0);
        var slider = $(this).next();
        $(slider).slider("option", "value", $(this).val());
    });
});
