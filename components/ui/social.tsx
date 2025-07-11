import { Social as SocialType } from "@/types/portifolio";
import { Instagram, Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

export default function Social({ social }: { social: SocialType }) {

  return (
    <div className="flex justify-center gap-6">
      {social.link.map((item) => (
        <Link key={item.name} href={item.link} target="_blank" className="text-slate-400 hover:text-cyan-400 transition-colors">
          {item.name === "whatsapp" && <Phone className="w-6 h-6" />}
          {item.name === "linkedin" && <Linkedin className="w-6 h-6" />}
          {item.name === "github" && <Github className="w-6 h-6" />}
          {item.name === "instagram" && <Instagram className="w-6 h-6" />}
        </Link>
      ))}
    </div>
  )
}