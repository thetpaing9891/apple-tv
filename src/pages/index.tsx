import React, { useState, useEffect, useCallback } from "react";
import PageBottom from "@/components/bottoms";
import type { NextPage } from "next";
import Layout from "@/components/layouts";
import Meta from "@/components/layouts/meta";
import Parallax from "@/components/parallex";
import Ribbon from "@/components/ribbon";
import StickyVideo from "@/components/stickyvideo";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceOffer from "@/components/offers";
import ValuesSection from "@/components/values";
import SlideShow from "@/components/slideshow";


import data from "@/mocks/marqeeData.json";
import slideData from "@/mocks/sliderData.json";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const h2Variant = {
  visible: { opacity: 0.999, transform: "translateY(0)" },
  hidden: { opacity: 0.1 },
};




const Home: NextPage = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [opacity, setOpacity] = useState(0);

  const onScroll = useCallback((event: any) => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    const newScrollHeight = window.scrollY / 100;
    setOpacity(Math.min(newScrollHeight, 10));
  }, []);

  

  React.useLayoutEffect = React.useEffect;
  React.useLayoutEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }

    //add eventlistener to window
      window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
  }, [control, inView]);


  return (
    <Layout>
      <Meta />

      <section className="section section-hero">
        <Ribbon />
        <StickyVideo opacity={opacity} />
        <Parallax>
          <motion.div
            className="section-content xl-expanded"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <div className="lockup">
              <h1 className="visuallyhidden">Apple TV+</h1>
              <motion.h2
                className="typography-hero-headline"
                ref={ref}
                variants={h2Variant}
                initial="hidden"
                animate={control}
              >
                <p>
                  All Apple Originals.
                  <br className="large" />
                  Only on&nbsp;Apple&nbsp;TV+.
                </p>
              </motion.h2>
              <div
                className="cta-wrapper"
                style={{ opacity: 0.999, transform: "translateY(0)" }}
              >
                <a
                  href="#"
                  className="icon-wrapper cta button button-super button-custom small-solid watch-cta"
                >
                  <span className="icon-copy">Stream now</span>
                  <span className="icon icon-after none"></span>
                </a>{" "}
                <a
                  href="#"
                  className="icon-wrapper cta button button-super button-custom small-solid try-it-free-cta"
                >
                  <span className="icon-copy">Try it free</span>
                  <span className="icon icon-after none"></span>
                </a>{" "}
              </div>
              <div
                className="watch-on-cta-wrapper"
                style={{ opacity: 0.999, transform: "translateY(0)" }}
              >
                <p className="watch-on-cta typography-tout">
                  Watch on the{" "}
                  <span aria-hidden="true" className="image-hero-icon"></span>{" "}
                  app
                </p>
              </div>
            </div>
          </motion.div>
        </Parallax>
      </section>

      <ValuesSection opacity={opacity} />

      <ServiceOffer opacity={opacity} />

      <Parallax>
        <SlideShow slideData={slideData} data={data}/>
      </Parallax>

      <PageBottom />
    </Layout>
  );
};

export default Home;
