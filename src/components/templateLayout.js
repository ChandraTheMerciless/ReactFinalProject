import React from 'react'
import HotlineAndWebsite from '../components/hotlineAndWebsite'
import { Link } from 'react-router'

export default class TemplateLayout extends React.Component {
    render() {
        return (<div className="container-fluid">
                    <header className="header">
                        <HotlineAndWebsite />
                        <Link to="/">Home </Link> |
                        <Link to="/redFlags"> Red Flags </Link> |
                        <Link to="/questionsToAsk"> Questions to Ask</Link> |
                        <Link to="/howToHelp"> How to Help </Link> |
                        <Link to="/worldClock"> World Clock</Link>
                    </header>
                        <hr />
                        <div>
                            {this.props.children}
                        </div>
                </div>);
    }
}
