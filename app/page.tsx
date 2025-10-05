export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated scan line effect */}
      <div className="scan-line pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#8b5cf610,transparent_50%)]" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-8">
        <div className="glow-border max-w-4xl rounded-xl bg-card/50 p-12 backdrop-blur-sm">
          <h1 className="glow-text mb-6 text-center font-mono text-6xl font-bold tracking-tight">ASHLING McCARTHY</h1>

          <div className="mb-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <p className="mb-8 text-center text-xl text-muted-foreground">Welcome to the digital realm</p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="glow-border group rounded-lg bg-card/30 p-6 transition-all hover:bg-card/50">
              <div className="glow-text mb-3 font-mono text-2xl">01</div>
              <h3 className="mb-2 font-semibold text-foreground">Projects</h3>
              <p className="text-sm text-muted-foreground">Explore my work</p>
            </div>

            <div className="glow-border group rounded-lg bg-card/30 p-6 transition-all hover:bg-card/50">
              <div className="glow-text mb-3 font-mono text-2xl">02</div>
              <h3 className="mb-2 font-semibold text-foreground">About</h3>
              <p className="text-sm text-muted-foreground">Learn more about me</p>
            </div>

            <div className="glow-border group rounded-lg bg-card/30 p-6 transition-all hover:bg-card/50">
              <div className="glow-text mb-3 font-mono text-2xl">03</div>
              <h3 className="mb-2 font-semibold text-foreground">Contact</h3>
              <p className="text-sm text-muted-foreground">Get in touch</p>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="glow-text absolute h-1 w-1 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
