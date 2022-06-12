import FAQs from "./faqs";
import BottomTop from "./top";
import Link from "next/link";

const PageBottom = () => {
  return (
    <>
      <BottomTop />
      <FAQs />
      <section
        className="section section-apple-one theme-light"
        data-analytics-section-engagement="name:apple one"
      >
        <div className="section-content">
          <div className="figure-wrapper large-6 small-12">
            <figure className="tile-image"></figure>
          </div>
          <div className="tile-copy-container large-6 small-12">
            <div className="tile-copy-wrapper">
              <h2 className="tile-logo">
                <span className="visuallyhidden">Apple One</span>
              </h2>
              <p className="tile-headline typography-router-headline">
                <span className="lg-wrap">Bundle Apple&nbsp;TV+</span>{" "}
                <br className="small" />
                with
                <br className="large" />
                <br className="medium" /> up to five other great&nbsp;services.
                <br />
                And enjoy more for less.
              </p>
              <a
                href="#"
                className="icon-wrapper button button-elevated button-custom-dark"
              >
                <span className="icon-copy">
                  Try Apple&nbsp;One free
                  <span className="footnote footnote-supglyph">*</span>
                </span>
              </a>
              <span className="large-hide"></span>
              <a href="#" className="icon-wrapper typography-router-cta">
                <span className="icon-copy">Learn more</span>
                <span className="icon icon-after more"></span>
              </a>{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-routers theme-light">
        <div className="section-content">
          <div
            className="student-plan-router"
            data-analytics-section-engagement="name:student plan"
          >
            <div className="row">
              <div className="copy-container column large-5 large-offset-1 medium-4 small-12 small-offset-0 small-centered">
                <h3 className="student-plan-icon">
                  <span className="visuallyhidden"></span>
                </h3>
                <p className="typography-router-headline">
                  The&nbsp;Apple&nbsp;Music Student <br className="small" />
                  Plan comes with <br className="small" />
                  Apple&nbsp;TV+ for&nbsp;free.
                  <sup className="footnote footnote-number">
                    <a href="#footnote-4" aria-label="Footnote 3">
                      3
                    </a>
                  </sup>
                </p>
                <a
                  href="#"
                  className="button button-elevated button-custom-dark"
                >
                  Try Apple Music free
                </a>
              </div>
              <div className="image-wrapper column large-6 medium-7 small-12">
                <figure
                  className="image-student-plan"
                  data-anim-lazy-image
                ></figure>
              </div>
            </div>
          </div>
          <div className="lower-container">
            <div
              className="tv-4k-router"
              data-analytics-section-engagement="name:apple tv 4k"
            >
              <figure
                className="image-apple-tv-4k"
                data-anim-lazy-image
              ></figure>
              <div className="copy-container">
                <h3 className="tv-4k-icon">
                  <span className="visuallyhidden">Apple&nbsp;TV&nbsp;4K</span>
                </h3>
                <p className="typography-router-headline">
                  A higher <br className="small" />
                  definition of TV.
                </p>
                <div className="typography-router-cta large-12 large-centered">
                  <ul className="links-inline">
                    <li>
                      <a href="#" className="icon-wrapper button">
                        <span className="icon-copy">Buy</span>
                      </a>{" "}
                    </li>
                    <li>
                      <a href="#" className="icon-wrapper learn-more">
                        <span className="icon-copy">Learn more</span>
                        <span className="icon icon-after more"></span>
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="airplay-router"
              data-analytics-section-engagement="name:airplay"
            >
              <figure
                className="image-router-airplay"
                data-anim-lazy-image
              ></figure>
              <div className="copy-container">
                <h3 className="typography-router-eyebrow icon">AirPlay</h3>
                <p className="typography-router-headline headline">
                  Bring Apple&nbsp;TV+ to <br />a screen near you.
                </p>
                <a
                  href="#"
                  className="icon-wrapper typography-router-cta learn-more"
                >
                  <span className="icon-copy">Learn more</span>
                  <span className="icon icon-after more"></span>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PageBottom;
