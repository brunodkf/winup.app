"use client"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Platform from "./components/Platform";
import Steps from "./components/Steps";
import Inventory from "./components/Inventory";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import WhatsappWidget from "./components/WhatsappWidget";

export default function Home() {
  return (
    <main id="top" className="min-h-screen min-w-min bg-slate-900 font-montserrat relative">
      <Navbar />
      <Hero />
      <Platform />
      <Steps />
      <Inventory />
      <Cta/>
      <Footer/>
      <WhatsappWidget/>
    </main>
  );
}
