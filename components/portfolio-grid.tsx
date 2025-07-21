"use client"

import { useState } from "react"

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      title: "Holy Rosary Catholic Church",
      category: "Religious",
      location: "Wuse Zone 2, Abuja",
      description: "Remodelling of existing church with 80% increased seating capacity",
      status: "Construction Ongoing",
      role: "Architectural Design & FCDA Approval",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Chessville Corte Residential Estate",
      category: "Residential",
      location: "Kafe District, Abuja",
      description: "16ha estate with 144 units - 5BR detached, 4BR semi-detached, and terrace houses",
      status: "Construction Ongoing",
      role: "Complete Design & Project Management",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Knowledge Court Estate",
      category: "Residential",
      location: "Airport Road, Abuja",
      description: "15ha estate with 422 units of 1-5 bedroom houses within AUST",
      status: "Tendering Stage",
      role: "Design & Project Management",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "BUA Estate",
      category: "Luxury",
      location: "Kado, Abuja",
      description: "204 units of 5BR detached houses with recreational facilities",
      status: "Construction Ongoing",
      role: "Project Management Team",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "795 Corner Office Building",
      category: "Commercial",
      location: "Jabi, Abuja",
      description: "3-floor office complex with bank space and restaurant",
      status: "Construction Ongoing",
      role: "Architectural Design & BOQ",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Barumark Estate Apartments",
      category: "Residential",
      location: "Wuye, Abuja",
      description: "48 units of 2 bedroom apartments",
      status: "Completed",
      role: "Design & Project Architecture",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Serviced Apartments",
      category: "Residential",
      location: "Gwarimpa, Abuja",
      description: "10 units of 2 bedroom serviced apartments",
      status: "Near Completion",
      role: "Complete Design & Consultancy",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Terrace Apartments",
      category: "Residential",
      location: "Dutse, Abuja",
      description: "5 units of 2 and 3 bedroom terrace apartments",
      status: "Construction Ongoing",
      role: "Design & BOQ",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "BUA Estate Landscaping",
      category: "Landscaping",
      location: "Kado, Abuja",
      description: "Complete landscaping for all green areas in BUA Estate",
      status: "Ongoing",
      role: "Design & Execution",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const categories = ["All", "Residential", "Commercial", "Religious", "Luxury", "Landscaping"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : project.status === "Construction Ongoing"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                <span className="text-sm text-gray-500">{project.location}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="border-t pt-4">
                <p className="text-sm text-gray-500">
                  <strong>Our Role:</strong> {project.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
