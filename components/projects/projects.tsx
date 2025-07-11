"use client"

import { AnimatedCard } from "../animated-card";
import { ProjectCarousel } from "../project-carousel";
import { Project } from "@/types/portifolio";

export default function Projects({ projects }: { projects: Project }) {
  const { title, project } = projects;
  return (
    <section id="projects" className="py-20 px-4 pt-32 relative z-10">
      <div className="max-w-6xl mx-auto">
        <AnimatedCard direction="up">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">{title}</h2>
        </AnimatedCard>
        <AnimatedCard direction="up" delay={200}>
          <ProjectCarousel projects={project} />
        </AnimatedCard>
      </div>
    </section>
  )
}