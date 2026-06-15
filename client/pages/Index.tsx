import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Community from "@/components/sections/Community";
import Contact from "@/components/sections/Contact";

export default function Index() {
  // When navigating to the home page with a section hash (e.g. /#services),
  // scroll to that section once the page has mounted.
  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
