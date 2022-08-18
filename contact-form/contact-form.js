let submitForm = document.getElementsByClassName('contact-form');
let animationBlock = document.getElementsByClassName('submit-animation');

submitForm[0].addEventListener("submit", function (e) {   
    let inputValue = document.querySelectorAll(".contact-form__item");

    inputValue.forEach(i => {
        if (i.value === '') {
            return alert(`Fill the ${i.name} field, please`);
        } else {
            localStorage.setItem(i.name, i.value);
        }

        if (i.name === 'subject' && (i.value === 'make an order' || i.value === 'Make an order')) {
            submitForm[0].classList.add("forPreventDefault");

            if (submitForm[0].classList.contains('forPreventDefault')) {
                e.preventDefault();
            }

            animationBlock[0].style.visibility = 'visible';
            animationBlock[0].style.opacity = '1';

            let timerId = setTimeout(function () {
                animationBlock[0].style.visibility = 'hidden';
                animationBlock[0].style.opacity = '0';
            }, 10000); 

            let timerI = setTimeout(function () {
                submitForm[0].classList.remove("forPreventDefault");
                submitForm[0].reset();
            }, 10000);  
        }
    })
});
