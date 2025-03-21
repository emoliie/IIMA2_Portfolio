import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-40 md:py-60 lg:py-80 relative z-0">
      <div className="absolute inset-0 mask-image-y -z-10">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[920px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="size-[1520px] hero-ring"></div>
        <div className="size-[1820px] hero-ring"></div>

        <HeroOrbit
          size={1060}
          rotation={100}
          shouldOrbit
          orbitDuration="52s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-20 text-red-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={950}
          rotation={-72}
          shouldOrbit
          orbitDuration="50s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-red-300" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={90} shouldOrbit orbitDuration="48s">
          <div className="size-3 bg-red-300/20 rounded-full"></div>
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={150}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-red-300/20" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 bg-red-300/20 rounded-full"></div>
        </HeroOrbit>

        <HeroOrbit
          size={630}
          rotation={180}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-red-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-red-300" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-red-300" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-45}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="3s"
        >
          <div className="size-2 bg-red-300/20 rounded-full"></div>
        </HeroOrbit>

        <HeroOrbit
          size={460}
          rotation={80}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-red-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-red-300/20" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person on her laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Crafting the Future of Web Innovation
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I&apos;m Emilie, I design and code with a passion for building
            meaningful and impactful digital experiences. Let&apos;s discuss !
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#projects">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
          </a>

          <a href="contact-me">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
              <span>👋🏻</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
