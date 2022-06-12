const Ribbon = () => {
  return (
    <div className="ribbon ribbon-blue-to-default">
      <div className="ribbon-drop-wrapper">
        <div className="ribbon-content-wrapper">
          <div className="ribbon-content row">
            <div
              className="column large-12 large-centered"
              data-analytics-activitymap-region-id="ribbon"
            >
              <p>
                Friday&nbsp;Night&nbsp;Baseball, now streaming on
                Apple&nbsp;TV+.
                <a
                 href="/detail"
                  className="icon-wrapper icon-wrapper ribbon-link"
                >
                  <span className="icon-copy">Learn more</span>
                  <span className="icon icon-after more"></span>
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
