import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from 'react-router'

class Article1 extends Component {

  render () {
    return <div>
    <div className='pollutionEngland'>
      <div className='fixedWidth'>
        <Link className='homeFont' to='/'>Pollution spreads across England</Link>
        <div className='mainPollution'>
          <div className='movie' />
          <div className='pollutionSide'>
            <p>Health warning have been issued by the government as pollution spreading across England is forecast to hit high levels.</p>
            <div className='playHeader'>
              <a id='playHeader' href='#'>
              <img src={require('../images/play.png')} height='15' width='20' /><span className='playLinks'>Why are pollution levels so high?</span>
              </a>
            </div>
            <br />
            <div className='playHeader'>
              <a id='playHeader' href='#'>
              <img src={require('../images/play.png')} height='15' width='20' /><span className='playLinks'>Saharan dust visible on cars</span>
              </a>
            </div>
            <br />
            <div className='playHeader'>
              <a id='playHeader' href='#'>
              <img src={require('../images/play.png')} height='15' width='20' /><span className='playLinks'>How Saharan dust reached the UK.  What will pollution do to us?</span>
              </a>
            </div>
            <br />
            <div className='playHeader'>
              <a id='playHeader' href='#'>
              <img src={require('../images/sound.png')} height='15' width='20' /><span className='playLinks'>Air pollution a 'serious issue'</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  }
}

export default Article1
