"use client"

import React, { useState } from "react"
import { FileCode, FileJson, FileText, User } from "lucide-react"

export function AboutSection() {
  const tabs = [
    {
      key: "bio",
      filename: "biography.ts",
      icon: <FileCode className="w-4 h-4 text-purple-600" />,
      code: (
        <div className="font-mono text-xs md:text-sm leading-relaxed text-black">
          <span className="text-gray-400">// Who I Am - Personal Legend</span><br />
          <span className="text-purple-600">class</span> <span className="text-blue-600">Anand</span> &#123;<br />
          &nbsp;&nbsp;name = <span className="text-green-600">'Anand'</span>;<br />
          &nbsp;&nbsp;role = <span className="text-green-600">'AI Systems Architect & Full Stack Developer'</span>;<br />
          &nbsp;&nbsp;vision = <span className="text-green-600">'Bridging the gap between high-level AI and production systems.'</span>;<br /><br />
          
          &nbsp;&nbsp;<span className="text-blue-600">getStory</span>() &#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> <span className="text-green-600">'My journey started with a fascination for high-scale systems. Today, I build systems like CardioNerve that use AI to solve real health challenges. I believe AI is the ultimate leverage for human problem-solving.'</span>;<br />
          &nbsp;&nbsp;&#125;<br /><br />

          &nbsp;&nbsp;<span className="text-blue-600">getInterests</span>() &#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> [<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-600">'High-Performance Computing'</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-600">'Agentic Workflows'</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-600">'Decentralized AI'</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-600">'User-First Design'</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;];<br />
          &nbsp;&nbsp;&#125;<br />
          &#125;
        </div>
      )
    },
    {
      key: "skills",
      filename: "skills.json",
      icon: <FileJson className="w-4 h-4 text-yellow-600" />,
      code: (
        <div className="font-mono text-xs md:text-sm leading-relaxed text-black">
          &#123;<br />
          &nbsp;&nbsp;<span className="text-purple-600">"languages"</span>: [<span className="text-green-600">"Python"</span>, <span className="text-green-600">"TypeScript"</span>, <span className="text-green-600">"JavaScript"</span>, <span className="text-green-600">"SQL"</span>, <span className="text-green-600">"C/C++"</span>],<br />
          &nbsp;&nbsp;<span className="text-purple-600">"frameworks"</span>: [<span className="text-green-600">"React"</span>, <span className="text-green-600">"Next.js"</span>, <span className="text-green-600">"FastAPI"</span>, <span className="text-green-600">"Node.js"</span>, <span className="text-green-600">"Express"</span>],<br />
          &nbsp;&nbsp;<span className="text-purple-600">"cloud_ai"</span>: [<span className="text-green-600">"MLOps"</span>, <span className="text-green-600">"TensorFlow"</span>, <span className="text-green-600">"GPT fine-tuning"</span>, <span className="text-green-600">"AWS Lambda"</span>, <span className="text-green-600">"Azure AI"</span>],<br />
          &nbsp;&nbsp;<span className="text-purple-600">"databases"</span>: [<span className="text-green-600">"MongoDB"</span>, <span className="text-green-600">"PostgreSQL"</span>, <span className="text-green-600">"SQLite"</span>, <span className="text-green-600">"Redis"</span>]<br />
          &#125;
        </div>
      )
    },
    {
      key: "learning",
      filename: "learning.md",
      icon: <FileText className="w-4 h-4 text-red-600" />,
      code: (
        <div className="font-mono text-xs md:text-sm leading-relaxed text-black space-y-4">
          <p className="font-extrabold text-lg text-purple-600"># Engineering Mindset</p>
          <div className="space-y-2 font-sans font-medium text-gray-700">
            <p><span className="text-black font-bold font-mono">1. Build to Scale:</span> Writing highly optimized, modular, and resilient fullstack architecture.</p>
            <p><span className="text-black font-bold font-mono">2. Problem First:</span> Focussing on product discovery and concrete business value before laying concrete code.</p>
            <p><span className="text-black font-bold font-mono">3. Constant Evolution:</span> Deep learning on Agentic AI UI, micro-frontends, and latency-sensitive distributed models.</p>
          </div>
        </div>
      )
    }
  ]

  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <section id="about" className="py-16 md:py-24 bg-white text-black border-t-4 border-black">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 space-y-3 text-center">
          <p className="text-sm font-mono font-bold text-gray-500">// 05 — About</p>
          <h2 className="text-4xl md:text-6xl font-black">
            Who <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">I Am</span>
          </h2>
          <p className="text-lg text-gray-600 font-mono max-w-xl mx-auto">
            Behind the terminal — my story, engineering mindset, and technological values.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column avatar */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-black overflow-hidden bg-[#FF6B6B] flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <User className="w-24 h-24 text-white" />
            </div>

            <div className="space-y-2.5">
              <h3 className="text-2xl font-black text-[#0B0B0B]">Anand Mahadev</h3>
              <p className="text-xs text-[#2F81F7] font-mono font-bold uppercase tracking-widest">
                // AI Systems Architect & Founder
              </p>
              <p className="text-sm text-gray-600 font-sans font-medium leading-relaxed">
                Based in Mangaluru, India. I specialize in combining product discovery with engineering feasibility to ship scalable, impactful AI systems.
              </p>
            </div>
          </div>

          {/* Right Column VS Code Mockup */}
          <div className="lg:col-span-8">
            <div className="bg-white border-4 border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-[400px]">
              
              {/* Top editor bar */}
              <div className="bg-gray-100 border-b-4 border-black flex items-center justify-between px-4 flex-shrink-0">
                <div className="flex font-mono text-xs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab)}
                      className={`flex items-center gap-1.5 px-4 py-3 border-r-2 border-black font-mono font-bold transition-colors cursor-pointer ${
                        activeTab.key === tab.key
                          ? "bg-white text-black border-b-2 border-b-white"
                          : "text-gray-500 hover:text-black hover:bg-gray-200"
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.filename}</span>
                    </button>
                  ))}
                </div>
                
                <span className="hidden sm:inline font-mono text-[10px] text-gray-400 font-bold uppercase">editor_pane.exe</span>
              </div>

              {/* Code pane */}
              <div className="p-6 flex-1 overflow-auto bg-white">
                <div className="flex gap-4 items-start select-none">
                  
                  {/* Numbers */}
                  <div className="font-mono text-xs md:text-sm text-gray-400 text-right space-y-1 min-w-[20px]">
                    {Array.from({ length: 12 }).map((_, idx) => (
                      <div key={idx}>{idx + 1}</div>
                    ))}
                  </div>

                  {/* Code */}
                  <div className="flex-1 min-w-0">
                    {activeTab.code}
                  </div>

                </div>
              </div>

              {/* Status bar */}
              <div className="bg-gray-50 px-4 py-1.5 border-t-2 border-black flex items-center justify-between text-[10px] text-gray-400 font-mono font-bold flex-shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-green-600">● main</span>
                  <span>ln 1, col 1</span>
                </div>
                <span>UTF-8</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
