import React from 'react'
import ThemeProvider from 'mdx-deck/dist/Provider'
import Logo from './component/logo'

const headerStyle = {
  height: '80px',
  padding: '15px 6.25vw',
  position: 'absolute',
  bottom: '0.8vh',
  right: '0.4vw',
}

const bookClubStyle = {
  fontSize: '28px',
  weight: '900'
}

const Provider = ({ children, ...rest }) => (
  <ThemeProvider {...rest}>
    {children}
    <div style={headerStyle} >
      <Logo textColor={'#888'} height={30} />
    </div>
  </ThemeProvider>
)

export default Provider
