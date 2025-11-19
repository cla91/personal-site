import { navLinks } from "@/data/navigationData";
import { NavLink } from "react-router-dom";
import styles from "@/components/layout/DesktopNavigation/DesktopNavigation.module.scss";

export default function DesktopNavigation() {
  return (
    <nav className={styles.menu}>
      <ul>
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
