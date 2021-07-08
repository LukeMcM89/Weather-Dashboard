const APIKEY = "ebbf326ee70a2c54d1a94e133f651689";

var searchBtn = document.getElementById("search");



var searchFunction = function(){
    let zipCode = zipInput.value;
    console.log(zipCode);
    let apiAddress = “api.openweathermap.org/data/2.5/forecast?q={city name}&appid="ebbf326ee70a2c54d1a94e133f651689”;
    console.log(apiAddress);
}
