import styles from "@/components/sections/Hero/Hero.module.scss";
import Cta from "@/components/ui/Cta/Cta";

export default function Hero() {
  return (
    <section className={`${styles.hero} container`}>
      <h1 className={styles.title}>
        <span className={styles.label}>Ciao, sono </span>
        <span className={styles.name}>Claudia Cantiani</span>
      </h1>
      <h2 className={styles.role}>Frontend Developer</h2>

      <p className={styles.desc}>
        Sto crescendo come sviluppatrice un progetto alla volta, concentrandomi
        su interfacce accessibili e curate, componenti ben strutturati e
        un’esperienza utente semplice e leggibile.
      </p>
      <Cta to="#progetti" variant="primary">
        Guarda i miei progetti
      </Cta>
    </section>
  );
}
