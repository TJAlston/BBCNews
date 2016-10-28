import React, { Component } from 'react'
import '../styles/screen.sass'

class secondBar extends Component {

  render () {
    return <div>
    <div className='titleBg'>
      <div className='fixedWidth'>
        <div className='pageTitle'>
        <h1>NEWS</h1>
        <h3 className='uk'>UK</h3>
          <div className='rss'>
          <h5>RSS</h5>
          <img className='rsslogo' src={require('../images/rsslogo.png')} height='15' width='15' />
          </div>
        </div>
      </div>
    </div>
  </div>
  }
}

export default secondBar
