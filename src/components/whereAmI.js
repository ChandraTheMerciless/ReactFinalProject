import React from 'react'

export default class WhereAmI extends React.Component {
    render() {
        return(
            <div id="whereAmI">
            	<div id="gMap" />
            	<p>Allow your browser to track your location and we can help you find help around you.</p>
            	<button className="btn btn-info" id="whereAmI--searchButton" type="button" onClick={myLocationUtility.findLocation()}>Search Location</button>
            </div>
        );
    }
}
