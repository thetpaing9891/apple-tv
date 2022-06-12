const StickyVideo = (props: any) => {
  console.log("Opacity ", props.opacity);
  return (
    <div className="sticky-wrapper">
      <div className="inner mediaobject-enhanced">
        <figure className="poster-image fill bg-cover bg-top bg-image-hero-startframe"></figure>
        <figure className="static-image fill bg-cover bg-top bg-image-hero-startframe"></figure>
        <div
          className="scrim fill will-change-o"
          style={{
            opacity: `${props.opacity}`,
            transition:
              "opacity 1200ms ease-out, transform 600ms ease-out, visibility 1200ms ease-out",
          }}
        ></div>
        <div
          className="controls controls-lower"
          data-anim-classname='{"start":"0", "end":"a0b - 50vh", "cssClass": "will-change", "toggle":"true", "anchors":[".section-value-props"]}'
          data-anim-classname-1='{"start":"a0b - 350px","cssClass":"fade-out","toggle":"true","anchors":[".section-content"]}'
        >
          <div className="controls controls-lower mediaobject-enhanced will-change"></div>
          <button className="control pause-icon"></button>
          <button className="control play-icon"></button>
        </div>
        <video autoPlay muted loop className="inline-video">
          <source
            src="https://www.apple.com/105/media/us/apple-tv-plus/2022/755f2d0d-659f-44e2-a345-57305fabfdfa/supercut/large.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
};

export default StickyVideo;
