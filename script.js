// Mobile Menu Toggle
const toggleButton = document.getElementById('toggle');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Fade-in Animation on Scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const checkVisibility = () => {
  fadeInElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
};

// Trigger the animation on page load and on scroll
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Initial check when the page loads
checkVisibility();
