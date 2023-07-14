
$(window).bind('load',function () {
    "use strict";
    if ($('.main_slider').length > 0) {
        $('.mv_bg').addClass('init');
        var mainSlider = $('.main_slider').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: false,
            centerMode: false,
            centerPadding: 0,
            pauseOnHover: false,
            fade: true,
            variableWidth: false,
            draggable: true,
            pauseOnFocus: false
        });
        mainSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.main_slider li:nth-child(' + (nextSlide + 1) + ')').addClass('zoomed');
        });
        mainSlider.on('afterChange', function (event, slick, currentSlide) {
            var slideIndex = currentSlide;
            if (slideIndex === 0) {
                slideIndex = 2;
            }
            $('.main_slider li:nth-child(' + (slideIndex) + ')').removeClass('zoomed');
        });
    }

    // AOS.init({
    //     once: "true",
    //     duration: 1200,
    // });
});
