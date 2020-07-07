//  ========= header-hamburger ==========

let burgerBtn = document.querySelector('.hamburger-manu');
let menuOpen = false;
let burgerMenue = document.querySelector('.hamburger-nav');
let hamburgerUl = document.querySelector('.hamburger-nav ul');

burgerBtn.addEventListener('click', function () {
    if (!menuOpen) {
        openMenu();
    }
    else {
        closeMenu();
    }
})

hamburgerUl.addEventListener('click', function (e) {
    if (event.target.classList.contains('hamburger-manu-item')) {
        closeMenu()
    }
})

function openMenu() {
    burgerBtn.classList.add('open');
    burgerMenue.classList.add('show');
    menuOpen = true;
}

function closeMenu() {
    burgerBtn.classList.remove('open');
    burgerMenue.classList.remove('show');
    menuOpen = false;
}


document.addEventListener('DOMContentLoaded', () => {
    const players = Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p));
});



