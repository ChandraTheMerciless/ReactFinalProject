import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import TemplateLayout from '../src/components/templateLayout';
import { expect } from 'chai'
import { assert } from 'chai'
import { render } from 'enzyme'

describe('Home', () => {
    var component = <TemplateLayout />;

    const wrapper = render(<TemplateLayout />);

    it('should contain static page text', () => {
      expect(wrapper.text()).to.contain('I Need Help');
    });

    it('should exist', () => {
      assert.isOk(component);
    });
});
