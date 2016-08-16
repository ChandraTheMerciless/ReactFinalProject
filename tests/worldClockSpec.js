import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import WorldClock from '../src/components/worldClock';
import { expect } from 'chai'
import { assert } from 'chai'
import { render } from 'enzyme'

describe('WorldClock', () => {
    var component = <WorldClock />;

    const wrapper = render(<WorldClock />);

    it('should contain text on world clock', () => {
      expect(wrapper.text()).to.contain('Welcome to the World Clock page');
    });

    it('should exist', () => {
      assert.isOk(component);
    });
    
});
