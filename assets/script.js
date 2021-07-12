const APIKEY = "ebbf326ee70a2c54d1a94e133f651689";

function Failed5Day(results) {
	console.log("Failed to retrieve 5 day");
}

function Retrieved5Day(results) {
	console.log(results);
	var uvi = results.current.uvi;
	$("#uvIndex").attr("class", "");
	if(uvi < 2){
		$("#uvIndex").addClass("uvIndex uvGreen");
	}else if(uvi < 8){
		$("#uvIndex").addClass("uvIndex uvYellow");
	}else{
		$("#uvIndex").addClass("uvIndex uvRed");
	}
	$("#uvIndex").text(uvi);

	for(var i=1; i<6; i++){
		$(`#day-${i}-Icon`).attr("class", "");
		var classes = getIconInsert(results.daily[i-1].weather[0].main);
		$(`#day-${i}-Icon`).addClass(classes);

		$(`#day-${i}-Temp`).html(`Temp: ${KtoF(results.daily[i-1].temp.day).toFixed(2)}&#176;F`);
		$(`#day-${i}-Humid`).html(`Humidity: ${results.daily[i-1].humidity}%`);
		

	}

}

function FailedCurrent(results) {
	console.log("Failed to find current");
	$("#txtCity").addClass("is-invalid");
	$("#searchGroup").effect("shake", {duration: 5000, distance: 20, times: 10});
}

function getIconInsert(type) {
	switch (type) {
		case "Clear":
			return `wi wi-day-sunny`;

		case "Clouds":
			return `wi wi-day-cloudy`

		case "Rain":
			return `wi wi-day-rain`

		default:
			return `wi wi-na`;
	}
}

function KtoF(K) {
	return (9 / 5) * (K - 273) + 32;
}

function MStoMPH(ms) {
	return ms * 2.236936;
}

function RetrievedCurrent(results) {
	console.log(results);
	$("#txtCity").removeClass("is-invalid");
	var lat = results.coord.lat;
	var lon = results.coord.lon;
	var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
	$.ajax(url).done(Retrieved5Day).fail(Failed5Day);
	var dt = DateTime.local();
	$("#cardHeader").html(`${results.name} (${dt.month}-${dt.day}-${dt.year}) <i class="${getIconInsert(results.weather[0].main)}"></i>`);
	$("#item-Temp").html(`Temperature: ${KtoF(results.main.temp).toFixed(2)} &#176;F`);
	$("#item-Humidty").html(`Humidty: ${results.main.humidity}%`);
	$("#item-Wind").html(`Wind Speed: ${MStoMPH(results.wind.speed).toFixed(2)} MPH`);

	if(AddHistory){
		addToHistory(results.name);
		AddHistory = false;	
	}

	localStorage.setItem("LastSearched", results.name);
}






