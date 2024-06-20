$(document).ready(function() {
    const $elements = $('.fade-in');

    const isInViewport = function($el) {
        const rect = $el[0].getBoundingClientRect();
        return rect.top < $(window).height() && rect.bottom > 0;
    };

    const checkElementsInView = function() {
        $elements.each(function() {
            const $el = $(this);
            if (isInViewport($el)) {
                $el.addClass('visible');
            } else {
                $el.removeClass('visible');
            }
        });
    };

    $(window).on('scroll resize', checkElementsInView);

    checkElementsInView();
});