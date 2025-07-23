import {
  Facebook,
  Github,
  Instagram,
  Linkedin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 mt-20">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        <div>
          <p className="text-lg font-semibold">Sintonia Solutions • Mentoria em Tráfego e IA</p>
          <p className="text-sm text-gray-400 mt-1">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
        <div className="flex gap-4 text-lg">
          <a
            href="https://www.instagram.com/sintoniasolutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://github.com/paulocesardev8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/paulo-cesar-696a50158/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/sintoniasolutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Facebook size={20} />
          </a>
         
          <br></br>
          <a href="/politica-de-privacidade" className="hover:text-white">
             Política de Privacidade
          </a>
        

        </div>
      </div>
    </footer>
  );
}
