const openMenuBtn = document.querySelector('#open-menu');
const closeMenuBtn = document.querySelector('#close-menu');
const mobileNav = document.querySelector('#mobile-nav');
const appBar = document.querySelector('.app-bar');
const menu = document.querySelector('.mobile-menu');
const overlay = Array.from(document.querySelectorAll('header, .headline, .works, .about-container, .contact-me'));
function toggleMenu(event) {
  if (event) {
    event.preventDefault();
  }
  menu.classList.toggle('open-menu');
  overlay.forEach((part) => part.classList.toggle('menu-overlay'));
}