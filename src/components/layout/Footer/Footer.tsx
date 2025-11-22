import styles from "@/components/layout/Footer/Footer.module.scss";
import GithubIcon from "@/components/ui/icon/GithubIcon/GithubIcon";
import SocialLinks from "@/components/ui/SocialLinks/SocialLinks";

export default function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Claudia Cantiani
      </p>
      <SocialLinks className={styles.socialList} />
      <a
        href="https://github.com/cla91/personal-site"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.repoLink}
      >
        Repository Portfolio <GithubIcon />
      </a>
    </footer>
  );
}
