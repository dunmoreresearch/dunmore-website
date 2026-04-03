/* ============================================================
   DUNMORE RESEARCH — main.js
   ============================================================ */

'use strict';

/* ── NAV SCROLL STATE ── */
(function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── SCROLL REVEAL ── */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach((el) => observer.observe(el));
})();

/* ── SMOOTH ANCHOR SCROLL ── */
(function initAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = document.querySelector('.nav')?.offsetHeight ?? 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 24;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ── MARK HOVER ANIMATION ── */
(function initMark() {
  const brands = document.querySelectorAll('.nav__brand');
  brands.forEach((brand) => {
    const bars = brand.querySelectorAll('.mark__bar');
    brand.addEventListener('mouseenter', () => {
      bars[2].style.width = '32px';
      bars[2].style.opacity = '0.48';
    });
    brand.addEventListener('mouseleave', () => {
      bars[2].style.width = '21px';
      bars[2].style.opacity = '0.2';
    });
  });
})();

/* ── CURRENT YEAR IN FOOTER ── */
(function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();
