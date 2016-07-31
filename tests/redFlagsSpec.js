import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import RedFlags from '../src/components/redFlags';
import { expect } from 'chai'
import { assert } from 'chai'
import { render } from 'enzyme'

describe('RedFlags', () => {
    var component = <RedFlags />;

    const wrapper = render(<RedFlags />);

    it('should contain text on red flags', () => {
      expect(wrapper.text()).to.contain("Employer is holding identity documents");
    });
});
