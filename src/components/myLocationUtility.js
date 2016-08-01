import React from 'react'

export default class WorldClock extends React.Component {

	findLocation(){

		if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(function(position) {
		        var pos = {
		          lat: position.coords.latitude,
		          lng: position.coords.longitude
		        };
		        infoWindow.setPosition(pos);
		        infoWindow.setContent('Location found.');
		        map.setCenter(pos);
		    },

		    function() {
		        handleLocationError(true, infoWindow, map.getCenter());
		      });
		    } else {
		      // Browser doesn't support Geolocation
		      handleLocationError(false, infoWindow, map.getCenter());
		    }
		}

		handleLocationError(browserHasGeolocation, infoWindow, pos) {
		    infoWindow.setPosition(pos);
		    infoWindow.setContent(browserHasGeolocation ?
		        'Error: The Geolocation service failed.' :
		        'Error: Your browser doesn\'t support geolocation.'
		    );
		}
}
