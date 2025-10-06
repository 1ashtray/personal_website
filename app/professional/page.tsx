import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ProfessionalPortfolio() {
  return (
    <div className="dark min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-foreground hover:text-purple-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="relative">
          {/* Purple glow effect */}
          <div className="absolute -top-20 right-0 blur-[100px] opacity-20">
            <div className="w-[300px] h-[300px] bg-purple-500 rounded-full" />
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-foreground mb-12 text-center">Professional Portfolio</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Link href="/professional/software">
                <button className="w-full px-12 py-6 text-xl font-semibold text-white bg-black/10 backdrop-blur-sm border-2 border-white/50 rounded-lg hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300">
                  Software Projects
                </button>
              </Link>

              <Link href="/professional/hardware">
                <button className="w-full px-12 py-6 text-xl font-semibold text-white bg-black/10 backdrop-blur-sm border-2 border-white/50 rounded-lg hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300">
                  Hardware Projects
                </button>
              </Link>

              <Link href="/professional/maths">
                <button className="w-full px-12 py-6 text-xl font-semibold text-white bg-black/10 backdrop-blur-sm border-2 border-white/50 rounded-lg hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300">
                  Experience
                </button>
              </Link>

              <Link href="/professional/awards">
                <button className="w-full px-12 py-6 text-xl font-semibold text-white bg-black/10 backdrop-blur-sm border-2 border-white/50 rounded-lg hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300">
                  Awards
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
