"use client";
import { useState } from "react";
import Image from "next/image";
import { 
  CheckCircleIcon, 
  VideoCameraIcon,
  StarIcon,
  LockClosedIcon,
  ArrowRightIcon,
  ChartBarIcon,
  ChevronDownIcon
} from '@heroicons/react/24/solid';

// --- DADOS DA OFERTA ---
const oferta = {
  precoDe: "970,00",
  precoPor: "67,00",
  linkCheckout: "https://pay.kiwify.com.br/Hz7fNnm" 
};

const modulos = [
  { numero: "01", titulo: "Configuração da Conta", desc: "Como subir campanhas sem medo de bloqueios e configurando sua conta corretamente." },
  { numero: "02", titulo: "A Mina de Ouro (Públicos)", desc: "Encontrando quem está com o cartão na mão para comprar o seu produto." },
  { numero: "03", titulo: "Criativos que Convertem", desc: "Modelos de imagem e vídeo que eu uso para ter ROI positivo (Teste de Criativos)." },
  { numero: "04", titulo: "Análise e Otimização", desc: "Aprenda a ler métricas, filtrar o ruim e otimizar o que está trazendo lucro." },
  { numero: "05", titulo: "Escala e Fases", desc: "A hora de transformar R$ 100 em R$ 500 com segurança e previsibilidade." },
];

// --- LISTA DE DEPOIMENTOS ---
const depoimentos = [
  // VÍDEOS
  { 
    nome: 'Rafael', 
    cargo: 'Hipnoterapeuta', 
    texto: 'A mentoria dele abriu o leque e me deu o direcionamento que faltava.', 
    tipo: 'video', 
    videoId: 'stDFx9zhY7A' 
  },
  { 
    nome: 'Osires', 
    cargo: 'Acupunturista', 
    texto: 'Aprendi a anunciar do zero e gerei vendas de sessões.', 
    tipo: 'video', 
    videoId: '1T2ZvgThsxY' 
  },
  { 
    nome: 'Tom', 
    cargo: 'Fisioterapeuta', 
    texto: 'Contratei agências e não tive o resultado que o Paulo me trouxe.', 
    tipo: 'video', 
    videoId: 'vAMwz-Ql2HE' 
  },
  // TEXTOS
  { 
    nome: 'Ronald', 
    cargo: 'Loja de roupas', 
    texto: 'Tinha dificuldade em estruturar campanha, o Paulo foi simples e me explicou passo a passo.', 
    tipo: 'texto', 
    imagemUrl: '/images/ronald.png' 
  },
  { 
    nome: 'Ana Flávia', 
    cargo: 'Vendedora', 
    texto: 'Que paciência incrível. Me direcionou e explicou várias vezes minhas dúvidas.', 
    tipo: 'texto', 
    imagemUrl: '/images/anaflavia.png' 
  },
  { 
    nome: 'Antônio', 
    cargo: 'Fisioterapeuta', 
    texto: 'Fechei meu primeiro paciente vindo dos anúncios graças às suas orientações.', 
    tipo: 'texto', 
    imagemUrl: '/images/antonio.png'
  },
  { 
    nome: 'Flávia', 
    cargo: 'Terapeuta', 
    texto: 'O que é fórmula de lançamento, VTSD... todos são importantes, mas a sua aula é SENSACIONAL. Direto ao ponto!', 
    tipo: 'texto', 
    imagemUrl: '/images/flamaunique.png'
  },
  { 
    nome: 'Maria José', 
    cargo: 'Coach', 
    texto: 'Fantastico o seu método e paciência em explicar. Simples e direto!', 
    tipo: 'texto', 
    imagemUrl: '/images/renova.png'
  },
  { 
    nome: 'Guilherme', 
    cargo: 'Adestrador', 
    texto: 'Meus resultados no Google melhoraram consideravelmente em comparação com as agências que um dia contratei.', 
    tipo: 'texto', 
    imagemUrl: '/images/guilherme.png'
  }
];

