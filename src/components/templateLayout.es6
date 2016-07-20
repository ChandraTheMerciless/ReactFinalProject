import React from 'react'
import { Link } from 'react-router'

export default class TemplateLayout extends React.Component {
    render() {
        return (<header className="header">
                    <span>Header: </span>
                        <Link to="/">Home </Link> | 
                        <Link to="/redFlags"> Red Flags </Link> | 
                        <Link to="/howToHelp"> How to Help </Link> | 
                        <Link to="/worldClock"> World Clock</Link>
                        <hr />
                        <div>
                            {this.props.children}
                        </div>
                        <div className="footer"><hr />Footer</div>
                </header>);
    }
}
