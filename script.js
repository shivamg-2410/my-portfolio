const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.documentElement.toggleAttribute('data-theme');
  toggleBtn.textContent =
    document.documentElement.hasAttribute('data-theme') ? '☀️ Light Mode' : '🌙 Dark Mode';
});
