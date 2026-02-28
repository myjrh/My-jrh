// public/app.js
document.addEventListener('DOMContentLoaded', () => {
  // Dark mode
  const toggleBtn = document.getElementById('darkModeToggle');
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');

  function setTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-theme');
      toggleBtn.textContent = '🌙';
    } else {
      body.classList.remove('dark-theme');
      toggleBtn.textContent = '☀️';
    }
    localStorage.setItem('theme', theme);
  }

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('light'); // default
  }

  toggleBtn.addEventListener('click', () => {
    const newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });

  // Close mobile menu when a link is clicked
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
    });
  });
});
