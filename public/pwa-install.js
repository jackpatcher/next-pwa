// Show install prompt for PWA if available
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  window.deferredPrompt = e;
  const installBtn = document.getElementById('pwa-install-btn');
  if (installBtn) {
    installBtn.style.display = 'block';
    installBtn.onclick = async () => {
      installBtn.style.display = 'none';
      e.prompt();
      const { outcome } = await e.userChoice;
      window.deferredPrompt = null;
    };
  }
});
