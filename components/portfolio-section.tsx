import Link from "next/link"

export function PortfolioSection() {
  const projects = [
    {
      title: "Holy Rosary Catholic Church",
      category: "Religious Architecture",
      location: "Wuse Zone 2, Abuja",
      status: "Construction Ongoing",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Chessville Corte Residential Estate",
      category: "Residential Development",
      location: "Kafe District, Abuja",
      status: "Construction Ongoing",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Knowledge Court Estate",
      category: "Residential Development",
      location: "Airport Road, Abuja",
      status: "Tendering Stage",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "BUA Estate",
      category: "Luxury Residential",
      location: "Kado, Abuja",
      status: "Construction Ongoing",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "795 Corner Office Building",
      category: "Commercial",
      location: "Jabi, Abuja",
      status: "Construction Ongoing",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Barumark Estate Apartments",
      category: "Residential",
      location: "Wuye, Abuja",
      status: "Completed",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Best Projects</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600">
              Showcasing our expertise in design, project management, and construction services across various sectors
              in Abuja and beyond.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200 mb-1">{project.category}</p>
                    <p className="text-sm text-gray-300">{project.location}</p>
                    <div className="mt-3">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
