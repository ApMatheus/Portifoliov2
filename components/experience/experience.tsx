"use client"

import { AnimatedCard } from "../animated-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Terminal } from "lucide-react";
import { Timeline } from "@/types/portifolio";

export default function Experience({ experiences, githubData }: { experiences: Timeline, githubData: number }) {
  const { title, feature } = experiences;

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30 pt-32 relative z-10">
      <div className="max-w-4xl mx-auto">
        <AnimatedCard direction="up">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">{title}</h2>
        </AnimatedCard>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {feature.map((exp, index) => (
              <AnimatedCard key={index} direction={index % 2 === 0 ? "right" : "left"} delay={index * 300}>
                <div
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-slate-900 z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <Card className="bg-slate-800/50 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 relative py-5">
                      {/* Arrow pointing to timeline */}
                      <div
                        className={`absolute top-6 w-0 h-0 ${index % 2 === 0
                          ? "md:right-0 md:translate-x-full border-l-8 border-l-slate-800 border-y-8 border-y-transparent"
                          : "md:left-0 md:-translate-x-full border-r-8 border-r-slate-800 border-y-8 border-y-transparent"
                          } hidden md:block`}
                      ></div>

                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <Badge variant="outline" className="border-cyan-400 text-cyan-400 mb-3 text-xs">
                              {exp.start_date} {exp.end_date && `- ${exp.end_date}`}
                            </Badge>
                            <CardTitle className="text-white text-xl mb-2">{exp.title}</CardTitle>
                            <CardDescription className="text-cyan-400 font-semibold text-lg flex items-center gap-2">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                              {exp.sub_title}
                            </CardDescription>
                          </div>
                          <div className="text-cyan-400 opacity-60">
                            <Terminal className="w-6 h-6" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: exp.description }}></p>

                        {/* Skills/Technologies for this role */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tags?.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="bg-blue-500/20 text-blue-300 border-0 text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Year indicator on opposite side */}
                  <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="text-4xl font-bold text-cyan-400/30">{exp.start_date.split("-")[0]}</div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Timeline End */}
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-slate-900">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-40"></div>
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { value: "4+", label: "Anos de Experiência" },
            { value: "3", label: "Empresas" },
            { value: githubData, label: "Contribuições no ultimo ano" },
          ].map((highlight, index) => (
            <AnimatedCard key={index} direction="scale" delay={index * 150}>
              <Card className="bg-slate-800/30 border-cyan-500/20 text-center p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{highlight.value}</div>
                <div className="text-slate-300">{highlight.label}</div>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}