import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const BottomTop = () => {
  return (
    <section
      className="section section-apple-tv-app theme-light"
      data-analytics-section-engagement="name:apple tv app"
    >
      <div className="section-content">
        <div className="lockup" id="devices">
          <figure
            className="image-apple-tv-app-icon"
            data-anim-lazy-image
          ></figure>
          <h2 className="typography-app-headline">
            Watch Apple TV+ anywhere <br className="large" />
            on the Apple&nbsp;TV&nbsp;app.
          </h2>
          <p className="typography-body large-centered large-7 medium-12 small-11">
            Find the Apple&nbsp;TV&nbsp;app on your favorite Apple devices.{" "}
            <br className="large" />
            <br className="medium" />
            Or&nbsp;watch Apple&nbsp;TV+ online at <a href="#">tv.apple.com</a>.
          </p>
        </div>
        <div
          className="internal"
          data-anim-tween-0='{"start":"t-90vh","cssClass":"build-in","disabledWhen":"prefers-reduced-motion"}'
        >
          <motion.div
            className="logo icon-apple-tv col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-apple-tv"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline typography-device-names">
                Apple TV
              </h3>
            </div>
          </motion.div>

          <motion.div
            className="logo icon-iphone col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-iphone"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline typography-device-names">
                iPhone
              </h3>
            </div>
          </motion.div>
          <motion.div
            className="logo icon-ipad col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-ipad"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline typography-device-names">iPad</h3>
            </div>
          </motion.div>
          <motion.div
            className="logo icon-mac col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-mac"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline typography-device-names">Mac</h3>
            </div>
          </motion.div>
          <motion.div
            className="logo icon-airplay col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-airplay"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline typography-device-names">
                AirPlay
              </h3>
            </div>
          </motion.div>
        </div>
        <div className="copy-lockup">
          <p className="typography-offer-headline subhead large-centered large-5 medium-6 small-11">
            See it on your smart&nbsp;TV or&nbsp;streaming&nbsp;device.
          </p>
          <ul className="links-stacked">
            <li>
              <a href="#" className="icon-wrapper typography-body">
                <span className="icon-copy">Set up your device</span>
                <span className="icon icon-after more"></span>
              </a>{" "}
            </li>
            <li>
              <a href="#" className="icon-wrapper typography-body">
                <span className="icon-copy">Explore compatible devices</span>
                <span className="icon icon-after more"></span>
              </a>{" "}
            </li>
          </ul>
        </div>
        <div
          className="external"
          data-anim-tween-0='{"start":"t-90vh","cssClass":"build-in","disabledWhen":"prefers-reduced-motion"}'
        >
          <motion.div
            className="logo icon-samsung col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-samsung"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline visuallyhidden">
                Samsung Smart TV
              </h3>
            </div>
          </motion.div>
          <motion.div
            className="logo icon-lg col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-lg"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline visuallyhidden">LG Smart TV</h3>
            </div>
          </motion.div>

          <motion.div
            className="logo icon-vizio col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-vizio"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline visuallyhidden">Vizio</h3>
            </div>
          </motion.div>
          <motion.div
            className="logo icon-sony col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-sony"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline visuallyhidden">Sony</h3>
            </div>
          </motion.div>
          <motion.div
            className="logo icon-xfinity col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-xfinity"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline visuallyhidden"></h3>
            </div>
          </motion.div>

          <motion.div
            className="logo icon-roku col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-roku"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline visuallyhidden">Roku</h3>
            </div>
          </motion.div>
          <motion.div
            className="logo icon-firetv col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-firetv"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline visuallyhidden">
                Amazon Fire Tv
              </h3>
            </div>
          </motion.div>

          <motion.div
            className="logo icon-google-tv col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-google-tv"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline visuallyhidden">Google TV</h3>
            </div>
          </motion.div>

          <motion.div
            className="logo icon-playstation col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-playstation"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline visuallyhidden">PlayStation</h3>
            </div>
          </motion.div>

          <motion.div
            className="logo icon-xbox col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="icon-wrapper">
              <div
                className="feature-icon image-icon-xbox"
                data-anim-lazy-image
              ></div>
              <h3 className="feature-headline visuallyhidden">XBOX</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BottomTop;
