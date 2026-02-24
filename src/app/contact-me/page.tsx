import { Footer } from "@/sections/Footer";
import Form from "@/sections/Form";
import { Header } from "@/sections/Header";
import { Lang } from "@/i18n/translations";
import React from "react";

export default function page({
  searchParams,
}: {
  searchParams: { lang?: string };
}) {
  const lang: Lang = searchParams.lang === "en" ? "en" : "fr";

  return (
    <div className="h-screen flex flex-col justify-between">
      <Header lang={lang} />
      <Form lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
