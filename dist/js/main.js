//Select DOM Elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuSide = document.querySelector('.menu-side');
const navItems = document.querySelectorAll('.nav-item');

//Set Zero State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuSide.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));


        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuSide.classList.remove('show');
        navItems.forEach(item => item.classList.add('show'));
        //Set Menu State
        showMenu = false;
    }
}