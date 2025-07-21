"use client"

import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      text: "Outstanding job and exceeded all expectations. It was a pleasure to work with Eleven Attribute on our residential project and we look forward to working with them again.",
      author: "BUA Group Representative",
    },
    {
      text: "Their project management expertise and attention to detail made our construction process smooth and efficient. Highly recommended for any construction project.",
      author: "Holy Rosary Catholic Church",
    },
    {
      text: "Professional service delivery and quality workmanship. Eleven Attribute Limited delivered our project on time and within budget.",
      author: "Chessville Development",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-gray-900 text-white relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/placeholder.svg?height=600&width=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-6">
              "{testimonials[currentSlide].text}"
            </blockquote>
            <cite className="text-blue-300 font-medium">— {testimonials[currentSlide].author}</cite>
          </div>

          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-600"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
