import FooterBottom from "./bottom";
import FooterNav from "./navigation";
import FooterTop from "./top";

const Footer = () => {
  return (
    <footer
      id="ac-globalfooter"
      className="no-js"
      lang="en-US"
      dir="ltr"
      data-analytics-region="global footer"
      role="contentinfo"
      aria-labelledby="ac-gf-label"
    >
      <div className="ac-gf-content">
        <FooterTop />
        <FooterNav />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
