// Preloader
window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  });
  
  // Order Now Button
  function orderNow(product) {
    window.open(`https://wa.me/916301050825?text=I'm%20interested%20in%20buying%20${product}`, '_blank');
  }
  
  // Particles JS
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 60 },
      "color": { "value": "#00ff88" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5 },
      "size": { "value": 3 },
      "move": { "enable": true, "speed": 1 }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "repulse" }
      }
    }
  });
  