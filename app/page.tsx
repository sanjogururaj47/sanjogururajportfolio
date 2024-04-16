import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="w-full bg-stone-300 text-slate-300 dark:bg-stone-750 dark:text-slate-900 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <Aboutme />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}