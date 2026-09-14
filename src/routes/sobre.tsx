import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Fonte da Vida Toronto — Nossa história e fé" },
      {
        name: "description",
        content:
          "Conheça a história, a missão, a visão, os valores e a fé da Igreja Apostólica Fonte da Vida em Toronto.",
      },
      { property: "og:title", content: "Sobre a Fonte da Vida Toronto" },
      {
        property: "og:description",
        content: "Nossa história, missão, visão, valores e declaração de fé.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: AboutPage,
});

function useValues() {
  const { t } = useI18n();
  return [
    {
      title: t("Acolhimento", "Welcome"),
      text: t(
        "Cada pessoa que entra é recebida como parte da família.",
        "Every person who walks in is welcomed as part of the family."
      ),
      img: "/img-recepcao.jpg",
      alt: t(
        "Membros da igreja reunidos em confraternização",
        "Church members gathered in fellowship"
      ),
    },
    {
      title: t("Palavra", "The Word"),
      text: t(
        "A Bíblia é nosso fundamento para a fé e para a vida.",
        "The Bible is our foundation for faith and for life."
      ),
      img: "/img-biblia.jpg",
      alt: t(
        "Membro acompanhando a leitura da Bíblia durante o culto",
        "A member following along in the Bible during the service"
      ),
    },
    {
      title: t("Oração", "Prayer"),
      text: t("Cremos que Deus ouve e responde.", "We believe God hears and answers."),
      img: "/img-adoracao.jpg",
      alt: t("Homens de mãos levantadas em oração", "Men with raised hands in prayer"),
    },
    {
      title: t("Família", "Family"),
      text: t(
        "Cuidamos de casais, crianças, jovens e idosos.",
        "We care for couples, children, youth, and seniors."
      ),
      img: "/img-comunidade.jpg",
      alt: t("Famílias reunidas na igreja", "Families gathered at church"),
    },
    {
      title: t("Serviço", "Service"),
      text: t(
        "Servimos uns aos outros e à cidade de Toronto.",
        "We serve one another and the city of Toronto."
      ),
      img: "/img-criancas.jpg",
      alt: t(
        "Crianças acompanhando a leitura durante o culto",
        "Children following along during the service"
      ),
    },
    {
      title: t("Missão", "Mission"),
      text: t(
        "Levar a mensagem de Jesus a brasileiros e a todos os povos.",
        "Bringing the message of Jesus to Brazilians and to all peoples."
      ),
      img: "/img-missao.jpg",
      alt: t("Círculo de oração na entrada da igreja", "A prayer circle at the church entrance"),
    },
  ];
}

