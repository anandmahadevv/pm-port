"use client"

import React from "react"
import { Cpu, Terminal, Database, Code, Shield, Layers, Box, Globe } from "lucide-react"

export function LogoMarquee() {
  const items = [
    { text: "React", icon: <Code className="w-5 h-5 text-white" /> },
    { text: "Node.js", icon: <Terminal className="w-5 h-5 text-white" /> },
    { text: "Python", icon: <Layers className="w-5 h-5 text-white" /> },
    { text: "AWS", icon: <Globe className="w-5 h-5 text-white" /> },
    { text: "AI Systems", icon: <Cpu className="w-5 h-5 text-white" /> },
    { text: "Next.js", icon: <Box className="w-5 h-5 text-white" /> },
    { text: "MongoDB", icon: <Database className="w-5 h-5 text-white" /> },
    { text: "TypeScript", icon: <Shield className="w-5 h-5 text-white" /> }
  ]

  return (
    <div className="overflow-hidden py-12 select-none">
      <div className="bg-[#000] border-y-4 border-black py-6 -rotate-1 w-[110vw] -ml-[5vw] shadow-2xl flex items-center">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap text-white font-mono font-extrabold uppercase tracking-widest text-sm md:text-base">
          {[...items, ...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-3.5 group">
              <span className="text-[#FF6B7A]">
                {item.icon}
              </span>
              <span className="group-hover:text-[#FDB927] transition-colors">
                {item.text}
              </span>
              <span className="text-gray-700 mx-2">·</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
