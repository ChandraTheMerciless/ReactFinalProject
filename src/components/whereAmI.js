import React from 'react'
import MyLocationUtility from '../components/myLocationUtility.js'

export default class WhereAmI extends React.Component {

	//state instantiation
    constructor(props) {
        super(props);

        this.state = {};

        this.render = this.render.bind(this);
    }

    componentWillMount(){

	    var self = this;

	    this.state = self;

	    this.state = {};

    	return true;
    }

    componentDidMount(){
        this.state = {};

    }

    callLocationFinder(){
    	MyLocationUtility.findLocation();

    }

    render() {
        return(
            <div id="whereAmI">
            	<div id="gMap" />
            	<p>Allow your browser to track your location and we can help you find help around you.</p>
            	<button className="btn btn-info" id="whereAmI--searchButton" type="button" onClick={this.callLocationFinder.bind(this)}>Search Location</button>
            </div>
        );
    }
}
