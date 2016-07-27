import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import Home from '../src/components/home';
import { expect } from 'chai'
import { assert } from 'chai'
import { render } from 'enzyme'

describe('Home', () => {
    var component = <Home />;

    const wrapper = render(<Home />);

    it('should contain text from btns', () => {
      expect(wrapper.text()).to.contain('I need help');
      expect(wrapper.text()).to.contain('I want to help');
    });

    it('run set for help setup', () => {
      // Home.setForHelp();
      // assert.equal(navStatus, "toHelp");
    })
});
