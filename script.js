// Reveal animations on scroll
const elements = document.querySelectorAll('.animate-fade, .animate-slide');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;
  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
