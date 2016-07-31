import React from 'react'
import { Link } from 'react-router'
import ScatterChartStats from './scatterChartStats.js';
// import DonutChartStats from './donutChartStats.js'


export default class Home extends React.Component {

  //state instantiation
  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
  }

  componentDidMount(){
    var self = this;
    var store = this.props.store;
    this.state = {};
  }

  componentWillMount(){
    //stuff
  }

  render() {
      return(
          <div>
              <ScatterChartStats />
      	  </div>
      )
  }
}
