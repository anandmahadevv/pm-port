"use client"

import React, { useState } from "react"
import { Github, Linkedin, Mail, Terminal, CornerDownLeft, AlertCircle } from "lucide-react"

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Full-time Role",
    message: ""
  })
  const [gitStatus, setGitStatus] = useState<"idle" | "pushing" | "success" | "error">("idle")
  const [consoleLogs, setConsoleLogs] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGitPush = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setGitStatus("error")
      return
    }

    setGitStatus("pushing")
    setConsoleLogs([])

    const logs = [
      "git checkout -b \"connect/future-collab\"",
      "git add biography.ts skills.json contact_pr.json",
      `git commit -m "initial contact: ${formData.name.slice(0, 15)}..."`,
      "git push origin connect",
      "Counting objects: 100% (3/3), done.",
      "Compressing objects: 100% (3/3), done.",
      "Writing objects: 100% (3/3), 324 bytes, done.",
      "To github.com:anandmahadev/portfolio.git",
      " * [new branch]      connect/future-collab -> connect/future-collab",
      "▸ Pull Request Successfully opened! Anand's inbox notified."
    ]

    logs.forEach((log, index) => {
      setTimeout(() => {
        setConsoleLogs((prev) => [...prev, log])
        if (index === logs.length - 1) {
          setGitStatus("success")
        }
      }, (index + 1) * 350)
    })
  }

  const resetForm = () => {
    setFormData({ name: "", email: "", interest: "Full-time Role", message: "" })
    setGitStatus("idle")
    setConsoleLogs([])
  }

  return (
    <footer id="contact" className="py-16 md:py-24 bg-white text-black border-t-4 border-black font-mono">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-12 space-y-3">
          <p className="text-sm font-mono font-bold text-gray-500">// 06 — Contact</p>
          <h2 className="text-4xl md:text-6xl font-black">
            Let's <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Talk</span>
          </h2>
          <p className="text-lg text-gray-600 font-mono">
            Avg response time: <span className="text-[#2F81F7] font-black">&lt; 6 hours</span>. Open a direct pull request to my inbox.
          </p>
        </div>

        {/* Layout grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column interactive Git PR form */}
          <div className="lg:col-span-7">
            <div className="bg-white border-4 border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              
              {/* Top bar header */}
              <div className="bg-gray-100 border-b-4 border-black px-6 py-4 flex items-center justify-between font-bold">
                <span className="text-xs uppercase flex items-center gap-1.5 font-black text-gray-500">
                  <Terminal className="w-4 h-4 text-black" />
                  open-pull-request.git
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-green-100 border border-green-500 rounded text-green-700 animate-pulse">
                  STABLE CONNECTION
                </span>
              </div>

              {/* Form panel */}
              {gitStatus !== "pushing" && gitStatus !== "success" ? (
                <form onSubmit={handleGitPush} className="p-6 md:p-8 space-y-6 text-xs md:text-sm text-black">
                  <p className="text-gray-500 font-bold font-mono">
                    <span className="text-[#FF6B7A] font-black">▸</span> git checkout -b <span className="text-purple-600">"connect/future-collab"</span>
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <label className="text-[#FF6B7A] font-black sm:min-w-[120px]">Name:</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='"Your Name"'
                        className="flex-1 bg-white border-2 border-black rounded-xl px-4 py-2 font-mono font-bold outline-none focus:bg-gray-50 focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <label className="text-[#FF6B7A] font-black sm:min-w-[120px]">Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='"your@email.com"'
                        className="flex-1 bg-white border-2 border-black rounded-xl px-4 py-2 font-mono font-bold outline-none focus:bg-gray-50 focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <label className="text-[#FF6B7A] font-black sm:min-w-[120px]">Interest:</label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="flex-1 bg-white border-2 border-black rounded-xl px-4 py-2 font-mono font-bold outline-none focus:bg-gray-50 focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      >
                        <option value="Full-time Role">"Full-time Role"</option>
                        <option value="Contract Role">"Contract Role"</option>
                        <option value="Co-Founding Project">"Co-Founding Project"</option>
                        <option value="General Query">"General Query"</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#FF6B7A] font-black">Message:</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder='"What project are we building?"'
                        className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-mono font-bold outline-none focus:bg-gray-50 focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
                      />
                    </div>
                  </div>

                  <div className="text-gray-500 font-bold font-mono space-y-1">
                    <p><span className="text-[#FF6B7A] font-black">▸</span> git commit -m <span className="text-purple-600">"initial contact"</span></p>
                    <p><span className="text-[#FF6B7A] font-black">▸</span> git push origin connect</p>
                  </div>

                  {gitStatus === "error" && (
                    <div className="flex items-center gap-2 text-red-500 font-bold animate-bounce text-xs">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>Syntax Error: Complete all input fields to open push stream.</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-black border-2 border-black text-white hover:bg-gray-900 font-black rounded-2xl shadow-[4px_4px_0px_0px_#FF6B7A] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer text-sm"
                    >
                      Open Pull Request →
                      <CornerDownLeft className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              ) : (
                
                /* Terminal push logging output screen */
                <div className="p-6 md:p-8 space-y-2.5 bg-black text-[#00FF66] font-mono text-xs md:text-sm min-h-[300px] flex flex-col justify-between">
                  <div className="space-y-1">
                    {consoleLogs.map((log, i) => (
                      <div key={i} className="flex gap-2">
                        <span className="text-gray-600 select-none">{i + 1}</span>
                        <span className={log.startsWith("▸") || log.includes("Successfully") ? "text-[#00FF66] font-extrabold" : "text-gray-300"}>
                          {log}
                        </span>
                      </div>
                    ))}
                  </div>

                  {gitStatus === "success" && (
                    <div className="pt-4">
                      <button
                        onClick={resetForm}
                        className="px-4 py-2.5 bg-white border-2 border-black text-black font-black font-mono rounded-xl shadow-[3px_3px_0px_0px_#00FF66] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer text-xs"
                      >
                        Submit another Pull Request
                      </button>
                    </div>
                  )}
                </div>

              )}

            </div>
          </div>

          {/* Right Column details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct introduction */}
            <div className="bg-white border-4 border-black rounded-[32px] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4">
              <span className="font-mono text-xs font-black text-[#2F81F7] uppercase tracking-widest">
                // System Collaboration
              </span>
              <p className="text-[#393939] font-sans font-medium text-sm leading-relaxed">
                ● Trusted by founders & teams to build production-grade AI systems, agentic pipelines, and responsive neubrutalist frontends.
              </p>
            </div>

            {/* Social Cards */}
            <div className="space-y-3 font-mono">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">// channels</p>
              
              <a
                href="https://github.com/anandmahadev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_#FDB927] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
              >
                <span className="flex items-center gap-2.5 text-black font-extrabold text-sm">
                  <Github className="w-5 h-5" />
                  <span>github.com/anandmahadev</span>
                </span>
                <span className="text-gray-400 font-extrabold group-hover:text-black">→</span>
              </a>

              <a
                href="https://linkedin.com/in/anandmahadev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_#2F81F7] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
              >
                <span className="flex items-center gap-2.5 text-black font-extrabold text-sm">
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/anandmahadev</span>
                </span>
                <span className="text-gray-400 font-extrabold group-hover:text-black">→</span>
              </a>

              <a
                href="mailto:anand@portfolio.com"
                className="flex items-center justify-between p-4 bg-white border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_#FF6B7A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
              >
                <span className="flex items-center gap-2.5 text-black font-extrabold text-sm">
                  <Mail className="w-5 h-5" />
                  <span>anand@portfolio.com</span>
                </span>
                <span className="text-gray-400 font-extrabold group-hover:text-black">→</span>
              </a>
            </div>

          </div>

        </div>

        {/* Brutalist copy tags */}
        <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-bold gap-4">
          <div className="space-y-1 text-center md:text-left font-sans">
            <p className="font-mono text-black font-black">© 2025 ANAND — AI Systems Architect. All rights reserved.</p>
            <p className="text-[11px] text-gray-500">Built by Anand for CardioNerve & Thinknode AI.</p>
          </div>
          <div className="font-mono text-[10px] text-gray-400 hover:text-black transition-colors">
            Inspired by <a href="https://dshenoyh.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#2F81F7]">dshenoyh.in</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
