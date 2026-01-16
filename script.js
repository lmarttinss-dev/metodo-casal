// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation for elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate-fadeIn');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Add animation class to hero elements
    const heroHeading = document.querySelector('section:first-child h1');
    const heroSubheading = document.querySelector('section:first-child p');
    const heroButton = document.querySelector('section:first-child a');
    
    if (heroHeading) heroHeading.classList.add('animate-on-scroll');
    if (heroSubheading) heroSubheading.classList.add('animate-on-scroll');
    if (heroButton) heroButton.classList.add('animate-on-scroll');
});

// Track CTA clicks for analytics
document.querySelectorAll('[href="#oferta"]').forEach(button => {
    button.addEventListener('click', () => {
        // Here you would typically send data to your analytics platform
        console.log('CTA clicked');
    });
});