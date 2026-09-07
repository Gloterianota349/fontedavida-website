import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { CHURCH, SERVICES } from "@/lib/church";
import { submitContactMessage } from "@/lib/forms.functions";
import { contactSchema } from "@/lib/form-schemas";
import { Field, inputClass } from "@/components/site/Field";
import { useI18n } from "@/lib/i18n";

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
  const { t, lang } = useI18n();
  const send = useServerFn(submitContactMessage);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const errorMessages: Record<string, string> = {
    "Informe seu nome": t("Informe seu nome", "Please enter your name"),
    "E-mail inválido": t("E-mail inválido", "Invalid email"),
    "Informe o assunto": t("Informe o assunto", "Please enter a subject"),
    "Escreva sua mensagem": t("Escreva sua mensagem", "Please write your message"),
  };

  function translateError(message: string) {
    return errorMessages[message] ?? message;
  }

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
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = translateError(issue.message);
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
      <section className="relative isolate overflow-hidden">
        <img
          src="/img-contato-hero.jpg"
          alt={t("Recepção acolhendo um visitante na entrada da igreja", "Welcome team greeting a visitor at the church entrance")}
          width={1280}
          height={853}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-deep/95 via-primary-deep/85 to-primary-deep/50"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-4 py-24">
          <p className="eyebrow text-accent">{t("Estamos por perto", "We're close by")}</p>
          <h1 className="mt-5 text-5xl font-bold uppercase text-primary-foreground md:text-6xl">
            {t("Contato", "Contact")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-accent">
            {t("Estamos por aqui para te ouvir, tirar dúvidas e te receber.", "We're here to listen, answer questions, and welcome you.")}
          </p>
        </div>
      </section>

      <section className="pb-[5.5rem] pt-10">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold uppercase text-primary-deep">{t("Fale com a gente", "Get in touch")}</h2>
            <ul className="mt-6 space-y-4 text-foreground">
              <li className="flex gap-3">
                <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-primary" />
                <span>{lang === "pt" ? CHURCH.address : (CHURCH.address as string)}</span>
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

            <h3 className="mt-10 text-lg font-bold uppercase text-primary-deep">{t("Horários", "Service times")}</h3>
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
                title={t("Mapa com a localização da Fonte da Vida Toronto", "Map showing the location of Fonte da Vida Toronto")}
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
                <h2 className="text-2xl font-bold uppercase text-primary-deep">{t("Mensagem enviada", "Message sent")}</h2>
                <p className="mt-3 text-muted-foreground">
                  {t("Obrigado por escrever. Nossa equipe responde assim que possível.", "Thank you for writing. Our team will respond as soon as possible.")}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <Field id="c-name" label={t("Seu nome", "Your name")} error={errors['name']}>
                  <input id="c-name" name="name" maxLength={100} className={inputClass} />
                </Field>
                <Field id="c-email" label={t("E-mail", "Email")} error={errors['email']}>
                  <input id="c-email" name="email" type="email" maxLength={255} className={inputClass} />
                </Field>
                <Field id="c-phone" label={t("Telefone (opcional)", "Phone (optional)")} error={errors['phone']}>
                  <input id="c-phone" name="phone" maxLength={40} className={inputClass} />
                </Field>
                <Field id="c-subject" label={t("Assunto", "Subject")} error={errors['subject']}>
                  <input id="c-subject" name="subject" maxLength={150} className={inputClass} />
                </Field>
                <Field id="c-message" label={t("Mensagem", "Message")} error={errors['message']}>
                  <textarea id="c-message" name="message" rows={6} maxLength={2000} className={inputClass} />
                </Field>

                {status === "error" ? (
                  <p role="alert" className="text-sm font-semibold text-destructive">
                    {t("Não foi possível enviar agora. Tente novamente em instantes.", "We couldn't send your message right now. Please try again shortly.")}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex min-h-11 items-center rounded-md bg-primary px-8 font-semibold text-primary-foreground transition-colors hover:bg-primary-deep disabled:opacity-60"
                >
                  {status === "sending" ? t("Enviando...", "Sending...") : t("Enviar mensagem", "Send message")}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
