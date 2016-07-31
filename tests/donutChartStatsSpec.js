import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Link } from 'react-router'
import DonutChartStats from '../src/components/donutChartStats';
import { assert } from 'chai'

describe('DonutChartStats', () => {
    var component = <DonutChartStats />;

    it('should exist', () => {
      assert.isOk(component);
    });
});
