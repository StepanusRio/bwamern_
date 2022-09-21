import React, { Component } from 'react'
import Header from 'partials/Header'

export class LandingPages extends Component {
  render() {
    return (
      <>
        <Header {...this.props} ></Header>
      </>
    )
  }
}

export default LandingPages
