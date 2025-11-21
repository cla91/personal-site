import styles from "@/components/sections/About/About.module.scss";
import profilePhoto from "@/assets/images/hero-image.webp";

export default function About() {
  return (
    <section
      id="chi-sono"
      className={`container navigableSection ${styles.about}`}
    >
      <h2>Chi sono</h2>
      <div className={styles.wrapper}>
        <img
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
