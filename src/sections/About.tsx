"use client";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiGithub,
  SiPhp,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSymfony,
  SiSass,
  SiMysql,
} from "@icons-pack/react-simple-icons";
import mapImage from "@/assets/images/map.jpeg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Lang, translations } from "@/i18n/translations";

const toolboxItems = [
  { title: "Javascript", iconType: SiJavascript },
  { title: "HTML5", iconType: SiHtml5 },
  { title: "CSS3", iconType: SiCss },
  { title: "ReactJS", iconType: SiReact },
  { title: "Github", iconType: SiGithub },
  { title: "PHP", iconType: SiPhp },
  { title: "NextJS", iconType: SiNextdotjs },
  { title: "Tailwind", iconType: SiTailwindcss },
  { title: "Typescript", iconType: SiTypescript },
  { title: "Symfony", iconType: SiSymfony },
  { title: "SCSS", iconType: SiSass },
  { title: "SQL", iconType: SiMysql },
];

export const AboutSection = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].about;
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title={t.journey.title}
                description={t.journey.description}
              />

              <div className="flex flex-col mx-6 gap-4">
                <a
                  href="https://github.com/emoliie"
                  className="w-full md:w-auto"
                >
                  <button className="bg-white text-gray-950 h-12 w-full  px-6 rounded-xl font-semibol inline-flex items-center justify-center gap-2">
                    <span>{t.journey.githubBtn}</span>
                    <SiGithub size={16} color="black" />
                  </button>
                </a>
                <a
                  href={t.journey.cvHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto"
                >
                  <button className="border border-white/15 text-white h-12 w-full  px-6 rounded-xl font-semibol inline-flex items-center justify-center gap-2">
                    <span>📝</span>
                    <span>{t.journey.cvBtn}</span>
                  </button>
                </a>
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title={t.toolbox.title}
                description={t.toolbox.description}
              />

              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[320px] p-0 md:col-span-3 flex flex-col lg:col-span-2">
              <CardHeader
                title={t.hobbies.title}
                description={t.hobbies.description}
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {t.hobbies.items.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-red-300 to-purple-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt={t.hobbies.mapAlt}
                className="h-full w-full object-cover"
              />
              <div className="absolute overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-300 to-purple-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-300 to-purple-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt={t.hobbies.memojiAlt}
                  className="size-20 object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
