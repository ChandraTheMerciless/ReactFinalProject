import React from 'react'
import HotlineAndWebsite from '../components/hotlineAndWebsite'
import TemplateNeedHelp from '../components/templateNeedHelp'
import TemplateWantToHelp from '../components/templateWantToHelp'
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


    render() {
        return (<div className="container-fluid">
                    <header className="header">
                        <HotlineAndWebsite />

                        <div id="routing-btns">
                        <Link className="" to="/howToHelp" onClick={this.setToHelp.bind(this)}>I want to help</Link>
                        <Link className="" to="/worldClock" onClick={this.setForHelp.bind(this)}> I need help</Link>
                        </div>

                        <div id="want-to-help-container" className="hide-nav">
                            <TemplateWantToHelp />
                        </div>
                        <div id="need-help-container" className="hide-nav">
                            <TemplateNeedHelp />
                        </div>
                    </header>
                        <hr />
                        <div>
                            {this.props.children}
                        </div>
                </div>);
    }
}
