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

function setup() {
  const enzymeWrapper = shallow(<Login {...props} />)

  return {
    enzymeWrapper
  }
}

describe('Login button', () => {
  it('Should render itself and a Logo'), () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('a').text()).toBe('Login com Spotify')
  }
})