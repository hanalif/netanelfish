let burgerBtn = document.querySelector('.hamburger-manu');
let menuOpen = false;
let burgerMenue = document.querySelector('.hamburger-nav');

burgerBtn.addEventListener('click', function(){
    if(!menuOpen){
        burgerBtn.classList.add('open');
        burgerMenue.classList.add('show');
        menuOpen = true;
    }
    else{
        burgerBtn.classList.remove('open');
        burgerMenue.classList.remove('show');
        menuOpen = false;
    }
})