import React from 'react';
import HomeHeader from './homeHeader/homeHeader';
import HomeMain from './homeMain/homeMain';
import HomeFooter from './homeFooter/homeFooter';

const Home = () => {
  return (
    <section className="home">
      <div className="picture" />
      <div className="home__container">
        <HomeHeader />
        <HomeMain />
        <HomeFooter />
      </div>

    </section>
  );
};

export default Home;
