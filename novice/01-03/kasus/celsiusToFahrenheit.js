function celsiusToFahrenheit (celcius) {
    var hasilFarenheit = celcius + " derajat celcius sama dengan " + ((celcius*9/5)+32) + " derajat fahrenheit."
    console.log(hasilFarenheit);
}

function fahrenheitToCelsius (fahrenheit) {
    var hasilCelcius = fahrenheit + " derajat fahrenheit sama dengan " + ((fahrenheit-32)*5/9) + " derajat celcius."
    console.log(hasilCelcius);
}


celsiusToFahrenheit(6);
fahrenheitToCelsius(5);