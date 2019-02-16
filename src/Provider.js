import React from 'react'
import ThemeProvider from 'mdx-deck/dist/Provider'
import Logo from './component/logo'

const headerStyle = {
  height: '80px',
  padding: '10px 6.25vw',
  position: 'absolute',
  top:0,
  left: 0,
  right: 0,
  background: '#fff',
  boxShadow: 'rgba(22, 22, 86, 0.15) 0px 0px 20px 0px',
}

const Provider = ({ children, ...rest }) => (
  <ThemeProvider {...rest}>
    {children}
    <div style={headerStyle} >
      <Logo />
    </div>

  </ThemeProvider>
)

export default Provider
