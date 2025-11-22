import globalWarmingImg from "@/assets/images/project-global-warming-dashboard.png";
import beetHeartImg from "@/assets/images/project-beet-heart.png";
import planetsImg from "@/assets/images/project-planet-facts-site.png";
import cardFormImg from "@/assets/images/project-interactive-card-details-form.png";
import counterImg from "@/assets/images/project-character-counter.png";

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  live: string;
  repo: string;
  technologies: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "global-warming",
    title: "Global Warming Dashboard",
    shortDesc:
      "Dashboard interattiva per esplorare indicatori sul riscaldamento globale.",
    longDesc:
      "Dashboard interattiva che raccoglie e visualizza indicatori sul riscaldamento globale attraverso grafici, dati aggregati e sezioni tematiche. Ho progettato la UI, implementato l’architettura React e gestito chiamate API con controlli sugli stati di caricamento. Il focus è stato rendere l’esperienza chiara, leggibile e navigabile anche per utenti meno esperti.",
    technologies: [
      "React",
      "Typescript",
      "React router",
      "Chart.js",
      "API",
      "SCSS",
      "Tanstack Query",
    ],
    image: globalWarmingImg,
    live: "https://cla91-global-warming-dashboard.netlify.app/",
    repo: "https://github.com/cla91/global-warming-dashboard",
    featured: true,
  },
  {
    id: "beet-heart",
    title: "Beet Heart",
    shortDesc:
      "UI interattive e chiamate API in un progetto personale orientato allo stile.",
    longDesc:
      "Progetto personale orientato a UI interattive e micro-interazioni. Include componenti custom, animazioni leggere, gestione dello stato e chiamate API per generare contenuti dinamici. Mi sono concentrata su accessibilità, leggibilità del codice e struttura chiara dei componenti.",
    technologies: [
      "React",
      "Javascript",
      "SCSS",
      "React router",
      "API",
      "Netlify Functions",
      "Tanstack Query",
    ],
    image: beetHeartImg,
    live: "https://beetheart.netlify.app/",
    repo: "https://github.com/cla91/beet-heart",
    featured: true,
  },
  {
    id: "planets-fact",
    title: "Planets Fact Site",
    shortDesc: "Sito educativo sui pianeti.",
    longDesc:
      "Sito educativo dedicato ai pianeti, con contenuti informativi, immagini e passaggi tra schede. Ho trasformato un design statico in un’interfaccia completamente responsive, mantenendo coerenza visiva e performance elevate. Il progetto include tab switching, componenti riutilizzabili e ottimizzazione tipografica.",
    technologies: ["React", "Javascript", "SCSS", "React router"],
    image: planetsImg,
    live: "https://cla91-planets-fact-site.netlify.app/",
    repo: "https://github.com/cla91/planets-fact-site",
    featured: true,
  },
  {
    id: "card-form",
    title: "Interactive Card Details Form",
    shortDesc: "Card form reattivo con validazione in tempo reale e UI pulita.",
    longDesc:
      "Form interattivo con validazione in tempo reale e feedback immediato. Ho implementato controlli di input, messaggi di errore chiari, animazioni e un flusso di compilazione intuitivo. Il design responsive garantisce un'esperienza coerente su mobile e desktop.",
    technologies: ["React", "Javascript", "CSS", "React Hook Form"],
    image: cardFormImg,
    live: "https://cla91-interactive-card-details-form.netlify.app/",
    repo: "https://github.com/cla91/interactive-card-details-form",
    featured: false,
  },
  {
    id: "char-counter",
    title: "Character Counter",
    shortDesc: "Tool minimale per contare caratteri con design responsive.",
    longDesc:
      "Mini-tool che permette di contare caratteri in tempo reale con un’interfaccia semplice, pulita e responsive. Ho curato leggibilità, tipografia e usabilità, mantenendo il codice minimale e facilmente estendibile.",
    technologies: ["React", "Styled Components", "Javascript"],
    image: counterImg,
    live: "https://cla91-character-counter.netlify.app/",
    repo: "https://github.com/cla91/character-counter",
    featured: false,
  },
];
