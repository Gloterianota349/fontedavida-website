import { createFileRoute, Link } from "@tanstack/react-router";
import { CHURCH, getServices } from "@/lib/church";
import { Carousel } from "@/components/site/Carousel";
import { useI18n } from "@/lib/i18n";

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

function useExpectations(t: (pt: string, en: string) => string) {
  const list: { title: string; text: React.ReactNode }[] = [
    {
      title: t("Como é o culto", "What the service is like"),
      text: (
        <>
          {t("Começamos com", "We begin with")}{" "}
          <strong className="font-semibold text-foreground">{t("louvor", "worship")}</strong>,{" "}
          {t("seguimos com um tempo de", "followed by a time of")}{" "}
          <strong className="font-semibold text-foreground">{t("oração", "prayer")}</strong>{" "}
          {t("e uma", "and a")}{" "}
          <strong className="font-semibold text-foreground">
            {t("mensagem bíblica prática", "practical biblical message")}
          </strong>
          . {t("Ao final, alguém da equipe estará disponível para conversar e orar com você.", "At the end, someone from our team will be available to talk and pray with you.")}
        </>
      ),
    },
    {
      title: t("Quanto tempo dura", "How long it lasts"),
      text: (
        <>
          {t("Em média, cerca de", "On average, about")}{" "}
          <strong className="font-semibold text-foreground">{t("duas horas", "two hours")}</strong>.
        </>
      ),
    },
    {
      title: t("Como se vestir", "What to wear"),
      text: (
        <>
          {t("Venha como se sentir confortável.", "Come dressed however you feel comfortable.")}{" "}
          <strong className="font-semibold text-foreground">
            {t("Não há código de vestimenta", "There is no dress code")}
          </strong>
          .
        </>
      ),
    },
    {
      title: t("Idioma", "Language"),
      text: (
        <>
          {t("Todos os nossos cultos são em", "All of our services are held in")}{" "}
          <strong className="font-semibold text-foreground">{t("português", "Portuguese")}</strong>.
        </>
      ),
    },
    {
      title: t("Estacionamento", "Parking"),
      text: (
        <>
          {t("Temos", "We have")}{" "}
          <strong className="font-semibold text-foreground">
            {t("estacionamento no próprio local", "on-site parking")}
          </strong>
          ,{" "}
          <strong className="font-semibold text-foreground">{t("sem custo", "free of charge")}</strong>{" "}
          {t("para os visitantes.", "for visitors.")}
        </>
      ),
    },
    {
      title: t("Transporte público (TTC)", "Public transit (TTC)"),
      text: (
        <>
          {t("O ponto de ônibus mais próximo é", "The closest bus stop is")}{" "}
          <strong className="font-semibold text-foreground">Caledonia Rd at Lawrence Ave West</strong>,{" "}
          {t("a poucos passos da entrada.", "just steps from the entrance.")}
        </>
      ),
    },
    {
      title: t("Acessibilidade", "Accessibility"),
      text: (
        <>
          {t("O prédio", "Our building")}{" "}
          <strong className="font-semibold text-foreground">
            {t("ainda não é acessível para cadeirantes", "is not yet wheelchair accessible")}
          </strong>
          . {t("Se você precisa de apoio para entrar, avise no", "If you need help getting in, let us know on")}{" "}
          <strong className="font-semibold text-foreground">WhatsApp</strong>{" "}
          {t("e nossa equipe ajuda na chegada.", "and our team will help you upon arrival.")}
        </>
      ),
    },
  ];
  return list;
}

