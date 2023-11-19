import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anton Gole</h1>
        <p className={styles.description}>
          I'm a Master's Student at Chalmers University of Technology with a
          Bachelor's degree in Computer Science and Engineering. I'm currently
          pursuing a Master's degree in Algorithms, Languages and Logic. Reach
          out if you would like to learn more!
        </p>
        <a href="mailto:antongole@hotmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
