import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import ScatterChartStats from '../src/components/scatterChartStats';
import { assert } from 'chai'

describe('ScatterChartStats', () => {
    var component = <ScatterChartStats />;

    it('should exist', () => {
      assert.isOk(component);
    });
});
