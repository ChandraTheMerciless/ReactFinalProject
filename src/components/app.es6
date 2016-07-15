import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, browserHistory, RouteHandler} from 'react-router'

import RedFlags from './red-flags'
import Home from './home'
import HowToHelp from './how-to-help'



var TemplateLayout = React.createClass({
    render: function() {
        return (<div>
            <span>Header:</span>
                <Link to="/">Home</Link> |
                <Link to="/red-flags">Red Flags</Link> |
                <Link to="/how-to-help">How to Help</Link> |
            <hr/>
            <div>
            <h2>Body Content</h2>
        {this.props.children}
    </div>
    <div><hr/>footer</div>
    </div>);
}
});

ReactDOM.render((
    <Router>
        <Route component={TemplateLayout}>
            <Route path="/" component={Home} />
            <Route path="/red-flags" component={RedFlags} />
            <Route path="/how-to-help" component={HowToHelp} />
        </Route>
    </Router>
), document.getElementById('app'));