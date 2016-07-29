import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import TemplateLayout from '../src/components/templateLayout';
import { expect } from 'chai'
import { assert } from 'chai'
import { render } from 'enzyme'

describe('TemplateLayout', () => {
    var component = <TemplateLayout />;

    const wrapper = render(<TemplateLayout />);

    it('should contain text for help lines and website', () => {
      expect(wrapper.text()).to.contain('1-888-3737-888');
      expect(wrapper.text()).to.contain('Ohio Human Trafficking Task Force');
    });
});
