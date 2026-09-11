/* ==========================================================================
   Micro-crèche Les P'tits Soleils — Tarbes
   - Menu mobile
   - Lien actif dans la navigation
   - Apparition au scroll
   - Injection de l'URL de pré-inscription
   ========================================================================== */

/* URL de la plateforme externe de pré-inscription.
   Un seul endroit à modifier : tous les liens `data-link="preinscription"`
   du site sont mis à jour automatiquement. */
const PREINSCRIPTION_URL = 'https://mcdespyrenees.jdmapps.fr/index.php/espace-famille/reserver-une-place';

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menu mobile ---------- */
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('menu-close');

  const openMenu = () => {
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    menu.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (burger && menu) burger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (menu) {
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
    });
  }

  /* ---------- Lien actif dans la navigation ---------- */
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === current) a.classList.add('active');
  });

  /* ---------- Pré-inscription : une seule URL pour tout le site ---------- */
  if (PREINSCRIPTION_URL) {
    document.querySelectorAll('a[data-link="preinscription"]').forEach(link => {
      link.setAttribute('href', PREINSCRIPTION_URL);
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    });
  }

  /* ---------- Apparition au scroll ---------- */
  const revealables = document.querySelectorAll('.reveal');
  if (revealables.length) {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
      revealables.forEach(el => io.observe(el));
    } else {
      revealables.forEach(el => el.classList.add('visible'));
    }
  }

  /* ---------- Décalage des animations flottantes ---------- */
  document.querySelectorAll('.float-y, .float-x').forEach((el, i) => {
    el.style.animationDelay = `${(i % 5) * 0.45}s`;
  });
});
