import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <ProjectCard
              title={project.title}
              imageSrc={project.imageSrc}
              description={project.description}
              skills={project.skills}
              demo={project.demo}
              source={project.source}
              key={id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
