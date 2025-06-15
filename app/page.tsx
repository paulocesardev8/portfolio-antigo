'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      {/* Navbar */}
      <header className="bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Paulo Cesar - Portfólio</h1>
        <nav className="space-x-4">
          <a href="#inicio" className="hover:text-green-400">Início</a>
          <a href="#sobre" className="hover:text-green-400">Sobre</a>
          <a href="#projetos" className="hover:text-green-400">Projetos</a>
          <a href="#programacao" className="hover:text-green-400">Programação</a>
          <a href="#contato" className="hover:text-green-400">Contato</a>
        </nav>
      </header>

      {/* Hero */}
        <section
  id="inicio"
  className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-24 px-6"
>
  <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
    
    {/* Texto */}
    <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
      <h2 className="text-5xl font-extrabold mb-6 leading-tight">
        Olá, eu sou o <span className="text-yellow-400">Paulo</span>!
      </h2>
      <p className="text-lg text-gray-300 mb-6">
        Estrategista em <strong>tráfego pago</strong>, <strong>IA</strong> e <strong>automações inteligentes</strong> que geram resultados reais.
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition">
        Baixar CV.
      </button>
    </div>

    {/* Imagem */}
    <div className="md:w-1/2 flex justify-center md:justify-center" data-aos="fade-left">
      <div className="w-80 h-80 overflow-hidden border-4 border-yellow-500 rounded-3xl shadow-xl animate-float">
        <img
          src="/images/paulo.png"
          alt="Paulo"
          className="object-contain w-full h-full bg-gray-900"
        />
      </div>
    </div>
  </div>
</section>



      {/* Sobre */}
      <section id="sobre" className="bg-gray-800 p-10 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4">Quem sou eu?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Meu nome é Paulo e sou estrategista digital com foco em tráfego pago, inteligência artificial e automações que transformam resultados.
          Tenho experiência prática com negócios reais e estou aqui para ajudar marcas e profissionais a desbloquearem seu potencial no ambiente online.
        </p>
      </section>

      {/* Projetos (cards) */}
      <section id="projetos" className="bg-gray-950 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12" data-aos="fade-up">
      Projetos em Destaque
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition" data-aos="fade-up">
        <h3 className="text-xl font-semibold text-white mb-2">Landing Pages</h3>
        <p className="text-gray-300 text-sm mb-4">
          Criação de páginas com foco em conversão usando Next.js, Tailwind e copy persuasiva.
        </p>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="100">
        <h3 className="text-xl font-semibold text-white mb-2">Sistemas Flask</h3>
        <p className="text-gray-300 text-sm mb-4">
          Sistemas web para controle de projetos sociais com autenticação, banco de dados e UX clara.
        </p>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-xl font-semibold text-white mb-2">E-commerce Estratégico</h3>
        <p className="text-gray-300 text-sm mb-4">
          Campanhas segmentadas com ROAS otimizado e automações inteligentes.
        </p>
        <span className="text-green-400 text-xs uppercase">ROI 5+</span>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="300">
        <h3 className="text-xl font-semibold text-white mb-2">Produto Digital Escalado</h3>
        <p className="text-gray-300 text-sm mb-4">
          Criação de funil e testes A/B para leads qualificados e alto engajamento.
        </p>
        <span className="text-green-400 text-xs uppercase">+300 leads</span>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="400">
        <h3 className="text-xl font-semibold text-white mb-2">Mentoria Personalizada</h3>
        <p className="text-gray-300 text-sm mb-4">
          Diagnóstico e plano de ação para negócios locais e serviços escaláveis.
        </p>
        <span className="text-green-400 text-xs uppercase">100% satisfação</span>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="400">
        <h3 className="text-xl font-semibold text-white mb-2">Gestão de Redes Sociais</h3>
        <p className="text-gray-300 text-sm mb-4">
          Inclusão de conteúdo estratégico para engajamento com audiência.
        </p>
        <span className="text-green-400 text-xs uppercase">Método comprovado</span>
      </div>
    </div>
  </div>
</section>


      {/* Programacao */}
      <section id="programacao" className="bg-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white mb-6">Projetos com Código</h2>
          <p className="text-gray-300 mb-8">
            Além do tráfego pago, estou desenvolvendo sistemas em <strong>Next.js</strong>, <strong>Tailwind</strong>, <strong>Python</strong>, <strong>React</strong>, <strong>CSS</strong>, e <strong>Flask</strong> para controle de projetos, gestão de famílias atendidas por ONGs e sites de alta conversão. Todo o código é estruturado com boas práticas, responsividade e foco na performance.
          </p>
          <p className="text-gray-400 italic">"Cada projeto é uma ponte entre a ideia e a execução."</p>

                    <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Linguagens e Tecnologias</h2>
          <div className="flex justify-center flex-wrap gap-6">
            <img src="/icons/html.svg" alt="HTML" className="w-10 h-10" title="HTML" />
            <img src="/icons/css.svg" alt="CSS" className="w-10 h-10" title="CSS" />
           <img src="/icons/javascript.svg" alt="JavaScript" className="w-10 h-10" title="JavaScript" />
            <img src="/icons/python.svg" alt="Python" className="w-10 h-10" title="Python" />
            <img src="/icons/flask.svg" alt="Flask" className="w-10 h-10" title="Flask" />
            <img src="/icons/nextjs.svg" alt="Next.js" className="w-10 h-10" title="Next.js" />
            <img src="/icons/tailwind.svg" alt="Tailwind" className="w-10 h-10" title="Tailwind CSS" />
            <img src="/icons/react.svg" alt="React" className="w-10 h-10" title="React" />
              <img src="/icons/git.svg" alt="Git" className="w-10 h-10" title="Git" />
          </div>
        </div>
        </div>
      </section>
    </main>
  )
}
