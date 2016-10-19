/* @flow */
import React from 'react'
import Theme from 'js-theme'

type PropsT = {
  children: React.Children,
  theme: Object,
}

const Button = ({
  children,
  theme,
}: PropsT) => (
  <button
    {...theme.button}
  >
    {children}
  </button>
)

const defaultTheme = {
  button: {
    whiteSpace: 'nowrap',
    userSelect: 'none',
    textDecoration: 'none',
    boxSizing: 'border-box',
    cursor: 'pointer',
    border: 0,
    backgroundColor: '#efefef',
  },
}

export default Theme('Button', defaultTheme)(Button)
