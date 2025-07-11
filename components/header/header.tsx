"use client"
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {  

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Experiência", href: "#experience" },
    { name: "Contato", href: "#contact" },
  ]


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full  flex items-center justify-center">
              <Image src="/icon.svg" alt="Logo" width={32} height={32} className="w-8 h-8 rounded-xl"  />
            </div>
            <span className="text-white font-bold text-lg">DevMatheusAp</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 text-slate-300`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-left text-sm font-medium transition-colors hover:text-cyan-400 text-slate-300`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}