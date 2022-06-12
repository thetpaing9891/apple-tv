import Menu from "../menu";
import Link from "next/link";

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
              <Link href="/" data-analytics-title="product index">
                Apple TV+
              </Link>
            </div>
            <div className="ac-ln-menu">
              <div className="ac-ln-actions ac-ln-actions-center">
                <div className="ac-ln-action ac-ln-action-button stream-element">
                  <Link className="ac-ln-button" href="/detail">
                    Stream now
                    <span className="ac-ln-action-product"></span>
                  </Link>
                </div>
                <div className="ac-ln-action ac-ln-action-button try-it-free-element">
                  <Link className="ac-ln-button" href="/detail">
                    Try it free
                    <span className="ac-ln-action-product"></span>
                  </Link>
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