function useFaq(t: (pt: string, en: string) => string) {
  return [
    {
      q: t("Preciso avisar antes de visitar?", "Do I need to let you know before visiting?"),
      a: t(
        "Não. Você pode simplesmente aparecer. Mas, se quiser, mande uma mensagem no WhatsApp e alguém combina de te receber na entrada.",
        "No. You can simply show up. But if you'd like, send us a message on WhatsApp and someone will arrange to greet you at the entrance.",
      ),
    },
    {
      q: t("Sou novo em Toronto. Vou conhecer alguém?", "I'm new to Toronto. Will I meet someone?"),
      a: t(
        "Boa parte da nossa comunidade é formada por brasileiros que também chegaram há pouco tempo. Procure a recepção e vamos te apresentar às pessoas.",
        "A large part of our community is made up of Brazilians who also arrived recently. Look for our welcome team and we'll introduce you to people.",
      ),
    },
    {
      q: t("Posso levar meus filhos?", "Can I bring my children?"),
      a: t(
        "Sim, crianças são muito bem-vindas em todos os nossos encontros.",
        "Yes, children are very welcome at all of our gatherings.",
      ),
    },
    {
      q: t("Como faço para falar com um pastor?", "How do I get in touch with a pastor?"),
      a: t(
        "Fale conosco pelo WhatsApp ou pela página de contato e agendamos uma conversa.",
        "Reach out to us on WhatsApp or through our contact page and we'll schedule a conversation.",
      ),
    },
  ];
}

function VisitPage() {
  const { t, lang } = useI18n();
  const EXPECTATIONS = useExpectations(t);
  const FAQ = useFaq(t);
  const SERVICES = getServices(lang);
  const addressLine2 = lang === "pt" ? CHURCH.addressLine2 : CHURCH.addressLine2En;

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src="/img-fachada.jpg"
          alt={t("Fachada do prédio da igreja em North York", "Front view of the church building in North York")}
          width={1280}
          height={853}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-deep/95 via-primary-deep/85 to-primary-deep/50"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-4 py-24">
          <p className="eyebrow text-accent">{t("Sua primeira visita", "Your first visit")}</p>
          <h1 className="mt-5 text-5xl font-bold uppercase text-primary-foreground md:text-6xl">
            {t("Visite-nos", "Visit Us")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-accent">
            {t(
              "Você é nosso convidado. Aqui está tudo o que precisa saber antes de vir pela primeira vez.",
              "You are our guest. Here's everything you need to know before coming for the first time.",
            )}
          </p>
        </div>
      </section>

      <section className="pb-[5.5rem] pt-10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold uppercase text-primary-deep">{t("Onde e quando", "Where and when")}</h2>
            <p className="mt-3 text-foreground">
              {CHURCH.addressLine1}, {addressLine2}
            </p>
            <a
              href={CHURCH.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
            >
              {t("Como chegar", "Get directions")}
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
              title={t("Mapa com a localização da Fonte da Vida Toronto", "Map showing the location of Fonte da Vida Toronto")}
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
              alt={t("Membros da igreja reunidos em confraternização", "Church members gathered in fellowship")}
              width={1280}
              height={853}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg border border-border object-cover"
            />
            <img
              src="/img-visita-2.jpg"
              alt={t("Jovem em adoração durante o culto", "Young person worshipping during the service")}
              width={1280}
              height={853}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg border border-border object-cover"
            />
            <img
              src="/img-visita-3.jpg"
              alt={t("Membros abraçados em oração durante o culto", "Members embracing in prayer during the service")}
              width={1280}
              height={853}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg border border-border object-cover"
            />
          </div>
          <div className="md:hidden">
            <Carousel
              slides={[
                { src: "/img-recepcao.jpg", alt: t("Membros da igreja reunidos em confraternização", "Church members gathered in fellowship") },
                { src: "/img-visita-2.jpg", alt: t("Momento de oração com imposição de mãos", "Moment of prayer with laying on of hands") },
                { src: "/img-visita-3.jpg", alt: t("Pessoas com as mãos levantadas em oração", "People with hands raised in prayer") },
              ]}
            />
          </div>
          <h2 className="mt-14 text-3xl font-bold uppercase text-primary-deep">{t("O que esperar", "What to expect")}</h2>
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
          <h2 className="text-2xl font-bold uppercase text-primary-deep">{t("Perguntas frequentes", "Frequently asked questions")}</h2>
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
            {t("Ficou com alguma dúvida?", "Still have a question?")}{" "}
            <Link to="/contato" className="font-semibold text-primary hover:underline">
              {t("Fale com a gente", "Talk to us")}
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
