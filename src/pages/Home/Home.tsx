import About from "@/components/sections/About/About";
import Contacts from "@/components/sections/Contacts/Contacts";
import Hero from "@/components/sections/Hero/Hero";
import Projects from "@/components/sections/Projects/Projects";
import Skills from "@/components/sections/Skills/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contacts />
    </main>
  );
}
