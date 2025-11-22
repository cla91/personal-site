import styles from "@/components/sections/Skills/Skills.module.scss";
import { skills } from "@/data/skillsData";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";

export default function Skills() {
  const { hardSkills, softSkills, studying } = skills;
  const titleRef = useRevealOnScroll<HTMLHeadingElement>();
  return (
    <section
      id="skills"
      className={`container navigableSection ${styles.skills}`}
    >
      <h2 ref={titleRef}>Skills</h2>
      <p className={styles.intro}>
        Le tecnologie e le capacità su cui costruisco la mia base da Frontend
        Developer.
      </p>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h3>Hard Skills</h3>
          <ul>
            {hardSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.block}>
          <h3>Soft Skills</h3>
          <ul>
            {softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.block}>
          <h3>In studio ora</h3>
          <ul>
            {studying.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
