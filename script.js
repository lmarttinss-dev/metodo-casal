document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.section');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    document.querySelectorAll('.section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Initialize feather icons
    feather.replace();
    
    // Price countdown timer (example)
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 1); // 24 hours from now
    
    const countdownTimer = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('countdown-timer').textContent = `${hours}h ${minutes}m ${seconds}s`;
        
        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById('countdown-timer').textContent = "Oferta expirada!";
        }
    }, 1000);
});