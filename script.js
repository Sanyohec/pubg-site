// Сюрприз-кнопка
document.getElementById('surpriseBtn')?.addEventListener('click', function() {
  alert("Вау, Саня! Ти справжній король PUBG Mobile! 👑");
});

// Гамбургер-меню
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
mobileMenu?.addEventListener('click', () => { navList.classList.toggle('show'); });

// Анімація секцій при появі
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('fade-in-visible'); });
}, { threshold: 0.3 });
sections.forEach(section => observer.observe(section));
