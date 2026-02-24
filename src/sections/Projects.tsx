"use client";

import harryPotterLandingPage from "@/assets/images/harry-potter-landing-page.png";
import toDoListLandingPage from "@/assets/images/todolist-landing-page.png";
import wavewatchLandingPage from "@/assets/images/wavewatch-landing-page.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { Lang, translations } from "@/i18n/translations";
import { ProjectModal } from "@/components/ProjectModal";
import { useState } from "react";

const projectsMeta = [
  {
    company: "IIM Digital School",
    year: "2025",
    title: "Typescript To-Do List",
    link: "https://github.com/emoliie/IIMA2_Projet_ToDoList",
    image: toDoListLandingPage,
  },
  {
    company: "IIM Digital School",
    year: "2024",
    title: "Wavewatch : Surfing at the 2024 Olympics",
    link: "https://github.com/emoliie/IIMA1_projet-transversal",
    image: wavewatchLandingPage,
  },
  {
    company: "IIM Digital School",
    year: "2024",
    title: "Harry Potter Cards And Trading",
    link: "https://github.com/emoliie/IIMA1_Projet-dAxe",
    image: harryPotterLandingPage,
  },
];

export const ProjectsSection = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].projects;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const portfolioProjects = projectsMeta.map((meta, i) => ({
    ...meta,
    description: t.items[i].description,
    tech: t.items[i].tech,
    functionalities: t.items[i].functionalities,
  }));

  const selectedProject =
    selectedIndex !== null ? portfolioProjects[selectedIndex] : null;

  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-red-300 to-purple-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <p className="mt-4 text-sm md:text-base text-white/50 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <button
                      onClick={() => setSelectedIndex(projectIndex)}
                      className="bg-white text-gray-950 h-12 w-full px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                    >
                      <span>{t.seeDetails}</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-7 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedIndex(null)}
        labels={{
          viewRepo: t.viewRepo,
          close: t.close,
          techStack: t.techStack,
        }}
      />
    </section>
  );
};
