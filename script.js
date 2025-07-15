function toggleTheme() {
  const root = document.documentElement;
  const currentBg = getComputedStyle(root).getPropertyValue('--bg-color').trim();

  if (currentBg === '#f9f9f9') {
    root.style.setProperty('--bg-color', '#1e1e1e');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--card-bg', '#2c2c2c');
    root.style.setProperty('--card-border', '#444');
    root.style.setProperty('--header-bg', '#111');
    root.style.setProperty('--header-text', '#00ffcc');
  } else {
    root.style.setProperty('--bg-color', '#f9f9f9');
    root.style.setProperty('--text-color', '#333');
    root.style.setProperty('--card-bg', '#ffffff');
    root.style.setProperty('--card-border', '#ddd');
    root.style.setProperty('--header-bg', '#333');
    root.style.setProperty('--header-text', 'white');
  }
}
