import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function SoftwarePage() {
  const projects = [
    {
      title: "final year optimisation project",
      slug: "final-year-optimisation-project",
      image: "/final-year-optimisation-project.jpg",
    },
    {
      title: "ericsson basestation map",
      slug: "ericsson-basestation-map",
      image: "/ericsson-basestation-map.jpg",
    },
    {
      title: "formula trinity autonomous perception",
      slug: "formula-trinity-autonomous-perception",
      image: "/formula-trinity-autonomous-perception.jpg",
    },
    {
      title: "kaggle forecasting project",
      slug: "kaggle-forecasting-project",
      image: "/kaggle-forecasting-project.jpg",
    },
    {
      title: "manhwa to video converter",
      slug: "manhwa-to-video-converter",
      image: "/manhwa-to-video-converter.jpg",
    },
    {
      title: "buttery unity game",
      slug: "buttery-unity-game",
      image: "/buttery-unity-game.jpg",
    },
    {
      title: "physio guide",
      slug: "physio-guide",
      image: "/physio-guide.jpg",
    },
    {
      title: "patch robowars website",
      slug: "patch-robowars-website",
      image: "/patch-robowars-website.jpg",
    },
  ]

  return (
    <div className="dark min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/professional">
          <Button variant="ghost" className="mb-8 text-foreground hover:text-purple-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Professional
          </Button>
        </Link>

        <div className="relative mb-12">
          <div className="absolute -top-20 right-0 blur-[100px] opacity-20">
            <div className="w-[300px] h-[300px] bg-purple-500 rounded-full" />
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-foreground mb-6">Software</h1>
            <p className="text-xl text-muted-foreground mb-12">Explore my software development projects</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/professional/software/${project.slug}`}
              className="group relative overflow-hidden rounded-lg border border-white/20 bg-black/10 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            >
              <div className="aspect-video relative overflow-hidden bg-black/40">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
