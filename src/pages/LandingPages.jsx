import React, { Component } from 'react';
import Header from 'partials/Header';
import Hero from "components/Hero";
import MostPicked from "partials/MostPicked";
import landingPage from 'json/landingPage.json'

export class LandingPages extends Component {
  render() {
    return (
      <>
        <Header {...this.props} ></Header>
        <Hero data={landingPage.hero} />
        <MostPicked data={landingPage.mostPicked}/>
      </>
    )
  }
}

export default LandingPages
