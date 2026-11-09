import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Approaches } from "@/components/sections/Approaches";
import { Hero } from "@/components/sections/Hero";
import { WhatIsSelectivity } from "@/components/sections/WhatIsSelectivity";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <WhatIsSelectivity />
        <Approaches />
      </main>
      <Footer />
    </>
  );
}
