import React from 'react'

export default class WorldClock extends React.Component {

    addTimeZone() {
        //setState({timeZone: DeLorean.getTime()).bind(this)});
    }

    render() {
        return(
            <div id="worldClock">
            <p>Please select a time zone.</p>
            	<button id="translate">Translate this page</button>
            	<hr />
            	<div className="worldClock__main">
            		<div id="worldClock__selection">
            			<span id="worldClock--header">Welcome to the World Clock page</span>
                        <span id="worldClock--subheader">Here you can select a time from your home country</span>
                        <div id="worldClock__Map" />
                        <div id="worldClock__inputForm--wrapper">
                            <form id="worldClock__inputForm">
                                <input id="worldClock--search" type="text" />
                                <input id="worldClock--searchButton" type="button" onClick={this.addTimeZone.bind()} />
                            </form>
                        </div>
                        <div id="worldClock__outputForm--wrapper">
                            <form id="worldClock__outputForm">
                                <input id="worldClock--localTime" />
                                <input id="worldClock--selectedTime" />
                                <input id="worldClock--formatSelector" type="Radio" />
                            </form>
                        </div>
            		</div>
           		</div>
        	</div>
        );
    }
}
