var WorldClock = React.createClass({
    render: function(){
        return(
            <div>
            <p>Please select a time zone.</p>
            	<button id="translate">Translate this page</button>
            	<hr />
            	<div className="main">
            		<div id="worldClock-selection" className="worldClock-main">
            			<p>Time time time time time</p>
            		</div>
           		</div>
        	</div>
        );
    }
});

export default WorldClock