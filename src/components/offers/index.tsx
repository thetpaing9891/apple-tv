import Link from "next/link";

const ServiceOffer = (props: any) => {
  const opacity = props.opacity;
  return (
    <section className="section section-offers ">
      <div className="section-content xl-expanded">
        <div className="row">
          <div
            className={`offer column large-4 small-12 has-fade will-change ${
              opacity > 1 && "fade-in"
            }`}
          >
            <h2 className="typography-offer-eyebrow">Buy an Apple device</h2>
            <h3 className="typography-offer-headline" aria-label="">
              3&nbsp;months free.
            </h3>
            <p className="typography-body offer-copy large-10 medium-11  small-12">
              Apple&nbsp;TV+ is included for 3&nbsp;months when you purchase an
              Apple device and redeem the offer within&nbsp;90&nbsp;days.
              <sup className="footnote footnote-number">
                <a href="#footnote-2" aria-label="Footnote 1">
                  1
                </a>
              </sup>
            </p>
            <a href="#" className="button button-elevated button-custom">
              Check eligibility
            </a>
          </div>
          <div
            className={`offer column large-4 small-12 has-fade will-change ${
              opacity > 1 && "fade-in"
            }`}
          >
            <h2 className="typography-offer-eyebrow">Free 7-day trial</h2>
            <h3 className="typography-offer-headline">$4.99/mo.</h3>
            <p className="typography-body offer-copy large-11 medium-11  small-12">
              A monthly subscription is just $4.99 per month after a free 7-day
              trial. Share Apple&nbsp;TV+ with your family.
              <sup className="footnote footnote-number">
                <a href="#">2</a>
              </sup>
            </p>
            <a href="#" className="button button-elevated button-custom">
              Try it free
            </a>
          </div>
          <div
            className={`offer column large-4 small-12 has-fade will-change ${
              opacity > 1 && "fade-in"
            }`}
          >
            <h2 className="typography-offer-eyebrow">
              Free 1&#8209;month trial
            </h2>
            <h3 className="typography-offer-headline" aria-label="">
              Apple&nbsp;One
            </h3>
            <p className="typography-body offer-copy large-11 medium-11  small-12">
              Bundle Apple&nbsp;TV+ with up to five other great services for one
              low monthly price. And enjoy more for&nbsp;less.{" "}
              <a href="#" className="more">
                Learn more
              </a>
            </p>
            <a href="#" className="button button-elevated button-custom">
              Try Apple&nbsp;One free
              <span className="footnote footnote-supglyph">*</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceOffer;
