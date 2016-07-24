import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {
  setToHelp(){
    setState({navStatus: "toHelp"});
    console.log("to help");
    console.log(this.state);
  }

  setForHelp(){
    console.log("for help");
    setState({navStatus: "forHelp"});
    console.log(this.state);

  }

  render() {
      return(
          <div>
          	<p>Make these big buttons.</p>
          	<Link to="/howToHelp" onClick={this.setToHelp.bind(this)}>I want to help</Link> |
          	<Link to="/worldClock" onClick={this.setForHelp.bind(this)}> I need help</Link> |
      	</div>
      )
  }
}
