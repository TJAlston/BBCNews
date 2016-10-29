import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from 'react-router'

class Article1 extends Component {

  render () {
    return <div>
    <div className='pollutionEngland'>
      <div className='fixedWidth'>
      <h2 className='homeFont'>
      <Link className='homeFont' to='/'>Pollution spreads across England</Link>
      </h2>
        <div className='mainPollution'>
          <div className='england' />
          <div className='pollutionSide'>
            <p>Health warning have been issued by the government as pollution spreading across England is forecast to hit high levels.</p>
            <div className='playHeader'>
              <img src={require('../images/play.png')} height='20' width='25' /><p className='playLinks'>Why are pollution levels so high?</p>
            </div>
            <div className='playHeader'>
              <img src={require('../images/play.png')} height='20' width='25' /><p className='playLinks'>Saharan dust visible on cars</p>
            </div>
            <div className='playHeader'>
              <img src={require('../images/play.png')} height='20' width='25' /><p className='playLinks'>How Saharan dust reached the UK <br />What will pollution do to us?</p>
            </div>
            <div className='playHeader'>
              <img src={require('../images/sound.png')} height='20' width='25' /><p className='playLinks'>Air pollution a 'serious issue'</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  }
}

export default Article1
