import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { nome, email, mensagem } = await request.json();

  try {
    const response = await fetch(`https://script.google.com/macros/s/AKfycbyvRZykdhsV_XIRQgQbOuXv_bkp9hjIMf0T9Kg7awwAg79RRLRyq7wfBxM0jpKtU9qK3Q/exec?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&mensagem=${encodeURIComponent(mensagem)}`, {
      method: 'GET',
      redirect: 'follow',
    })

    if (!response.ok) {
      return NextResponse.json({ message: "Erro ao enviar dados", error: response.statusText }, { status: response.status });
    }

    return NextResponse.json({ message: "Dados enviados com sucesso!"}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Erro ao enviar dados", error }, { status: 500 });
  }
}