import React from 'react'
import HotlineAndWebsite from '../components/hotlineAndWebsite'
// import TemplateNeedHelp from '../components/templateNeedHelp'
// import TemplateWantToHelp from '../components/templateWantToHelp'
import { Link } from 'react-router'

export default class TemplateLayout extends React.Component {
    //state instantiation
    constructor(props) {
      super(props);

      this.render = this.render.bind(this);
     }

    setToHelp(){
        // setState({navStatus: "toHelp"});
        console.log("to help??");
        $("#want-to-help-container").removeClass("hide-nav");
        $("#need-help-container").addClass("hide-nav");
    }

    setForHelp(){
        console.log("for help?");
        var routeForHelp = document.getElementById("need-help");
        $("#want-to-help-container").addClass("hide-nav");
        $("#need-help-container").removeClass("hide-nav");
        // setState({navStatus: "forHelp"});
    }

    hideBothNavs(){
        $("#need-help-container").addClass("hide-nav");
        $("#want-to-help-container").addClass("hide-nav");
    }


    render() {
        return (<div>
                    <header className="header">
                    <HotlineAndWebsite />
                        <nav className="navbar navbar-default">
                          <div className="container-fluid">

                            <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                              </button>
                              <span className="navbar-brand">
                                  Brand
                              </span>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                              <ul className="nav navbar-nav">
                                <li><Link className="" to="/howToHelp" onClick={this.setToHelp.bind(this)}>I want to help</Link></li>
                                <li><Link className="" to="/worldClock" onClick={this.setForHelp.bind(this)}> I need help</Link></li>
                              </ul>

                              <ul id="want-to-help-container" className="nav navbar-nav navbar-right hide-nav">
                                  <li><Link to="/" onClick={this.hideBothNavs.bind(this)}>Home </Link></li>
                                  <li><Link to="/redFlags"> Red Flags </Link></li>
                                  <li><Link to="/questionsToAsk"> Questions to Ask</Link></li>
                                  <li><Link to="/howToHelp"> How to Help </Link></li>
                              </ul>

                              <ul id="need-help-container" className="nav navbar-nav navbar-right hide-nav">
                                  <li><Link to="/" onClick={this.hideBothNavs.bind(this)}>Home </Link></li>
                                  <li><Link to="/worldClock"> World Clock</Link></li>
                              </ul>
                            </div>
                          </div>
                        </nav>

                    </header>
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                </div>);
    }
}
