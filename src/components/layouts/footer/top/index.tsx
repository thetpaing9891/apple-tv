import React from "react";
import Link from "next/link";

const FooterTop = () => {
  return (
    <>
      <h2 className="ac-gf-label" id="ac-gf-label">
        Apple Footer
      </h2>
      <section className="ac-gf-sosumi" aria-label="Footnotes">
        <ul>
          <li id="footnote-1">
            <small>*</small> The Apple&nbsp;One free trial includes only
            services that you are not currently using through a free trial or a
            subscription. Plan automatically renews after trial until cancelled.
            Restrictions and other terms apply.
          </li>
        </ul>
        <ol>
          <li id="footnote-2">
            $4.99/month after free trial. Only one offer per Apple&nbsp;ID and
            only one offer per family if you&rsquo;re part of a
            Family&nbsp;Sharing group, regardless of the number of devices you
            or your family purchases. This offer is not available if you or your
            Family have previously accepted an Apple&nbsp;TV+ one year free
            offer. Offer good for 3 months after eligible device activation.
            Plan automatically renews until cancelled. Restrictions and other{" "}
            <Link href="promo.html">terms</Link> apply.
          </li>
          <li id="footnote-3">
            One subscription per Family&nbsp;Sharing group. Plan automatically
            renews until cancelled.
          </li>
          <li id="footnote-4">
            Limited-time offer; offer may end at any time. Free Apple&nbsp;TV+
            access for students ends when you no longer qualify or do not renew
            your Apple&nbsp;Music Student subscription. Offer good for verified
            college students only and does not extend to a Family&nbsp;Sharing
            group.
          </li>
        </ol>
        <ul>
          <li>
            Major League Baseball trademarks and copyrights are used with
            permission of MLB Advanced Media, L.P. All rights reserved.
          </li>
        </ul>
      </section>
      <nav
        className="ac-gf-breadcrumbs"
        aria-label="Breadcrumbs"
        role="navigation"
      >
        <Link href="/detail" className="home ac-gf-breadcrumbs-home">
          <span className="ac-gf-breadcrumbs-home-icon" aria-hidden="true">
            &#63743;
          </span>
          <span className="ac-gf-breadcrumbs-home-label">Apple</span>
          <span className="ac-gf-breadcrumbs-home-chevron"></span>
          <span className="ac-gf-breadcrumbs-home-mask"></span>
        </Link>
        <div className="ac-gf-breadcrumbs-path">
          <ol
            className="ac-gf-breadcrumbs-list"
            vocab="http://schema.org/"
            typeof="BreadcrumbList"
          >
            <li
              className="ac-gf-breadcrumbs-item"
              property="itemListElement"
              typeof="ListItem"
            >
              <Link
                className="ac-gf-breadcrumbs-link"
                href="/detail"
                property="item"
                typeof="WebPage"
              >
                <span property="name">Only on Apple</span>
              </Link>
              <meta property="position" content="1" />
            </li>
            <li
              className="ac-gf-breadcrumbs-item"
              property="itemListElement"
              typeof="ListItem"
            >
              <span property="name">Apple&nbsp;TV+</span>
              <meta property="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
};

export default FooterTop;
