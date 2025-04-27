// LOADING SCREEN FADE OUT
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading');
  loadingScreen.classList.add('fade-out');
  
  // Show Popup after 5 sec
  setTimeout(() => {
    document.getElementById('cta-popup').style.display = 'block';
  }, 5000);
});

// CLOSE POPUP
const closePopup = document.getElementById('close-popup');
closePopup.addEventListener('click', () => {
  document.getElementById('cta-popup').style.display = 'none';
});

// MOBILE MENU TOGGLE
const mobileMenuBtn = document.getElementById('mobile-menu-button');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// COUNTERS ANIMATION
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
  const animate = () => {
    const value = +counter.getAttribute('data-target');
    const data = +counter.innerText;

    const time = value / speed;
    if(data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 10);
    } else {
      counter.innerText = value;
    }
  }

  animate();
});
