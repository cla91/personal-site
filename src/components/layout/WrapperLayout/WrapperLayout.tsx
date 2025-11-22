import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

interface WrapperLayoutProps {
  children: React.ReactNode;
}

export default function WrapperLayout({ children }: WrapperLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
