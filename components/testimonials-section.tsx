"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Anand delivered exceptional graphic design work for our fitness club. His creativity and attention to detail helped us establish a strong visual brand identity that resonated with our members.",
      name: "Rahul Sharma",
      role: "Owner at TriFitness Fitness Club",
      linkedIn: "https://www.linkedin.com/in/example-fitness-trainer/",
      image: "/professional-man-fitness-trainer.jpg",
    },
    {
      quote:
        "Working with Anand on our social media strategy was a game-changer. His understanding of audience engagement and content creation helped us grow our presence significantly across platforms.",
      name: "Priya Menon",
      role: "Marketing Lead at Kuku FM",
      linkedIn: "https://www.linkedin.com/company/kukufm/",
      image: "/professional-marketing-executive.png",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pt-4 md:pt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3]">
            What my clients say
            <br />
            about <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">my work</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto pb-8">
            Hear from the people I've had the pleasure of working with. Their feedback reflects my commitment to
            delivering quality work and building lasting professional relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <div className="bg-white border-4 border-black rounded-3xl py-8 md:py-10 px-6 md:px-8">
                <div className="absolute -top-6 md:-top-8 left-6 md:left-8 w-12 h-12 md:w-16 md:h-16">
                  <Image
                    src="/images/633b1c81e34cfb82b85454eb-quote-s.png"
                    alt="Quote"
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </div>

                <div className="pt-4">
                  <p className="text-sm md:text-base lg:text-lg mb-6 leading-relaxed">{testimonial.quote}</p>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-base md:text-lg">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm md:text-base">{testimonial.role}</div>
                    </div>
                    <Link
                      href={testimonial.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#2F81F7] text-white px-4 py-2 rounded-full hover:bg-[#2F81F7]/90 transition-colors text-sm font-medium"
                    >
                      <span>View Profile</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
