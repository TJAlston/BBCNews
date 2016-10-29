import React, { Component } from 'react'
import '../styles/screen.sass'

class Watch extends Component {

  render () {
    return <div>
    <div className='listen'>
      <h4>Watch/Listen</h4>
      <img className='letter' src={require('../images/letter.png')} height='100' width='185' />
      <img className='housing' src={require('../images/housing.png')} height='100' width='185' />
        <div className='subtitle'>
        <span className='live'>LIVE</span> <span className='BBCNews'>BBC News Channel</span>
        </div>
    </div>
  </div>
  }
}

export default Watch
