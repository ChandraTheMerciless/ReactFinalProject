import React from 'react'
import HotlineAndWebsite from '../components/hotlineAndWebsite'
import { Link } from 'react-router'

export default class TemplateNeedHelp extends React.Component {
    render() {
        return (
                <div id="need-help" className="">
                    <Link to="/worldClock"> World Clock</Link> |
                    <Link to="/whereAmI"> Where Can I Get Help?</Link> |
                    <Link to="/phoneHistoryHelp"> How to Clear Phone Browser History</Link>
                </div>
              );
    }
}
