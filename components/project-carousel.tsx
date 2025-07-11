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
  const [itemsPerView, setItemsPerView] = useState(3)
  
  // Handle responsive itemsPerView
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3)
    }
    
    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, projects.length - itemsPerView)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        return nextIndex > maxIndex ? 0 : nextIndex
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative max-w-7xl ">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-2xl">
        {/* Carousel slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-2 ">
              <div className="flex flex-col gap-0 min-h-[500px] h-full bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 ">
                  <Image
                    src={project.img.url || "/placeholder.svg"}
                    alt={project.title}
                    width={512}
                    height={384}
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </div>
                {/* Project Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div className="mb-4">
                    <Badge variant="outline" className="border-cyan-400 text-cyan-400 mb-3 text-xs">
                      Projeto {index + 1}
                    </Badge>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{project.title}</h3>
                    <p className="text-slate-300 leading-relaxed mb-4 text-sm line-clamp-3" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-cyan-400 mb-2">Tecnologias</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.stacks.slice(0, 4).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-blue-500/20 text-blue-300 border-0 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.stacks.length > 4 && (
                        <Badge variant="secondary" className="bg-slate-500/20 text-slate-300 border-0 text-xs">
                          +{project.stacks.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    {project.url_code && <Link
                      href={project.url_code}
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent flex items-center gap-1 px-3 py-1.5 rounded-sm text-xs"
                    >
                      <Github className="w-3 h-3" />
                      Código
                    </Link>}
                    <Link
                      href={project.url_demo}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 flex items-center gap-1 px-3 py-1.5 rounded-sm text-xs"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-full w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
          className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-full w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

      {/* Dots indicator
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-cyan-400 scale-125" : "bg-slate-600 hover:bg-slate-500"
              }`}
          />
        ))}
      </div> */}

      {/* Progress bar */}
      <div className="mt-4 w-full bg-slate-700/30 rounded-full h-1 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ease-linear"
          style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
        />
      </div>

      {/* Auto-play indicator
      <div className="flex items-center justify-center mt-3 gap-2 text-xs text-slate-400">
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-slate-500"}`} />
        <span>{isAutoPlaying ? "Auto-play ativo" : "Auto-play pausado"}</span>
      </div> */}
    </div>
  )
}
