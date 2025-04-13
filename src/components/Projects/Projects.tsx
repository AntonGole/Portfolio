import React from "react";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: id * 0.1,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectCard
              title={project.title}
              imageSrc={project.imageSrc}
              description={project.description}
              skills={project.skills}
              source={project.source}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
