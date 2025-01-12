let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    spaceBetween: 20,
    autoHeight:true,
    grabCursor:true,
    breakpoints: {
        640: {
            slidesPerView: 1,            
        },
        768: {
            slidesPerView: 2,          
        },
        1024: {
            slidesPerView: 3,          
        },
    },
});

// var swiper = new Swiper(".reviews-slider", {
//     loop: true,
//     spaceBetween: 20,
//     autoHeight: true,
//     grabCursor: true,
//     speed: 500, // Vitesse de transition
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 1,            
//         },
//         768: {
//             slidesPerView: 2,          
//         },
//         1024: {
//             slidesPerView: 3,          
//         },
//     },
// });




// let loadMoreBtn = document.querySelector('.packages .load.more .btn'); 
// let currentItem = 3;

// loadMoreBtn.onclick = () => {
//     let boxes = [...document.querySelectorAll('.packages .box-container .box')];
//     for (var i = currentItem; i < currentItem + 3; i++) {
//         boxes[i].style.display = 'inline-block'; 
//     }
//     currentItem += 3; 
//     if (currentItem >= boxes.length) {
//         loadMoreBtn.style.display = 'none';
//     }
// };



document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.querySelector('.load-more .btn');
    let currentItem = 3;

    loadMoreBtn.onclick = () => {
        const boxes = [...document.querySelectorAll('.packages .box-container .box')];

        for (let i = currentItem; i < currentItem + 3 && i < boxes.length; i++) {
            boxes[i].style.display = 'inline-block';
        }

        currentItem += 3;

        if (currentItem >= boxes.length) {
            loadMoreBtn.style.display = 'none';
        }
    };
});















// document.addEventListener("DOMContentLoaded", function () {
//     const swiper = new Swiper('.home-slider', {
//         loop: true,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });
// });
