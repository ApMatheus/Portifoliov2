
import { Social } from "@/types/portifolio";
import Socials from "../ui/social";
import Formulario from "./form/sendForm";

export default function Footer({ social }: { social: Social }) {
  return (
    <footer id="contact" className="py-12 px-4 border-t border-cyan-500/20 pt-32 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Vamos Trabalhar Juntos?</h3>
          <p className="text-slate-300 mb-6">Estou sempre aberto a novos desafios e oportunidades interessantes.</p>
          <Formulario />
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <Socials social={social} />
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