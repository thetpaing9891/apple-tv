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
          <Link
            href="#ac-gf-directory-column-section-state-products"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            href="/#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="store"
              >
                Store
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="mac"
              >
                Mac
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="ipad"
              >
                iPad
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="iphone"
              >
                iPhone
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="watch"
              >
                Watch
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="airpods"
              >
                AirPods
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="tv and home"
              >
                TV &amp; Home
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="airtag"
              >
                AirTag
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="accessories"
              >
                Accessories
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="gift cards"
              >
                Gift Cards
              </Link>
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
          <Link
            href="#ac-gf-directory-column-section-state-services"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple music"
              >
                Apple&nbsp;Music
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple tv plus"
              >
                Apple&nbsp;TV+
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple fitness plus"
              >
                Apple&nbsp;Fitness+
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple news plus"
              >
                Apple&nbsp;News+
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple arcade"
              >
                Apple&nbsp;Arcade
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="icloud"
              >
                iCloud
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple one"
              >
                Apple&nbsp;One
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple card"
              >
                Apple&nbsp;Card
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple books"
              >
                Apple&nbsp;Books
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="apple podcasts"
              >
                Apple Podcasts
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
                data-analytics-title="app store"
              >
                App&nbsp;Store
              </Link>
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
          <Link
            href="#ac-gf-directory-column-section-state-accounts"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Manage Your Apple ID
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Apple Store Account
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                iCloud.com
              </Link>
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
          <Link
            href="#ac-gf-directory-column-section-state-storeservices"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Find a Store
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Genius Bar
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Today at Apple
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Apple Camp
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Apple Store App
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Refurbished and Clearance
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Financing
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Apple&nbsp;Trade&nbsp;In
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Order Status
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Shopping Help
              </Link>
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
          <Link
            href="#ac-gf-directory-column-section-state-business"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Apple and Business
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Shop for Business
              </Link>
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
          <Link
            href="#ac-gf-directory-column-section-state-education"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Apple and Education
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Shop for K-12
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Shop for College
              </Link>
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
          <Link
            href="#ac-gf-directory-column-section-state-healthcare"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Apple in Healthcare
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Health on Apple&nbsp;Watch
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Health Records on iPhone
              </Link>
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
          <Link
            href="#ac-gf-directory-column-section-state-government"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Shop for Government
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Shop for Veterans and Military
              </Link>
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
          <Link
            href="#ac-gf-directory-column-section-state-responsibility"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="accessibility.html"
                data-analytics-title="accessibility"
              >
                Accessibility
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Education
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Environment
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Inclusion and Diversity
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Privacy
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Racial Equity and Justice
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Supplier Responsibility
              </Link>
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
          <Link
            href="#ac-gf-directory-column-section-state-about"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-open"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Open Menu
            </span>
          </Link>
          <Link
            href="#"
            className="ac-gf-directory-column-section-anchor ac-gf-directory-column-section-anchor-close"
          >
            <span className="ac-gf-directory-column-section-anchor-label">
              Close Menu
            </span>
          </Link>
          <ul className="ac-gf-directory-column-section-list">
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Newsroom
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Apple Leadership
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Career Opportunities
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Investors
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Ethics &amp; Compliance
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Events
              </Link>
            </li>
            <li className="ac-gf-directory-column-section-item">
              <Link
                className="ac-gf-directory-column-section-link"
                href="/detail"
              >
                Contact Apple
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default FooterNav;
