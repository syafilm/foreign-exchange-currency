import React from 'react'
import { shallow, mount, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import Body from './Body'

describe('Component Body', () => {
  it('Can render Body component smoothly', () => {
    const component = shallow(
      <Body />,
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
    expect(component.find('div')).toBeDefined()
  })
  it('should mount smoothly', () => {
    const component = mount(
      <Body />,
    )
    expect(component).toMatchSnapshot()
  })
  it('should render smoothly', () => {
    const component = render(
      <Body />,
    )
    expect(component).toMatchSnapshot()
  })
})
