import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function MathsPage() {
  return (
    <div className="dark min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
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
            <h1 className="text-5xl font-bold text-foreground mb-6">Maths</h1>
            <p className="text-xl text-muted-foreground">Mathematics projects and research coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
