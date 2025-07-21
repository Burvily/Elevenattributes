export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div
        className="absolute inset-0 bg-black/40"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-xl md:text-2xl font-light mb-4 text-blue-200">
          Design • Project Management • Construction Services
        </h2>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          We are about to change the way
          <br />
          <em className="font-light italic">you build on construction</em>
        </h1>

        <div className="mt-12">
          <a
            href="#about"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/50 hover:border-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
