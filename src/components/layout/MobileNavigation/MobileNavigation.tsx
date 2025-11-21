import styles from "@/components/layout/MobileNavigation/MobileNavigation.module.scss";
import { navLinks } from "@/data/navigationData";
import HamburgerButton from "@/components/ui/button/HamburgerButton/HamburgerButton";
import { useState } from "react";

export default function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <HamburgerButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div
        className={`${styles.closeArea} ${isMenuOpen ? styles.open : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />
      <nav className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <a href={to} onClick={() => setIsMenuOpen(false)} className="">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
