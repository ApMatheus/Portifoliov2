
import { AnimatedBackground } from "./components/animated-background"
import { FloatingElements } from "./components/floating-elements"
import { Home, Social } from "@/types/portifolio"
import Hero from "./components/hero/hero"
import About from "./components/about/about"
import Skills from "./components/skills/skills"
import Projects from "./components/projects/projects"
import Experience from "./components/experience/experience"
import Footer from "./components/footer/footer"

export default function Component({ props }: { props: Home }) {
  const { hero, about, stacks, projects, timeline, contact } = props.object.metadata

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      <FloatingElements />

      {/* Hero Section */}
      <Hero hero={hero} social={contact as Social} />

      {/* About Section */}
      <About about={about} />

      {/* Skills Section */}
      <Skills skills={stacks} />

      {/* Projects Section */}
      <Projects projects={projects} />

      {/* Experience Section */}
      <Experience experiences={timeline} />
      <Footer social={contact as Social} />
    </div>
  )
}
