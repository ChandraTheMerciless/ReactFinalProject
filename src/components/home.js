import React from 'react'
import { Link } from 'react-router'

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
              <Link className="btn btn-info btn-lg btn-block extra-bottom-space-15" to="/howToHelp">I want to help</Link>
              <Link className="btn btn-info btn-lg btn-block extra-bottom-space-15" to="/iNeedHelp"> I need help</Link>
      	  </div>
      )
  }
}
