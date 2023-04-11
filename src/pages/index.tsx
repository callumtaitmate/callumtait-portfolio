import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#1cb3ff]">
      <Head>
        <title>{" Callum's Portfolio "}</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="contactme" className="snap-center">
        <ContactMe />
      </section>
      <div className="flex justify-center py-2 bg-zinc-900 sticky bottom-0 z-50">
        <Link href="#hero">
          <ArrowUpIcon className="h-3 w-3 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
