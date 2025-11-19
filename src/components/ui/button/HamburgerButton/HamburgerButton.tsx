import styles from "@/components/ui/button/HamburgerButton/HamburgerButton.module.scss";

interface HamburgerButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerButton({
  isMenuOpen,
  setIsMenuOpen,
}: HamburgerButtonProps) {
  function handleClick() {
    setIsMenuOpen((prev) => !prev);
  }
  return (
    <button
      type="button"
      aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
      aria-pressed={isMenuOpen}
      onClick={handleClick}
      className={`${styles.button} ${isMenuOpen ? styles.open : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
