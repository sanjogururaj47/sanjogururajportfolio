import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Involvements from "@/components/Involvements";

export default function Home() {
  return (
    <main className="w-full bg-base-300 text-base-content px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <Aboutme />
        <Experience />
        <Skills />
        <Projects />
        <Involvements />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}