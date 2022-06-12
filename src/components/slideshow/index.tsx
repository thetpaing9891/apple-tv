import { Slide } from "react-slideshow-image";
import MarqueeSection from "@/components/marquee";

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true,
    pauseOnHover: true,
    prevArrow: <div className="paddlenav"><button className="paddlenav-arrow paddlenav-arrow-previous" aria-label="Previous"></button></div>,
    nextArrow: <div className="paddlenav"><button className="paddlenav-arrow paddlenav-arrow-next" aria-label="Next" data-analytics-title="paddlenav-next"></button></div>,
    onChange: (oldIndex: any, newIndex: any) => {
      //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    },
};

const SlidShow = (props: any) => {
    return (
        <section className="section section-shows">
        <div data-component-list="DynamicContent">
          <div className="featured-show-gallery">
            <div className="sticky-wrapper" style={{marginTop: 10}}>
              <div className="inner with-paddlenav">

              <div className="slide-container">
                <Slide {...properties} easing="ease">
                  {props.slideData.map((data : any, index : number) => (
                    <a
                      href="/detail"
                      className="slide-item feature theme-dark each-slide"
                      key={index}
                    >
                      <div className="inner fill">
                        <figure
                          className="art"
                          style={{ backgroundImage: `url(${data.image})` }}
                        ></figure>
                        <div className="gradient fill"></div>
                        <div
                          className="info"
                          style={{ transform: "translateX(0px)" }}
                        >
                          <p className="typography-shows-eyebrow coming-soon">
                            {data.comingSoon}
                          </p>
                          <h3 className="logo">
                            <span className="visually-hidden">
                              {data.title}
                            </span>
                          </h3>
                        </div>
                        <div className="info-bottom">
                          <p className="typography-shows-genre">
                            {data.description}
                          </p>
                          <div>
                            <button className="custom-button small-solid icon icon-after icon-playsolid">
                              Stream now
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </Slide>
                </div>


              </div>
            </div>
          </div>
          <MarqueeSection data={props.data} />
        </div>
      </section>
    )
}
export default SlidShow;