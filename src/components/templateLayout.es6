import React from 'react'
import { Link } from 'react-router'

export default class TemplateLayout extends React.Component {
    render() {
        return (<div>
                    <span>Header:</span>
                        <Link to="/">Home</Link> |
                        <Link to="/redFlags">Red Flags</Link> |
                        <Link to="/howToHelp">How to Help</Link> |
                        <hr />
                        <div>
                            {this.props.children}
                        </div>
                        <div><hr/>footer</div>
                </div>);
    }
}
