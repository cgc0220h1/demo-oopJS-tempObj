let Temprature = function (degree) {
    this.temp = degree;
    this.convertFahrenheit = function () {
        return this.temp * 9/5 + 32;
    };
    this.convertKelvin  = function () {
        return this.temp + 273.15;
    };
};

function convertF() {
    let input = document.getElementById('temp-input').value;
    let attempt1 = new Temprature(input);
    document.getElementById('result-fahrenheit').innerHTML = attempt1.convertFahrenheit() + " độ F";
}

function convertK() {
    let input = document.getElementById('temp-input').value;
    let attempt1 = new Temprature(input);
    document.getElementById('result-kelvin').innerHTML = attempt1.convertKelvin() + " độ K";
}