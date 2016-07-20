import React from 'react'

export default class WorldClock extends React.Component {
    render() {
        return(
            <div>
            <p>Please select a time zone.</p>
            	<button id="translate">Translate this page</button>
            	<hr />
            	<div className="main">
            		<div id="worldClock-selection" className="worldClock-main">
            			<p>Time time time time time all the time.</p>
            		</div>
           		</div>
        	</div>
        );
    }
}
