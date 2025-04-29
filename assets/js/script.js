// Wait until DOM fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Hide Loading Screen Smoothly
  const loading = document.getElementById('loading');
  window.addEventListener('load', () => {
    loading.classList.add('fade-out');
    setTimeout(() => loading.style.display = 'none', 500);
  });

  // Popup Logic
  const popup = document.getElementById('cta-popup');
  const closeBtn = document.getElementById('close-popup');

  setTimeout(() => {
    popup.classList.add('show-popup');
  }, 5000);

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('show-popup');
  });

  // Counter Animation
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });

  // Countdown Timer
  function startFakeCountdown(minutes) {
    let time = minutes * 60; // Total seconds
    const countdownEl = document.getElementById('countdown');

    const interval = setInterval(() => {
      const mins = Math.floor(time / 60);
      const secs = time % 60;

      countdownEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

      time--;

      if (time < 0) {
        clearInterval(interval);
        countdownEl.textContent = "00:00"; // Optionally show expired
      }
    }, 1000);
  }

  // Start countdown from 15 minutes
  startFakeCountdown(15);

  // Search Box Toggle (if exists)
  const searchToggle = document.getElementById('search-toggle');
  const searchWrapper = document.getElementById('search-wrapper');

  if (searchToggle && searchWrapper) {
    searchToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent event bubbling
      searchWrapper.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!searchWrapper.contains(e.target)) {
        searchWrapper.classList.remove('active');
      }
    });
  }
});
