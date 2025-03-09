import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PhpIcon from "@/assets/icons/php.svg";
import NextIcon from "@/assets/icons/next.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import SymfonyIcon from "@/assets/icons/symfony.svg";
import ScssIcon from "@/assets/icons/scss.svg";
import SqlIcon from "@/assets/icons/sql.svg";
import mapImage from "@/assets/images/map.jpeg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxItems = [
  { title: "Javascript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HtmlIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "ReactJS", iconType: ReactIcon },
  { title: "Github", iconType: GithubIcon },
  { title: "PHP", iconType: PhpIcon },
  { title: "NextJS", iconType: NextIcon },
  { title: "Tailwind", iconType: TailwindIcon },
  { title: "Typescript", iconType: TypescriptIcon },
  { title: "Symfony", iconType: SymfonyIcon },
  { title: "SCSS", iconType: ScssIcon },
  { title: "SQL", iconType: SqlIcon },
];

const hobbies = [
  {
    title: "Movies",
    emoji: "🎬",
    left: "5%",
    top: "5%",
  },
  {
    title: "TV Series",
    emoji: "🍿",
    left: "5%",
    top: "65%",
  },
  {
    title: "Travel",
    emoji: "✈️",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "40%",
  },
  {
    title: "Crochet",
    emoji: "🧶",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎤",
    left: "70%",
    top: "45%",
  },
  {
    title: "Matcha",
    emoji: "🍵",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Explore My World of Code & Creativity"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My journey"
                description="Find out about how I got here."
              />

              <div className="flex flex-col mx-6 gap-4">
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibol inline-flex items-center justify-center gap-2">
                  <span>Explore my Github</span>
                  <GithubIcon className="size-4" />
                </button>
                <button className="border border-white/15 text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibol inline-flex items-center justify-center gap-2">
                  <span>📝</span>
                  <span>Discover my CV</span>
                </button>
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to create digital
              experiences."
              />

              <ToolboxItems items={toolboxItems} className="" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[320px] p-0 md:col-span-3 flex flex-col lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies."
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-red-300 to-purple-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map of Paris"
                className="h-full w-full object-cover"
              />
              <div className="absolute overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-red-300 to-purple-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={smileMemoji}
                  alt="Smiling memoji"
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
