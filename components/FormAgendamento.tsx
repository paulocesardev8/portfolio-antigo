"use client";

export default function FormAgendamento() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const nome = data.get("nome");
    const email = data.get("email");
    const whatsapp = data.get("whatsapp");
    const link = `https://wa.me/55${whatsapp?.toString().replace(/\D/g, "")}?text=Olá, me chamo ${nome} e quero agendar minha aula de Tráfego Pago! Meu e-mail é ${email}.`;
    window.location.href = link;
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Seu nome"
        className="p-3 rounded bg-white text-gray-900 placeholder-gray-600"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Seu melhor e-mail"
        className="p-3 rounded bg-white text-gray-900 placeholder-gray-600"
        required
      />
      <input
        type="tel"
        name="whatsapp"
        placeholder="WhatsApp com DDD"
        className="p-3 rounded bg-white text-gray-900 placeholder-gray-600"
        required
      />
      <button
        type="submit"
        className="bg-white text-blue-700 font-bold py-3 rounded hover:bg-gray-100 transition"
      >
        🔒 Quero agendar minha aula agora
      </button>
    </form>
  );
}
