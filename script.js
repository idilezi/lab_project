const swiper = new Swiper(".mySwiper", {
    loop: true, 
    spaceBetween: 30, 
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, 

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, 

    breakpoints: {
        640: { slidesPerView: 1 }, 
        1024: { slidesPerView: 2 } 
    } 
});

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    
    if (mobileMenu.classList.contains("active")) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

const menuLinks = document.querySelectorAll(".mobile-menu a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = 'auto';
    });
});