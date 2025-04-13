import React, { useState, useEffect } from "react";
import styles from "./BackToTop.module.css";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling down 300px
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.backToTop} ${show ? styles.show : ""}`}
      onClick={handleClick}
    >
      ↑ Top
    </button>
  );
};

export default BackToTop;
