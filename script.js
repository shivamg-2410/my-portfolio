const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

if (!localStorage.getItem('visited')) {
  alert("👋 Welcome to my portfolio!");
  localStorage.setItem('visited', 'yes');
}

const copyBtn = document.getElementById('copyEmailBtn');
const emailText = document.getElementById('emailText');

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(emailText.textContent).then(() => {
    copyBtn.textContent = "✅ Copied!";
    setTimeout(() => {
      copyBtn.textContent = "📋 Copy";
    }, 1500);
  });
});
