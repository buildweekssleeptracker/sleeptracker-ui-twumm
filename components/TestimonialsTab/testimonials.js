class Testimonials {
  constructor(testimonialsCarousel) {
    this.testimonialsCarousel = testimonialsCarousel;
    // Get all testimonials in the testimonials class
    this.testimonials = testimonialsCarousel.querySelectorAll('.testimonial');
    
    // Get left and right buttons
    this.leftButton = testimonialsCarousel.querySelector('.left-button');
    this.rightButton = testimonialsCarousel.querySelector('.right-button');
    console.log(this.leftButton)
    // Set current index to first testimonial in this.testimonials
    this.currentIndex = 0;
    this.testimonials[this.currentIndex].style.display = 'block';
    // Add click events to the left and right buttons
    this.leftButton.addEventListener('click', () => this.showLeftTestimonial());
    this.rightButton.addEventListener('click', () => this.showRightTestimonial());
  }
}

// Get articles section from document
const testimonialsCarousel = document.querySelector('.testimonials');
new Testimonials(testimonialsCarousel);
