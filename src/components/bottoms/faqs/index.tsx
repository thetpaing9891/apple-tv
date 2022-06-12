import Accordion from "@/components/accordion";

const FAQs = () => {
  return (
    <section
      className="section section-faq theme-light"
      data-analytics-section-engagement="name:faq"
    >
      <div className="section-content">
        <div className="column large-centered large-10 medium-9 small-12">
          <h2 className="typography-app-headline">Questions? Answers.</h2>
        </div>

        <ul id="accordion" className="accordion" data-accordion role="list">
          <Accordion title="What is Apple TV+?">
            <p className="typography-body">
              Apple&nbsp;TV+ is a streaming service featuring Apple Originals
              &mdash; award-winning series, compelling dramas, groundbreaking
              documentaries, kids&rsquo; entertainment, comedies, and more
              &mdash; with new Apple Originals added every month.
            </p>
          </Accordion>

          <Accordion title="How can I watch it?">
            <p className="typography-body">
              Watch Apple&nbsp;TV+ on the Apple&nbsp;TV&nbsp;app, which is
              already on your favorite Apple devices. Just open the app, click
              or tap Apple&nbsp;TV+, and enjoy the shows and movies. You can
              also watch Apple&nbsp;TV+ on streaming platforms, popular smart
              TVs, and AirPlay-enabled TVs with the Apple&nbsp;TV&nbsp;app
              &mdash; or watch online at{" "}
              <a
                href="https://tv.apple.com/"
                data-analytics-exit-link
                data-analytics-title="watch online at tv.apple.com"
              >
                tv.apple.com
              </a>
              .
            </p>
            <a
              href="https://support.apple.com/guide/tvplus/welcome/web"
              data-analytics-title="How to watch Apple TV+"
              aria-label="How to watch Apple TV+"
              className="icon-wrapper typography-intro"
              data-analytics-exit-link
            >
              <span className="icon-copy">Learn more</span>
              <span className="icon icon-after more"></span>
            </a>
          </Accordion>

          <Accordion title="What does it cost?">
            <p className="typography-body">
              That all depends on which offer you choose. (1){" "}
              <strong>
                If you buy an Apple device, Apple&nbsp;TV+ is included free for
                3&nbsp;months.
              </strong>
              <sup className="footnote footnote-number">
                <a href="#footnote-2" aria-label="Footnote 1">
                  1
                </a>
              </sup>{" "}
              (2) A monthly subscription is just $4.99 per month after a free
              seven-day trial.
              <sup className="footnote footnote-number">
                <a href="#footnote-3" aria-label="Footnote 2">
                  2
                </a>
              </sup>
              <br />
              (3) Apple&nbsp;TV+ is included in{" "}
              <a
                href="apple-one.html"
                data-analytics-exit-link
                data-analytics-title="apple tv+ on apple one"
              >
                Apple One
              </a>
              , which bundles up to five other Apple services into a single
              monthly subscription. Apple&nbsp;One plans start at $14.95 per
              month. (4) The Apple&nbsp;Music Student Plan comes with a free
              subscription to Apple&nbsp;TV+.
              <sup className="footnote footnote-number">
                <a href="#footnote-4" aria-label="Footnote 3">
                  3
                </a>
              </sup>
              Friday&nbsp;Night&nbsp;Baseball is free for a limited time &mdash;
              an Apple&nbsp;TV+ subscription is not required.
            </p>
          </Accordion>

          <Accordion title="Can I share with my family?">
            <p className="typography-body">
              Of course. Apple TV+ lets you share your subscription with up to
              five family members.
            </p>
          </Accordion>

          <Accordion title=" Are there commercials? And can I watch on demand?">
            <p className="typography-body">
              Apple Originals are always commercial-free. Some shows release all
              episodes at once. Other shows add new episodes every Friday. You
              can then watch them on demand anytime, anywhere.
              Friday&nbsp;Night&nbsp;Baseball may include commercials depending
              on location or region.
            </p>
          </Accordion>

          <Accordion title="Do I need an Apple TV 4K?">
            <p className="typography-body">
              No, you don&rsquo;t. While Apple&nbsp;TV&nbsp;4K &mdash; with 4K
              HDR and Dolby Atmos sound &mdash; is the ultimate way to
              experience Apple&nbsp;TV+, the original shows and movies on
              Apple&nbsp;TV+ are always available on the Apple&nbsp;TV app on
              your favorite devices.
            </p>
            <a
              href="https://support.apple.com/guide/tvplus/welcome/web"
              className="icon-wrapper typography-intro"
              data-analytics-exit-link
            >
              <span className="icon-copy">See all supported devices</span>
              <span className="icon icon-after more"></span>
            </a>
          </Accordion>

          <Accordion title="Can I download to watch offline?">
            <p className="typography-body">
              Absolutely. Download your favorite Apple&nbsp;Originals to your
              Apple device and watch them anywhere, anytime without a Wi-Fi
              connection.
            </p>
          </Accordion>
        </ul>
      </div>
    </section>
  );
};

export default FAQs;
