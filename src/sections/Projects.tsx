import harryPotterLandingPage from "@/assets/images/harry-potter-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import toDoListLandingPage from "@/assets/images/todolist-landing-page.png";
import wavewatchLandingPage from "@/assets/images/wavewatch-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "IIM Digital School",
    year: "2024",
    title: "Harry Potter Cards And Trading",
    functionalities: [
      { title: "Collect Harry Potter's characters cards" },
      { title: "Trading cards with other users" },
      { title: "User Authentication" },
    ],
    link: "https://github.com/emoliie/IIMA1_Projet-dAxe",
    image: harryPotterLandingPage,
  },
  {
    company: "IIM Digital School",
    year: "2024",
    title: "Wavewatch : Surfing at the 2024 Olympics",
    functionalities: [
      { title: "Responsive UI for smooth interaction" },
      { title: "Score database for storage and display" },
      {
        title: "Integrated visuals & marketing strategy",
      },
    ],
    link: "https://github.com/emoliie/IIMA1_projet-transversal",
    image: wavewatchLandingPage,
  },
  {
    company: "IIM Digital School",
    year: "2025",
    title: "Typescript To-Do List",
    functionalities: [
      { title: "User authentication for secure access" },
      { title: "Task management for organization" },
      { title: "Retro-inspired design for a unique look" },
    ],
    link: "https://github.com/emoliie/IIMA2_Projet_ToDoList",
    image: toDoListLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I bring ideas to life with a focus on simplicity, creativity,
        and user-friendliness."
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
                <div
                  className="lg:pb-16"
                >
                  <div className="bg-gradient-to-r from-red-300 to-purple-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.functionalities.map((functionality, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{functionality.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibol inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Repository</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
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
    </section>
  );
};
