(function ($) {
    // Constructotr
    var _options;
    function ToggleSlide(el, options) {
        _options = options || {};
        // register the sliding and other events
        toggleSlideTrigger(options.event, options.triggerClass, options.targetClass, el, options.clearOthers, options.toggleIds, options.toggleSlideSameElement, options.matchValue, options.slideUpCallback);
    }

    ToggleSlide.prototype = {
        test: "test",
        op: _options
    };

    function clearElement(element) {
        $(element).children().each(function () {
            $(this).find("input, select, textarea").not("input[type=checkbox], input[type=radio], input[type=button], input[type=submit]").val("");
            $(this).find("input[type=checkbox], input[type=radio]").prop("checked", false);
        });
    }

    function toggleSlideTrigger(event, triggerClass, targetClass, scopeElement, clearOthers, toggleIds, toggleSlideSameElement, matchValue, slideUpCallback) {
        var t = this.options;
        var handleEvent = event !== undefined && event.length > 0 ? event : "click";
        $(scopeElement).find(triggerClass).on(handleEvent,
                    function (e) {
                        if ($(this).is("a")) {
                            e.preventDefault();
                        }

                        var triggers = $(scopeElement).find(triggerClass);
                        var targets = $(scopeElement).find(targetClass);
                        var currentTriggerIndex = triggers.index(this);
                        var target = toggleSlideSameElement !== undefined && toggleSlideSameElement ? targets[0] : targets[currentTriggerIndex];

                        if ($(this).is("select")) {
                            if ($(this).val() !== matchValue) {
                                $(target).slideUp();
                                if (slideUpCallback !== undefined) {
                                    setTimeout(slideUpCallback, 0);
                                }
                                clearElement(target);
                                return;
                            }
                        }

                        if ($(this).prop("checked") && clearOthers) {
                            $(targets).each(function (i, element) {
                                if (i !== currentTriggerIndex) {
                                    if (slideUpCallback !== undefined) {
                                        setTimeout(slideUpCallback, 0);
                                    }
                                    $(element).slideUp();
                                    clearElement(element);
                                }
                            });
                            if (target !== undefined)
                                $(target).slideDown();
                        } else if (target !== undefined) {
                            if ($(target).is(":visible") && (matchValue === undefined || matchValue.length === 0 || matchValue === this.val())) {
                                if (slideUpCallback !== undefined) {
                                    setTimeout(slideUpCallback, 0);
                                }
                                $(target).slideUp();
                                clearElement(target);
                            } else {
                                $(target).slideDown();
                            }
                        }

                        if (toggleIds != undefined && toggleIds.length > 0) {
                            var toggleElementIds = toggleIds.split(";");
                            for (i = 0; i < toggleElementIds.length; i++) {
                                var id = toggleElementIds[i];
                                id = id.indexOf("#") === 0 ? id : "#" + id;
                                if ($(id).is("input")) {
                                    $(id).val("");
                                }
                                $(id).toggle();
                            }
                        }
                    }
                );
    }
    $.fn.extend({
        registerToggleSlide: function (options) {
            new ToggleSlide($(this), options);
        }
    });
    jqueryToggleSlide = ToggleSlide;
})(jQuery);