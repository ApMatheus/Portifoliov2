import type { Hero, Social } from "@/types/portifolio";
import { Code } from "lucide-react";
import { Button } from "../ui/button";
import { TypewriterEffect } from "../typing-effect";
import Link from "next/link";
import Socials from "../ui/social";


export default function Hero({ hero, social }: { hero: Hero, social: Social }) {
  const { title, description } = hero;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 md:pt-16 z-10 ">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <Code className="w-16 h-16 text-cyan-400" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent min-h-[70px] md:min-h-[120px] flex items-center justify-center">
          <TypewriterEffect text={title} speed={150} pauseTime={3000} />
        </h1>

        <div className="text-xl md:text-2xl text-slate-300 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 w-full">
          <Link href="#projects" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 w-full sm:w-auto"
            >
              Ver Projetos
            </Button>
          </Link>
          <Link href="#contact" className=" sm:w-auto w-full">
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent w-full sm:w-auto hover:text-white"
            >
              Entrar em Contato
            </Button>
          </Link>
        </div>

        <div className="flex justify-center gap-6">
          <Socials social={social} />
        </div>
      </div>
    </section>
  );
}