import React from 'react';
import Login from './index.js';

import renderer from 'react-test-renderer';
import "../../../setupTests";


describe('Login button', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<Login />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
