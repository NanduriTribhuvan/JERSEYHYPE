// Animated Counters
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Adjust speed (lower = faster)
  
    counters.forEach(counter => {
      const animate = () => {
        const value = +counter.getAttribute('data-target');
        const data = +counter.innerText;
  
        const time = value / speed;
  
        if (data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        } else {
          counter.innerText = value;
        }
      };
  
      animate();
    });
  });
  
  // Popup
  window.onload = function () {
    setTimeout(function () {
      document.getElementById('cta-popup').style.display = 'block';
    }, 3000); // 3 sec delay
  };
  
  document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('cta-popup').style.display = 'none';
  });
  
  // Mobile Menu Toggle (backup)
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const navLinks = document.querySelector('.nav-links');
  
  mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  