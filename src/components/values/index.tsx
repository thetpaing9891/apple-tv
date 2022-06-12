const ValuesSection = (props: any) => {
  const opacity = props.opacity;
  return (
    <section className="section section-value-props ">
      <div className="section-content xl-expanded">
        <ul>
          <li
            className={`typography-value-prop has-fade ${
              opacity > 1 ? "fade-in" : "will-change"
            }`}
          >
            New Apple Originals every month.
          </li>
          <li
            className={`typography-value-prop has-fade ${
              opacity > 1 ? "fade-in" : "will-change"
            }`}
          >
            Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
            sticks.
          </li>
          <li
            className={`typography-value-prop has-fade ${
              opacity > 1 ? "fade-in" : "will-change"
            }`}
          >
            Share Apple&nbsp;TV+ with your&nbsp;family.
          </li>
        </ul>
      </div>
    </section>
  );
};
export default ValuesSection;
