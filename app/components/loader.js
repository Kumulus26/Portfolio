'use client'

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="relative">
        {/* Coins supérieurs */}
        <div className="absolute -top-20 -left-20 w-16 h-16 border-t border-l border-black"></div>
        <div className="absolute -top-20 -right-20 w-16 h-16 border-t border-r border-black"></div>
        
        {/* Texte LOADING */}
        <h2 className="text-black text-4xl font-light tracking-widest animate-pulse">
          LOADING
        </h2>
        
        {/* Coins inférieurs */}
        <div className="absolute -bottom-20 -left-20 w-16 h-16 border-b border-l border-black"></div>
        <div className="absolute -bottom-20 -right-20 w-16 h-16 border-b border-r border-black"></div>
      </div>
    </div>
  )
}

export default Loader
