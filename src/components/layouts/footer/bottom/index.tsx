import Link from "next/link";

const FooterBottom = () => {
  return (
    <section className="ac-gf-footer">
      <div className="ac-gf-footer-shop" x-ms-format-detection="none">
        More ways to shop:{" "}
        <Link href="/detail" data-analytics-title="find an apple store">
          Find an Apple Store
        </Link>{" "}
        or <Link href="/detail">other retailer</Link> near you.{" "}
        <span className="nowrap">Or call 1-800-MY-APPLE.</span>
      </div>
      <div className="ac-gf-footer-locale">
        <Link className="ac-gf-footer-locale-link" href="/detail">
          United States
        </Link>
      </div>
      <div className="ac-gf-footer-legal">
        <div className="ac-gf-footer-legal-copyright">
          Copyright &copy; 2022 Apple Inc. All rights reserved.
        </div>
        <div className="ac-gf-footer-legal-links">
          <Link className="ac-gf-footer-legal-link" href="/detail">
            Privacy Policy
          </Link>
          <Link className="ac-gf-footer-legal-link" href="/detail">
            Terms of Use
          </Link>
          <Link className="ac-gf-footer-legal-link" href="/detail">
            Sales and Refunds
          </Link>
          <Link className="ac-gf-footer-legal-link" href="/detail">
            Legal
          </Link>
          <Link className="ac-gf-footer-legal-link" href="/detail">
            Site Map
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
