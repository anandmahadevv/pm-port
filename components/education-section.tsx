import { GraduationCap } from "lucide-react"
import Image from "next/image"

export function EducationSection() {
  const education = {
    institution: "NxtWave Institute of Advanced Technologies (NIAT), Mangalore",
    degree: "B.Tech — Computer Science",
    period: "2025 — Now",
    description: "Deep dive into AI/ML fundamentals, data structures, algorithms, and distributed systems — combined with real-world project-based learning and industry-focused training.",
    tags: ["AI/ML", "DSA", "Algorithms", "System Design"]
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold">
              My <span className="bg-[#FDB927] text-white px-3 py-1 inline-block">Education</span>
            </h2>
          </div>

          <div className="bg-[#EDEDED] border-[3px] border-black rounded-[32px] p-8 md:p-12 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-black rounded-3xl flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
                <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-[#0B0B0B]" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0B0B0B]">
                    {education.institution}
                  </h3>
                  <span className="text-lg md:text-xl font-bold text-gray-500 whitespace-nowrap">
                    {education.period}
                  </span>
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold text-[#6366F1] mb-6">
                  {education.degree}
                </h4>
                
                <p className="text-lg md:text-xl font-medium text-[#393939] leading-relaxed mb-8 max-w-4xl">
                  {education.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {education.tags.map((tag, i) => (
                    <span key={i} className="px-5 py-2 bg-white border-2 border-black rounded-xl text-base font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
