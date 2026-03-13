import { Settings, Code, Layers, Zap } from "lucide-react"

export function TechStackSection() {
  const stack = [
    {
      category: "Product Management",
      tools: ["Jira", "Mixpanel", "Confluence", "Notion", "Productboard", "Segment"],
      icon: <Layers className="w-6 h-6" />
    },
    {
      category: "AI & Development",
      tools: ["Python", "OpenAI API", "PyTorch", "React", "Node.js", "SQL", "Git"],
      icon: <Code className="w-6 h-6" />
    },
    {
      category: "Design & UX",
      tools: ["Figma", "Adobe Suite", "FigJam", "Storybook", "Tailwind CSS"],
      icon: <Settings className="w-6 h-6" />
    }
  ]

  return (
    <section className="bg-black py-16 md:py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
             <h2 className="text-4xl md:text-5xl font-bold bg-[#2F81F7] inline-block px-4 py-2 transform -rotate-1">
                Tech Stack & Tools
             </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stack.map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#2F81F7] rounded-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{item.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold border border-white/5 md:hover:border-white/20 transition-all">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
