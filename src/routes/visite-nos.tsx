import { createFileRoute, Link } from "@tanstack/react-router";
import { CHURCH, SERVICES } from "@/lib/church";

export const Route = createFileRoute("/visite-nos")({
  head: () => ({
    meta: [
      { title: "Visite-nos — Fonte da Vida Toronto" },
      {
        name: "description",
        content:
          "Tudo que você precisa saber antes da sua primeira visita à Fonte da Vida Toronto: endereço, horários, como chegar, o que esperar e perguntas frequentes.",
      },
      { property: "og:title", content: "Visite-nos — Fonte da Vida Toronto" },
      {
        property: "og:description",
        content: "Endereço, horários, como chegar e o que esperar da sua primeira visita.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/visite-nos" },
    ],
    links: [{ rel: "canonical", href: "/visite-nos" }],
  }),
  component: VisitPage,
});

const EXPECTATIONS = [
  {
    title: "Como é o culto",
    text: "Começamos com louvor, seguimos com um tempo de oração e uma mensagem bíblica prática. Ao final, alguém da equipe estará disponível para conversar e orar com você.",
  },
  {
    title: "Quanto tempo dura",
    text: "Em média, cerca de duas horas.",
  },
  {
    title: "Como se vestir",
    text: "Venha como se sentir confortável. Não há código de vestimenta.",
  },
  {
    title: "Idioma",
    text: "Todos os nossos cultos são em português.",
  },
  {
    title: "Estacionamento",
    text: "Temos estacionamento no próprio local, sem custo para os visitantes.",
  },
  {
    title: "Transporte público (TTC)",
    text: "O ponto de ônibus mais próximo é Caledonia Rd at Lawrence Ave West, a poucos passos da entrada.",
  },
  {
    title: "Acessibilidade",
    text: "O prédio ainda não é acessível para cadeirantes. Se você precisa de apoio para entrar, avise no WhatsApp e nossa equipe ajuda na chegada.",
  },
];

const FAQ = [
  {
    q: "Preciso avisar antes de visitar?",
    a: "Não. Você pode simplesmente aparecer. Mas, se quiser, mande uma mensagem no WhatsApp e alguém combina de te receber na entrada.",
  },
  {
    q: "Sou novo em Toronto. Vou conhecer alguém?",
    a: "Boa parte da nossa comunidade é formada por brasileiros que também chegaram há pouco tempo. Procure a recepção e vamos te apresentar às pessoas.",
  },
  {
    q: "Posso levar meus filhos?",
    a: "Sim, crianças são muito bem-vindas em todos os nossos encontros.",
  },
  {
    q: "Como faço para falar com um pastor?",
    a: "Fale conosco pelo WhatsApp ou pela página de contato e agendamos uma conversa.",
  },
];

function VisitPage() {
  return (
    <>
      <section className="bg-primary-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold uppercase text-primary-foreground md:text-5xl">Visite-nos</h1>
          <p className="mt-3 max-w-2xl text-lg text-accent">
            Você é nosso convidado. Aqui está tudo o que precisa saber antes de vir pela primeira vez.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold uppercase text-primary-deep">Onde e quando</h2>
            <p className="mt-3 text-foreground">{CHURCH.address}</p>
            <a
              href={CHURCH.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
            >
              Como chegar
            </a>
            <ul className="mt-8 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.title} className="rounded-md border border-border p-4">
                  <p className="font-bold text-primary-deep">
                    {s.day} — {s.time}
                  </p>
                  <p className="text-sm text-muted-foreground">{s.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              title="Mapa com a localização da Fonte da Vida Toronto"
              src={CHURCH.mapsEmbed}
              loading="lazy"
              className="h-full min-h-96 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold uppercase text-primary-deep">O que esperar</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {EXPECTATIONS.map((item) => (
              <li key={item.title} className="rounded-lg border border-border bg-background p-5">
                <h3 className="text-lg font-bold text-primary-deep">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold uppercase text-primary-deep">Perguntas frequentes</h2>
          <div className="mt-6 divide-y divide-border rounded-lg border border-border">
            {FAQ.map((item) => (
              <details key={item.q} className="group p-5">
                <summary className="cursor-pointer list-none font-semibold text-foreground marker:hidden">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground">
            Ficou com alguma dúvida?{" "}
            <Link to="/contato" className="font-semibold text-primary hover:underline">
              Fale com a gente
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
