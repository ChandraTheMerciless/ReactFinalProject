import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import DeLorean from '../src/components/deLorean';
import { expect } from 'chai'
import { assert } from 'chai'
import { render } from 'enzyme'

describe('DeLorean', () => {
    var component = <DeLorean />;

    const wrapper = render(<DeLorean />);

    it('should test', () => {
      expect(wrapper.text()).to.contain('Testing Delorean Test');
    });
});
