import React from 'react'

export default class WorldClock extends React.Component {
  constructor(props){
    //well the constructor function isn't breaking the build anymore, so we have that going for us :P
      super(props);
      console.log("CONSTRUCTOR FUNCTION");
      this.state = {};
  }


    addTimeZone() {
        // this.setState({timeZone: DeLorean.getTime().bind(this)});
        var location = document.getElementById("worldClock--search").value;
        console.log(location);
        getTime(location);
    }

    render() {
        return(
            <div id="worldClock">
            <p>Please select a time zone.</p>
            	<button className="btn btn-info" id="translate">Translate this page</button>
            	<hr />
            	<div className="worldClock__main">
            		<div id="worldClock__selection">
            			<span id="worldClock--header">Welcome to the World Clock page</span>
                        <span id="worldClock--subheader">Here you can select a time from your home country</span>
                        <div id="worldClock__Map" />
                        <div id="worldClock__inputForm--wrapper">
                            <form id="worldClock__inputForm">
                                <input className="form-control" id="worldClock--search" type="text" />
                                <button className="btn btn-info" id="worldClock--searchButton" type="button" onClick={this.addTimeZone.bind()}>Search Location</button>
                            </form>
                        </div>
                        <div id="worldClock__outputForm--wrapper">
                            <form id="worldClock__outputForm">
                                <input className="form-control" id="worldClock--localTime" />
                                <input className="form-control" id="worldClock--selectedTime" />
                                <input id="worldClock--formatSelector" type="Radio" />
                            </form>
                        </div>
            		</div>
           		</div>
        	</div>
        );
    }
}
