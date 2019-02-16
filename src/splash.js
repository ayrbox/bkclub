import React, { Fragment } from 'react'
import styled from 'styled-components'
import Logo from './component/logo'

const headerStyle = {
  height: '160px',
  padding: '50px 6.25vw',
  position: 'absolute',
  top:0,
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

const backgroundStyle = {
  
}

const Splash = ({ children }) => {
  return (
    <Fragment>
      {children}
      <div style={headerStyle} >
        <Logo height={80} />
        <div style={bookClubStyle}>
          #bookclub
        </div>
      </div>
    </Fragment>
  )
}

export default Splash 
