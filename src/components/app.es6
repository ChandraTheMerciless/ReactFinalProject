import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, browserHistory, RouteHandler} from 'react-router'

import TemplateLayout from '../components/templateLayout'
import RedFlags from '../components/redFlags'
import Home from '../components/home'
import HowToHelp from '../components/howToHelp'

ReactDOM.render((
    <Router>
        <Route component={TemplateLayout}>
            <Route path="/" component={Home} />
            <Route path="/red-flags" component={RedFlags} />
            <Route path="/how-to-help" component={HowToHelp} />
        </Route>
    </Router>
), document.getElementById('app'));