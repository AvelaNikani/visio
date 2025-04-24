document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Slider Functionality
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
        if (index >= totalSlides) currentSlide = 0;
        else if (index < 0) currentSlide = totalSlides - 1;
        else currentSlide = index;

        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));

    // Optional: Auto-slide every 5 seconds
    setInterval(() => goToSlide(currentSlide + 1), 5000);
});

function updateCarousel() {
    const translateValue = -((currentSlide * 100) / slideCount) + '%';
    track.css('transform', `translateX(${translateValue})`);
    pagination.removeClass('active');
    pagination.eq(currentSlide).addClass('active');
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateCarousel();
}
//arrow controls
$('.carousel-btn.next').click(nextSlide);
$('.carousel-btn.prev').click(prevSlide);
// Add click handler for pagination dots
pagination.click(function () {
    currentSlide = $(this).index();
    updateCarousel();
});