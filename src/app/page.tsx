import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { Lang } from "@/i18n/translations";

export default function Home({
  searchParams,
}: {
  searchParams: { lang?: string };
}) {
  const lang: Lang = searchParams.lang === "en" ? "en" : "fr";

  return (
    <div>
      <Header lang={lang} />
      <HeroSection lang={lang} />
      <ProjectsSection lang={lang} />
      <TapeSection lang={lang} />
      <AboutSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
