/*timer*/

let intervalId;
let modaleWindow = document.getElementsByClassName('modal-window');
let modaleWindowButton = document.getElementsByClassName('modal-window__confirm-button');
let time = 60;

document.onmousemove = document.onkeydown = document.onscroll = document.onclick = function () {
    time = 60;
};

intervalId = setInterval(function(){
    time--;
    
    if (time <= 0) {
        modaleWindow[0].style.display = "block";
        let timerId = setTimeout(function () {
            window.close();
        }, 20000); 
        modaleWindowButton[0].addEventListener("click", function () {
            clearTimeout(timerId);
            time = 60;
            modaleWindow[0].style.display = "none";
        });
    };
}, 1000);






