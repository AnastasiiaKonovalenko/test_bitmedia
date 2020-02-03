import React from 'react';
import {
  designItem,
  secureItem,
  retinaItem,
} from '../../icons/icons';
import { Link } from 'react-router-dom';

const HomeMain = () => (
  <main className="main">
    <section className="main__container">
      <h2 className="main__heading">
        Why <span className="span">small business owners love</span> AppCo?
      </h2>
      <p className="main__text">
        Our design projects are fresh and simple and will benefit your
        business greatly. Learn more about our work!
      </p>
      <section className="main__benefits benefits">
        <div className="benefits__item">
          {designItem}
          <h3 className="benefits__heading">
            Clean Design
          </h3>
          <p className="benefits__text">
            Increase sales by showing true dynamics of your website.
          </p>

        </div>

        <div className="benefits__item">
          {secureItem}
          <h3 className="benefits__heading">
            Secure Data
          </h3>
          <p className="benefits__text">
            Build your online store’s trust using Social Proof & Urgency.
          </p>
        </div>

        <div className="benefits__item">
          {retinaItem}
          <h3 className="benefits__heading">
            Retina Ready
          </h3>
          <p className="benefits__text">
            Realize importance of social proof in customer’s purchase decision.
          </p>
        </div>
      </section>

      <section className="managing main__managing">
        <article className="managing__article">
          <div className="managing__info">
            <h2 className="managing__heading">
              Start Managing your apps business, more faster
            </h2>
            <p className="managing__text">
              Objectively deliver professional value with diverse
              web-readiness. Collaboratively transition wireless
              customer service without <span>goal-oriented</span> catalysts for
              change. Collaboratively.
            </p>
            <Link
              className="managing__link link"
              to="/users"
            >
              Learn more
            </Link>
          </div>

          <div className="managing__icon" />
        </article>

      </section>

      <section className="price main__price">
        <h2 className="price__heading">
          <span>Afforadble Pricing and Packages</span> choose
          your best one
        </h2>
        <p className="price__text">
          Monotonectally grow strategic process improvements
          vis-a-vis integrated resources.
        </p>
        <div className="price__packages packages">
          <div className="packages__item">
            <h3 className="packages__heading">
              Basic
            </h3>
            <div className="packages__img first" />
            <span>$29</span>
            <p className="packages__text">
              Push Notifications
              <br/>
              Data Transfer
              <br/>
              SQL Database
              <br/>
              Search & SEO Analytics
              24/7 Phone Support
              <br/>
              2 months technical support
              2+ profitable keyword
            </p>
            <Link
              className="packages__link link"
              to="/users"
            >
              Purchase now
            </Link>
          </div>
          <div className="packages__item">
            <h3 className="packages__heading">
              Standard
            </h3>
            <div className="packages__img second" />
            <span className="main_package">$149</span>
            <p className="packages__text">
              Push Notifications
              <br/>
              Data Transfer
              <br/>
              SQL Database
              <br/>
              Search & SEO Analytics
              24/7 Phone Support
              <br/>
              2 months technical support
              2+ profitable keyword
            </p>
            <Link
              className="packages__link link"
              to="/users"
            >
              Purchase now
            </Link>
          </div>
          <div className="packages__item">
            <h3 className="packages__heading">
              Unlimited
            </h3>
            <div className="packages__img third" />
            <span>$39</span>
            <p className="packages__text">
              Push Notifications
              <br/>
              Data Transfer
              <br/>
              SQL Database
              <br/>
              Search & SEO Analytics
              24/7 Phone Support
              <br/>
              2 months technical support
              2+ profitable keyword
            </p>
            <Link
              className="packages__link link"
              to="/users"
            >
              Purchase now
            </Link>
          </div>
        </div>
      </section>
    </section>
  </main>
);

export default HomeMain
