import Menu from "../menu";


const Header = () => {
  return (
    <>
      <Menu />
      <nav
        id="ac-localnav"
        className="no-js ac-localnav-scrim ac-localnav-dark"
      >
        <div className="ac-ln-wrapper">
          <div className="ac-ln-background"></div>
          <div className="ac-ln-content">
            <div className="ac-ln-title">
              <a href="/" data-analytics-title="product index">
                Apple TV+
              </a>
            </div>
            <div className="ac-ln-menu">
              <div className="ac-ln-actions ac-ln-actions-center">
                <div className="ac-ln-action ac-ln-action-button stream-element">
                  <a className="ac-ln-button" href="/detail">
                    Stream now
                    <span className="ac-ln-action-product"></span>
                  </a>
                </div>
                <div className="ac-ln-action ac-ln-action-button try-it-free-element">
                  <a className="ac-ln-button" href="/detail">
                    Try it free
                    <span className="ac-ln-action-product"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
