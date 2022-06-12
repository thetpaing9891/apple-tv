const TopMenu = (props: any) => {
    return (
        <ul className="ac-gn-header">
          <li className="ac-gn-item ac-gn-menuicon">
            <a
              href="#ac-gn-menustate"
              className="ac-gn-menuanchor ac-gn-menuanchor-open"
              id="ac-gn-menuanchor-open"
              onClick={props.toggleShow}
            >
              <span className="ac-gn-menuanchor-label">
                Global Nav Open Menu
              </span>
            </a>
            <a
              href="#"
              role="button"
              className="ac-gn-menuanchor ac-gn-menuanchor-close"
              id="ac-gn-menuanchor-close"
            >
              <span className="ac-gn-menuanchor-label">
                Global Nav Close Menu
              </span>
            </a>
            <label
              className="ac-gn-menuicon-label"
              htmlFor="ac-gn-menustate"
              aria-hidden="true"
            >
              <span className="ac-gn-menuicon-bread ac-gn-menuicon-bread-top">
                <span className="ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-top"></span>
              </span>
              <span className="ac-gn-menuicon-bread ac-gn-menuicon-bread-bottom">
                <span className="ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-bottom"></span>
              </span>
            </label>
          </li>
          <li className="ac-gn-item ac-gn-apple">
            <a
              className="ac-gn-link ac-gn-link-apple"
              href="www.apple.html"
              data-analytics-title="apple home"
              id="ac-gn-firstfocus-small"
            >
              <span className="ac-gn-link-text">Apple</span>
            </a>
          </li>
          <li
            className="ac-gn-item ac-gn-bag ac-gn-bag-small"
            id="ac-gn-bag-small"
          >
            <div className="ac-gn-bag-wrapper">
              <a
                className="ac-gn-link ac-gn-link-bag"
                href="#"
              >
                <span className="ac-gn-link-text">Shopping Bag</span>
              </a>
              <span
                className="ac-gn-bag-badge"
              >
                <span className="ac-gn-bag-badge-separator"></span>
                <span className="ac-gn-bag-badge-number"></span>
                <span className="ac-gn-bag-badge-unit">+</span>
              </span>
            </div>
            <span className="ac-gn-bagview-caret ac-gn-bagview-caret-large"></span>
          </li>
        </ul>
    )
}

export default TopMenu