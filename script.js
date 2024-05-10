let slides = document.getElementsByClassName("slider_slide");
let navlinks = document.getElementsByClassName("slider__navlink");

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);

document.getElementById("nav-button--next").addEventListener("click", nextSlide);
document.getElementById("nav-button--prev").addEventListener("click", prevSlide);

function nextSlide() {
    changeSlide(currentSlide + 1);
}

function prevSlide() {
    changeSlide(currentSlide - 1);
}

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {
        moveTo = 0;
    }
    if (moveTo < 0) {
        moveTo = slides.length - 1;
    }

    slides[currentSlide].classList.remove("active");
    navlinks[currentSlide].classList.remove("active");
    slides[moveTo].classList.add("active");
    navlinks[moveTo].classList.add("active");

    currentSlide = moveTo;
}

document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    });
});

document.querySelector('.slider').addEventListener('mouseover', resetTimer);
document.querySelector('.slider').addEventListener('mouseout', startTimer);

function resetTimer() {
    clearInterval(slideInterval);
}

function startTimer() {
    slideInterval = setInterval(nextSlide, 3000);
}
