import React from 'react'
import {render} from 'react-dom'
import {Chart} from 'react-google-charts'

export default class DonutChartStats extends React.Component {

    constructor(props) {
       super(props);
       this.state = {};
       this.render = this.render.bind(this);
    }

  componentDidMount() {
    let options = {
        title: 'Human Trafficking Statistics Placeholder',
        hAxis: {title: 'Year', minValue: 2011, maxValue: 2016},
        vAxis: {title: 'Cases', minValue: 0, maxValue: 100},
        legend: 'none'
    };

    let data = [
        ['Year', 'Cases'],
        [ 2011,      18],
        [ 2012,      35],
        [ 2013,     44],
        [ 2014,      70],
        [ 2015,      50],
        [ 2016,    60]
    ];
    this.setState({
        'data' : data,
        'options' : options
     });
   }

  render() {
    return (
      <div className={"donut-chart-container"}>
        <Chart chartType = "PieChart" data = {this.state.data} options = {this.state.options} graph_id = "ScatterChart"  width={"100%"} height={"400px"}  legend_toggle={true} />
      </div>
    );
  }
}
