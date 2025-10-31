/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import '@fortawesome/fontawesome-free/css/all.min.css';

/**
 * Write any other JavaScript below
 */

( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

(function () {
  const header = document.querySelector('.site-header');
  const toggle = header.querySelector('.site-header__toggle');
  const icon   = toggle.querySelector('i');

  // Abrir y cerrar menú en móvil
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('site-header--open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    icon.classList.toggle('fa-bars', !isOpen);
    icon.classList.toggle('fa-xmark',  isOpen);
  });

  // Azul desde el primer scroll
  function paintHeader() {
    const atTop = window.scrollY <= 0;
    header.classList.toggle('site-header--solid', !atTop);
  }
  window.addEventListener('scroll', paintHeader, { passive: true });
  window.addEventListener('load',   paintHeader);

  window.addEventListener('resize', () => {
    header.classList.remove('site-header--open');
    toggle.setAttribute('aria-expanded', 'false');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  });
})();