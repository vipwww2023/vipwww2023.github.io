const btn = document.getElementById('modeToggle');
const html = document.documentElement;

// 初始化：优先读 localStorage，否则按系统
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);
else if (prefersDark) html.setAttribute('data-theme', 'dark');

btn.onclick = () => {
  const now = html.getAttribute('data-theme');
  const next = now === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  btn.innerHTML = next === 'light' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
};

// 图标初始状态
btn.innerHTML = html.getAttribute('data-theme') === 'light' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';