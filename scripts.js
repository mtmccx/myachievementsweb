// Initialize Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Handle loading screen
document.addEventListener("DOMContentLoaded", function() {
    const loadingFill = document.getElementById('loadingFill');
    const loadingScreen = document.getElementById('loadingScreen');
    const body = document.body;

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            loadingScreen.style.display = 'none'; 
            body.style.display = 'block'; 
        } else {
            width++;
            loadingFill.style.width = width + '%'; 
        }
    }, 30); 
});