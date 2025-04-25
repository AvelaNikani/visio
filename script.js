$(document).ready(function() {
    // Cache DOM elements
    const $carousel = $('.carousel-content');
    const $slides = $carousel.find('ul li');
    const $dots = $carousel.find('.page-icons span');
    const totalSlides = $slides.length;
    let currentSlide = 0;
    
    // Initialize carousel
    function initCarousel() {
        $slides.removeClass('active next prev');
        $slides.eq(currentSlide).addClass('active');
        $slides.eq((currentSlide + 1) % totalSlides).addClass('next');
        $slides.eq((currentSlide - 1 + totalSlides) % totalSlides).addClass('prev');
        
        $dots.removeClass('active');
        $dots.eq(currentSlide).addClass('active');
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentSlide = index;
        initCarousel();
    }
    
    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        initCarousel();
    }
    
    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        initCarousel();
    }
    
    // Arrow click handler
    $('.arrow').click(function() {
        nextSlide();
    });
    
    // Dot navigation click handler
    $dots.click(function() {
        const slideIndex = $(this).attr('rel') - 1;
        goToSlide(slideIndex);
    });
    
    // Initialize on page load
    initCarousel();
    
    // Optional: Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
});