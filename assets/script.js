const APIKEY = "ebbf326ee70a2c54d1a94e133f651689";

var searchBtn = document.getElementById("btn");
var zipInput = document.getElementById("zipinput");

var currentTemp = document.getElementById("temp");
var currentWind = document.getElementById("wind");
var currentHumid = document.getElementById("humidity");
var currentUv = document.getElementById("uvindex");

var dayOne = document.getElementById("day1");
var dayTwo = document.getElementById("day2");
var dayThree = document.getElementById("day3");
var dayFour = document.getElementById("day4");
var dayFive = document.getElementById("day5");

var cityOne = document.getElementById(city1);
var cityTwo = document.get ElementbyId("city2");
var cityThree = document.getElementById("city3");
var cityFour = document.getElementById("city4");
var cityFive = document.getElementById("city5");


var searchFunction = function() {
    let zipCode = zipInput.value;
    console.log(zipCode);
    let apiAddress = 'https://api.openweathermap.org/data/2.5/forecast?q=”+ zipCode + “&appid=” + APIKey';
    console.log(apiAddress);
    fetch(apiAddress)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data)})
};

localStorage.setItem("")