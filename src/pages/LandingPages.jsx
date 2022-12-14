import React, { Component } from 'react';
import Header from 'partials/Header';
import Hero from "components/Hero";
import MostPicked from "partials/MostPicked";
import Categories from 'partials/Categories';
import landingPage from 'json/landingPage.json'
import Testimonial from 'partials/Testimonial';
import Footer from 'partials/Footer';

export class LandingPages extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props} ></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
        <Categories data={landingPage.categories} />
        <Testimonial data={landingPage.testimonial} />
        <Footer/>
      </>
    )
  }
}

export default LandingPages
