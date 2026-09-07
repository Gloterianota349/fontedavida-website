import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { CHURCH } from "@/lib/church";
import { useI18n } from "@/lib/i18n";

export function SiteFooter({ variant = "full" }: { variant?: "full" | "minimal" }) {
  const { t, lang } = useI18n();
  return (
    <footer className="border-t border-border bg-background">
      {variant === "full" ? (
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="eyebrow text-primary">{t("Contato", "Contact")}</h2>
          <ul className="mt-4 space-y-2 text-sm text-foreground">
            <li className="flex gap-2">
              <MapPin aria-hidden className="mt-1 size-4 shrink-0 text-primary" />
              <span className="meta">
                {CHURCH.addressLine1}, {lang === "pt" ? CHURCH.addressLine2 : CHURCH.addressLine2En}
              </span>
            </li>
            <li className="flex gap-2">
              <Phone aria-hidden className="mt-1 size-4 shrink-0 text-primary" />
              <a href={CHURCH.phoneHref} className="meta hover:text-primary">
                {CHURCH.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail aria-hidden className="mt-1 size-4 shrink-0 text-primary" />
              <a href={`mailto:${CHURCH.email}`} className="meta hover:text-primary">
                {CHURCH.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-2">
          <a
            href={CHURCH.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("Instagram da Fonte da Vida Toronto", "Fonte da Vida Toronto on Instagram")}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border text-primary transition-colors hover:border-primary"
          >
            <Instagram aria-hidden className="size-5" />
          </a>
          <a
            href={CHURCH.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("Canal no YouTube", "YouTube channel")}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border text-primary transition-colors hover:border-primary"
          >
            <Youtube aria-hidden className="size-5" />
          </a>
        </div>
      </div>
      ) : null}

      <div className={variant === "full" ? "border-t border-border" : ""}>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {CHURCH.name}
          </p>
          <Link to="/contato" className="meta uppercase tracking-[0.14em] hover:text-primary">
            {t("Fale conosco", "Get in touch")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
