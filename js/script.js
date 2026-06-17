
// Language toggle
function toggleLang() {
  document.getElementById('body-root').classList.toggle('en');
}

// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});

