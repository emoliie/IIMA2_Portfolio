"use client";

import { Lang, translations } from "@/i18n/translations";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].header;
  const q = lang === "en" ? "?lang=en" : "";
  const pathname = usePathname();
  const isContactPage = pathname === "/contact-me";
  const [activeSection, setActiveSection] = useState<string>(
    isContactPage ? "contact" : "home"
  );

  useEffect(() => {
    if (isContactPage) return;

    const sections = ["projects", "about"];
    const observers: IntersectionObserver[] = [];

    const homeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveSection("home");
      },
      { threshold: 0.3 }
    );

    const heroEl = document.querySelector(".py-40, .py-60, .py-80");
    if (heroEl) homeObserver.observe(heroEl);
    observers.push(homeObserver);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isContactPage]);

  const navClass = (section: string) =>
    `nav-item ${activeSection === section ? "bg-white/20 text-white" : ""}`;

  return (
    <div className="flex justify-center items-center fixed top-3 w-screen z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur ">
        <a href={`/${q}`} className={navClass("home")}>
          {t.home}
        </a>
        <a href={`/${q}#projects`} className={navClass("projects")}>
          {t.projects}
        </a>
        <a href={`/${q}#about`} className={navClass("about")}>
          {t.about}
        </a>
        <a
          href={`/contact-me${q}`}
          className={`nav-item ${isContactPage ? "bg-white text-gray-900" : "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"}`}
        >
          {t.contact}
        </a>
      </nav>
    </div>
  );
};
