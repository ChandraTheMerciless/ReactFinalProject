import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import INeedHelp from '../src/components/iNeedHelp';
import { expect } from 'chai'
import { assert } from 'chai'
import { render } from 'enzyme'

describe('INeedHelp', () => {
    var component = <INeedHelp />;

    const wrapper = render(<INeedHelp />);

    it('should contain some info on how to help', () => {
      expect(wrapper.text()).to.contain('I Need Help');
    });
});
