import React, { Component } from 'react'
import '../styles/screen.sass'
import TopBar from './topBar'
import SecondBar from './secondBar'
import ThirdBar from './thirdBar'
import Article1 from './Article1'
import Article2 from './Article2'
import Watch from './Watch'
import Features from './Features'

class App extends Component {

  render () {
    return <div>
      <TopBar />
      <SecondBar />
      <ThirdBar />
      <div className='fixedWidth'>
        <div id='flex'>
          <div className='column1'>
            <div className='update'>
            <span className='date'>27 October 2016</span> Last Updated at 14:13
            </div>
            <br />
            <Article1 />
            <Article2 />
          </div>
          <div className='column2'>
            <Watch />
            <Features />
          </div>
        </div>
      </div>
    </div>
  }
}

export default App
