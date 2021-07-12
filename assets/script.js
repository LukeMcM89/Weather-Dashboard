const APIKEY = "ebbf326ee70a2c54d1a94e133f651689";
counter = 0;

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




//localStorage.setItem("")

//var saveSearches = function (zip) {
//  localStorage.setItem(city1, zip)
 //   cities[counter].innerHTML = zip
  //  if (counter < 4) {
  //      counter++
  //  }
   // else {
     //   counter = 0
   // }
//};

//searchBtn.addEventListener("click", searchFunction);


