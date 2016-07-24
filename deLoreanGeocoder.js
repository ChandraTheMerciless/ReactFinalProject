// function getLatLong(locationIndex) {
// 	var geocoder = new google.maps.Geocoder();
//
// 	//Returns a lat-long for the DeLorean
// 	var location = geocoder.geocode({'address' : locationIndex}, getGeocode);
//
// 	function getGeocode(results, status){
// 		if (status === google.maps.GeocoderStatus.OK) {
// 						location = results[0].geometry.location;
// 						console.log(location.lat());
// 						return location;
// 					} else {
// 						return ('error ' + status);
// 					}
// 	}
//
// 	console.log("location seen out here?");
// 	console.log(location);
// 	// return location;
// }
