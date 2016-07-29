import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import PhoneHistoryHelp from '../src/components/phoneHistoryHelp';
import { expect } from 'chai'
import { assert } from 'chai'
import { render } from 'enzyme'

describe('PhoneHistoryHelp', () => {
    var component = <PhoneHistoryHelp />;

    const wrapper = render(<PhoneHistoryHelp />);

    it('should contain text on phone history', () => {
      expect(wrapper.text()).to.contain("Here's how to clear your phone's browser history");
    });

    // it('run set for help setup', () => {
    //   expect(component.setForHelp).to.have.been.called();
    // })
});
