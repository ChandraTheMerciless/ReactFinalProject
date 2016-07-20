import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {
    render() {
        return(
            <div>
            	<p>Welcome to home page.</p>
            	<Link to="/howToHelp">I want to help</Link> | 
            	<Link to="/worldClock"> I need help</Link> | 
        	</div>
        );
    }
}
