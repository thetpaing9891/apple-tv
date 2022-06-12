const FooterBottom = () => {
  return (
    <section className="ac-gf-footer">
      <div className="ac-gf-footer-shop" x-ms-format-detection="none">
        More ways to shop:{" "}
        <a href="/detail" data-analytics-title="find an apple store">
          Find an Apple Store
        </a>{" "}
        or <a href="/detail">other retailer</a> near you.{" "}
        <span className="nowrap">Or call 1-800-MY-APPLE.</span>
      </div>
      <div className="ac-gf-footer-locale">
        <a className="ac-gf-footer-locale-link" href="/detail">
          United States
        </a>
      </div>
      <div className="ac-gf-footer-legal">
        <div className="ac-gf-footer-legal-copyright">
          Copyright &copy; 2022 Apple Inc. All rights reserved.
        </div>
        <div className="ac-gf-footer-legal-links">
          <a className="ac-gf-footer-legal-link" href="/detail">
            Privacy Policy
          </a>
          <a className="ac-gf-footer-legal-link" href="/detail">
            Terms of Use
          </a>
          <a className="ac-gf-footer-legal-link" href="/detail">
            Sales and Refunds
          </a>
          <a className="ac-gf-footer-legal-link" href="/detail">
            Legal
          </a>
          <a className="ac-gf-footer-legal-link" href="/detail">
            Site Map
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
