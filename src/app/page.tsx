import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Spotlight from "@/components/Spotlight";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Competitions from "@/components/Competitions";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Spotlight />
      <div className="mx-auto min-h-screen w-full max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Sidebar />
          <MobileNav />
          <main id="content" className="pt-10 lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Competitions />
            <Certifications />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
