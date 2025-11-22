import styles from "@/components/sections/Contacts/Contacts.module.scss";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";

export default function Contacts() {
  const titleRef = useRevealOnScroll<HTMLHeadingElement>();
  return (
    <section id="contatti" className={`container navigableSection`}>
      <h2 ref={titleRef}>Contatti</h2>
      <p className={styles.intro}>
        Per collaborazioni o domande, puoi contattarmi tramite questi canali.
      </p>

      <ul className={styles.contactsList}>
        <li>
          <h3>Email</h3>
          <a href="mailto:cclaudia0691@gmail.com">cclaudia0691@gmail.com</a>
        </li>
        <li>
          <h3>GitHub</h3>
          <a href="https://github.com/cla91">github.com/cla91</a>
        </li>
        <li>
          <h3>LinkedIn</h3>
          <a href="https://linkedin.com/in/claudia-cantiani">
            linkedin.com/in/claudia-cantiani
          </a>
        </li>
      </ul>
    </section>
  );
}
