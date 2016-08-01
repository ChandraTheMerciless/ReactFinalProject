import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import QuickExit from '../src/components/quickExit';
import { expect } from 'chai'
import { assert } from 'chai'
import { render } from 'enzyme'

describe('QuickExit', () => {
    var component = <QuickExit />;

    const wrapper = render(<QuickExit />);

    it('should exist', () => {
      assert.isOk(component);
    });
});
