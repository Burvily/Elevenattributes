import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioGrid } from "@/components/portfolio-grid"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Portfolio</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive portfolio of construction and project management services across residential,
                commercial, and institutional projects.
              </p>
            </div>
            <PortfolioGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
