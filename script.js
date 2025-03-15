const btnBars = document.querySelector(".header__bars");
const mobileMenu = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav__links");
const btns = document.querySelectorAll("#modeBtn"); 
const body = document.querySelector("body");
const about = document.querySelector("about__title");

let display = 0;
let val = "white";

function show() {
    if (display === 1) {
        mobileMenu.style.display = 'none';
        document.body.style.overflowY = 'auto';
        display = 0;
    } else {
        mobileMenu.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
        display = 1;
    }
}

btnBars.addEventListener("click", show);

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.style.display = 'none';
        document.body.style.overflowY = 'auto';
    });
});


btns.forEach(btn => {
    btn.addEventListener("click", function () {
        if (val === "white") {
            body.style.backgroundColor = 'black';
            about__title.style.color='white';
            val = "black";
        } else {
            body.style.backgroundColor = 'white';
            about__title.style.color='black';

            val = "white";
        }
    });
});
