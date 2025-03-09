"use client";
import { motion } from "framer-motion";
import memojiImage from "@/assets/images/memoji-worried.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export default function NotFound() {
  return (
    <div className="relative z-0 overflow-hidden">
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

      <motion.div
        className="flex flex-col items-center justify-center h-screen text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <Image
          src={memojiImage}
          className="size-[150px] md:size-[200px]"
          alt="Memoji worried"
        />
        <h1 className="font-serif text-6xl font-bold">404</h1>
        <p className="text-xl mt-4">
          Oops! The page you are looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-4 inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
        >
          <span className="font-semibold">Go back home</span>
        </a>
      </motion.div>
    </div>
  );
}
