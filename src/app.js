import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, browserHistory, RouteHandler} from 'react-router'

import TemplateLayout from './components/templateLayout'
import RedFlags from './components/redFlags'
import Home from './components/home'
import HowToHelp from './components/howToHelp'
import WorldClock from './components/worldClock'
import QuestionsToAsk from './components/questionsToAsk'
import WhereAmI from './components/whereAmI'
import PhoneHistoryHelp from './components/phoneHistoryHelp'
import INeedHelp from './components/iNeedHelp'
import { hashHistory } from 'react-router'

//<Router history={browserHistory}>

//  componentDidMount(){
//    var self = this;
//    var store = this.props.store;
//    this.state = {};
// }

ReactDOM.render((
    <Router history={hashHistory}>
        <Route component={TemplateLayout}>
            <Route path="/" component={Home} />
            <Route path="/redFlags" component={RedFlags} />
            <Route path="/howToHelp" component={HowToHelp} />
            <Route path="/worldClock" component={WorldClock} />
            <Route path="/questionsToAsk" component={QuestionsToAsk} />
            <Route path="/whereAmI" component={WhereAmI} />
            <Route path="/phoneHistoryHelp" component={PhoneHistoryHelp} />
            <Route path="/iNeedHelp" component={INeedHelp} />
        </Route>
    </Router>
), document.getElementById('app'));
