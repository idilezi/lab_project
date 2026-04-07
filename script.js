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