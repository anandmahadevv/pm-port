"use client"

import React, { useState } from "react"
import { Trophy, FileCode, CheckCircle, Award } from "lucide-react"

export function AwardsSection() {
  const achievements = [
    {
      title: "OpenAI National Buildathon 2025",
      badge: "🚀 National Finalist // Top 70",
      description: "Selected among the Top 70 out of 75,000+ participants nationwide. Developed an innovative AI solution targeting regional language accessibility using GPT-4o fine-tuning. Advanced to the national finals held at Bengaluru.",
      date: "2025 · National Level",
      color: "#FDB927" // Amber
    },
    {
      title: "Thinknode AI — Agency Launch",
      badge: "⚡ Entrepreneurship // Founder",
      description: "Founded and launched an AI automation agency targeting SMBs. Built local-first LLM agents for customer support and automated 10+ workflow pipelines for initial clients. Currently scaling operations.",
      date: "2025 · Solo Founder",
      color: "#2F81F7" // Blue
    },
    {
      title: "SIT 2.0 – International Hackathon",
      badge: "🏆 International Hackathon // 2nd Prize",
      description: "Secured 2nd Prize among 2000+ members (500+ teams) in an intense campus offline hackathon. Developed a decentralized identity system for student records within 24 hours of starting the program.",
      date: "2025 · Team of 4",
      color: "#FF6B7A" // Red
    }
  ]

  const certifications = [
    {
      key: "aws_dev",
      filename: "aws_developer.cert",
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      id: "AWS-DE-2025",
      skills: ["Cloud Architecture", "Serverless Lambda", "S3 Storage Optimization"],
      date: "2025"
    },
    {
      key: "ibm_watson",
      filename: "ibm_ai_chatbot.cert",
      title: "IBM – AI Chatbot & ML",
      issuer: "IBM Watson",
      id: "IBM-ML-992",
      skills: ["Watson Assistant", "Machine Learning pipelines", "Cognitive agents"],
      date: "2025"
    },
    {
      key: "azure_ai900",
      filename: "azure_ai_900.cert",
      title: "Microsoft Azure AI (AI-900)",
      issuer: "Microsoft",
      id: "MS-AI-2025",
      skills: ["Computer Vision", "Natural Language Processing", "Responsible AI"],
      date: "2025"
    },
    {
      key: "aws_genai",
      filename: "aws_generative_ai.cert",
      title: "AWS Generative AI Specialist",
      issuer: "Amazon Web Services",
      id: "AWS-GENAI-01",
      skills: ["Foundation Models", "Bedrock Integration", "Stable Diffusion"],
      date: "2025"
    },
    {
      key: "ms_pl300",
      filename: "data_analyst_pl300.cert",
      title: "Data Analyst Associate (PL-300)",
      issuer: "Microsoft",
      id: "MS-PL300",
      skills: ["Data Modeling", "Visualization", "PowerBI Business Intelligence"],
      date: "2025"
    }
  ]

  const [activeCert, setActiveCert] = useState(certifications[0])

  return (
    <section id="out-of-syllabus" className="py-16 md:py-24 bg-white text-black border-t-4 border-black">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 space-y-3 text-center">
          <p className="text-sm font-mono font-bold text-gray-500">// 04 — Beyond the Classroom</p>
          <h2 className="text-4xl md:text-6xl font-black">
            Out of <span className="bg-[#FDB927] text-black px-3 py-1 inline-block">Syllabus</span>
          </h2>
          <p className="text-lg text-gray-600 font-mono max-w-xl mx-auto">
            Hackathons, achievements, certifications — the stuff textbooks don't cover.
          </p>
        </div>

        {/* 3 columns Achievements block */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black rounded-3xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-6 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-full border-2 border-black inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      style={{ backgroundColor: item.color }}>
                  {item.badge}
                </span>
                
                <h3 className="text-xl font-black text-[#0B0B0B] leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-sm text-[#393939] leading-relaxed font-sans font-medium">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t-2 border-black pt-4 font-mono text-xs text-gray-500 font-bold">
                <span>{item.date}</span>
                <a href="#" className="text-black hover:underline font-extrabold flex items-center gap-1">
                  View Recognition →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive certifications directory */}
        <div className="space-y-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest font-mono">
            // Interactive Credentials Selector
          </p>

          <div className="grid lg:grid-cols-12 border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
            
            {/* Left column list switcher */}
            <div className="lg:col-span-5 bg-gray-50 p-6 space-y-2.5 border-b-4 lg:border-b-0 lg:border-r-4 border-black font-mono">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest px-2.5 pb-2">
                📂 verified_credentials/
              </p>
              
              {certifications.map((cert) => (
                <button
                  key={cert.key}
                  onClick={() => setActiveCert(cert)}
                  className={`w-full flex items-center gap-2.5 px-4 py-3 rounded-xl text-left transition-all border-2 border-black font-bold cursor-pointer ${
                    activeCert.key === cert.key
                      ? "bg-[#2F81F7] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                      : "bg-white text-black hover:bg-gray-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  }`}
                >
                  <FileCode className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{cert.filename}</span>
                </button>
              ))}
            </div>

            {/* Right column certification details reader */}
            <div className="lg:col-span-7 bg-white p-8 flex flex-col justify-between min-h-[320px] font-mono">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs text-green-600 font-bold border-b-2 border-dashed border-gray-200 pb-4">
                  <CheckCircle className="w-4 h-4" />
                  <span>Credential Status: Active & Secured</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-[#0b0b0b]">{activeCert.title}</h3>
                  <p className="text-sm text-gray-500 font-bold">
                    Issuer: <span className="text-[#2F81F7]">{activeCert.issuer}</span>
                  </p>
                </div>

                {/* Competencies */}
                <div className="space-y-2.5">
                  <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                    // Validated Competencies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeCert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-gray-100 border-2 border-black rounded-lg text-black font-bold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ID verification */}
              <div className="border-t-2 border-black pt-4 mt-8 flex items-center justify-between text-xs text-gray-500 font-bold">
                <span>ID: <span className="text-black font-black">{activeCert.id}</span></span>
                <a
                  href="#"
                  className="text-black underline font-black hover:text-[#2F81F7]"
                >
                  Verify Credential →
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
