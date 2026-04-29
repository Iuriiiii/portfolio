import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
