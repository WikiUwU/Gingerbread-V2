const main_nav = document.querySelector(".main-nav");
const open_menu = document.querySelector(".open-menu");
const close_menu = document.querySelector(".close-menu");

open_menu.addEventListener("click", show);
close_menu.addEventListener("click", close);

function show() {
    main_nav.style.top = '0';
}

function close() {
    main_nav.style.top = '-100%';
}