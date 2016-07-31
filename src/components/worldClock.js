import React from 'react'

export default class WorldClock extends React.Component {

    //state instantiation
    constructor(props) {
        super(props);

        this.state = {};

        this.render = this.render.bind(this);
    }

    componentWillMount(){

    var self = this;

    this.state = self;

    this.state = {timezone: "Eastern"};

    return true;
    }

    componentDidMount(){
        this.state = {timezone: location};

    }

    addTimeZone() {
        //from scott: attempt to use custom event watcher, use DOM Object for time
        var location = document.getElementById("worldClock--search").value;
        //TODO remove console logs
        console.log(location);
        vacation = getTimeZone(location);
        console.log(location);
        this.state = {
            timeZone:"Eastern",
            savedLocation: location
        };
    }

    render() {

        return(
            <div id="worldClock">
            <h3 className="text-primary">World Clock</h3>
            <div id="dummyMap" onLoad="initMap()" hidden></div>
            <p>Please select a time zone.</p>
            	<button className="btn btn-info" id="translate" onClick={console.log("Translate")}>Translate this page</button>
            	<hr />
            	<div className="worldClock__main">
            		<div id="worldClock__selection">
                        <span id="worldClock--subheader">Here you can select a time from your home country</span>
                        <div id="worldClock__Map" />
                        <div id="worldClock__inputForm--wrapper">
                            <form id="worldClock__inputForm">
                                <input className="form-control extra-bottom-space-15" id="worldClock--search" type="text" />
                                <button className="btn btn-info" id="worldClock--searchButton" type="button" onClick={this.addTimeZone.bind(this)}>Search Location</button>
                            </form>
                        </div>
                        <div id="worldClock__output--wrapper">
                            <p id="worldClock__output--selection">Output Time</p>
                            <br />
                            <label className="radio-inline"><input type="radio" value="12" name="timeSpan" /> 12 HR </label>
                            <label className="radio-inline "><input type="radio" value="24" name="timeSpan" /> 24 HR </label>

                        </div>
            		</div>
           		</div>
        	</div>
        );
    }
}
