import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import HowToHelp from '../src/components/howToHelp';
import { expect } from 'chai'
import { assert } from 'chai'
import { render } from 'enzyme'

describe('HowToHelp', () => {
    var component = <HowToHelp />;

    const wrapper = render(<HowToHelp />);

    it('should contain some info on how to help', () => {
      expect(wrapper.text()).to.contain('How to Help');
    });

    it('should exist', () => {
      assert.isOk(component);
    });
});
