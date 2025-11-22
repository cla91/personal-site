import styles from "@/components/ui/SocialLinks/SocialLinks.module.scss";
import GithubIcon from "@/components/ui/icon/GithubIcon/GithubIcon";
import LinkedinIcon from "@/components/ui/icon/LinkedinIcon/LinkedinIcon";

interface SocialLinksProps {
  className?: string;
}
export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={`${className || ""}`}>
      <a
        href="https://github.com/cla91"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <GithubIcon className={styles.icon} />
        <span className="sr-only">GitHub</span>
      </a>

      <a
        href="https://linkedin.com/in/claudia-cantiani"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <LinkedinIcon className={styles.icon} />
        <span className="sr-only">LinkedIn</span>
      </a>
    </div>
  );
}
