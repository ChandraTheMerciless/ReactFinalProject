import React from 'react'
import ScatterChartStats from './scatterChartStats.js';

export default class HowToHelp extends React.Component {
    render() {
        return(<div className="how-to-help-container">
            	<h3 className="text-primary">How to Help</h3>
              <ScatterChartStats />

              <h4 className="text-muted">If you see an emergency situation</h4>
              <p>Call 911 immediately, and do not engage.</p>
              <hr/>
              <h4 className="text-muted">If you see or suspect that a trafficking situation is happening</h4>
              <p>Call the National Human Trafficking Resource Center:</p>
              <p>1-888-3737-888</p>
              <hr/>
              <h4 className="text-muted">To contact the Ohio Human Trafficking Task Force</h4>
              <p>Please visit <a href="http://www.humantrafficking.ohio.gov/">http://www.humantrafficking.ohio.gov/</a></p>
        </div>);
    }
}
