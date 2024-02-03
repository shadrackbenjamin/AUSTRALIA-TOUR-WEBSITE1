// 
// Your existing code for Swiper initialization
// var swiper = new Swiper('.banner-swiper', {
//     loop: true,
//     speed: 2000,
//     effect: 'cube',
//     grabCursor: true,
//     cubeEffect: {
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94
//     },
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     // Add these options for autoplay
//     autoplay: {
//         delay: 3000, // 3 seconds delay between slides
//         disableOnInteraction: false, // Autoplay will not be disabled after user interactions
//     }
// });
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.banner-swiper', {
        loop: true,
        speed: 2000,
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Autoplay settings
        autoplay: {
            delay: 2000, // 3 seconds delay between slides
            disableOnInteraction: false,
        }
    });

    // Add event listeners to pause on hover and resume on mouse leave
    swiper.el.addEventListener('mouseenter', function () {
        swiper.autoplay.stop();
    });

    swiper.el.addEventListener('mouseleave', function () {
        swiper.autoplay.start();
    });
});


