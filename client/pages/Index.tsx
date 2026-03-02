import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Community from "@/components/sections/Community";
import Contact from "@/components/sections/Contact";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
