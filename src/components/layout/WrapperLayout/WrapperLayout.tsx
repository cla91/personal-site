import Header from "@/components/layout/Header/Header";

interface WrapperLayoutProps {
  children: React.ReactNode;
}

export default function WrapperLayout({ children }: WrapperLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <footer>Footer</footer>
    </>
  );
}
