import React, { Component } from 'react'
import '../styles/screen.sass'

class thirdBar extends Component {

  render () {
    return <div>
    <div className='bottomBg'>
      <div className='fixedWidth'>
        <div className='newsBar'>
          <div className='barhome'>Home</div>
          <div className='bar'>World</div>
          <div className='bar'>England</div>
          <div className='bar'>N. Ireland</div>
          <div className='bar'>Scotland</div>
          <div className='bar'>Wales</div>
          <div className='bar'>Business</div>
          <div className='bar'>Politics</div>
          <div className='bar'>Health</div>
          <div className='bar'>Education</div>
          <div className='barlong'>Sci/Enviornment</div>
          <div className='barlong'>Technology</div>
          <div className='barlong'>Entertainment & Arts</div>
        </div>
      </div>
    </div>
  </div>
  }
}

export default thirdBar
