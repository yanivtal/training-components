import React from 'react'
import renderer from 'react-test-renderer'
import Button from './Button'

it('Regular', () => {
  const button = renderer.create(
    <Button />
  ).toJSON()
  expect(button).toMatchSnapshot()
})

it('With children', () => {
  const button = renderer.create(
    <Button>
      {'Button'}
    </Button>
  ).toJSON()
  expect(button).toMatchSnapshot()
})
