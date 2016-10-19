/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button/Button'

const Playground = () => (
  <div>
    <Button>
      {'Button'}
    </Button>
  </div>
)

ReactDOM.render(
  <Playground />,
  document.getElementById('root')
)
