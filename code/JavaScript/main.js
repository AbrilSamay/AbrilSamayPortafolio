const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider li');
let currentIndex = 0;
const slideWidth = slides[0].clientWidth;
const slideInterval = 3000; // Cambiar de imagen cada 3 segundos

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(nextSlide, slideInterval);