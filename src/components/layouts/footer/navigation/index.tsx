import React from "react";
import data from "@/mocks/footerData.json";
import { FooterProps } from "@/types";

const FooterNav = () => {
  const [navigation, setNavigation] = React.useState<FooterProps>(data);

  return (
    <nav
      className="ac-gf-directory with-5-columns"
      aria-label="Apple Directory"
      role="navigation"
    >
      <div className="ac-gf-directory-column">
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id={`ac-gf-directory-column-section-state-products`}
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-products"
          >
            <h3 className="ac-gf-directory-column-section-title">
              Shop and Learn
            </h3>
          </label>
          <a
            href="#ac-gf-directory-column-section-state-products"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </a>
          <a
            href="/#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </a>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="store"
              >
                Store
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="mac"
              >
                Mac
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="ipad"
              >
                iPad
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="iphone"
              >
                iPhone
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="watch"
              >
                Watch
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="airpods"
              >
                AirPods
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="tv and home"
              >
                TV &amp; Home
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="airtag"
              >
                AirTag
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="accessories"
              >
                Accessories
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="gift cards"
              >
                Gift Cards
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ac-gf-directory-column">
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-services"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-services"
          >
            <h3 className="ac-gf-directory-column-section-title">Services</h3>
          </label>
          <a
            href="#ac-gf-directory-column-section-state-services"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </a>
          <a
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </a>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple music"
              >
                Apple&nbsp;Music
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple tv plus"
              >
                Apple&nbsp;TV+
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple fitness plus"
              >
                Apple&nbsp;Fitness+
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple news plus"
              >
                Apple&nbsp;News+
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple arcade"
              >
                Apple&nbsp;Arcade
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="icloud"
              >
                iCloud
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple one"
              >
                Apple&nbsp;One
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple card"
              >
                Apple&nbsp;Card
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple books"
              >
                Apple&nbsp;Books
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple podcasts"
              >
                Apple Podcasts
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="app store"
              >
                App&nbsp;Store
              </a>
            </li>
          </ul>
        </div>

        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-accounts"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-accounts"
          >
            <h3 className="ac-gf-directory-column-section-title">Account</h3>
          </label>
          <a
            href="#ac-gf-directory-column-section-state-accounts"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </a>
          <a
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </a>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Manage Your Apple ID
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Apple Store Account
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                iCloud.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="ac-gf-directory-column">
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-storeservices"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-storeservices"
          >
            <h3 className="ac-gf-directory-column-section-title">
              Apple Store
            </h3>
          </label>
          <a
            href="#ac-gf-directory-column-section-state-storeservices"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </a>
          <a
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </a>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Find a Store
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Genius Bar
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Today at Apple
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Apple Camp
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Apple Store App
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Refurbished and Clearance
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Financing
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Apple&nbsp;Trade&nbsp;In
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Order Status
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Shopping Help
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="ac-gf-directory-column">
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-business"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-business"
          >
            <h3 className="ac-gf-directory-column-section-title">
              For Business
            </h3>
          </label>
          <a
            href="#ac-gf-directory-column-section-state-business"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </a>
          <a
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </a>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Apple and Business
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Shop for Business
              </a>
            </li>
          </ul>
        </div>
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-education"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-education"
          >
            <h3 className="ac-gf-directory-column-section-title">
              For Education
            </h3>
          </label>
          <a
            href="#ac-gf-directory-column-section-state-education"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </a>
          <a
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </a>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Apple and Education
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Shop for K-12
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Shop for College
              </a>
            </li>
          </ul>
        </div>
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-healthcare"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-healthcare"
          >
            <h3 className="ac-gf-directory-column-section-title">
              For Healthcare
            </h3>
          </label>
          <a
            href="#ac-gf-directory-column-section-state-healthcare"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </a>
          <a
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </a>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Apple in Healthcare
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Health on Apple&nbsp;Watch
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Health Records on iPhone
              </a>
            </li>
          </ul>
        </div>
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-government"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-government"
          >
            <h3 className="ac-gf-directory-column-section-title">
              For Government
            </h3>
          </label>
          <a
            href="#ac-gf-directory-column-section-state-government"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </a>
          <a
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </a>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Shop for Government
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Shop for Veterans and Military
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="ac-gf-directory-column">
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-responsibility"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-responsibility"
          >
            <h3 className="ac-gf-directory-column-section-title">
              Apple Values
            </h3>
          </label>
          <a
            href="#ac-gf-directory-column-section-state-responsibility"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </a>
          <a
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </a>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <a
                className="ac-gf-directory-column-section-link"
                href="accessibility.html"
                data-analytics-title="accessibility"
              >
                Accessibility
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Education
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Environment
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Inclusion and Diversity
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Privacy
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Racial Equity and Justice
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Supplier Responsibility
              </a>
            </li>
          </ul>
        </div>
        <input
          className="ac-gf-directory-column-section-state"
          type="checkbox"
          id="ac-gf-directory-column-section-state-about"
        />
        <div className="ac-gf-directory-column-section">
          <label
            className="ac-gf-directory-column-section-label"
            htmlFor="ac-gf-directory-column-section-state-about"
          >
            <h3 className="ac-gf-directory-column-section-title">
              About Apple
            </h3>
          </label>
          <a
            href="#ac-gf-directory-column-section-state-about"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </a>
          <a
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </a>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Newsroom
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Apple Leadership
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Career Opportunities
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Investors
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Ethics &amp; Compliance
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Events
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="/detail">
                Contact Apple
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default FooterNav;
