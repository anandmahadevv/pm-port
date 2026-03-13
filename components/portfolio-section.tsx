"use client"

import React from "react"
import { ArrowRight, ExternalLink, Github, ShieldAlert, Cpu } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "CardioNerve",
      tag: "Health-Tech",
      period: "Building since Jan 2025",
      impactLevel: "HIGHEST IMPACT",
      problem: "Delayed diagnosis in cardiovascular diseases leads to high mortality rates in remote areas.",
      solution: "Built an AI-powered risk assessment platform that analyzes patient vitals in real-time using predictive modeling.",
      description: "As Project Lead, I orchestrated the development of this clinical-grade system. Features real-time data ingestion, validation pipelines, and an interactive analytics dashboard for actionable clinical insights.",
      metrics: [
        "Led a team of 4 engineers to deploy v2 in 3 months.",
        "Reduced risk prediction error by 18% using custom ML models.",
        "Handled 1k+ concurrent data streams in pilot testing."
      ],
      stack: ["Python", "FastAPI", "React", "MongoDB", "TensorFlow"],
      bgColor: "bg-[#6366F1]", // Original Purple
      borderColor: "border-[#6366F1]"
    },
    {
      title: "AgroNova",
      tag: "Agri-Tech",
      period: "Built in 4 months",
      problem: "Farmers lack real-time soil data, leading to fertilizer waste and sub-optimal yields.",
      solution: "Developed an AI platform with IoT sensor integration for predictive soil health monitoring.",
      description: "AI-powered agricultural intelligence platform designed to optimize crop yield and provide predictive insights for smart farming. Helped 50+ farmers improve yields by an average of 10%.",
      metrics: [
        "50+ Active Farmers using the platform.",
        "10% Average Yield Increase reported by users.",
        "Response time <400ms for real-time sensor updates."
      ],
      stack: ["Python", "React", "Node.js", "MongoDB"],
      bgColor: "bg-[#2F81F7]", // Original Cyan/Blue
      borderColor: "border-[#2F81F7]"
    },
    {
      title: "DrugSecure",
      tag: "Pharma-Tech",
      period: "Built in 2 months",
      problem: "Counterfeit drugs cause thousands of deaths annually due to lack of verification.",
      solution: "Built an AI verification platform for chemical composition validation and batch tracking.",
      description: "Pharmaceutical verification platform designed to detect counterfeit and substandard medicines. Enables batch tracking and compliance monitoring through intelligent data analysis.",
      metrics: [
        "Successfully processed 100+ test verifications.",
        "92% Accuracy in prototype anomaly detection.",
        "Integrated with 3 mockup pharmacy data sources."
      ],
      stack: ["React", "Node.js", "REST APIs", "MongoDB"],
      bgColor: "bg-[#FF6B7A]", // Original Pink/Red
      borderColor: "border-[#FF6B7A]"
    },
    {
      title: "HackBro",
      tag: "Community",
      period: "Built in 1.5 months",
      problem: "Early-year students struggle to navigate their first hackathons, lacking a clear roadmap from idea to prototype.",
      solution: "Developed a mentorship-driven resource platform providing guided roadmaps and execution toolkits.",
      description: "A resource-first platform designed to help 1st and 2nd-year students bridge the gap between brainstorming an idea and executing a full hackathon build.",
      metrics: [
        "Guided 30+ freshman teams through their first hackathon lifecycle.",
        "Curated 5+ comprehensive roadmap modules for AI & Web domains.",
        "Adopted as a recommended resource for college tech orientation."
      ],
      stack: ["Node.js", "JWT", "MongoDB", "WebSockets"],
      bgColor: "bg-[#FDB927]", // Original Amber
      borderColor: "border-[#FDB927]"
    }
  ]

  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-2">
          <p className="text-sm font-mono font-bold text-gray-500">// 01 — Selected Work</p>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Projects<span className="bg-[#FDB927] text-black px-3 py-1 inline-block">I've built</span>
          </h2>
          <p className="text-lg text-gray-600 font-mono max-w-xl mx-auto">
            Things I've built — from idea to deployment. Focused on impact and scale.
          </p>
        </div>

        {/* Neubrutalist Cards */}
        <div className="space-y-12 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[4px] border-black rounded-[32px] overflow-hidden hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              
              {/* Left Column info */}
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white space-y-6">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-block bg-black text-white text-xs font-mono px-4 py-1.5 rounded-full">
                    {project.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-500">
                    {project.period}
                  </span>
                  {project.impactLevel && (
                    <span className="bg-red-100 text-red-600 border border-red-200 text-[10px] font-mono px-2 py-0.5 rounded font-extrabold tracking-wide uppercase animate-pulse">
                      ⚡ {project.impactLevel}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl md:text-[36px] font-black leading-tight text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base text-[#393939] leading-relaxed font-sans font-medium">
                  {project.description}
                </p>

                {/* Problem / Solution Block in brutalist layout */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 border-2 border-black rounded-2xl space-y-1">
                    <span className="text-[10px] font-mono font-bold text-red-500 uppercase flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" /> Problem
                    </span>
                    <p className="text-xs font-mono text-gray-600 leading-normal">{project.problem}</p>
                  </div>
                  <div className="p-4 bg-gray-50 border-2 border-black rounded-2xl space-y-1">
                    <span className="text-[10px] font-mono font-bold text-green-600 uppercase flex items-center gap-1">
                      <Cpu className="w-3.5 h-3.5" /> Solution
                    </span>
                    <p className="text-xs font-mono text-gray-600 leading-normal">{project.solution}</p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-gray-100 border-2 border-black text-xs font-mono font-bold text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons inside neubrutalist styles */}
                <div className="flex items-center gap-6 pt-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 font-mono font-bold text-[#0B0B0B] hover:gap-3 transition-all text-sm"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-2 font-mono font-bold text-gray-500 hover:text-black hover:gap-3 transition-all text-sm"
                  >
                    GitHub Code
                    <Github className="w-4 h-4" />
                  </a>
                </div>

              </div>

              {/* Right Column colored panel containing metrics logs */}
              <div className={`${project.bgColor} p-6 md:p-12 border-t-4 md:border-t-0 md:border-l-4 border-black text-white flex flex-col justify-between space-y-8`}>
                
                {/* Visual placeholder box */}
                <div className="w-full aspect-[4/3] bg-white/10 rounded-2xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center p-6">
                  <Cpu className="w-12 h-12 text-white/50 mb-3" />
                  <span className="font-mono text-xs font-bold tracking-widest uppercase text-white/60">
                    System Architecture Microservice
                  </span>
                </div>

                {/* Stats list */}
                <div className="space-y-4 bg-black/15 p-6 rounded-2xl border border-white/10">
                  <p className="text-xs font-mono font-extrabold tracking-wider uppercase text-white">
                    // Performance Metrics
                  </p>
                  <ul className="space-y-3 font-mono text-xs md:text-sm">
                    {project.metrics.map((metric, i) => (
                      <li key={i} className="flex gap-2 leading-relaxed">
                        <span className="text-[#00FF66] font-bold flex-shrink-0">▸</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
