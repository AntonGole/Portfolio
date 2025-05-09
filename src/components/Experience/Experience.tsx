import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section
      className={styles.container}
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            const isReact = skill.imageSrc.includes("react.png");
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                    className={isReact ? styles.rotateImage : ""}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.companyItem}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  </div>
                </div>
                <ul className={styles.textContainer}>
                  {historyItem.experiences.map((experience, id) => {
                    return <li key={id}>{experience}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
};

export default Experience;
