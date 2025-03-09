import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
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
import TechIcon from "@/components/TechIcon";
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
  },
  {
    title: "TV Series",
    emoji: "🍿",
  },
  {
    title: "Travel",
    emoji: "✈️",
  },
  {
    title: "Crochet",
    emoji: "🧶",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Music",
    emoji: "🎤",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Explore My World of Code & Creativity"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My journey"
              description="Find out about my journey until here."
            />

            <div className="flex flex-col mt-6 gap-4">
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

          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to create digital
                experiences."
              className="px-6 pt-6"
            />

            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>

          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies"
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <Image src={mapImage} alt="Map of Paris" />
            <Image src={smileMemoji} alt="Smiling memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
