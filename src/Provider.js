import React from 'react'
import ThemeProvider from 'mdx-deck/dist/Provider'
import Logo from './component/logo'

const headerStyle = {
  height: '80px',
  padding: '15px 6.25vw',
  position: 'absolute',
  bottom:0,
  left: 0,
  right: 0,
  background: '#fff',
  boxShadow: 'rgba(22, 22, 86, 0.15) 0px 0px 20px 0px',
  display: 'flex',
  justifyContent: 'space-between',
  verticalAlign: 'top'
}

const bookClubStyle = {
  fontSize: '28px',
  weight: '900'
}

const Provider = ({ children, ...rest }) => (
  <ThemeProvider {...rest}>
    {children}
    <div style={headerStyle} >
      <Logo />
      <div style={bookClubStyle}>
        #bookclub
      </div>
    </div>
  </ThemeProvider>
)

export default Provider
