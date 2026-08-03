import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Youtube, HeartHandshake, ArrowRight } from "lucide-react";
import { CHURCH, SERVICES } from "@/lib/church";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fonte da Vida Toronto — Igreja brasileira em North York" },
      {
        name: "description",
        content:
          "Igreja Apostólica Fonte da Vida em Toronto. Cultos em português em North York: domingo 10h, terça, quarta e sexta 19h30. Venha nos visitar.",
      },
      { property: "og:title", content: "Fonte da Vida Toronto — Igreja brasileira em North York" },
      {
        property: "og:description",
        content: "Uma igreja para toda a família em Toronto. Cultos em português. Você é nosso convidado.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Church",
          name: CHURCH.name,
          telephone: CHURCH.phone,
          email: CHURCH.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "1224 Lawrence Ave W",
            addressLocality: "North York",
            addressRegion: "ON",
            postalCode: "M6A 1E3",
            addressCountry: "CA",
          },
          sameAs: [CHURCH.instagram, CHURCH.youtube],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src="/hero-culto.jpg"
          alt="Congregação em momento de louvor durante o culto"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-deep/95 via-primary-deep/80 to-primary-deep/45"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-8">
            <p className="eyebrow text-accent">Igreja Apostólica · North York</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold uppercase text-primary-foreground md:text-7xl">
              Bem-vindo à Fonte da Vida Toronto
            </h1>
            <p className="mt-6 max-w-lg text-lg text-accent">
              Uma igreja para toda a família. Cultos em português, no coração de North York.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/visite-nos"
                className="meta group inline-flex min-h-12 items-center gap-2 rounded-md bg-primary-foreground px-7 text-sm font-semibold uppercase tracking-[0.12em] text-primary-deep transition-opacity hover:opacity-90"
              >
                Visite-nos
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={CHURCH.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="meta inline-flex min-h-12 items-center gap-2 rounded-md border border-primary-foreground/50 px-7 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Youtube aria-hidden className="size-4" /> Assista ao culto
              </a>
            </div>
          </div>
          <div className="hidden md:col-span-4 md:flex md:items-end md:justify-end">
            <div className="border-l border-primary-foreground/25 pl-6">
              <p className="meta text-xs uppercase tracking-[0.2em] text-accent">Próximo culto</p>
              <p className="mt-2 font-display text-4xl font-bold text-primary-foreground">Dom · 10h</p>
              <p className="meta mt-1 text-sm text-accent">Culto da Família</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary" aria-label="Informações rápidas">
        <div className="mx-auto grid max-w-6xl gap-px bg-border px-4 py-0 sm:grid-cols-2 lg:grid-cols-4">
          <QuickInfo icon={<MapPin aria-hidden className="size-5" />} title="Endereço">
            <a
              href={CHURCH.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              {CHURCH.addressLine1}, {CHURCH.addressLine2}
            </a>
          </QuickInfo>
          <QuickInfo icon={<Clock aria-hidden className="size-5" />} title="Culto principal">
            Domingo, 10h — Culto da Família
          </QuickInfo>
          <QuickInfo icon={<Phone aria-hidden className="size-5" />} title="WhatsApp">
            <a
              href={CHURCH.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              {CHURCH.phone}
            </a>
          </QuickInfo>
          <QuickInfo icon={<Youtube aria-hidden className="size-5" />} title="Online">
            <a
              href={CHURCH.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Assista no YouTube
            </a>
          </QuickInfo>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-primary">Quem somos</p>
            <h2 className="mt-5 max-w-lg text-4xl font-bold uppercase text-primary-deep md:text-5xl">
              Uma família brasileira de fé em Toronto
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              A Fonte da Vida Toronto existe para acolher pessoas e apontá-las para Jesus. Somos uma
              comunidade formada em grande parte por imigrantes que encontraram no Canadá um novo começo —
              e na igreja, uma nova família.
            </p>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Nossos encontros são simples e acolhedores: louvor, oração e uma palavra que faz sentido para
              a vida real. Não importa em que ponto da jornada você esteja, aqui há lugar para você.
            </p>
            <Link
              to="/sobre"
              className="meta group mt-8 inline-flex min-h-11 items-center gap-2 border-b border-primary pb-1 text-sm font-semibold uppercase tracking-[0.12em] text-primary"
            >
              Conheça nossa história
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="card-lift h-full rounded-lg border border-border bg-secondary p-7">
              <h3 className="text-2xl font-bold uppercase text-primary-deep">Primeira vez aqui?</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Chegue alguns minutos antes, venha como estiver e procure alguém da recepção. Vamos te
                receber pessoalmente e ajudar com tudo o que você precisar.
              </p>
              <Link
                to="/visite-nos"
                className="meta mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-primary hover:underline"
              >
                O que esperar da sua visita →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary" aria-labelledby="cultos">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-primary">Agenda semanal</p>
              <h2 id="cultos" className="mt-5 text-4xl font-bold uppercase text-primary-deep md:text-5xl">
                Nossos cultos
              </h2>
            </div>
            <p className="meta text-sm uppercase tracking-[0.14em] text-muted-foreground">
              Todos em português
            </p>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <li
                key={s.title}
                className="card-lift rounded-lg border border-border bg-background p-6"
              >
                <span className="meta text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  0{i + 1}
                </span>
                <p className="meta mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                  {s.day}
                </p>
                <p className="font-display text-3xl font-bold text-primary-deep">{s.time}</p>
                <h3 className="mt-3 text-lg font-bold uppercase text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-4xl border-y border-border px-6 py-14 text-center">
          <HeartHandshake aria-hidden className="mx-auto size-9 text-primary" />
          <h2 className="mt-6 text-4xl font-bold uppercase text-primary-deep">
            Podemos orar por você
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Seja qual for a sua situação, nossa equipe de intercessão quer orar pelo seu nome. Seu pedido
            pode ser mantido em sigilo.
          </p>
          <Link
            to="/pedido-de-oracao"
            className="meta group mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-7 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Quero oração
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section aria-labelledby="mapa" className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow text-primary">Localização</p>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <h2 id="mapa" className="text-4xl font-bold uppercase text-primary-deep">Onde estamos</h2>
            <p className="meta text-sm text-muted-foreground">{CHURCH.address}</p>
          </div>
          <div className="mt-8 overflow-hidden rounded-lg border border-border">
            <iframe
              title="Mapa com a localização da Fonte da Vida Toronto"
              src={CHURCH.mapsEmbed}
              loading="lazy"
              className="h-80 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function QuickInfo({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 bg-secondary px-2 py-8">
      <span className="mt-0.5 text-primary">{icon}</span>
      <div>
        <h2 className="meta text-xs font-semibold uppercase tracking-[0.18em] text-primary-deep">
          {title}
        </h2>
        <p className="mt-2 text-sm text-foreground">{children}</p>
      </div>
    </div>
  );
}
