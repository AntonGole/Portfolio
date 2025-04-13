import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className={styles.container}
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.aboutText}>
          <p>
            I am a dedicated backend developer with a robust background in
            Computer Science and Engineering. My career has so far taken me
            through large-scale corporate environments, notably at Ericsson,
            where I developed innovative tools for visualizing traffic model
            simulations and improving testing processes by identifying and
            eliminating redundant tests.
          </p>
          <p>
            Currently, I’m working on my Master thesis at Volvo Cars, where I am
            investigating the impact of simulation fidelity on automotive
            decision-making systems. For this thesis, I program mainly using C++
            and Unreal Engine to create high-fidelity simulations.
          </p>
          <p>
            Throughout my career at both Ericsson and Volvo, I have gained
            extensive experience working within Linux environments and using Git
            for efficient version control and collaboration.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
