//"require" is an es6 and a node syntax thing. I don't think es5 has a way to require files, I think you just have to load it in above the one you need it for

// var $ = require('jQuery');
// var DeLoreanGeocoder = require('../src/deLoreanGeocoder.js');

function getTime(locationIndex){
	var geocoder = new google.maps.Geocoder();

	//Returns a lat-long for the DeLorean
	//see if this is best option, maybe should just return TZ
	var location = geocoder.geocode({'address' : locationIndex}, getLatLong);
	console.log(location)
	console.log(location.summary)
	console.log(location.summary.utc)
	return location.summary.utc;
}

function getLatLong(results, status){
	if (status === google.maps.GeocoderStatus.OK) {
		//fix for async issue
		return handleResult(results[0].geometry.location);
	} else {
		return ('error ' + status);
	}
}

function handleResult(latlongIndex) {
	//DeLoreanGeocoder isn't exported as an es6 class, so you can just get the function directly
	// var latlongIndex = DeLoreanGeocoder.getLatLong;

	var requestBody = "https://worldtimeiodeveloper.p.mashape.com/geo?latitude=" + latlongIndex.lat() + "&longitude=" + latlongIndex.lng();

	//ajax request to API
	//will return a JSON with detailed info about the time zone
	//after 88MPH
	$.ajax({
		url: requestBody,
		type:"GET",
		beforeSend: function(xhr){
			//put authorization stuff here
			xhr.setRequestHeader('X-Mashape-Key', "4YoO3CuIcImshazrBH6M9iZuEGWup1GQjfrjsnUL0YUhUSvGud");
		},
		success: function(data) {
			console.log(data);
			return data;
		}
	});
}
