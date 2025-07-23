import Image from 'next/image';

// Seus depoimentos, incluindo os novos
const depoimentos = [
  {
    nome: 'Rafael',
    cargo: 'Hipnoterapeuta',
    fraseDestaque: 'A mentoria dele abriu o leque e me deu o direcionamento que faltava.',
    tipo: 'video',
    videoId: 'Qc7Q2fy41H8'
  },
  {
    nome: 'Osires',
    cargo: 'Professor e Acupunturista',
    fraseDestaque: 'Aprendi a anunciar do zero e gerei vendas de sessões de acupuntura.',
    tipo: 'video',
    videoId: 'eH6d_45k2dM'
  },
  {
    nome: 'Ana Flavia',
    cargo: 'Vendedora',
    fraseDestaque: 'Paulo tem uma didática incrível. Me senti segura pra aplicar.', // Corrigi o '\.'
    tipo: 'texto',
    imagemUrl: '/images/anaflavia.png'
  },
  {
    nome: 'Ronald',
    cargo: 'Empresário',
    fraseDestaque: 'Aulas práticas e diretas ao ponto, sem enrolação. Recomendo!',
    tipo: 'texto',
    imagemUrl: '/images/ronald.png'
  },
  {
    nome: 'Antônio',
    cargo: 'Fisioterapeuta',
    fraseDestaque: 'O suporte individual fez toda a diferença para o meu negócio local.',
    tipo: 'texto',
    imagemUrl: '/images/antonio.png'
  },
];

export default function DepoimentosSection() {
  return (
    <section className="mt-32 py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Não Acredite Apenas em Mim
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            Veja o que meus alunos dizem sobre a transformação que tiveram.
          </p>
        </div>

        {/* PARTE 1: Grid para os depoimentos em vídeo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {depoimentos.filter(d => d.tipo === 'video' && d.videoId).map(depoimento => (
            <div key={depoimento.nome} className="bg-gray-900 rounded-2xl p-6 ring-1 ring-white/10 shadow-lg">
              <div className="aspect-video w-full rounded-lg shadow-lg border-0 overflow-hidden">
                <iframe 
                  className="w-full h-full"
                  // AQUI ESTÁ A CORREÇÃO PRINCIPAL: Usando o videoId de cada depoimento
                  src={`https://www.youtube.com`}
                  title={`Depoimento de ${depoimento.nome}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <blockquote className="mt-6 text-xl text-gray-200 italic">
                “{depoimento.fraseDestaque}”
              </blockquote>
              <p className="mt-4 font-semibold text-white">{depoimento.nome}</p>
              <p className="text-sm text-blue-400">{depoimento.cargo}</p>
            </div>
          ))}
        </div>

        {/* Divisor */}
        <div className="text-center my-16">
          <p className="text-gray-500">E muitas outras histórias de sucesso...</p>
        </div>
        
        {/* PARTE 2: Grid para os depoimentos em texto (O 'RESTANTE DO CÓDIGO') */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.filter(d => d.tipo === 'texto').map(depoimento => (
                <div key={depoimento.nome} className="bg-gray-900 p-8 rounded-2xl flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gray-700 mb-4 ring-4 ring-blue-500/50 overflow-hidden relative">
                        {depoimento.imagemUrl && (
                          <Image src={depoimento.imagemUrl} alt={`Foto de ${depoimento.nome}`} layout="fill" className="object-cover"/>
                        )}
                    </div>
                    <blockquote className="text-lg text-gray-300 flex-grow">
                        “{depoimento.fraseDestaque}”
                    </blockquote>
                    <footer className="mt-6">
                        <p className="font-bold text-white">{depoimento.nome}</p>
                        <p className="text-sm text-gray-400">{depoimento.cargo}</p>
                    </footer>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}