// event handling1 spech
let spech = document.getElementById("spech");

let btnSpech = document.querySelector("#btn-spech").addEventListener('click', () => {
    spech.classList.toggle('hidden');
});

// event handling2 hamburger menu
let containerHome = document.getElementById("container-home");
let colorsMenu = document.getElementById("colors-menu");
let btnMenu = document.querySelector("#btn-menu").addEventListener('click', () => {
    colorsMenu.classList.toggle('hidden');
    containerHome.classList.toggle('blur-sm');
});