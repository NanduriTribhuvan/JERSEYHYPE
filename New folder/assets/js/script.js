// Load particles effect
particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('particles.js loaded successfully!');
});

// Scroll reveal animations (Optional - add if you want scroll animations)
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1000,
    reset: true
});

sr.reveal('.hero-content', { delay: 200 });
sr.reveal('.products', { delay: 400 });
sr.reveal('.trust-section', { delay: 600 });
sr.reveal('.contact-section', { delay: 800 });
