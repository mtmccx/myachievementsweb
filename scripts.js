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

// loading screen
 // Simulate loading
    document.addEventListener("DOMContentLoaded", function() {
        let loadingFill = document.getElementById('loadingFill');
        let loadingScreen = document.getElementById('loadingScreen');
        let body = document.body;

        let width = 0;
        let interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                loadingScreen.style.display = 'none'; // Hide loading screen
                body.style.display = 'block'; // Show body content
            } else {
                width++;
                loadingFill.style.width = width + '%'; // Fill the loading bar
            }
        }, 30); // Adjust timing as needed
    });