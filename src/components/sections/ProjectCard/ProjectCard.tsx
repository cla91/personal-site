import type { Project } from "@/data/projectsData";
import { Monitor } from "lucide-react";
import GithubIcon from "@/components/ui/icon/GithubIcon/GithubIcon";
import styles from "@/components/sections/ProjectCard/ProjectCard.module.scss";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, title, longDesc, image, live, repo, technologies } = project;
  return (
    <article id={id} className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{longDesc}</p>

        <ul className={styles.techList}>
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className={styles.linkList}>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <Monitor />
            <span className="sr-only">Vai al sito live</span>
          </a>
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <GithubIcon className={styles.githubIcon} />
            <span className="sr-only">Visualizza il repository</span>
          </a>
        </div>
      </div>
      <img
        className={styles.projectImg}
        src={image}
        alt={`${title} screenshot`}
      />
    </article>
  );
}
