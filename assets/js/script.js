jQuery( function($) {
    var handle = $( ".myCustom-handle span" );
    var inputSend = $( ".sliderRangeInputArea" );
    $( ".sliderRange-js" ).slider({
        range: 'min',
        min: 0,
        value:25,
        max: 120,

        slide: function( event, ui ) {
            handle.html(ui.value + "<b>м<sup>2</sup></b>");//передали значение в нужный нам блок span
            handle.addClass('active')
            inputSend.val(ui.value); //передали значение в нужный нам input для отправки на почту
        }
    });
} );
jQuery( function($) {
    var handleTwo = $( ".myCustom-handle-two span" );
    var inputSendTwo = $( ".sliderRangeInputAreaTwo" );
    $( ".sliderRange-js-two" ).slider({
        range: 'min',
        min: 1,
        value:6,
        max: 20,

        slide: function( event, ui ) {
            handleTwo.html(ui.value);//передали значение в нужный нам блок span

            inputSendTwo.val(ui.value); //передали значение в нужный нам input для отправки на почту
        }
    });
} );


$('.nav__menu').slick({
    infinite: false,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 3000,
            settings: "unslick"
        },
        {
            breakpoint:1024,
            settings: "slick"
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1.5   ,
            }
        },
    ]
});

(function($) {
    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);
const accordions = document.querySelectorAll(".accordion-wrapper");
for (const accordion of accordions) {
    const panels = accordion.querySelectorAll(".accordion");
    for (const panel of panels) {
        const head = panel.querySelector(".accordion-header");
        head.addEventListener('click', () => {
            for (const otherPanel of panels) {
                if (otherPanel !== panel) {
                    otherPanel.classList.remove('accordion-expanded');
                }
            }
            panel.classList.toggle('accordion-expanded');
        });
    }
}
jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});

jQuery(document).ready(function ($) {
    $('.booking-popup').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
    });
});
