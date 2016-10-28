import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from 'react-router'

class secondBar extends Component {

  render () {
    return <div>
    <Link to='/'>HOME</Link>
  </div>
  }
}

export default secondBar
