import React, { Component } from 'react'
import '../styles/screen.sass'

class Features extends Component {

  render () {
    return <div>
    <div className='features'>
      <h4>Features & Analysis</h4>
        <div className='sideStory'>
          <div className='cigs' />
            <div className='sideSubject'>
              <h2>Toxic topic?</h2>
              <p>How safe are e-cigarettes - and should they be banned?</p>
            </div>
          </div>
          <div className='sideStory'>
            <div className='colors' />
            <div className='sideSubject'>
              <h2>Counting colours</h2>
              <p>How to reach the seven-a-day fruit and veg target</p>
            </div>
          </div>
          <div className='sideStory'>
            <div className='plane' />
            <div className='sideSubject'>
              <h2>Angle of descent</h2>
              <p>The landscape bodering Heathrow Airport</p>
            </div>
          </div>
          <div className='sideStory'>
            <div className='history' />
            <div className='sideSubject'>
              <h2>Lessons from history</h2>
              <p>Nixon, Reagan and Sarkozy's TV appearances</p>
            </div>
          </div>
        </div>
    </div>
  }
}

export default Features
