import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import Home from '../src/components/home';
import { assert } from 'chai'

describe('Home', () => {
    var component = <Home />;

    it('should exist', () => {
      assert.isOk(component);
    });
});
