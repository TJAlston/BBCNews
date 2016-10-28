import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from 'react-router'

class topBar extends Component {

  render () {
    return <div>
      <div className='topBar'>
        <div className='fixedWidth'>
          <div className='logo'>
            <Link to='/'><img className='break' src={require('../images/bbclogo.png')} height='25' width='80' /></Link>
            <div className='signIn'><img id='signLogo' src={require('../images/sign.png')} height='20' width='25' />Sign In</div>
            <div className='news'>News</div>
            <div className='sport'>Sport</div>
            <div className='weather'>Weather</div>
            <div className='iPlayer'>iPlayer</div>
            <div className='tv'>TV</div>
            <div className='radio'>Radio</div>
            <div className='more'>More...</div>
            <input id='searching' type='search' placeholder='Search' />
          </div>
        </div>
      </div>
    </div>
  }
}
export default topBar
