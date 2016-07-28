import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {

  //state instantiation
  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
   }

  setToHelp(){
    // setState({navStatus: "toHelp"});
    console.log("to help");
  }

  setForHelp(){
    console.log("for help");
    var routeForHelp = document.getElementById("need-help");
    // setState({navStatus: "forHelp"});
  }

  render() {
      return(
          <div>
              <Link className="btn btn-info btn-lg btn-block extra-bottom-space-15" to="/howToHelp" onClick={this.setToHelp.bind(this)}>I want to help</Link>
              <Link className="btn btn-info btn-lg btn-block extra-bottom-space-15" to="/worldClock" onClick={this.setForHelp.bind(this)}> I need help</Link>
      	  </div>
      )
  }
}
