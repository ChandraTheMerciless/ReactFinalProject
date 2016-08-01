import React from 'react'
import DeLorean from '../components/deLorean.js'

export default class WorldClock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.render = this.render.bind(this);
    }

    componentWillMount(){

    var self = this;

    this.state = self;

    this.state = {location: "Columbus, OH"};

    return true;
    }

	getTimeZone(locationIndex){
		var geocoder = new google.maps.Geocoder();

		//Returns a lat-long for the DeLorean
		//see if this is best option, maybe should just return TZ
		var location = geocoder.geocode({'address' : locationIndex}, this.getLatLong);
		console.log(location)
		console.log(location.summary)
		console.log(location.summary.utc)
		return location.summary.utc;
	}

	getLatLong(results, status){
		if (status === google.maps.GeocoderStatus.OK) {
			//fix for async issue
			return handleResult(results[0].geometry.location);
		} else {
			return ('error ' + status);
		}
	}

	initMap() {
	var map = new google.maps.Map(document.getElementById('gMap'), {
    zoom: 8,
    center: {lat: 39.983333, lng: -82.983333}
  		})
	}


	handleResult(latlongIndex) {
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

	render(){
		return(
			<h3 hidden>Testing Delorean Test</h3>
		)
	}
}
