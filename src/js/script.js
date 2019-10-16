$(document).ready(function () {
    $('.carousel__items').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        sliderToShow:1,
        prevArrow: '<button type="button" class="prev"><img src="images/img/left_arrow.png"></button>',
        nextArrow: '<button type="button" class="next"><img src="images/img/right_arrow.png"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        }]
    });

    $('input[name=phone]').mask("+7(999)999-99-99")

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.header__nav'),
        menuItem = document.querySelectorAll('.header__bc'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__nav_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('header__nav_active');
            })
        })
    })
});


