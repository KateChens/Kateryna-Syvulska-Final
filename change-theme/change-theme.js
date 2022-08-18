let header = document.getElementsByClassName('header');
let sliderSection = document.getElementsByClassName('slider-section');
let aboutSection = document.getElementsByClassName('about-section');
let portfolioSection = document.getElementsByClassName('portfolio-section');
let blogSection = document.getElementsByClassName('blog-section');
let button = document.getElementsByClassName('change-theme');
let lineTheme = document.getElementsByClassName('headers__style');
let currentTheme = '';

let date = new Date();
let hours = date.getHours();

function nightTime() {
    header[0].classList.add('night');
    sliderSection[0].classList.add('night');
    aboutSection[0].classList.add('night');
    portfolioSection[0].classList.add('night');
    blogSection[0].classList.add('night');

    lineTheme[0].classList.add('headers__style_theme_night');
    
}

function dayTime() {
    header[0].classList.remove('night');
    sliderSection[0].classList.remove('night');
    aboutSection[0].classList.remove('night');
    portfolioSection[0].classList.remove('night');
    blogSection[0].classList.remove('night');

    lineTheme[0].classList.remove('headers__style_theme_night');
}

if (hours > 6 && hours < 21) {
    currentTheme = 'day';
    dayTime();
} else {
    currentTheme = 'night';
    nightTime();
}

button[0].addEventListener("click", function () {
    if (currentTheme === 'day') {
        currentTheme = 'night';
        nightTime();
    } else if (currentTheme === 'night'){
        currentTheme = 'day';
        dayTime();
    }  
});




