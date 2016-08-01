import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import MyLocationUtility from '../src/components/myLocationUtility';
import { expect } from 'chai'
import { assert } from 'chai'
import { render } from 'enzyme'

describe('MyLocationUtility', () => {
    var component = <MyLocationUtility />;

    const wrapper = render(<MyLocationUtility />);

    it('should exist', () => {
      assert.isOk(component);
    });
});
