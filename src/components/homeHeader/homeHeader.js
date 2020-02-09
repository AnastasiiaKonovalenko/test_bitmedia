import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../icons/icons';

const HomeHeader = () => (
  <header className="header">

    <div className="header__logo">{logo}</div>
    <section className="header__section">
      <div className="header__heading-block">
        <h1 className="header__heading">
          <span className="span">Brainstorming </span>
          for desired perfect Usability
        </h1>

        <p className="header__text">
          Our design projects are fresh
          and simple and will benefit your
          business greatly. Learn more about
          our work!
        </p>

        <Link
          className="header__link-to-users"
          to="/users"
        >
          View Stats
        </Link>
      </div>
      <div className="header__iphone" />
    </section>

  </header>
);

export default HomeHeader;
