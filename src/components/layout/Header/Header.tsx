import Logo from "@/components/ui/Logo/Logo";
import styles from "@/components/layout/Header/Header.module.scss";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import useMediaQuery from "@/hooks/useMediaQuery";
import DesktopNavigation from "@/components/layout/DesktopNavigation/DesktopNavigation";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 48rem)");
  return (
    <header className={`${styles.header} container`}>
      <Logo />
      {isDesktop ? <DesktopNavigation /> : <MobileNavigation />}
    </header>
  );
}
