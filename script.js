const nav = document.querySelector('.nav');
const updateNav = () => {
  const scrolled = window.scrollY > 24;
  nav.style.background = scrolled ? 'rgba(13,14,16,.82)' : 'rgba(13,14,16,.48)';
  nav.style.borderBottomColor = scrolled ? 'rgba(255,255,255,.16)' : 'rgba(255,255,255,.1)';
};
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// Smooth reveal makes each section arrive naturally as visitors explore.
const revealTargets = document.querySelectorAll('.intro, .section-head, .project, .service-head, .service-list article, .about-image, .about-copy, .price-head, .price-grid article, .closing');
revealTargets.forEach((el) => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

// Keep anchor navigation polished and mobile-friendly.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
