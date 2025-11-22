import { navLinks } from "@/data/navigationData";
import styles from "@/components/layout/DesktopNavigation/DesktopNavigation.module.scss";

export default function DesktopNavigation() {
  return (
    <nav className={styles.menu}>
      <ul>
        {navLinks.map(({ to, label }) => (
          <li key={to}>{<a href={to}>{label}</a>}</li>
        ))}
      </ul>
    </nav>
  );
}
