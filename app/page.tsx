"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const rows = Math.floor(canvas.height / 30)
    const binaryStrings: { x: number; y: number; speed: number; text: string }[] = []

    for (let i = 0; i < rows; i++) {
      binaryStrings.push({
        x: Math.random() * canvas.width,
        y: i * 30 + 20,
        speed: Math.random() * 0.5 + 0.3,
        text: Array.from({ length: 50 }, () => (Math.random() > 0.5 ? "1" : "0")).join(" "),
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = "16px monospace"

      binaryStrings.forEach((binary) => {
        const opacity = Math.random() * 0.3 + 0.2
        ctx.fillStyle = `rgba(168, 85, 247, ${opacity})`
        ctx.fillText(binary.text, binary.x, binary.y)

        binary.x -= binary.speed

        if (binary.x < -500) {
          binary.x = canvas.width
          binary.text = Array.from({ length: 50 }, () => (Math.random() > 0.5 ? "1" : "0")).join(" ")
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="dark min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative">
        <div className="absolute inset-0 blur-[100px] opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground text-center mb-4 tracking-tight">
            Ashling McCarthy
          </h1>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/professional">
              <button className="group relative px-12 py-6 text-xl font-medium text-white transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Professional Portfolio</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/10 to-purple-400/10 backdrop-blur-sm" />
                <div className="absolute inset-0 rounded-lg border-2 border-white/30 group-hover:border-purple-400/60 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-shadow duration-300" />
              </button>
            </Link>

            <Link href="/unprofessional">
              <button className="group relative px-12 py-6 text-xl font-medium text-white transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Unprofessional Portfolio</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/10 to-purple-400/10 backdrop-blur-sm" />
                <div className="absolute inset-0 rounded-lg border-2 border-white/30 group-hover:border-purple-400/60 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-shadow duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
