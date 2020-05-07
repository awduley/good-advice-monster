import React from 'react'
import Clock from './Clock';


const Header = ({ setTime }) => {

  return (
    <header className="header-section">
      <h1 className="header-section__title">Good Advice Monster</h1>
      <p>Time:</p>
      <Clock />
    </header>
  )
}

export default Header
