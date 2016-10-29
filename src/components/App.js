import React, { Component } from 'react'
import '../styles/screen.sass'
import TopBar from './topBar'
import SecondBar from './secondBar'
import ThirdBar from './thirdBar'
import Article1 from './Article1'
import Article2 from './Article2'

class App extends Component {

  render () {
    return <div>
      <TopBar />
      <SecondBar />
      <ThirdBar />
      <div className='fixedWidth'>
        <div className='update'>
        <span className='date'>27 October 2016</span> Last Updated at 14:13
        </div>
      <Article1 />
      <Article2 />
      </div>
    </div>
  }
}

export default App
