import React, { Component } from 'react'
import '../styles/screen.sass'

class App extends Component {

  render () {
    return <div>
      <div className='topBar'>
        <div className='fixedWidth'>
        <div className='logo'>
          <img className='break' src={require('../images/bbclogo.png')} height='25' width='80' />
          <div className='signIn'><img id='signLogo' src={require('../images/sign.png')} height='20' width='25' />Sign In</div>
          <div className='news'>News</div>
          <div className='sport'>Sport</div>
          <div className='weather'>Weather</div>
          <div className='iPlayer'>iPlayer</div>
          <div className='tv'>TV</div>
          <div className='radio'>Radio</div>
          <div className='more'>More...</div>
          <input id='searching' type='search' placeholder='Search'></input>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div>
  }
}

export default App