import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Lang, translations } from "@/i18n/translations";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/emoliie",
  },
  {
    title: "Linkedin",
    href: "https://linkedin.com/in/xu-emilie",
  },
];

export const Footer = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].footer;

  return (
    <footer className="relative ">
      <div className="absolute h-[400px] w-full bottom-0 left-1/2 -translate-x-1/2 bg-red-300/20 mask-image-footer -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div className="text-white/40">{t.copyright}</div>
          <div className="flex items-center gap-2 border border-white/15 rounded-full px-3 py-1">
            <a
              href="?"
              className={`text-xs font-semibold px-2 py-1 rounded-full transition ${lang === "fr" ? "bg-white text-gray-900" : "text-white/50 hover:text-white"}`}
            >
              FR
            </a>
            <span className="text-white/20 text-xs">|</span>
            <a
              href="?lang=en"
              className={`text-xs font-semibold px-2 py-1 rounded-full transition ${lang === "en" ? "bg-white text-gray-900" : "text-white/50 hover:text-white"}`}
            >
              EN
            </a>
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8 z-1">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
