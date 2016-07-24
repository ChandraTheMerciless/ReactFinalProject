function getLatLong(locationString) {
	var geocoder = new google.maps.Geocoder();
	
	//Returns a lat-long for the DeLorean
	geocoder.geocode({'address' : locationIndex}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
            return results[0].geometry.location;
          } else {
            return ('error ' + status);
          }
	})
}
