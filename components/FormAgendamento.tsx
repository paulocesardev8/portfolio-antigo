'use client';

import { useState } from 'react';

export default function FormAgendamento() {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Primeiro, enviamos os dados para a nossa API de Conversões
      await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Erro ao enviar lead para a CAPI:", error);
      // Mesmo se a CAPI falhar, continuamos o fluxo para o usuário não ser prejudicado.
    }

    // 2. Depois, montamos a URL do WhatsApp como antes
    const meuNumero = '5519987358774'; 
    const whatsappClienteLimpo = formData.whatsapp.replace(/\D/g, '');
    const mensagem = `Olá, me chamo ${formData.name} e quero agendar minha aula de Tráfego Pago!\n\nMeu e-mail é: ${formData.email}\nMeu WhatsApp é: ${whatsappClienteLimpo}`;
    const urlWhatsApp = `https://wa.me/${meuNumero}?text=${encodeURIComponent(mensagem)}`;
    
    // 3. E finalmente, redirecionamos o usuário
    window.location.href = urlWhatsApp;
    
    // Não precisamos mais resetar o isSubmitting, pois a página será redirecionada.
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* ... (seus campos de input permanecem os mesmos) ... */}
      <input type="text" name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required className="..." />
      <input type="email" name="email" placeholder="Seu melhor e-mail" value={formData.email} onChange={handleChange} required className="..." />
      <input type="tel" name="whatsapp" placeholder="WhatsApp com DDD" value={formData.whatsapp} onChange={handleChange} required className="..." />
      
      <button
        type="submit"
        disabled={isSubmitting} // Desabilita o botão durante o envio
        className="bg-white text-blue-700 ... disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Agendando...' : 'Quero agendar minha aula agora'}
      </button>
    </form>
  );
}
