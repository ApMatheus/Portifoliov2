"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-float-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-300/20 rounded-full animate-float-fast"></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-cyan-400/25 rounded-full animate-float-medium"></div>

      {/* Floating lines */}
      <div className="absolute top-1/2 left-1/6 w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-float-horizontal"></div>
      <div className="absolute bottom-1/3 right-1/6 w-12 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-float-horizontal-reverse"></div>

      {/* Floating squares */}
      <div className="absolute top-1/5 right-1/5 w-4 h-4 border border-cyan-400/20 rotate-45 animate-float-rotate"></div>
      <div className="absolute bottom-1/5 left-1/5 w-3 h-3 border border-blue-400/20 rotate-45 animate-float-rotate-reverse"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-cyan-400/10 h-full"></div>
          ))}
        </div>
      </div>
    </div>
  )
}
