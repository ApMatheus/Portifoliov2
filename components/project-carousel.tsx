"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { ProjectItem } from "@/types/portifolio"
import Link from "next/link"

export function ProjectCarousel({ projects }: { projects: ProjectItem[] }) {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20">
        {/* Carousel slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="flex flex-col gap-0 min-h-[400px] h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.img.url || "/placeholder.svg"}
                    alt={project.title}
                    width={1536}
                    height={1024}
                    className="object-contain w-full h-full"
                  />
                </div>
                {/* Project Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <Badge variant="outline" className="border-cyan-400 text-cyan-400 mb-3">
                      Projeto {index + 1}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-300 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Tecnologias Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stacks.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-blue-500/20 text-blue-300 border-0">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    {project.url_code && <Link
                      href={project.url_code}
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent flex items-center gap-2 px-2 py-1 rounded-sm"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Link>}
                    <Link
                      href={project.url_demo}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 flex items-center gap-2 px-2 py-1 rounded-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-cyan-400 scale-125" : "bg-slate-600 hover:bg-slate-500"
              }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 w-full bg-slate-700/30 rounded-full h-1 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ease-linear"
          style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
        />
      </div>

      {/* Auto-play indicator */}
      <div className="flex items-center justify-center mt-3 gap-2 text-xs text-slate-400">
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-slate-500"}`} />
        <span>{isAutoPlaying ? "Auto-play ativo" : "Auto-play pausado"}</span>
      </div>
    </div>
  )
}
