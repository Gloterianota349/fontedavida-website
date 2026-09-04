import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { HeartHandshake } from "lucide-react";
import { submitPrayerRequest } from "@/lib/forms.functions";
import { prayerSchema } from "@/lib/form-schemas";
import { Field, inputClass } from "@/components/site/Field";

export const Route = createFileRoute("/pedido-de-oracao")({
  head: () => ({
    meta: [
      { title: "Pedido de Oração — Fonte da Vida Toronto" },
      {
        name: "description",
        content:
          "Envie seu pedido de oração para a equipe de intercessão da Fonte da Vida Toronto. Seu pedido pode ser mantido em sigilo.",
      },
      { property: "og:title", content: "Pedido de Oração — Fonte da Vida Toronto" },
      {
        property: "og:description",
        content: "Nossa equipe de intercessão quer orar por você. Envie seu pedido.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pedido-de-oracao" },
    ],
    links: [{ rel: "canonical", href: "/pedido-de-oracao" }],
  }),
  component: PrayerPage,
});

function PrayerPage() {
  const send = useServerFn(submitPrayerRequest);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const parsed = prayerSchema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      request: String(fd.get("request") ?? ""),
      isPrivate: fd.get("isPrivate") === "on",
      urgency: "normal" as const,
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
      <section className="relative isolate overflow-hidden">
        <img
          src="/img-intercessao.jpg"
          alt="Pastor orando com imposição de mãos sobre uma pessoa"
          width={1280}
          height={853}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-deep/95 via-primary-deep/85 to-primary-deep/50"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-4 py-24">
          <p className="eyebrow text-accent">Equipe de intercessão</p>
          <h1 className="mt-5 text-5xl font-bold uppercase text-primary-foreground md:text-6xl">
            Pedido de Oração
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-accent">
            Não importa o tamanho da sua necessidade — queremos orar com você.
          </p>
        </div>
      </section>

      <section className="pb-[5.5rem] pt-10">
        <div className="mx-auto max-w-2xl px-4">
          {status === "sent" ? (
            <div className="rounded-lg border border-border bg-accent/40 p-8 text-center" role="status">
              <HeartHandshake aria-hidden className="mx-auto size-10 text-primary" />
              <h2 className="mt-4 text-2xl font-bold uppercase text-primary-deep">
                Recebemos seu pedido
              </h2>
              <p className="mt-3 text-muted-foreground">
                Nossa equipe de intercessão vai orar por você. Que a paz de Deus te alcance hoje.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <Field id="name" label="Seu nome" error={errors['name']}>
                <input id="name" name="name" maxLength={100} className={inputClass} />
              </Field>
              <Field id="email" label="E-mail" error={errors['email']}>
                <input id="email" name="email" type="email" maxLength={255} className={inputClass} />
              </Field>
              <Field id="phone" label="Telefone (opcional)" error={errors['phone']}>
                <input id="phone" name="phone" maxLength={40} className={inputClass} />
              </Field>
              <Field id="request" label="Seu pedido" error={errors['request']}>
                <textarea id="request" name="request" rows={6} maxLength={2000} className={inputClass} />
              </Field>
              <label htmlFor="isPrivate" className="flex items-start gap-3 text-sm text-foreground">
                <input id="isPrivate" type="checkbox" name="isPrivate" className="mt-1 size-4" />
                <span>Manter meu pedido em sigilo (visível apenas para a equipe pastoral)</span>
              </label>


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
                {status === "sending" ? "Enviando..." : "Enviar pedido"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
