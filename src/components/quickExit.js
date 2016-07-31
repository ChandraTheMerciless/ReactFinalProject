import React from 'react'

export default class QuickExit extends React.Component {
    
    handleEscapeButton() {

    document.body.innerHTML = '';

        if((window.history.replaceState !== undefined) || (window.history.replaceState !== null)) {
        var title="Decoy Article Title",
        url="/decoypage";
        window.history.replaceState("", title , url);
    }

    window.location.replace("http://www.weather.com");

    }

    render() {
        return(
            <div id="quickExit__main">
            	<p id="quickExit__main__banner"><strong>ESCAPE!!!</strong></p>
            	<p><strong>Ecape to weather.com</strong></p>
            	<button className="btn btn-info" id="quickExit__main__escapeButton" type="button" onClick={this.handleEscapeButton.bind(this)}>Escape</button>
            </div>
        );
    }
}
