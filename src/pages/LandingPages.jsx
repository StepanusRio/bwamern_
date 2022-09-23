import React, { Component } from 'react';
import Header from 'partials/Header';
import Hero from "components/Hero";
import MostPicked from "partials/MostPicked";
import landingPage from 'json/landingPage.json'

export class LandingPages extends Component {
  constructor(props){
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props} ></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
      </>
    )
  }
}

export default LandingPages
