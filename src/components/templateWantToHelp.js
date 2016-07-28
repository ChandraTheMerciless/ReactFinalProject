import React from 'react'
import HotlineAndWebsite from '../components/hotlineAndWebsite'
import { Link } from 'react-router'

export default class TemplateWantToHelp extends React.Component {
    render() {
        return (
                <div id="want-to-help" className="">
                        <Link to="/">Home </Link> |
                        <Link to="/redFlags"> Red Flags </Link> |
                        <Link to="/questionsToAsk"> Questions to Ask</Link> |
                        <Link to="/howToHelp"> How to Help </Link>
                </div>
              );
    }
}
