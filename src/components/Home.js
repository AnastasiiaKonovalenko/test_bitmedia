import React from 'react';
import HomeHeader from './homeHeader/homeHeader';
import HomeMain from './homeMain/homeMain';
import HomeFooter from './homeFooter/homeFooter';

const Home = () => (
  <section className="main-home">
    <div className="picture" />

    <HomeHeader />
    <HomeMain />
     <HomeFooter />
  </section>
);

export default Home;
