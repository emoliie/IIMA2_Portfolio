"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import {
  SiPhp,
  SiSymfony,
  SiMysql,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
} from "@icons-pack/react-simple-icons";

const techIconMap: Record<string, React.ElementType> = {
  PHP: SiPhp,
  Symfony: SiSymfony,
  MySQL: SiMysql,
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  SQL: SiMysql,
  Supabase: SiSupabase,
};

type Project = {
  title: string;
  company: string;
  year: string;
  description: string;
  tech: string[];
  functionalities: string[];
  link: string;
  image: StaticImageData;
};

type Props = {
  project: Project | null;
  onClose: () => void;
  labels: {
    viewRepo: string;
    close: string;
    techStack: string;
  };
};

export const ProjectModal = ({ project, onClose, labels }: Props) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="relative z-10 bg-gray-900 border border-white/10 rounded-t-3xl sm:rounded-3xl w-full sm:max-w-2xl max-h-[92dvh] sm:max-h-[85vh] flex flex-col overflow-hidden"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Drag handle (mobile) */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-10 h-1 rounded-full bg-white/20" />
            </div>

            {/* Image */}
            <div className="relative w-full h-48 sm:h-56 flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 size-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition"
                aria-label={labels.close}
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto flex-1 px-6 pt-4 pb-6 flex flex-col gap-4">
              {/* Header */}
              <div>
                <div className="bg-gradient-to-r from-red-300 to-purple-400 inline-flex gap-2 font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl mt-1">
                  {project.title}
                </h2>
              </div>

              <hr className="border-white/10" />

              {/* Description */}
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
                  {labels.techStack}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => {
                    const Icon = techIconMap[t];
                    return (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10 inline-flex items-center gap-1.5"
                      >
                        {Icon && <Icon size={12} color="white" />}
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Functionalities */}
              <ul className="flex flex-col gap-2">
                {project.functionalities.map((f, i) => (
                  <li key={i} className="flex gap-2 text-sm text-white/60">
                    <CheckCircleIcon className="size-5 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2">
                <button className="w-full bg-white text-gray-950 h-12 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                  <span>{labels.viewRepo}</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
