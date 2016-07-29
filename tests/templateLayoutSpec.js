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
      expect(wrapper.text()).to.contain('I need help');
    });

    it('should contain text from hotline and website component', () => {
      expect(wrapper.text()).to.contain('National Human Trafficking Resource Center');
    });

    // it('run set for help setup', () => {
    //   expect(component.setForHelp).to.have.been.called();
    // })
});
