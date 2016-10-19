import React from 'react'
import renderer from 'react-test-renderer'
import Button from './Button'

it('Renders without props', () => {
  const button = renderer.create(
    <Button />
  ).toJSON()
  expect(button).toMatchSnapshot()
})
