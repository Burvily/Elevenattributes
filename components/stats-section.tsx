export function StatsSection() {
  const stats = [
    { number: "11+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "1000+", label: "Working Hours" },
    { number: "100%", label: "Client Satisfaction" },
  ]

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
