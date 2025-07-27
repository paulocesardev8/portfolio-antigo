// Dentro de app/api/send-lead/route.ts
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const { name, email, whatsapp } = await request.json();

  // Pegamos as variáveis de ambiente que configuramos na Vercel
  const PIXEL_ID = process.env.META_PIXEL_ID_MENTORIA;
  const CAPI_TOKEN = process.env.META_CAPI_TOKEN;

  if (!PIXEL_ID || !CAPI_TOKEN) {
    console.error("Variáveis de ambiente da Meta não configuradas.");
    return NextResponse.json({ success: false, message: 'Configuração do servidor incompleta.' }, { status: 500 });
  }

  // Preparamos os dados do usuário para envio, hasheando para privacidade (uma exigência da Meta)
  const hash = (data: string) => crypto.createHash('sha256').update(data).digest('hex');

  const eventData = {
    event_name: 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    user_data: {
      em: [hash(email.toLowerCase())], // E-mail hasheado
      ph: [hash(whatsapp.replace(/\D/g, ''))], // Telefone hasheado (apenas números)
    },
    action_source: 'website',
    // Um ID único para este evento, para evitar duplicação com o evento do Pixel
    event_id: `server_${Date.now()}`, 
  };

  const payload = {
    data: [eventData],
  };

  try {
    // Fazemos a "ligação" para a API da Meta
    await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${CAPI_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Erro na API de Conversões da Meta:", error);
    return NextResponse.json({ success: false, message: 'Erro ao enviar evento.' }, { status: 500 });
  }
}