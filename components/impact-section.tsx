"use client"

import React, { useState, useEffect } from "react"
import { Trophy, Zap, Ship, Sparkles } from "lucide-react"

export function ImpactSection() {
  const stats = [
    { label: "Hackathons", target: 15, suffix: "+", color: "#FDB927", icon: <Zap className="w-6 h-6 text-black" /> },
    { label: "Finalist Wins", target: 2, suffix: "", color: "#00E5FF", icon: <Trophy className="w-6 h-6 text-black" /> },
    { label: "Projects Shipped", target: 8, suffix: "", color: "#FF6B7A", icon: <Ship className="w-6 h-6 text-black" /> },
    { label: "AI Agents Built", target: 12, suffix: "+", color: "#6366F1", icon: <Sparkles className="w-6 h-6 text-black" /> },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000 
    const steps = 50
    const stepTime = duration / steps
    let currentStep = 0
    
    const interval = setInterval(() => {
      currentStep++
      setCounts(
        stats.map((stat) => {
          return Math.min(stat.target, Math.round((stat.target / steps) * currentStep))
        })
      )

      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, stepTime)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white text-black border-t-4 border-black">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 space-y-3 text-center">
          <p className="text-sm font-mono font-bold text-gray-500">// 03 — Impact</p>
          <h2 className="text-4xl md:text-6xl font-black">
            The <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Numbers</span>
          </h2>
          <p className="text-lg text-gray-600 font-mono max-w-xl mx-auto">
            Data-driven proof of development scale and system reliability.
          </p>
        </div>

        {/* Counter cards in neubrutalist white box shadow style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black rounded-3xl p-6 text-center flex flex-col items-center justify-center space-y-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              
              {/* Colored icon container */}
              <div 
                className="w-12 h-12 rounded-2xl border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                style={{ backgroundColor: stat.color }}
              >
                {stat.icon}
              </div>

              {/* Counter digit */}
              <div className="text-4xl md:text-5xl font-black font-mono tracking-tight text-black">
                {counts[index]}
                <span className="text-[#393939]">{stat.suffix}</span>
              </div>

              {/* Title */}
              <div className="text-xs md:text-sm font-mono font-bold text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
