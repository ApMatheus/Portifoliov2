"use client"

import { Github, Linkedin } from "lucide-react";

import { Mail } from "lucide-react";

import { Link } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer id="contact" className="py-12 px-4 border-t border-cyan-500/20 pt-32 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Vamos Trabalhar Juntos?</h3>
          <p className="text-slate-300 mb-6">Estou sempre aberto a novos desafios e oportunidades interessantes.</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
          >
            <Mail className="w-5 h-5 mr-2" />
            Entrar em Contato
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Github className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <Mail className="w-6 h-6" />
          </Link>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Desenvolvedor Full Stack. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}