export default function SalesPage() {
  const [mostrarDepoimentos, setMostrarDepoimentos] = useState(false);

  // --- FUNÇÃO CORRIGIDA PARA RASTREAR O CLIQUE ---
  const handleCheckout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // 1. Impede a navegação imediata
    e.preventDefault();

    // 2. Dispara o evento do Facebook se o pixel estiver carregado
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
      console.log("Evento InitiateCheckout disparado!");
    }

    // 3. Aguarda 300ms para o evento sair e então navega
    setTimeout(() => {
      window.location.href = oferta.linkCheckout;
    }, 300);
  };

  return (
    <div className="bg-gray-950 min-h-screen text-white font-sans selection:bg-green-500 selection:text-white">
      
      {/* BARRA DE AVISO TOPO */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-center py-2 px-4 text-xs sm:text-sm font-bold uppercase tracking-widest animate-pulse">
        ⚠️ Oferta por tempo limitado: Acesso completo por preço de uma pizza ⚠️
      </div>

      {/* HERO SECTION - A PROMESSA */}
      <section className="relative pt-12 pb-20 px-6 sm:px-10 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-8">
          <StarIcon className="w-4 h-4 text-yellow-400" />
          <span> Validado por +500 alunos</span> <StarIcon className="w-4 h-4 text-yellow-400" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 max-w-5xl tracking-tight">
          Destrave suas <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> Vendas</span> em 7 Dias com <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Tráfego Pago</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
          Chega de gastar dinheiro à toa. Te ensino a minha estrutura de campanhas para vender qualquer produto (físico ou digital) começando com pouco investimento.
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <span>No vídeo abaixo, eu detalho o método que vamos aplicar, cobrindo desde a configuração da sua conta até a otimização e escala das suas campanhas. </span>
        </div>

        {/* VSL / VÍDEO DE VENDAS */}
        <div className="w-full max-w-4xl aspect-video bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 relative group overflow-hidden mb-12">
             <iframe 
                 className="w-full h-full"
                 src="https://www.youtube.com/embed/5X1TDEdmVGg?rel=0&modestbranding=1" 
                 title="Vídeo de Vendas"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
             ></iframe>
        </div>

        {/* CTA PRINCIPAL COM TRACKING */}
        <div className="flex flex-col items-center gap-4 animate-bounce-slow">
          <a 
            href={oferta.linkCheckout} 
            onClick={handleCheckout}
            className="bg-gradient-to-b from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-bold py-5 px-12 rounded-xl text-xl sm:text-2xl shadow-lg shadow-green-500/30 transition-all transform hover:scale-105 flex items-center gap-3 border-b-4 border-green-900 cursor-pointer"
          >
            <span>QUERO VENDER TODOS OS DIAS</span>
            <ArrowRightIcon className="w-6 h-6" />
          </a>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <LockClosedIcon className="w-4 h-4" />
            <span>Compra 100% Segura • Aula Gravada</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO PASSOS */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            O passo a passo da nossa sessão:
          </h2>
        
          <div className="flex flex-wrap justify-center gap-6">
            {modulos.map((mod, i) => (
              <div key={i} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500/50 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden">
                <span className="absolute -right-4 -top-4 text-8xl font-bold text-gray-800/20 group-hover:text-yellow-900/20 transition-colors select-none">
                  {mod.numero}
                </span>
                <div className="relative z-10">
                  <div className="text-yellow-500 font-bold text-sm mb-2 tracking-wider uppercase">
                    Passo {mod.numero}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{mod.titulo}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE PROVA SOCIAL (DEPOIMENTOS) */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Eles aplicaram e tiveram <span className="text-yellow-400">Resultados Reais</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Não acredite apenas na minha palavra. Veja o que quem já passou pela mentoria tem a dizer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {depoimentos.filter(d => d.tipo === 'video').map((depo, i) => (
              <div key={i} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:border-yellow-500/30 transition-all">
                <div className="aspect-video w-full bg-black">
                   <iframe 
                     className="w-full h-full" 
                     src={`https://www.youtube.com/embed/${depo.videoId}?modestbranding=1&rel=0`} 
                     title={`Depoimento ${depo.nome}`} 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen 
                     loading="lazy"
                   ></iframe>
                </div>
                <div className="p-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-4 h-4" />)}
                  </div>
                  <p className="text-gray-300 text-sm italic mb-3">"{depo.texto}"</p>
                  <p className="text-white font-bold text-sm">{depo.nome} <span className="text-gray-500 font-normal">• {depo.cargo}</span></p>
                </div>
              </div>
            ))}
          </div>

          {!mostrarDepoimentos && (
            <div className="text-center mt-8">
              <button 
                onClick={() => setMostrarDepoimentos(true)}
                className="inline-flex items-center gap-2 text-yellow-400 font-semibold border border-yellow-400/30 bg-yellow-400/10 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 animate-bounce-slow"
              >
                <span>Ver mais depoimentos</span>
                <ChevronDownIcon className="w-5 h-5" />
              </button>
            </div>
          )}

          {mostrarDepoimentos && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-4 duration-700">
              {depoimentos.filter(d => d.tipo === 'texto').map((depo, i) => (
                <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-800 relative">
                  <div className="flex text-yellow-400 mb-3">
                     {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-4 h-4" />)}
                  </div>
                  <p className="text-gray-300 mb-6 relative z-10">"{depo.texto}"</p>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    {depo.imagemUrl ? (
                      <div className="w-10 h-10 rounded-full overflow-hidden relative border border-gray-700">
                        <Image src={depo.imagemUrl} alt={depo.nome} fill className="object-cover" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-500 font-bold border border-gray-700">
                        {depo.nome.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">{depo.nome}</p>
                      <p className="text-gray-500 text-xs">{depo.cargo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </section>

      {/* SEÇÃO ORDER BUMP */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-blue-950/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full"></div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Potencialize seus resultados</h2>
          <p className="text-gray-400 mb-12">
            No checkout, você terá a oportunidade exclusiva de adicionar estes aceleradores:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-dashed border-green-500/50 flex items-start gap-4">
               <div className="bg-green-500/20 p-2 rounded-lg shrink-0">
                  <VideoCameraIcon className="w-8 h-8 text-green-400" />
               </div>
               <div>
                  <h4 className="font-bold text-lg text-green-400">Aula Personalizada</h4>
                  <p className="text-gray-300 text-sm mt-1">Aula particular de tráfego pago (1:1) com gravação e ata com todos os dados da reunião para revisar.</p>
                  <span className="inline-block mt-3 text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Disponível no carrinho</span>
               </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-dashed border-blue-500/50 flex items-start gap-4">
               <div className="bg-blue-500/20 p-2 rounded-lg shrink-0">
                  <ChartBarIcon className="w-8 h-8 text-blue-400" />
               </div>
               <div>
                  <h4 className="font-bold text-lg text-blue-400">Planilha de Públicos Validados</h4>
                  <p className="text-gray-300 text-sm mt-1">Pare de chutar público. Use a minha base de dados validada para nichos variados.</p>
                  <span className="inline-block mt-3 text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Disponível no carrinho</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DA OFERTA FINAL (STACK) COM TRACKING */}
      <section className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-700 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold px-6 py-2 rounded-bl-2xl z-20">
            90% OFF
          </div>

          <div className="text-center mb-10 pt-8 sm:pt-0 relative z-10">
            <h3 className="text-2xl text-yellow-400 font-medium mb-4 sm:mb-2">Aula gravada (06/12/2025)</h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
              <span className="text-xl sm:text-2xl text-red-500 line-through font-medium">
                R$ 970,00
              </span>
              <span className="text-7xl sm:text-6xl font-extrabold text-white">
                R$ 67,00
              </span>
            </div>
            
            <p className="text-gray-400 mt-4 sm:mt-2">Pagamento único. Duração: 4 horas.</p>
          </div>

          <div className="space-y-6 mb-10 text-left max-w-lg mx-auto">
            <p className="text-white font-semibold text-center mb-4 bg-blue-900/30 p-2 rounded-lg border border-blue-500/30">
              O que resolvemos na gravação da aula:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Configuração Blindada:</strong> Revisão da conta de anúncios para evitar bloqueios.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Definição de Público:</strong> Encontrar quem realmente quer comprar de você.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Análise de Criativos:</strong> Feedback de como melhorar as suas imagens e vídeos.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircleIcon className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Estratégia de Escala:</strong> O plano exato para você aumentar o orçamento com segurança.
                </span>
              </li>
              
              <li className="flex items-center gap-3 text-yellow-400 font-bold bg-yellow-500/10 p-2 rounded-lg border border-yellow-500/20">
                <VideoCameraIcon className="w-6 h-6 shrink-0" />
                <span>BÔNUS: Reunião de 30 minutos com um especialista da nossa equipe (disponível por 7 dias, após a compra)</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <a 
              href={oferta.linkCheckout}
              onClick={handleCheckout}
              className="w-full block bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl text-xl shadow-lg transition-transform transform hover:-translate-y-1 mb-4 cursor-pointer"
            >
              QUERO COMPRAR AGORA
            </a>
            
            <p className="text-xs text-gray-500 mt-4">
              Garantia de 7 dias. Se não sentir que valeu a pena, devolvo seu dinheiro.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}