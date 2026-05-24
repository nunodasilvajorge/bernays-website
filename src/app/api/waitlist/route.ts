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
      subject: `Novo interesse no Bernays: ${email}`,
      text: `Email registado na landing page: ${email}`,
    })

    await resend.emails.send({
      from: "Bernays <hello@bernays.pt>",
      to: email,
      subject: "Recebemos o teu interesse no Bernays",
      text: `Olá,\n\nObrigado pelo teu interesse no Bernays.\n\nVamos entrar em contacto em breve para mostrar a plataforma.\n\nEquipa Bernays\nbernays.pt`,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Erro ao enviar" }, { status: 500 })
  }
}
