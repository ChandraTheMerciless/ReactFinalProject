import React from 'react'

export default class PhoneHistoryHelp extends React.Component {
    render() {
        return(
            <div id="phoneHistoryHelp__main">
            	<h3 className="text-primary">Deleting Your Phone's History</h3>
            	<p>Here's how to clear your phone's browser history.</p>
            	<ol id="phoneHistoryHelp__main__chromeList">
					<li>Open the Chrome app Chrome app.</li>
					<li>Tap More More and then Settings.</li>
					<li>Under "Advanced," tap Privacy and then Clear browsing data.</li>
					<li>At the top, tap the drop-down under "Clear data from the."</li>
					<li>Choose a time period, such as past hour or past day. To delete everything, select beginning of time.</li>
					<li>Select the types of information you want to remove.</li>
					<li>Tap Clear data.</li>
				</ol>
            </div>
        );
    }
}
