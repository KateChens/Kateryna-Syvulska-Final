let weatherButton = document.getElementsByClassName('weather');

weatherButton[0].addEventListener("click", function () {
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Vinnytsia,ua&APPID=15f8fb91db6935cb0bb31c97b325465f", true);

    request.onload = function () {
        let receivedValue = request.response;
        let receivedObject = JSON.parse(receivedValue);
        let myWeather = Math.round(receivedObject["main"]["temp"] - 273, 15);
        weatherButton[0].setAttribute("value", `${myWeather} °C` );
    };
    
    request.send();
})
