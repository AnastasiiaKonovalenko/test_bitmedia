import React from 'react';
import { Link } from 'react-router-dom';
import { home_footer_logo } from '../../icons/icons';

const HomeFooter = () => (
  <footer className="footer_home">
    <p className="footer_home__text">
      If you need custom services or Need more?&nbsp;
      <Link
        className="footer_home__link link"
        to="/users"
      >
        Contact us
      </Link>
    </p>

    <form className="footer_home__form">
      <div className="footer_home__field">
        <input
          className="footer_home__input"
          type="text"
          placeholder="Enter your email"
        />
        <button
          className="footer_home__button"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>

    <div className="footer_home__rights">
      {home_footer_logo}
      <p>All rights reserved by ThemeTags</p>
      <p>Copyrights &copy; 2019. </p>
    </div>

  </footer>
);

export default HomeFooter;
