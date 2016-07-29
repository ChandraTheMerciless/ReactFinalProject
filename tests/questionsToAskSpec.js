import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import QuestionsToAsk from '../src/components/questionsToAsk';
import { expect } from 'chai'
import { assert } from 'chai'
import { render } from 'enzyme'

describe('Home', () => {
    var component = <QuestionsToAsk />;

    const wrapper = render(<QuestionsToAsk />);

    it('should contain text on questions to ask', () => {
      expect(wrapper.text()).to.contain('Can you leave your job if you want to');
    });

    // it('run set for help setup', () => {
    //   expect(component.setForHelp).to.have.been.called();
    // })
});
