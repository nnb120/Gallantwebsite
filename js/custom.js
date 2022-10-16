//Define variables for action
let scrollpos = window.scrollY
const header = document.querySelector('header')
const header_height = header.offsetHeight

//Define add and remove class function
const add_class_on_scroll = () => header.classList.add('fixed')
const remove_class_on_scroll = () => header.classList.remove('fixed')

//Js Function for add or remove class
window.addEventListener('scroll', function(){
    scrollpos = window.scrollY

    if(scrollpos > header_height){
        add_class_on_scroll()
    }
    else{
        remove_class_on_scroll()
    }
})


$('.client__testimonials--slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true, 
    fade: true,
    autoplaySpeed: 5000,
    speed: 1000,
    adaptiveHeight: true
});
$('.customer__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true, 
    autoplaySpeed: 4000,
    speed: 1000,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

new WOW().init();

$('.our-industry-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    autoplay: true, 
    autoplaySpeed: 4000,
    speed: 2000,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.nav-toggle').click(function(){
    $(this).next('nav').slideToggle();
    $(this).toggleClass('active');
});