"use client"

import { AnimatedCard } from "../animated-card";
import Image from "next/image";
import type { About } from "@/types/portifolio";

export default function About({ about }: { about: About }) {
  const { title, img, alt, title_description, description } = about;
  return (
    <section id="about" className="py-20 px-4 pt-32 relative z-10">
      <div className="max-w-6xl mx-auto">
        <AnimatedCard direction="up">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">{title}</h2>
        </AnimatedCard>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedCard direction="left" delay={200}>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 p-1 rounded-2xl">
                  <div className="bg-slate-900 rounded-2xl p-2">
                    <Image
                      src={img.url}
                      alt={alt}
                      width={400}
                      height={400}
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </AnimatedCard>

          {/* Content */}
          <AnimatedCard direction="right" delay={400}>
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                  {title_description}
                </h3>
                <div className="text-lg text-slate-300 leading-relaxed mb-6 container-about" dangerouslySetInnerHTML={{ __html: description }} />
                <style>
                  {`
                    .container-about h2 {
                      font-size: 1.5rem;
                      font-weight: 600;
                      color: white;
                      margin-top: 0.5rem;
                      margin-bottom: 0.25rem;
                      letter-spacing: 0.1em;
                    }
                  `}
                </style>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { value: "5+", label: "Anos de Experiência" },
                    { value: "50+", label: "Projetos Concluídos" },
                    { value: "10+", label: "Tecnologias" },
                  ].map((stat, index) => (
                    <AnimatedCard key={index} direction="scale" delay={600 + index * 100}>
                      <div className="text-center p-4 bg-slate-700/30 rounded-lg border border-cyan-500/10">
                        <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                        <div className="text-sm text-slate-400">{stat.label}</div>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
}