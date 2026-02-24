"use client";

import SectionHeader from "@/components/SectionHeader";
import { FormEvent, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Lang, translations } from "@/i18n/translations";

export default function Form({ lang }: { lang: Lang }) {
  const t = translations[lang].form;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    toast.loading(t.toastSending);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, subject, message }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        toast.dismiss();
        toast.success(t.toastSuccess);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.dismiss();
        toast.error(t.toastError);
      }
    } catch (err) {
      console.error("Error:", err);
      toast.dismiss();
      toast.error(t.toastNetwork);
    }
  };

  return (
    <section className="py-32">
      <div className="container">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="mt-10 md:mt-20 ">
          <form
            onSubmit={onSubmit}
            className="flex flex-col justify-center items-center gap-4 max-w-lg mx-auto"
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder={t.namePlaceholder}
              required
              className="w-full inline-flex bg-transparent border border-white/15 px-6 h-12 rounded-xl"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={t.emailPlaceholder}
              required
              className="w-full inline-flex bg-transparent border border-white/15 px-6 h-12 rounded-xl"
            />
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder={t.subjectPlaceholder}
              required
              className="w-full inline-flex bg-transparent border border-white/15 px-6 h-12 rounded-xl"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.messagePlaceholder}
              required
              className="w-full h-48 inline-flex bg-transparent border border-white/15 px-6 py-2 rounded-xl"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl mt-2"
            >
              <span className="font-semibold">{t.sendBtn}</span>
              <span>📮</span>
            </button>
          </form>
        </div>
        <Toaster position="top-right" />
      </div>
    </section>
  );
}
