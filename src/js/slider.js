"use strict";
let width = window.innerWidth;
function adaptive() {

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


let $toggleButton = $('.toggle-button');
let $menuWrap = $('.menu-wrap');
let $normal_menu =  $('.header__nav-menu');


if(width<680){
    $normal_menu.addClass('menu-wrap');
} else if (width>680) {
    $normal_menu.removeClass('menu-wrap');
}

$toggleButton.on('click', function() {
    $(this).toggleClass('button-open');
    $normal_menu.toggleClass('menu-show');
});

$('.close-btn').on('click', function(){
    $normal_menu.toggleClass('menu-show');
    // $('.close-btn').toggleClass('menu-show');
})


// $('#close-btn').removeClass('menu-show');