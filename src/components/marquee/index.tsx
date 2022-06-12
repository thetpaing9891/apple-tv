import Marquee from "react-fast-marquee";

const MarqueeSection = (props: any) => {
  return (
    <>
      <div className="show-marquee will-change-o">
        <Marquee speed={25} pauseOnHover={true} gradientWidth={0}>
          <ul>
            {props.data.map((item: any) => (
              <li
                className="tv-movie"
                key={item.name}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <a className="fill" href="/detail" target="_blank">
                  <h4 aria-hidden="true">{item.name}</h4>
                  <div className="hover fill">
                    <span
                      aria-hidden="true"
                      className="custom-button small-solid"
                    >
                      Stream now
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
      <div className="show-marquee will-change-o">
        <Marquee speed={30} pauseOnHover={true} gradientWidth={0}>
          <ul>
            {props.data.map((item: any) => (
              <li
                className="tv-movie"
                key={item.name}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <a className="fill" href="/detail" target="_blank">
                  <h4 aria-hidden="true">{item.name}</h4>
                  <div className="hover fill">
                    <span
                      aria-hidden="true"
                      className="custom-button small-solid"
                    >
                      Stream now
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </>
  );
};
export default MarqueeSection;
