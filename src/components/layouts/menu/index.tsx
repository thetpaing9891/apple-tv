import SearchForm from "@/components/searchform";
import { useState } from "react";
import TopMenu from "./top/index";
import menuData from "@/mocks/menuData.json";
import Link from "next/link";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleShow = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="ac-globalnav" className={`no-js ${menuOpen && "menu-opened"}`}>
      <div className="ac-gn-content">
        <TopMenu toggleShow={toggleShow} />

        <div className="ac-gn-search-placeholder-container" role="search">
          <div className="ac-gn-search ac-gn-search-small">
            <a id="ac-gn-link-search-small" className="ac-gn-link" href="#">
              <div className="ac-gn-search-placeholder-bar">
                <div className="ac-gn-search-placeholder-input">
                  <div
                    className="ac-gn-search-placeholder-input-text"
                    aria-hidden="true"
                  >
                    <div className="ac-gn-link-search ac-gn-search-placeholder-input-icon"></div>
                    <span className="ac-gn-search-placeholder">
                      Search apple.com
                    </span>
                  </div>
                </div>
                <div className="ac-gn-searchview-close ac-gn-searchview-close-small ac-gn-search-placeholder-searchview-close">
                  <span
                    className="ac-gn-searchview-close-cancel"
                    aria-hidden="true"
                  >
                    Cancel
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <ul className="ac-gn-list">
          <li className="ac-gn-item ac-gn-apple">
            <Link
              className="ac-gn-link ac-gn-link-apple"
              href="/"
              id="ac-gn-firstfocus"
            >
              <span className="ac-gn-link-text">Apple </span>
            </Link>
          </li>
          {menuData.map((item: any, index: number) => (
            <li
              className={`ac-gn-item ac-gn-item-menu ac-gn-${item.attribute}`}
              key={index}
            >
              <a
                className={`ac-gn-link ac-gn-link-${item.attribute}`}
                href={item.path}
              >
                <span className="ac-gn-link-text">{item.name}</span>
              </a>
            </li>
          ))}
          <li className="ac-gn-item ac-gn-item-menu ac-gn-search" role="search">
            <a
              id="ac-gn-link-search"
              className="ac-gn-link ac-gn-link-search"
              href="#"
            ></a>
          </li>
          <li className="ac-gn-item ac-gn-bag" id="ac-gn-bag">
            <div className="ac-gn-bag-wrapper">
              <a className="ac-gn-link ac-gn-link-bag" href="#">
                <span className="ac-gn-link-text">Shopping Bag</span>
              </a>
              <span className="ac-gn-bag-badge">
                <span className="ac-gn-bag-badge-separator"></span>
                <span className="ac-gn-bag-badge-number"></span>
                <span className="ac-gn-bag-badge-unit">+</span>
              </span>
            </div>
            <span className="ac-gn-bagview-caret ac-gn-bagview-caret-large"></span>
          </li>
        </ul>

        <SearchForm />

        <aside className="ac-gn-bagview">
          <div className="ac-gn-bagview-scrim">
            <span className="ac-gn-bagview-caret ac-gn-bagview-caret-small"></span>
          </div>
          <div
            className="ac-gn-bagview-content"
            id="ac-gn-bagview-content"
          ></div>
        </aside>
      </div>
    </nav>
  );
};

export default Menu;
