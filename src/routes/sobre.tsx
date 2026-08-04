import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Compass, Flame, HandHeart, Heart, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

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

const VALUES = [
  { title: "Acolhimento", text: "Cada pessoa que entra é recebida como parte da família.", Icon: HandHeart },
  { title: "Palavra", text: "A Bíblia é nosso fundamento para a fé e para a vida.", Icon: BookOpen },
  { title: "Oração", text: "Cremos que Deus ouve e responde.", Icon: Flame },
  { title: "Família", text: "Cuidamos de casais, crianças, jovens e idosos.", Icon: Users },
  { title: "Serviço", text: "Servimos uns aos outros e à cidade de Toronto.", Icon: Heart },
  { title: "Missão", text: "Levar a mensagem de Jesus a brasileiros e a todos os povos.", Icon: Compass },
];

function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src="/img-comunidade.jpg"
          alt="Membros da igreja conversando após o culto"
          width={1280}
          height={853}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-deep/95 via-primary-deep/85 to-primary-deep/50"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-4 py-24">
          <p className="eyebrow text-accent">Quem somos</p>
          <h1 className="mt-5 text-5xl font-bold uppercase text-primary-foreground md:text-6xl">
            Sobre nós
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-accent">
            Uma igreja brasileira em Toronto, formada por pessoas que recomeçaram — e encontraram uma
            família.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="section-y" aria-labelledby="historia">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <Reveal direction="left">
            <p className="eyebrow text-primary">01 · Origem</p>
            <h2 id="historia" className="mt-5 text-4xl font-bold uppercase text-primary-deep">
              Nossa história
            </h2>
            <p className="mt-6 text-muted-foreground">
              A Fonte da Vida Toronto nasceu do desejo de oferecer um lar espiritual à comunidade
              brasileira no Canadá. O que começou com poucas famílias reunidas em oração cresceu e se
              tornou uma igreja que hoje acolhe imigrantes, estudantes, casais e crianças em North York.
            </p>
            <p className="mt-4 text-muted-foreground">
              Fazemos parte do Ministério Fonte da Vida, uma família de igrejas presente em várias cidades
              e países, unida pela mesma fé e pelo mesmo compromisso com as pessoas.
            </p>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <img
              src="/img-toronto.jpg"
              alt="Vista da cidade de Toronto ao entardecer"
              width={1280}
              height={853}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Missão */}
      <section className="section-y bg-secondary" aria-labelledby="missao">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <Reveal direction="left" className="md:order-2">
            <p className="eyebrow text-primary">02 · Propósito</p>
            <h2 id="missao" className="mt-5 text-4xl font-bold uppercase text-primary-deep">
              Nossa missão
            </h2>
            <p className="mt-6 text-muted-foreground">
              Levar pessoas a um encontro real com Jesus e ajudá-las a crescer em fé, em comunidade e em
              propósito.
            </p>
            <blockquote className="mt-8 border-l-2 border-primary pl-5 font-display text-2xl uppercase leading-tight text-primary-deep">
              Fé que se vive junto, no dia a dia.
            </blockquote>
          </Reveal>
          <Reveal direction="right" delay={100} className="md:order-1">
            <img
              src="/img-louvor.jpg"
              alt="Momento de louvor durante o culto"
              width={1280}
              height={853}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Visão */}
      <section className="section-y" aria-labelledby="visao">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <Reveal direction="left">
            <p className="eyebrow text-primary">03 · Direção</p>
            <h2 id="visao" className="mt-5 text-4xl font-bold uppercase text-primary-deep">
              Nossa visão
            </h2>
            <p className="mt-6 text-muted-foreground">
              Ser uma igreja acolhedora e relevante em Toronto, que serve a comunidade brasileira e alcança
              a cidade com o amor de Cristo.
            </p>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <img
              src="/img-grupo.jpg"
              alt="Grupo pequeno reunido para estudo bíblico"
              width={1280}
              height={853}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="section-y bg-secondary" aria-labelledby="valores">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal direction="up">
            <p className="eyebrow text-primary">04 · O que nos move</p>
            <h2 id="valores" className="mt-5 text-4xl font-bold uppercase text-primary-deep">
              Nossos valores
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                as="li"
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 60}
                className="card-lift rounded-lg border border-border bg-background p-6"
              >
                <v.Icon aria-hidden className="size-6 text-primary" />
                <h3 className="mt-4 text-xl font-bold uppercase text-primary-deep">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Fé */}
      <section className="section-y" aria-labelledby="fe">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <Reveal direction="left">
            <img
              src="/img-biblia.jpg"
              alt="Bíblia aberta sobre uma mesa de madeira"
              width={1280}
              height={853}
              loading="lazy"
              className="aspect-4/3 w-full rounded-lg border border-border object-cover"
            />
          </Reveal>
          <Reveal direction="right" delay={100}>
            <p className="eyebrow text-primary">05 · Fundamento</p>
            <h2 id="fe" className="mt-5 text-4xl font-bold uppercase text-primary-deep">
              Nossa fé
            </h2>
            <p className="mt-6 text-muted-foreground">
              Cremos em um só Deus, Pai, Filho e Espírito Santo. Cremos na Bíblia como Palavra inspirada de
              Deus, na salvação pela graça mediante a fé em Jesus Cristo, na obra do Espírito Santo na vida
              do cristão e na Igreja como comunidade de fé chamada a servir.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-primary-deep">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <Reveal direction="up">
            <h2 className="text-3xl font-bold uppercase text-primary-foreground md:text-4xl">
              Quer nos conhecer pessoalmente?
            </h2>
            <p className="mt-3 text-accent">Venha a um culto. Você é nosso convidado.</p>
            <Link
              to="/visite-nos"
              className="meta mt-8 inline-flex min-h-12 items-center rounded-md bg-primary-foreground px-7 text-sm font-semibold uppercase tracking-[0.12em] text-primary-deep transition-opacity hover:opacity-90"
            >
              Planeje sua visita
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
