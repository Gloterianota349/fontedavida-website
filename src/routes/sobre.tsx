import { createFileRoute, Link } from "@tanstack/react-router";

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
  { title: "Acolhimento", text: "Cada pessoa que entra é recebida como parte da família." },
  { title: "Palavra", text: "A Bíblia é nosso fundamento para a fé e para a vida." },
  { title: "Oração", text: "Cremos que Deus ouve e responde." },
  { title: "Família", text: "Cuidamos de casais, crianças, jovens e idosos." },
  { title: "Serviço", text: "Servimos uns aos outros e à cidade de Toronto." },
  { title: "Missão", text: "Levar a mensagem de Jesus a brasileiros e a todos os povos." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-primary-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold uppercase text-primary-foreground md:text-5xl">Sobre nós</h1>
          <p className="mt-3 max-w-2xl text-lg text-accent">
            Uma igreja brasileira em Toronto, formada por pessoas que recomeçaram — e encontraram uma família.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold uppercase text-primary-deep">Nossa história</h2>
          <p className="mt-4 text-muted-foreground">
            A Fonte da Vida Toronto nasceu do desejo de oferecer um lar espiritual à comunidade brasileira no
            Canadá. O que começou com poucas famílias reunidas em oração cresceu e se tornou uma igreja que
            hoje acolhe imigrantes, estudantes, casais e crianças em North York.
          </p>
          <p className="mt-4 text-muted-foreground">
            Fazemos parte do Ministério Fonte da Vida, uma família de igrejas presente em várias cidades e
            países, unida pela mesma fé e pelo mesmo compromisso com as pessoas.
          </p>

          <h2 className="mt-12 text-2xl font-bold uppercase text-primary-deep">Nossa missão</h2>
          <p className="mt-4 text-muted-foreground">
            Levar pessoas a um encontro real com Jesus e ajudá-las a crescer em fé, em comunidade e em
            propósito.
          </p>

          <h2 className="mt-12 text-2xl font-bold uppercase text-primary-deep">Nossa visão</h2>
          <p className="mt-4 text-muted-foreground">
            Ser uma igreja acolhedora e relevante em Toronto, que serve a comunidade brasileira e alcança a
            cidade com o amor de Cristo.
          </p>

          <h2 className="mt-12 text-2xl font-bold uppercase text-primary-deep">Nossos valores</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {VALUES.map((v) => (
              <li key={v.title} className="rounded-lg border border-border bg-secondary p-5">
                <h3 className="text-lg font-bold text-primary-deep">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-bold uppercase text-primary-deep">Nossa fé</h2>
          <p className="mt-4 text-muted-foreground">
            Cremos em um só Deus, Pai, Filho e Espírito Santo. Cremos na Bíblia como Palavra inspirada de
            Deus, na salvação pela graça mediante a fé em Jesus Cristo, na obra do Espírito Santo na vida do
            cristão e na Igreja como comunidade de fé chamada a servir.
          </p>

          <div className="mt-12 rounded-lg border border-border bg-accent/40 p-6">
            <p className="text-foreground">
              Quer nos conhecer pessoalmente? Venha a um culto.
            </p>
            <Link
              to="/visite-nos"
              className="mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
            >
              Planeje sua visita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
