//  ========= header-hamburger ==========

let burgerBtn = document.querySelector('.hamburger-manu');
let menuOpen = false;
let burgerMenue = document.querySelector('.hamburger-nav');
let hamburgerUl = document.querySelector('.hamburger-nav ul');
let stillImageGrids = document.querySelectorAll('.stills-images-grid');
let stillsModal = document.querySelector('.stills-modal');
let stillCloseBtn = document.querySelector('.stills-modal .close-btn');
let stillModalImage = document.querySelector('.stills-modal-img');

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

for (let i = 0; i < stillImageGrids.length; i++){
    stillImageGrids[i].addEventListener('click', function(e) {
        if (e.target.classList.contains('still-image-container')) {
            let image = e.target.querySelector('img');
            let src = image.getAttribute('src');
            stillsModal.style.display = 'flex';
            stillModalImage.setAttribute('src', src);
        }
    });
    
    stillCloseBtn.addEventListener('click', function() {
        stillsModal.style.display = 'none';
    });       
}



