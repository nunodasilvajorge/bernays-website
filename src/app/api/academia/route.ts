import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: "Bernays <hello@bernays.pt>",
      to: "nuno.dasilvajorge@gmail.com",
      subject: `Pedido de acesso académico: ${email}`,
      text: `Nova instituição interessada no Bernays para a Academia:\n\n${email}`,
    })

    await resend.emails.send({
      from: "Bernays <hello@bernays.pt>",
      to: email,
      subject: "Pedido de acesso académico ao Bernays recebido",
      text: `Olá,\n\nRecebemos o vosso pedido de acesso académico ao Bernays.\n\nEntramos em contacto em breve para configurar o acesso para a vossa instituição.\n\nEquipa Bernays\nbernays.pt`,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Erro ao enviar" }, { status: 500 })
  }
}
