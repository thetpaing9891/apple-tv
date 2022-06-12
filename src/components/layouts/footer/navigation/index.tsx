import React from "react";
import data from "@/mocks/footerData.json";
import { FooterProps } from "@/types";
import Link from "next/link";

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
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </a>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Store
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Mac
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                iPad
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                iPhone
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Watch
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                AirPods
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                TV &amp; Home
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                AirTag
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Accessories
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
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
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple&nbsp;Music
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple&nbsp;TV+
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple&nbsp;Fitness+
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple&nbsp;News+
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple&nbsp;Arcade
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                iCloud
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple&nbsp;One
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple&nbsp;Card
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple&nbsp;Books
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple Podcasts
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
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
              <a className="ac-gf-directory-column-section-link" href="#">
                Manage Your Apple ID
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple Store Account
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
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
              <a className="ac-gf-directory-column-section-link" href="#">
                Find a Store
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Genius Bar
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Today at Apple
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple Camp
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple Store App
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Refurbished and Clearance
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Financing
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple&nbsp;Trade&nbsp;In
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Order Status
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
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
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple and Business
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
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
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple and Education
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Shop for K-12
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
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
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple in Healthcare
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Health on Apple&nbsp;Watch
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
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
              <a className="ac-gf-directory-column-section-link" href="#">
                Shop for Government
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
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
              <a className="ac-gf-directory-column-section-link" href="#">
                Accessibility
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Education
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Environment
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Inclusion and Diversity
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Privacy
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Racial Equity and Justice
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
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
              <a className="ac-gf-directory-column-section-link" href="#">
                Newsroom
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Apple Leadership
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Career Opportunities
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Investors
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Ethics &amp; Compliance
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
                Events
              </a>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <a className="ac-gf-directory-column-section-link" href="#">
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
