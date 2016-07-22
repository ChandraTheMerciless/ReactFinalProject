var $ = require('jQuery');
var DeLoreanGeocoder = require('../src/deLoreanGeocoder.js');

function getTime(locationIndex) {
	var latlongIndex = DeLoreanGeocoder.getLatLong;

	var requestBody + "https://worldtimeiodeveloper.p.mashape.com/geo?latitude=" + latlongIndex.lat + "&longitude=" + latlongIndex.lng;

	//ajax request to API
	//will return a JSON with detailed info about the time zone
	$.ajax({
		url: requestBody,
		type:"GET",
		success: function(data) {
			console.log(data);
			return data;
		}
	});
}
