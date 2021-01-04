"use strict";

function adaptive() {
    let width = window.innerWidth;
    if (width < 900) {
        // document.querySelector('.img-group').classList.add('one-time');
        document.querySelector('.gallery').classList.add('one-time');
        $('.one-time').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            nextArrow: '.next',
            prevArrow: '.prev',
        });
    } else if (width >=1371) {
        $('.one-time').slick("unslick");
    }

}


window.addEventListener('resize', function() {
    adaptive();
});

