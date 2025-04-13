import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Hero = () => {
  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Hi, I'm Anton Gole
        </motion.h1>
        <motion.h2
          className={styles.tagline}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Thesis Student &amp; Coding Enthusiast
        </motion.h2>
        <motion.p
          className={styles.description}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          I'm a 5th year Computer Science and Engineering student at Chalmers
          University of Technology currently pursuing a Master's degree in
          Algorithms, Languages and Logic. Currently doing my Master Thesis at
          Volvo Cars, investigating the impact of high fidelity on automotive
          decision-making systems. Reach out if you would like to learn more!
        </motion.p>
        <motion.a
          href="mailto:antongole@hotmail.com"
          className={styles.contactBtn}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Contact Me
        </motion.a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </motion.section>
  );
};

export default Hero;
