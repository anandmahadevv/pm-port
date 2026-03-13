import { Briefcase, ExternalLink, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Spotify's Personalization Machine",
      company: "Spotify",
      description: "How Spotify uses machine learning to drive 2B+ hours of listening through features like 'Discover Weekly'.",
      impact: "Increased user retention by 25% and premium conversion by 15%.",
      tags: ["AI/ML", "Algorithmic Personalization", "Retention Growth"],
      image: "/images/spotify-case-study.jpg",
      color: "#1DB954",
      link: "https://atspotify.com/2015/11/what-made-discover-weekly-one-of-our-most-successful-feature-launches-to-date/"
    },
    {
      title: "Netflix's Content Strategic Pivot",
      company: "Netflix",
      description: "A deep dive into Netflix's transition from DVD rentals to an AI-driven global streaming giant.",
      impact: "Scaled from 10M to 260M+ subscribers in over 190 countries.",
      tags: ["Product Strategy", "Market Disruption", "Data-Driven Content"],
      image: "/images/netflix-case-study.jpg",
      color: "#E50914",
      link: "https://hellopm.co/netflix-content-recommendation-system-product-analytics-case-study/"
    },
    {
      title: "Uber's Dynamic Logistics Engine",
      company: "Uber",
      description: "Analyzing the real-time supply and demand balancing through algorithmic 'Surge' pricing.",
      impact: "Optimized driver utilization by 40% in high-demand urban markets.",
      tags: ["Marketplace Logistics", "Dynamic Pricing", "Operational Efficiency"],
      image: "/images/uber-case-study.jpg",
      color: "#000000",
      link: "https://andrewchen.com/the-effects-of-ubers-surge-pricing-a-case-study/"
    }
  ]

  return (
    <section className="bg-[#f5f5f5] py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Top-Tier <span className="text-[#FF4A60]">Case Studies</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl font-medium">
                Detailed teardowns of world-class products. Analyzing how industry leaders solve complex problems through innovative product strategy.
              </p>
            </div>
            <Button variant="link" className="text-xl font-bold p-0 flex items-center gap-2 group">
              Explore Research <ExternalLink className="w-5 h-5 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {caseStudies.map((study, index) => (
              <div key={index} className="flex flex-col group h-full">
                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-1 mb-8">
                  <div className="absolute inset-0 bg-gray-200" style={{ backgroundColor: study.color + '10' }}></div>
                  <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
                    {study.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 bg-black text-white text-xs font-bold rounded-full uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                     <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-black/20 rounded-3xl">
                        <TrendingUp className="w-12 h-12 text-black/20 mb-4" />
                        <span className="text-black/30 font-bold uppercase tracking-widest text-sm">{study.company} Analysis</span>
                     </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col px-2">
                  <h3 className="text-2xl md:text-[28px] font-bold mb-4 leading-tight group-hover:text-[#FF4A60] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 flex-1">
                    {study.description}
                  </p>
                  
                  <div className="bg-white border-2 border-black rounded-2xl p-6 flex items-start gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all mb-8">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase text-gray-500 mb-1">Key Impact</p>
                      <p className="text-base font-bold text-black leading-snug">{study.impact}</p>
                    </div>
                  </div>

                  <a href={study.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full border-2 border-black font-bold h-12 rounded-xl hover:bg-black hover:text-white transition-all flex items-center gap-2">
                      See Teardown <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
