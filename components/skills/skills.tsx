"use client"

import { AnimatedCard } from "../animated-card";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Stacks } from "@/types/portifolio";
import Image from "next/image";

export default function Skills({ skills }: { skills: Stacks }) {
  const { title, stack } = skills;
  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30 pt-32 relative z-10">
      <div className="max-w-6xl mx-auto">
        <AnimatedCard direction="up">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">{title}</h2>
        </AnimatedCard>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stack.map((skill, index) => (
            <AnimatedCard key={index} direction="scale" delay={index * 100}>
              <Card className="bg-slate-800/50 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-cyan-400 mb-3 flex justify-center">
                    <Image src={skill.icon.url} width={80} height={80} loading="lazy" alt={skill.title} className="rounded-lg object-cover" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{skill.title}</h3>
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-0">
                    {skill.tag}
                  </Badge>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>

  )
}