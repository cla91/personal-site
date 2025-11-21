import { MoveRight } from "lucide-react";
import styles from "@/components/ui/Cta/Cta.module.scss";

interface CtaProps {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}
export default function Cta({ to, variant, children }: CtaProps) {
  return (
    <a href={to} className={`${styles.cta} ${variant ? styles[variant] : ""}`}>
      {children} <MoveRight />
    </a>
  );
}
