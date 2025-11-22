import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/sections/ProjectCard/ProjectCard";
import { useState } from "react";
import styles from "@/components/sections/Projects/Projects.module.scss";
import { ChevronDown } from "lucide-react";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";

export default function Projects() {
  const [showMore, setShowMore] = useState<boolean>(false);
  const titleRef = useRevealOnScroll<HTMLHeadingElement>();
  return (
    <section
      id="progetti"
      className={`container navigableSection ${styles.projectsSection}`}
    >
      <h2 ref={titleRef}>Progetti</h2>
      <ul className={styles.projectsList}>
        {projects.map((project) => {
          if (showMore) {
            return (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            );
          } else {
            return (
              project.featured && (
                <li key={project.id}>
                  <ProjectCard project={project} />
                </li>
              )
            );
          }
        })}
      </ul>
      <button
        className={styles.showMoreBtn}
        aria-pressed={showMore}
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "Mostra Meno" : "Mostra più"}
        <ChevronDown
          className={`${styles.icon} ${showMore ? styles.rotate : ""}`}
        />
      </button>
    </section>
  );
}
