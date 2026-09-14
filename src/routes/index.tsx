import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Youtube, HeartHandshake, ArrowRight } from "lucide-react";
import { CHURCH, getServices } from "@/lib/church";
import { Reveal } from "@/components/site/Reveal";
import { Carousel } from "@/components/site/Carousel";
import { useI18n } from "@/lib/i18n";

const SITE_URL = "https://fontedavida-toronto.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Igreja Brasileira em Toronto | Fonte da Vida Toronto" },
      {
        name: "description",
        content:
          "Igreja Apostólica Fonte da Vida Toronto — uma igreja brasileira em North York, Toronto, com cultos em português e uma comunidade acolhedora para toda a família.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Igreja Brasileira em Toronto | Fonte da Vida Toronto" },
      {
        property: "og:description",
        content:
          "Igreja brasileira em North York, Toronto. Cultos em português: domingo 10h, terça, quarta e sexta 19h30. Você é nosso convidado.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Church",
          "@id": `${SITE_URL}/#church`,
          name: CHURCH.name,
          alternateName: CHURCH.shortName,
          description:
            "Igreja brasileira em North York, Toronto, com cultos em português para toda a família.",
          url: `${SITE_URL}/`,
          telephone: "+1-437-770-7282",
          email: CHURCH.email,
          image: `${SITE_URL}/hero-culto.jpg`,
          logo: `${SITE_URL}/favicon.png`,
          knowsLanguage: ["pt-BR", "en"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "1224 Lawrence Ave W",
            addressLocality: "North York",
            addressRegion: "ON",
            postalCode: "M6A 1E3",
            addressCountry: "CA",
          },
          areaServed: [
            { "@type": "City", name: "Toronto" },
            { "@type": "Place", name: "North York" },
          ],
          hasMap: CHURCH.mapsDirections,
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "12:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "19:30", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "19:30", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "19:30", closes: "21:00" },
          ],
          event: [
            {
              "@type": "Event",
              name: "Culto da Família",
              description: "Culto em português para toda a família.",
              startDate: "2026-01-04T10:00:00-05:00",
              eventSchedule: {
                "@type": "Schedule",
                byDay: "https://schema.org/Sunday",
                startTime: "10:00",
                repeatFrequency: "P1W",
              },
              inLanguage: "pt-BR",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: CHURCH.name,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "1224 Lawrence Ave W",
                  addressLocality: "North York",
                  addressRegion: "ON",
                  postalCode: "M6A 1E3",
                  addressCountry: "CA",
                },
              },
              organizer: { "@id": `${SITE_URL}/#church` },
            },
          ],
          sameAs: [CHURCH.instagram, CHURCH.youtube],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: CHURCH.shortName,
          url: `${SITE_URL}/`,
          inLanguage: ["pt-BR", "en"],
          publisher: { "@id": `${SITE_URL}/#church` },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, lang } = useI18n();
  const SERVICES = getServices(lang);
  const addressLine2 = lang === "pt" ? CHURCH.addressLine2 : CHURCH.addressLine2En;

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src="/hero-culto.jpg"
          alt={t("Congregação em momento de louvor durante o culto", "Congregation worshipping during the service")}
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
            <p className="eyebrow text-accent">{t("Igreja Apostólica · North York", "Apostolic Church · North York")}</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold uppercase text-primary-foreground md:text-7xl">
              {t("Igreja Apostólica Fonte da Vida em Toronto", "Apostolic Church Fonte da Vida in Toronto")}
            </h1>
            <p className="mt-6 max-w-lg text-lg text-accent">
              {t("Uma igreja para toda a família. Cultos em português, no coração de North York.", "A church for the whole family. Services in Portuguese, in the heart of North York.")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/visite-nos"
                className="meta group inline-flex min-h-12 items-center gap-2 rounded-md bg-primary-foreground px-7 text-sm font-semibold uppercase tracking-[0.12em] text-primary-deep transition-opacity hover:opacity-90"
              >
                {t("Visite-nos", "Visit us")}
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={CHURCH.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="meta inline-flex min-h-12 items-center gap-2 rounded-md border border-primary-foreground/50 px-7 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Youtube aria-hidden className="size-4" /> {t("Assista ao culto", "Watch the service")}
              </a>
            </div>
          </div>
          <div className="hidden md:col-span-4 md:flex md:items-end md:justify-end">
            <div className="border-l border-primary-foreground/25 pl-6">
              <p className="meta text-xs uppercase tracking-[0.2em] text-accent">{t("Próximo culto", "Next service")}</p>
              <p className="mt-2 font-display text-4xl font-bold text-primary-foreground">{t("Dom · 10h", "Sun · 10am")}</p>
              <p className="meta mt-1 text-sm text-accent">{t("Culto da Família", "Family Service")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary" aria-label={t("Informações rápidas", "Quick information")}>
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          <QuickInfo icon={<MapPin aria-hidden className="size-5" />} title={t("Endereço", "Address")}>
            <a
              href={CHURCH.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              {CHURCH.addressLine1}, {addressLine2}
            </a>
          </QuickInfo>
          <QuickInfo icon={<Clock aria-hidden className="size-5" />} title={t("Culto principal", "Main service")}>
            {t("Domingo, 10h — Culto da Família", "Sunday, 10am — Family Service")}
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
          <QuickInfo icon={<Youtube aria-hidden className="size-5" />} title={t("Online", "Online")}>
            <a
              href={CHURCH.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              {t("Assista no YouTube", "Watch on YouTube")}
            </a>
          </QuickInfo>
        </div>
      </section>

      <section className="pb-[5.5rem] pt-12">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 md:grid-cols-12">
          <Reveal direction="left" className="md:col-span-7">
            <p className="eyebrow text-primary">{t("Quem somos", "Who we are")}</p>
            <h2 className="mt-5 max-w-lg text-4xl font-bold uppercase text-primary-deep md:text-5xl">
              {t("Uma família brasileira de fé em Toronto", "A Brazilian family of faith in Toronto")}
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              {t(
                "A Fonte da Vida Toronto existe para acolher pessoas e apontá-las para Jesus. Somos uma comunidade formada em grande parte por imigrantes que encontraram no Canadá um novo começo — e na igreja, uma nova família.",
                "Fonte da Vida Toronto exists to welcome people and point them to Jesus. We are a community made up largely of immigrants who found a new beginning in Canada — and in the church, a new family."
              )}
            </p>
            <p className="mt-4 max-w-xl text-muted-foreground">
              {t(
                "Nossos encontros são simples e acolhedores: louvor, oração e uma palavra que faz sentido para a vida real. Não importa em que ponto da jornada você esteja, aqui há lugar para você.",
                "Our gatherings are simple and welcoming: worship, prayer, and a message that speaks to real life. No matter where you are on your journey, there is a place for you here."
              )}
            </p>
            <img
              src="/img-quem-somos-1.jpg"
              alt={t("Mulheres conversando e sorrindo antes do culto", "Women chatting and smiling before the service")}
              width={1280}
              height={853}
              loading="lazy"
              className="mt-8 aspect-16/9 w-full rounded-lg border border-border object-cover"
            />
            <Link
              to="/sobre"
              className="meta group mt-8 inline-flex min-h-11 items-center gap-2 border-b border-primary pb-1 text-sm font-semibold uppercase tracking-[0.12em] text-primary"
            >
              {t("Conheça nossa história", "Learn our story")}
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal direction="right" delay={120} className="md:col-span-5">
            <img
              src="/img-quem-somos-2.jpg"
              alt={t("Duas mulheres se cumprimentando com alegria na igreja", "Two women greeting each other joyfully at church")}
              width={1280}
              height={853}
              loading="lazy"
              className="hidden aspect-4/5 w-full rounded-lg border border-border object-cover md:block"
            />
            <div className="card-lift rounded-lg md:mt-6 border border-border bg-secondary p-7">
              <h3 className="text-2xl font-bold uppercase text-primary-deep">{t("Primeira vez aqui?", "First time here?")}</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                {t(
                  "Chegue alguns minutos antes, venha como estiver e procure alguém da recepção. Vamos te receber pessoalmente e ajudar com tudo o que você precisar.",
                  "Arrive a few minutes early, come as you are, and look for someone from our welcome team. We'll greet you personally and help with anything you need."
                )}
              </p>
              <Link
                to="/visite-nos"
                className="meta mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-primary hover:underline"
              >
                {t("O que esperar da sua visita →", "What to expect on your visit →")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-[5.5rem] pt-12 bg-secondary" aria-labelledby="cultos">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal direction="up">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-primary">{t("Agenda semanal", "Weekly schedule")}</p>
                <h2 id="cultos" className="mt-5 text-4xl font-bold uppercase text-primary-deep md:text-5xl">
                  {t("Nossos cultos", "Our services")}
                </h2>
              </div>
              <p className="meta text-sm uppercase tracking-[0.14em] text-muted-foreground">
                {t("Todos em português", "All in Portuguese")}
              </p>
            </div>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.title}
                as="li"
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 90}
                className="card-lift group overflow-hidden rounded-lg border border-border bg-background"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    width={1280}
                    height={853}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-primary-deep/10 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute bottom-4 left-4">
                    <p className="meta text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {s.day}
                    </p>
                    <p className="font-display text-3xl font-bold text-primary-foreground">{s.time}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold uppercase text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-[5.5rem] pt-12" aria-labelledby="galeria">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal direction="up">
            <p className="eyebrow text-primary">{t("Nossa comunidade", "Our community")}</p>
            <h2 id="galeria" className="mt-5 text-4xl font-bold uppercase text-primary-deep">
              {t("Momentos da igreja", "Church moments")}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={80} className="mt-12 block">
            <Carousel
              slides={[
                { src: "/img-momento-1.jpg", alt: t("Equipe da igreja reunida sorrindo", "Church team gathered smiling"), caption: t("Bethel do Avivamento", "Bethel of Revival") },
                { src: "/img-momento-2.jpg", alt: t("Crianças e adolescentes em passeio da igreja", "Children and teens on a church outing"), caption: t("Encontro dos Dokmos", "Dokmos Gathering") },
                { src: "/img-momento-3.jpg", alt: t("Grupo Dokmos reunido em confraternização", "Dokmos group gathered for fellowship"), caption: t("Confraternização", "Fellowship") },
                { src: "/img-momento-4.jpg", alt: t("Encontro da igreja em roda de conversa", "Church gathering in a conversation circle"), caption: t("Reunião de Natal", "Christmas Gathering") },
                { src: "/img-criancas.jpg", alt: t("Crianças acompanhando a leitura durante o culto", "Children following along during the service"), caption: t("Desafio de Elias", "Elijah's Challenge") },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img
          src="/img-oracao-cta.jpg"
          alt={t("Irmã orando com as mãos sobre a cabeça de uma senhora", "Sister praying with her hands on a lady's head")}
          width={1280}
          height={853}
          loading="lazy"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary-deep/85" aria-hidden />
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <Reveal direction="up">
            <HeartHandshake aria-hidden className="mx-auto size-9 text-accent" />
            <h2 className="mt-6 text-4xl font-bold uppercase text-primary-foreground">
              {t("Podemos orar por você", "We can pray for you")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-accent">
              {t(
                "Seja qual for a sua situação, nossa equipe de intercessão quer orar pelo seu nome. Seu pedido pode ser mantido em sigilo.",
                "Whatever your situation, our intercession team wants to pray for you by name. Your request can be kept confidential."
              )}
            </p>
            <Link
              to="/pedido-de-oracao"
              className="meta group mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-primary-foreground px-7 text-sm font-semibold uppercase tracking-[0.12em] text-primary-deep transition-opacity hover:opacity-90"
            >
              {t("Quero oração", "I want prayer")}
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="mapa" className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow text-primary">{t("Localização", "Location")}</p>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <h2 id="mapa" className="text-4xl font-bold uppercase text-primary-deep">{t("Onde estamos", "Where we are")}</h2>
            <p className="meta text-sm text-muted-foreground">{CHURCH.address}</p>
          </div>
          <div className="mt-8 overflow-hidden rounded-lg border border-border">
            <iframe
              title={t("Mapa com a localização da Fonte da Vida Toronto", "Map showing the location of Fonte da Vida Toronto")}
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
    <div className="flex gap-3 bg-secondary px-4 pb-5 pt-5">
      <span className="mt-0.5 text-primary">{icon}</span>
      <div>
        <p className="meta text-xs font-semibold uppercase tracking-[0.18em] text-primary-deep">
          {title}
        </p>
        <p className="mt-2 text-sm text-foreground">{children}</p>
      </div>
    </div>
  );
}
