import styles from "@/components/sections/About/About.module.scss";
import profilePhoto from "@/assets/images/profile-photo.webp";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";

export default function About() {
  const titleRef = useRevealOnScroll<HTMLHeadingElement>();
  const imgRef = useRevealOnScroll<HTMLImageElement>();
  return (
    <section
      id="chi-sono"
      className={`container navigableSection ${styles.about}`}
    >
      <h2 ref={titleRef}>Chi sono</h2>
      <div className={styles.wrapper}>
        <img
          ref={imgRef}
          src={profilePhoto}
          alt="Foto di Claudia Cantiani"
          className={styles.photo}
        />
        <div className={styles.text}>
          <p>
            Sono una Frontend Developer con una forte attenzione alla pulizia
            del codice, alla struttura dei componenti e alla leggibilità
            dell’interfaccia. Mi piace costruire esperienze semplici, curate e
            accessibili, che mettano davvero l’utente al centro.
          </p>
          <p>
            Sono precisa, autonoma e adoro capire perché qualcosa funziona — non
            solo farla funzionare. Mi piace migliorare ogni progetto un
            dettaglio alla volta, trovando sempre il modo di renderlo più
            chiaro, più pulito e più intuitivo da usare.
          </p>
          <p>
            Quando non scrivo codice, amo stare all’aria aperta, fare lunghe
            passeggiate con il mio cane e perdermi tra film e documentari
            naturalistici.
          </p>
        </div>
      </div>
    </section>
  );
}
