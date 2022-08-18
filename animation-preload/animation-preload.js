document.onreadystatechange = function (e){
    if (document.readyState === 'complete'){
        let animationPreload = document.getElementsByClassName('animation-preload');
        animationPreload[0].style.visibility = 'visible';
        animationPreload[0].style.opacity = '1';

        let timerIdd = setTimeout(function () {
            animationPreload[0].style.opacity = '0';
            animationPreload[0].style.visibility = 'hidden';

        }, 5000);
    }
};

//window.onload = function(e){};
