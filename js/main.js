
function myfunction(text) {


    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=telaviv&unit=metric&appid=a69961c7031783d91d299c95e15920da", function (data) {
       alert(text);
    //    debugger;

    });
}