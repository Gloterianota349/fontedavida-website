import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { CHURCH, SERVICES } from "@/lib/church";
import { submitContactMessage } from "@/lib/forms.functions";
import { contactSchema } from "@/lib/form-schemas";
import { Field, inputClass } from "@/components/site/Field";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Fonte da Vida Toronto" },
      {
        name: "description",
        content:
          "Fale com a Igreja Fonte da Vida Toronto: endereço em North York, telefone, WhatsApp, e-mail e formulário de contato.",
      },
      { property: "og:title", content: "Contato — Fonte da Vida Toronto" },
      {
        property: "og:description",
        content: "Endereço, telefone, e-mail e formulário para falar com a nossa equipe.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const send = useServerFn(submitContactMessage);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const parsed = contactSchema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      await send({ data: parsed.data });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="bg-primary-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold uppercase text-primary-foreground md:text-5xl">Contato</h1>
          <p className="mt-3 max-w-2xl text-lg text-accent">
            Estamos por aqui para te ouvir, tirar dúvidas e te receber.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold uppercase text-primary-deep">Fale com a gente</h2>
            <ul className="mt-6 space-y-4 text-foreground">
              <li className="flex gap-3">
                <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-primary" />
                <span>{CHURCH.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden className="mt-1 size-5 shrink-0 text-primary" />
                <a href={`tel:${CHURCH.phoneHref}`} className="hover:underline">
                  {CHURCH.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden className="mt-1 size-5 shrink-0 text-primary" />
                <a href={`mailto:${CHURCH.email}`} className="hover:underline">
                  {CHURCH.email}
                </a>
              </li>
            </ul>

            <h3 className="mt-10 text-lg font-bold uppercase text-primary-deep">Horários</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <span className="font-semibold text-foreground">
                    {s.day} — {s.time}
                  </span>{" "}
                  · {s.title}
                </li>
              ))}
            </ul>

            <div className="mt-8 overflow-hidden rounded-lg border border-border">
              <iframe
                title="Mapa com a localização da Fonte da Vida Toronto"
                src={CHURCH.mapsEmbed}
                loading="lazy"
                className="h-64 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            {status === "sent" ? (
              <div className="rounded-lg border border-border bg-accent/40 p-8" role="status">
                <h2 className="text-2xl font-bold uppercase text-primary-deep">Mensagem enviada</h2>
                <p className="mt-3 text-muted-foreground">
                  Obrigado por escrever. Nossa equipe responde assim que possível.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <Field id="c-name" label="Seu nome" error={errors['name']}>
                  <input id="c-name" name="name" maxLength={100} className={inputClass} />
                </Field>
                <Field id="c-email" label="E-mail" error={errors['email']}>
                  <input id="c-email" name="email" type="email" maxLength={255} className={inputClass} />
                </Field>
                <Field id="c-phone" label="Telefone (opcional)" error={errors['phone']}>
                  <input id="c-phone" name="phone" maxLength={40} className={inputClass} />
                </Field>
                <Field id="c-subject" label="Assunto" error={errors['subject']}>
                  <input id="c-subject" name="subject" maxLength={150} className={inputClass} />
                </Field>
                <Field id="c-message" label="Mensagem" error={errors['message']}>
                  <textarea id="c-message" name="message" rows={6} maxLength={2000} className={inputClass} />
                </Field>

                {status === "error" ? (
                  <p role="alert" className="text-sm font-semibold text-destructive">
                    Não foi possível enviar agora. Tente novamente em instantes.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex min-h-11 items-center rounded-md bg-primary px-8 font-semibold text-primary-foreground transition-colors hover:bg-primary-deep disabled:opacity-60"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensagem"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
