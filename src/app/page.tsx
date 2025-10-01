"use client"

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Platform from "./components/Platform";
import Steps from "./components/Steps";
import Inventory from "./components/Inventory";

export default function Home() {
  return (
    <main className="min-h-screen min-w-min bg-slate-900 font-montserrat relative">
      <Navbar />
      <Hero />
      <Platform />
      <Steps />
      <Inventory />
    </main>
  );
}
