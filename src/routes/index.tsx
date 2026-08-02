import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Youtube, HeartHandshake, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-culto.jpg";
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
      <section className="relative isolate">
        <img
          src={heroImg}
          alt="Congregação em momento de louvor durante o culto"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary-deep/75" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Igreja Apostólica
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold uppercase leading-tight text-primary-foreground md:text-6xl">
            Bem-vindo à Fonte da Vida Toronto
          </h1>
          <p className="mt-4 max-w-xl text-lg text-accent">
            Uma igreja para toda a família. Cultos em português, no coração de North York.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/visite-nos"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary-foreground px-6 font-semibold text-primary-deep transition-opacity hover:opacity-90"
            >
              Visite-nos <ArrowRight aria-hidden className="size-4" />
            </Link>
            <a
              href={CHURCH.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-primary-foreground/60 px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Youtube aria-hidden className="size-4" /> Assista ao culto
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary" aria-label="Informações rápidas">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <QuickInfo icon={<MapPin aria-hidden className="size-5" />} title="Endereço">
            <a href={CHURCH.mapsDirections} target="_blank" rel="noreferrer" className="hover:text-primary">
              {CHURCH.addressLine1}, {CHURCH.addressLine2}
            </a>
          </QuickInfo>
          <QuickInfo icon={<Clock aria-hidden className="size-5" />} title="Culto principal">
            Domingo, 10h — Culto da Família
          </QuickInfo>
          <QuickInfo icon={<Phone aria-hidden className="size-5" />} title="WhatsApp">
            <a href={CHURCH.whatsapp} target="_blank" rel="noreferrer" className="hover:text-primary">
              {CHURCH.phone}
            </a>
          </QuickInfo>
          <QuickInfo icon={<Youtube aria-hidden className="size-5" />} title="Online">
            <a href={CHURCH.youtube} target="_blank" rel="noreferrer" className="hover:text-primary">
              Assista no YouTube
            </a>
          </QuickInfo>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold uppercase text-primary-deep md:text-4xl">Quem somos</h2>
            <p className="mt-4 text-muted-foreground">
              A Fonte da Vida Toronto é uma igreja brasileira que existe para acolher pessoas e apontá-las
              para Jesus. Somos uma comunidade formada em grande parte por imigrantes que encontraram no
              Canadá um novo começo — e na igreja, uma nova família.
            </p>
            <p className="mt-4 text-muted-foreground">
              Nossos encontros são simples e acolhedores: louvor, oração e uma palavra que faz sentido para
              a vida real. Não importa em que ponto da jornada você esteja, aqui há lugar para você.
            </p>
            <Link
              to="/sobre"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
            >
              Conheça nossa história <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
          <div className="rounded-lg border border-border bg-accent/40 p-6">
            <h3 className="text-xl font-bold uppercase text-primary-deep">Primeira vez aqui?</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Chegue alguns minutos antes, venha como estiver e procure alguém da recepção. Vamos te receber
              pessoalmente e ajudar com tudo o que você precisar.
            </p>
            <Link to="/visite-nos" className="mt-4 inline-flex font-semibold text-primary hover:underline">
              O que esperar da sua visita →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary" aria-labelledby="cultos">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="cultos" className="text-3xl font-bold uppercase text-primary-deep md:text-4xl">
            Nossos cultos
          </h2>
          <p className="mt-2 text-muted-foreground">Todos os encontros são em português.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <li key={s.title} className="rounded-lg border border-border bg-background p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">{s.day}</p>
                <p className="mt-1 text-2xl font-bold text-primary-deep">{s.time}</p>
                <h3 className="mt-2 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-4xl rounded-lg border border-border bg-accent/40 px-6 py-10 text-center">
          <HeartHandshake aria-hidden className="mx-auto size-10 text-primary" />
          <h2 className="mt-4 text-3xl font-bold uppercase text-primary-deep">Podemos orar por você</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Seja qual for a sua situação, nossa equipe de intercessão quer orar pelo seu nome. Seu pedido pode
            ser mantido em sigilo.
          </p>
          <Link
            to="/pedido-de-oracao"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Quero oração <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
      </section>

      <section aria-labelledby="mapa" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="mapa" className="text-3xl font-bold uppercase text-primary-deep">Onde estamos</h2>
          <p className="mt-2 text-muted-foreground">{CHURCH.address}</p>
          <div className="mt-6 overflow-hidden rounded-lg border border-border">
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
    <div className="flex gap-3">
      <span className="mt-0.5 text-primary">{icon}</span>
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wide text-primary-deep">{title}</h2>
        <p className="mt-1 text-sm text-foreground">{children}</p>
      </div>
    </div>
  );
}
