import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = (props: LayoutProps) => {
  const [open, setOpen] = useState(false);
  //toggle accordion function
  let toggleHandler = (e: any) => {
    //switch state
    setOpen(!open);
  };

  const styles = {
    //if open is true, change color of title
    accordionStyle: {
      height: open ? "auto" : "0",
      overFlow: open ? "visible" : "hidden",
      transitionDuration: "400ms",
    },
  };

  return (
    <li
      className={`accordion-item ${open ? "expanded" : "collapsed"}`}
      data-accordion-item="accordion-item-0"
    >
      <h3 className="accordion-title">
        <button
          className="accordion-button"
          data-accordion-trigger
          aria-controls="accordion-item-0-tray"
          id="accordion-item-0-button"
          onClick={toggleHandler}
        >
          <span className="accordion-title-text">{props.title}</span>
          <span className="accordion-icon" data-accordion-icon>
            <MdExpandMore size={40} />
          </span>
        </button>
      </h3>
      <div
        id="accordion-item-0-tray"
        aria-labelledby="accordion-item-0-button"
        className="accordion-tray"
        data-accordion-tray="true"
        style={styles.accordionStyle}
      >
        <div className="accordion-content" data-accordion-content>
          <div className="accordion-content-paragraph">{props.children}</div>
        </div>
      </div>
    </li>
  );
};

export default Accordion;
