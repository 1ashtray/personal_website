import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function HardwarePage() {
  const projects = [
    { id: "peter-the-piss-bot", title: "peter the piss bot" },
    { id: "k9-unit", title: "k9 unit" },
    { id: "cansat", title: "CanSat" },
    { id: "btys", title: "BTYS" },
    { id: "rc-plane", title: "RC plane" },
  ]

  return (
    <div className="dark min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/professional">
          <Button variant="ghost" className="mb-8 text-foreground hover:text-purple-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Professional
          </Button>
        </Link>

        <div className="relative">
          <div className="absolute -top-20 right-0 blur-[100px] opacity-20">
            <div className="w-[300px] h-[300px] bg-purple-500 rounded-full" />
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-foreground mb-12">Hardware Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Link key={project.id} href={`/professional/hardware/${project.id}`}>
                  <div className="group relative overflow-hidden rounded-lg border border-white/20 bg-black/10 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] cursor-pointer">
                    {/* Placeholder image */}
                    <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-black/40 flex items-center justify-center">
                      <img
                        src={`/.jpg?height=300&width=400&query=${encodeURIComponent(project.title + " hardware project")}`}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                      />
                    </div>

                    {/* Project title */}
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
