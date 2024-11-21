const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

// Update Slide Position
function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

// Update Dots
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Go to the Previous Slide
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlidePosition();
});

// Go to the Next Slide
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
});

// Add Click Events for Dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlidePosition();
    });
});

// Auto-Slide (Optional)
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
}, 5000); // Slide every 5 seconds

// Initial Setup
updateSlidePosition();
