document.addEventListener('DOMContentLoaded', () => {

    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    const header = document.querySelector('.header');

    burger.addEventListener('click', () => {
        menu.classList.toggle('menu--open');
        header.classList.toggle('header--open');

        burger.setAttribute(
            'aria-expanded',
            menu.classList.contains('menu--open')
        );
    });

});