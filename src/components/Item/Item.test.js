
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Item from './ITem'

const item = {
  date: '2019-04-23',
  id: 'c0c66ac3-45d2-41e9-9e4d-769dcc9f4648',
  price: 0.7687861272,
  typeCurrency: 'GBP',
}

describe('Component Item', () => {
  it('Can render Item component smoothly', () => {
    const mockEvent = jest.fn()
    const currency = '100'
    const component = shallow(
      <Item
        key={item.id}
        item={item}
        handleDelete={mockEvent}
        currency={currency}
      />,
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
    expect(component.find('div')).toBeDefined()
  })
})
