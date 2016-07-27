import React from 'react'

export default class QuestionsToAsk extends React.Component {
    render() {
        return(
          <div>
            	<h3 className="text-primary">Questions to Ask</h3>
              <p>Always use caution when approaching someone whom you think is a victim of human trafficking, since their traffickers may be monitoring the victim&#8217;s movements. If you are able to safely engage a potential victim, here are some questions you may ask:</p>
              <ul>
                    <li>Can you leave your job if you want to?</li>
                    <li>Can you come and go as you please?</li>
                    <li>Have you been hurt or threatened if you tried to leave?</li>
                    <li>Has your family been threatened?</li>
                    <li>Do you live with your employer?</li>
                    <li>Where do you sleep and eat?</li>
                    <li>Are you in debt to your employer?</li>
                    <li>Do you have your passport/identification? Who has it?</li>
              </ul>

              <p>For more information on identifying a potential human trafficking situation, please visit:</p>
              <p><a href="http://www.state.gov/j/tip/id/">US Department of State: Identify and Assist a Trafficking Victim</a></p>
          </div>
        );
    }
}
