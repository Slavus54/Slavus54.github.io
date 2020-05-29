$('.menu-btn').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
});
let overlay = document.querySelector('.header-background');
let menu = document.querySelector('.header-menu');
let nav = document.querySelector('.menu-btn');

function onOpen() {
    let link = document.querySelector('.menu-btn');

    overlay.classList.toggle('header-background_active')
    menu.classList.toggle('header-menu_active')
}

overlay.addEventListener('click', function () {
    overlay.classList.remove('header-background_active')
    menu.classList.remove('header-menu_active')
    nav.classList.add('span::after')
    nav.classList.add('span::before')
})