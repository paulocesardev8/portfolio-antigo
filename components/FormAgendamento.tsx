'use client'; // Formulários precisam ser componentes de cliente

import { useState } from 'react';

export default function FormAgendamento() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // AQUI ESTÁ A CORREÇÃO PRINCIPAL:
    // 1. Definimos o SEU número de WhatsApp como o destino.
    const meuNumero = '5519987358774'; 

    // 2. Limpamos o número do cliente para garantir que ele vá na mensagem sem caracteres especiais.
    const whatsappClienteLimpo = formData.whatsapp.replace(/\D/g, '');

    // 3. Montamos uma mensagem pré-preenchida muito mais completa para você.
    const mensagem = `Olá, me chamo ${formData.name} e quero agendar minha aula de Tráfego Pago!\n\nMeu e-mail é: ${formData.email}\nMeu WhatsApp é: ${whatsappClienteLimpo}`;

    // 4. Codificamos a mensagem para que ela funcione corretamente na URL.
    const urlWhatsApp = `https://wa.me/${meuNumero}?text=${encodeURIComponent(mensagem)}`;

    // 5. Redirecionamos o usuário para o seu WhatsApp.
    window.location.href = urlWhatsApp;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        required
        className="bg-white/90 text-gray-900 placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Seu melhor e-mail"
        value={formData.email}
        onChange={handleChange}
        required
        className="bg-white/90 text-gray-900 placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="tel"
        name="whatsapp"
        placeholder="WhatsApp com DDD"
        value={formData.whatsapp}
        onChange={handleChange}
        required
        className="bg-white/90 text-gray-900 placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-white text-blue-700 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H9V7a1 1 0 012 0v1a1 1 0 102 0V7a3 3 0 00-3-3z" /></svg>
        Quero agendar minha aula agora
      </button>
    </form>
  );
}
