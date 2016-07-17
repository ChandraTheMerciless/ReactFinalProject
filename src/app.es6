import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, browserHistory, RouteHandler} from 'react-router'

import TemplateLayout from './components/template-layout'
import RedFlags from './components/red-flags'
import Home from './components/home'
import HowToHelp from './components/how-to-help'

ReactDOM.render((
    <Router>
        <Route component={TemplateLayout}>
            <Route path="/" component={Home} />
            <Route path="/red-flags" component={RedFlags} />
            <Route path="/how-to-help" component={HowToHelp} />
        </Route>
    </Router>
), document.getElementById('app'));