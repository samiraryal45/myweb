const btnBars = document.querySelector(".header__bars");
const mobileMenu = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav__links")
var display = 0;



function show() {

    if (display == 1) {


        
        mobileMenu.style.display = 'none';
        document.body.style.overflowY = 'auto'
        display = 0;
    }
    else {
        mobileMenu.style.display = 'flex';
        document.body.style.overflowY = 'hidden'
        display = 1;

    }
}
btnBars.addEventListener("click", show);

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        
        mobileMenu.style.display = 'none';
        document.body.style.overflowY = 'auto'

    })



}
);
