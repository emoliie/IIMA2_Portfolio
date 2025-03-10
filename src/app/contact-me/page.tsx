import { Footer } from "@/sections/Footer";
import Form from "@/sections/Form";
import { Header } from "@/sections/Header";
import React from "react";

export default function page() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}
