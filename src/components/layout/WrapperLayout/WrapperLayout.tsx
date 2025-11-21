import Header from "@/components/layout/Header/Header";

interface WrapperLayoutProps {
  children: React.ReactNode;
}

export default function WrapperLayout({ children }: WrapperLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <footer className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quaerat
        rem impedit a dicta minima maiores sed harum ad debitis explicabo
        perspiciatis quas assumenda nemo fugit facere, totam quisquam sequi?
      </footer>
    </>
  );
}
