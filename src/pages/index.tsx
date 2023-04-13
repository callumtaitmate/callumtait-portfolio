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
import { GetStaticProps } from "next";
import { fetchSocials } from "../../utils/fetchSocials";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchExperiences } from "../../utils/fetchExperience";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchProjects } from "../../utils/fetchProject";
import { Skill, Experience, Social, PageInfo, Project } from "../../typings";
import { createClient } from "next-sanity";

type Props = {
  skills: Skill[];
  experiences: Experience[];
  socials: Social[];
  pageInfo: PageInfo;
  projects: Project[];
};
export default function Home({ projects, skills, experiences, socials, pageInfo }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#1cb3ff]">
      <Head>
        <title>{" Callum's Portfolio "}</title>
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      <section id="contactme" className="snap-center">
        <ContactMe pageInfo={pageInfo}/>
      </section>
      <div className="flex justify-center py-2 bg-zinc-900 sticky bottom-0 z-50">
        <Link href="#hero">
          <ArrowUpIcon className="h-3 w-3 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
const projectId = "xksbbm3a" // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production" // "production"
const client = createClient({
  projectId,
  dataset,
  apiVersion: "v2021-10-21", // https://www.sanity.io/docs/api-versioning
  useCdn: process.env.NODE_ENV === "production", // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})
export const getStaticProps: GetStaticProps<Props> = async () => {
  const socials: Social[] = await client.fetch(`
  *[_type == "social"] {
      ...,
  }`);
  const pageInfo: PageInfo = await client.fetch(`*[_type == "pageInfo"] [0]`);
  const experiences: Experience[] = await client.fetch(`*[_type == "experience"] {
    ...,
    technologies[]->
}`);
  const skills: Skill[] = await client.fetch(`*[_type == "skill"]`);
  const projects: Project[] = await client.fetch(`
  *[_type == "project"] {
      ...,
      technologies[]->
  }`);
  return {
    props: {
      socials,
      pageInfo,
      experiences,
      skills,
      projects,
    },
  };
};
