// MENU TOGGLE
const menu = document.querySelector('.menu');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// STICKY NAVBAR ON SCROLL
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// SPLIDE CAROUSELS ON LOAD
window.onload = function () {
  // Hero Splide
  new Splide('.MySplide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 2.5,
    gap: '2rem',
    pagination: false,
    breakpoints: {
      1400: { perPage: 2 },
      1200: { perPage: 1.5 },
      500: { perPage: 1 },
    },
  }).mount({ AutoScroll: window.splide.Extensions.AutoScroll });

  // Testimonials Splide
  new Splide('.tst_splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 3,
    gap: '2rem',
    pagination: false,
    autoplay: true,
    perMove: 1,
    breakpoints: {
      1200: { perPage: 2 },
      900: { perPage: 1.5 },
      500: { perPage: 1 },
    },
  }).mount();

  // Companies Splide
  new Splide('.companies_splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 5,
    gap: '1rem',
    pagination: false,
    autoplay: true,
    perMove: 1,
    breakpoints: {
      1400: { perPage: 4 },
      900: { perPage: 3 },
      768: { perPage: 2 },
      500: { perPage: 1.5 },
    },
  }).mount();

  // Animate "Get in Touch" or any .animated-section on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.animated-section').forEach(el => observer.observe(el));
};