function AboutPage() {
  const { t } = useI18n();
  const VALUES = useValues();
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src="/img-sobre-hero.jpg"
          alt={t("Igreja reunida em círculo de adoração", "Church gathered in a circle of worship")}
          width={1280}
          height={853}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-deep/95 via-primary-deep/85 to-primary-deep/50"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-4 py-24">
          <p className="eyebrow text-accent">{t("Quem somos", "Who we are")}</p>
          <h1 className="mt-5 text-5xl font-bold uppercase text-primary-foreground md:text-6xl">
            {t("Sobre a Fonte da Vida Toronto", "About Fonte da Vida Toronto")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-accent">
            {t(
              "Uma igreja brasileira em Toronto, formada por pessoas que recomeçaram — e encontraram uma família.",
              "A Brazilian church in Toronto, formed by people who started over — and found a family."
            )}
          </p>
        </div>
      </section>

      {/* História */}
      <section className="pb-[5.5rem] pt-10" aria-labelledby="historia">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <Reveal direction="left">
            <p className="eyebrow text-primary">{t("01 · Origem", "01 · Origin")}</p>
            <h2 id="historia" className="mt-5 text-4xl font-bold uppercase text-primary-deep">
              {t("Nossa história", "Our story")}
            </h2>
            <p className="mt-6 text-muted-foreground">
              {t(
                "A Fonte da Vida Toronto nasceu do desejo de oferecer um lar espiritual à comunidade brasileira no Canadá. O que começou com poucas famílias reunidas em oração cresceu e se tornou uma igreja que hoje acolhe imigrantes, estudantes, casais e crianças em North York.",
                "Fonte da Vida Toronto was born from a desire to offer a spiritual home to the Brazilian community in Canada. What began with a few families gathered in prayer has grown into a church that today welcomes immigrants, students, couples, and children in North York."
              )}
            </p>
            <p className="mt-4 text-muted-foreground">
              {t(
                "Fazemos parte do Ministério Fonte da Vida, uma família de igrejas presente em várias cidades e países, unida pela mesma fé e pelo mesmo compromisso com as pessoas.",
                "We are part of Ministério Fonte da Vida, a family of churches present in many cities and countries, united by the same faith and the same commitment to people."
              )}
            </p>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <img
              src="/img-historia.jpg"
              alt={t("Casal ajoelhado em oração durante o culto", "Couple kneeling in prayer during the service")}
              width={1280}
              height={853}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Missão */}
      <section className="pb-[5.5rem] pt-12 bg-secondary" aria-labelledby="missao">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <Reveal direction="left" className="md:order-2">
            <p className="eyebrow text-primary">{t("02 · Propósito", "02 · Purpose")}</p>
            <h2 id="missao" className="mt-5 text-4xl font-bold uppercase text-primary-deep">
              {t("Nossa missão", "Our mission")}
            </h2>
            <p className="mt-6 text-muted-foreground">
              {t(
                "Levar pessoas a um encontro real com Jesus e ajudá-las a crescer em fé, em comunidade e em propósito.",
                "To lead people into a real encounter with Jesus and help them grow in faith, in community, and in purpose."
              )}
            </p>
            <blockquote className="mt-8 border-l-2 border-primary pl-5 font-display text-2xl uppercase leading-tight text-primary-deep">
              {t("Fé que se vive junto, no dia a dia.", "Faith lived together, day by day.")}
            </blockquote>
          </Reveal>
          <Reveal direction="right" delay={100} className="md:order-1">
            <img
              src="/img-missao.jpg"
              alt={t("Círculo de oração na entrada da igreja", "A prayer circle at the church entrance")}
              width={1280}
              height={853}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Visão */}
      <section className="pb-[5.5rem] pt-12" aria-labelledby="visao">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <Reveal direction="left">
            <p className="eyebrow text-primary">{t("03 · Direção", "03 · Direction")}</p>
            <h2 id="visao" className="mt-5 text-4xl font-bold uppercase text-primary-deep">
              {t("Nossa visão", "Our vision")}
            </h2>
            <p className="mt-6 text-muted-foreground">
              {t(
                "Ser uma igreja acolhedora e relevante em Toronto, que serve a comunidade brasileira e alcança a cidade com o amor de Cristo.",
                "To be a welcoming and relevant church in Toronto that serves the Brazilian community and reaches the city with the love of Christ."
              )}
            </p>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <img
              src="/img-grupo.jpg"
              alt={t("Crianças em atividade do ministério infantil", "Children taking part in a kids ministry activity")}
              width={1280}
              height={853}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="pb-[5.5rem] pt-12 bg-secondary" aria-labelledby="valores">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal direction="up">
            <p className="eyebrow text-primary">{t("04 · O que nos move", "04 · What moves us")}</p>
            <h2 id="valores" className="mt-5 text-4xl font-bold uppercase text-primary-deep">
              {t("Nossos valores", "Our values")}
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                as="li"
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 70}
                className="card-lift group overflow-hidden rounded-lg border border-border bg-background"
              >
                <div className="relative h-24 overflow-hidden">
                  <img
                    src={v.img}
                    alt={v.alt}
                    width={1280}
                    height={853}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary-deep/75 to-transparent"
                    aria-hidden
                  />
                  <h3 className="absolute bottom-4 left-5 text-xl font-bold uppercase text-primary-foreground">
                    {v.title}
                  </h3>
                </div>
                <p className="p-6 text-sm text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Fé */}
      <section className="pb-[5.5rem] pt-12" aria-labelledby="fe">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <Reveal direction="left" className="order-2 md:order-1">
            <img
              src="/img-biblia.jpg"
              alt={t("Membro com a Bíblia aberta durante o culto", "A member with an open Bible during the service")}
              width={1280}
              height={853}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg border border-border object-cover"
            />
          </Reveal>
          <Reveal direction="right" delay={100} className="order-1 md:order-2">
            <p className="eyebrow text-primary">{t("05 · Fundamento", "05 · Foundation")}</p>
            <h2 id="fe" className="mt-5 text-4xl font-bold uppercase text-primary-deep">
              {t("Nossa fé", "Our faith")}
            </h2>
            <p className="mt-6 text-muted-foreground">
              {t(
                "Cremos em um só Deus, Pai, Filho e Espírito Santo. Cremos na Bíblia como Palavra inspirada de Deus, na salvação pela graça mediante a fé em Jesus Cristo, na obra do Espírito Santo na vida do cristão e na Igreja como comunidade de fé chamada a servir.",
                "We believe in one God, Father, Son, and Holy Spirit. We believe the Bible is the inspired Word of God, in salvation by grace through faith in Jesus Christ, in the work of the Holy Spirit in the life of the believer, and in the Church as a community of faith called to serve."
              )}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-primary-deep">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <Reveal direction="up">
            <h2 className="text-3xl font-bold uppercase text-primary-foreground md:text-4xl">
              {t("Quer nos conhecer pessoalmente?", "Want to meet us in person?")}
            </h2>
            <p className="mt-3 text-accent">
              {t("Venha a um culto. Você é nosso convidado.", "Come to a service. You are our guest.")}
            </p>
            <Link
              to="/visite-nos"
              className="meta mt-8 inline-flex min-h-12 items-center rounded-md bg-primary-foreground px-7 text-sm font-semibold uppercase tracking-[0.12em] text-primary-deep transition-opacity hover:opacity-90"
            >
              {t("Planeje sua visita", "Plan your visit")}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
