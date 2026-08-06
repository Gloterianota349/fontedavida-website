import { createFileRoute, Link } from "@tanstack/react-router";
import { CHURCH, SERVICES } from "@/lib/church";
import { Carousel } from "@/components/site/Carousel";

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

const EXPECTATIONS: { title: string; text: React.ReactNode }[] = [
  {
    title: "Como é o culto",
    text: (
      <>
        Começamos com <strong className="font-semibold text-foreground">louvor</strong>, seguimos com um
        tempo de <strong className="font-semibold text-foreground">oração</strong> e uma{" "}
        <strong className="font-semibold text-foreground">mensagem bíblica prática</strong>. Ao final,
        alguém da equipe estará disponível para conversar e orar com você.
      </>
    ),
  },
  {
    title: "Quanto tempo dura",
    text: (
      <>
        Em média, cerca de <strong className="font-semibold text-foreground">duas horas</strong>.
      </>
    ),
  },
  {
    title: "Como se vestir",
    text: (
      <>
        Venha como se sentir confortável. <strong className="font-semibold text-foreground">Não há
        código de vestimenta</strong>.
      </>
    ),
  },
  {
    title: "Idioma",
    text: (
      <>
        Todos os nossos cultos são em{" "}
        <strong className="font-semibold text-foreground">português</strong>.
      </>
    ),
  },
  {
    title: "Estacionamento",
    text: (
      <>
        Temos <strong className="font-semibold text-foreground">estacionamento no próprio local</strong>,{" "}
        <strong className="font-semibold text-foreground">sem custo</strong> para os visitantes.
      </>
    ),
  },
  {
    title: "Transporte público (TTC)",
    text: (
      <>
        O ponto de ônibus mais próximo é{" "}
        <strong className="font-semibold text-foreground">Caledonia Rd at Lawrence Ave West</strong>, a
        poucos passos da entrada.
      </>
    ),
  },
  {
    title: "Acessibilidade",
    text: (
      <>
        O prédio <strong className="font-semibold text-foreground">ainda não é acessível para
        cadeirantes</strong>. Se você precisa de apoio para entrar, avise no{" "}
        <strong className="font-semibold text-foreground">WhatsApp</strong> e nossa equipe ajuda na
        chegada.
      </>
    ),
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
      <section className="relative isolate overflow-hidden">
        <img
          src="/img-fachada.jpg"
          alt="Fachada do prédio da igreja em North York"
          width={1280}
          height={853}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-deep/95 via-primary-deep/85 to-primary-deep/50"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-4 py-24">
          <p className="eyebrow text-accent">Sua primeira visita</p>
          <h1 className="mt-5 text-5xl font-bold uppercase text-primary-foreground md:text-6xl">
            Visite-nos
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-accent">
            Você é nosso convidado. Aqui está tudo o que precisa saber antes de vir pela primeira vez.
          </p>
        </div>
      </section>

      <section className="pb-[5.5rem] pt-10">
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
          <div className="hidden gap-8 md:grid md:grid-cols-3">
            <img
              src="/img-recepcao.jpg"
              alt="Equipe recebendo visitantes na entrada da igreja"
              width={1280}
              height={853}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg border border-border object-cover"
            />
            <img
              src="/img-louvor.jpg"
              alt="Momento de louvor durante o culto"
              width={1280}
              height={853}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg border border-border object-cover"
            />
            <img
              src="/img-comunidade.jpg"
              alt="Pessoas conversando após o culto"
              width={1280}
              height={853}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg border border-border object-cover"
            />
          </div>
          <div className="md:hidden">
            <Carousel
              slides={[
                { src: "/img-recepcao.jpg", alt: "Equipe recebendo visitantes na entrada da igreja" },
                { src: "/img-louvor.jpg", alt: "Momento de louvor durante o culto" },
                { src: "/img-comunidade.jpg", alt: "Pessoas conversando após o culto" },
              ]}
            />
          </div>
          <h2 className="mt-14 text-3xl font-bold uppercase text-primary-deep">O que esperar</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {EXPECTATIONS.map((item) => (
              <li key={item.title} className="card-lift rounded-lg border border-border bg-background p-5">
                <h3 className="text-lg font-bold uppercase text-primary-deep">{item.title}</h3>
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
