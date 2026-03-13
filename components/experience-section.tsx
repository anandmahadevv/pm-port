import React from "react"
import { GitBranch, Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      period: "Jan 2025 — Present",
      title: "Project Lead // Founding Member",
      company: "CardioNerve",
      branch: "main",
      branchColor: "#6366F1", // Purple
      description:
        "Leading the development of an AI-driven cardiovascular risk assessment system. Key achievements: Led team of 4 engineers, reduced prediction latency by 30%, and achieved 99% uptime during pilot testing.",
      tags: ["AI/ML", "Team Leadership", "Product Architecture"],
    },
    {
      period: "Feb 2026 — Present",
      title: "SDE Intern",
      company: "Bluestock Fintech",
      branch: "feat/fintech",
      branchColor: "#2F81F7", // Blue
      description:
        "Developing scalable fintech systems. Metrics: Optimized SQL queries reducing load time by 40%, built 5+ responsive dashboard modules, and handled 10k+ financial data points daily.",
      tags: ["React", "Node.js", "SQL", "Optimization"],
    },
    {
      period: "June 2025 — Dec 2025",
      title: "AI Intern",
      company: "Launched Global",
      branch: "dev/ai-consulting",
      branchColor: "#FF6B7A", // Red
      description:
        "Worked on AI consulting projects. Impact: Developed 3 ML models for automated data labeling, improved classification accuracy by 15%, and processed 1M+ data rows.",
      tags: ["Python", "MLOps", "Data Scraping"],
    },
    {
      period: "2025 — Now",
      title: "B.Tech — Computer Science",
      company: "NxtWave Institute of Advanced Technologies (NIAT), Mangalore",
      branch: "core/edu",
      branchColor: "#FDB927", // Amber
      description:
        "Deep dive into AI/ML fundamentals, data structures, algorithms, and distributed systems — combined with real-world project-based learning and industry-focused training.",
      tags: ["AI/ML", "DSA"],
    },
  ]

  return (
    <section id="experience" className="bg-[#fcfcfc] text-black py-16 md:py-24 border-t-4 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Description Block */}
          <div className="pt-0 md:pt-12 md:sticky md:top-24 self-start space-y-6">
            <p className="text-sm font-mono font-bold text-gray-500">// 02 — Experience</p>
            <h2 className="text-4xl md:text-6xl font-black leading-[1.2] text-black">
              Journey & <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">Experience</span>
            </h2>
            <p className="text-[#393939] leading-relaxed text-base md:text-lg font-mono">
              Where I've been and what I've built along the way. Mapped into structured deployment milestones and academic branches.
            </p>
            
            {/* Brutalist Legend */}
            <div className="p-4 bg-white border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-2.5 max-w-sm">
              <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                <GitBranch className="w-4 h-4 text-black" />
                Active branch nodes:
              </span>
              {experiences.map((exp, i) => (
                <div key={i} className="flex items-center gap-2 font-mono text-xs font-bold">
                  <span className="w-3 h-3 rounded-full border border-black" style={{ backgroundColor: exp.branchColor }} />
                  <span className="text-[#393939]">[{exp.branch}]</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Neubrutalist Timeline list */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white border-4 border-black rounded-3xl min-h-[220px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
              >
                {/* Header card details */}
                <div className="flex items-center justify-between pt-6 px-6 md:px-8 pb-3">
                  <div className="text-base md:text-[20px] font-mono font-black text-[#0B0B0B] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full border border-black" style={{ backgroundColor: exp.branchColor }} />
                    {exp.period}
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 border border-black rounded bg-gray-50 text-gray-500">
                    [{exp.branch}]
                  </span>
                </div>

                {/* Division line */}
                <div className="border-t-[3px] border-black"></div>

                {/* Main Content card */}
                <div className="p-6 md:p-8 space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black leading-tight text-[#0B0B0B]">
                      {exp.title}
                    </h3>
                    <p className="font-mono text-sm font-bold mt-1 text-gray-500 flex items-center gap-1">
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <p className="text-[#393939] text-sm md:text-base leading-relaxed font-sans font-medium">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 border-2 border-black rounded-lg text-xs font-mono font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
