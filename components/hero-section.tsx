import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left column info */}
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[64px] font-extrabold md:leading-[75px]">
            I'm <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Anand Mahadev</span>, a 
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block mt-2">Full Stack Developer</span> & 
            <span className="bg-[#FDB927] text-black px-3 py-1 inline-block mt-2">AI Systems Builder</span>
          </h1>

          {/* Availability badge in original yellow-themed style */}
          <div className="inline-flex items-center gap-3 bg-[#FDB927]/10 border-2 border-[#FDB927] rounded-full px-5 py-2 mb-4">
            <span className="w-3 h-3 bg-[#FDB927] rounded-full animate-pulse"></span>
            <span className="text-[#0B0B0B] font-bold text-sm md:text-base uppercase tracking-wider font-mono">
              Available for: Full-time & Contract | Mangaluru, India 🇮🇳
            </span>
          </div>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl font-mono">
            Building high-performance web systems. I ship AI-powered products & full-stack systems that solve real health and business problems. Currently scaling CardioNerve and Thinknode AI.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <a href="#contact" className="w-full sm:w-auto">
              <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[32px] text-base md:text-lg font-semibold h-auto w-full sm:min-w-[200px] flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Get in touch
              </Button>
            </a>
            <a href="#projects" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[32px] text-base md:text-lg font-semibold h-auto w-full sm:min-w-[200px] flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all"
              >
                <FolderOpen className="w-5 h-5" />
                See My Work
              </Button>
            </a>
          </div>
        </div>

        {/* Right column terminal in original neubrutalist panel styling */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md bg-[#000] border-4 border-black text-[#00FF66] rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-mono text-sm leading-relaxed overflow-hidden">
            
            {/* Header bar */}
            <div className="border-b border-gray-800 pb-3 mb-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-[#00FF66] rounded-full"></span>
              </div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">anand@portfolio ~</span>
            </div>

            {/* Terminal prompt log */}
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-gray-400"><span className="text-[#FF007F]">▸</span> cat biography.ts</p>
                <div className="pl-4 text-cyan-400 text-xs md:text-sm">
                  <span className="text-[#FF007F]">class</span> <span className="text-yellow-400">Anand</span> &#123;<br />
                  &nbsp;&nbsp;name = <span className="text-white">'Anand'</span>;<br />
                  &nbsp;&nbsp;role = <span className="text-white">'AI Systems Architect'</span>;<br />
                  &nbsp;&nbsp;vision = <span className="text-white">'Building the next AI era'</span>;<br /><br />
                  &nbsp;&nbsp;<span className="text-yellow-400">getCoreStack</span>() &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FF007F]">return</span> [<span className="text-white">'Python'</span>, <span className="text-white">'React'</span>, <span className="text-white">'Agentic-UI'</span>];<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                  &#125;
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-gray-400"><span className="text-[#FF007F]">▸</span> ./launch_mission --status</p>
                <div className="pl-4 text-[#00FF66] text-xs md:text-sm space-y-0.5">
                  <p>▸ System Stable. All nodes operational.</p>
                  <p>▸ Current goal: Scaling Thinknode AI.</p>
                </div>
              </div>

              {/* Cursor blinking */}
              <div className="flex items-center gap-1 text-gray-400 pt-2">
                <span>▸</span>
                <span className="w-2.5 h-4 bg-[#00FF66] animate-pulse"></span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
