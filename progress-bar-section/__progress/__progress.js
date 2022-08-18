let progress = document.getElementsByClassName('progress-bar-section__progress');

function newProgress() {
    let value = 0;
    let windowHeight = window.innerHeight;
    let pageHeight = document.body.offsetHeight;
    let currentPosition = window.scrollY;
    let availableHeight = pageHeight - windowHeight;
    value = (currentPosition / availableHeight) * 100;
    progress[0].setAttribute("value", value);
}

window.addEventListener('scroll', newProgress);
window.addEventListener('resize', newProgress);