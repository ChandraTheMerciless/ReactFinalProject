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
        // hAxis: {title: 'Types of Trafficking', minValue: 2011, maxValue: 2016},
        // vAxis: {title: 'Cases', minValue: 0, maxValue: 100},
        pieHole: ':0.4'
    };

    let data = [
        ['Types of Trafficking', 'Percentage'],
        [ "Type 1",    20],
        [ "Type 2",    10],
        [ "Type 3",    30],
        [ "Type 4",    20],
        [ "Type 5",    10],
        [ "Type 6",    10]
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
