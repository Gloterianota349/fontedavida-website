import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { CHURCH } from "@/lib/church";
import { useI18n } from "@/lib/i18n";
import { LangSwitch } from "@/components/site/LangSwitch";

const NAV = [
  { to: "/", label: ["Home", "Home"] },
  { to: "/visite-nos", label: ["Visite-nos", "Visit Us"] },
  { to: "/sobre", label: ["Sobre", "About"] },
  { to: "/pedido-de-oracao", label: ["Pedido de Oração", "Prayer Request"] },
  { to: "/contato", label: ["Contato", "Contact"] },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t, lang } = useI18n();
  const i = lang === "pt" ? 0 : 1;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center" aria-label={CHURCH.name}>
          <img
            src={logo.url}
            alt={`Logo ${CHURCH.name}`}
            width={561}
            height={129}
            className="h-11 w-auto md:h-13"
          />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label={t("Navegação principal", "Main navigation")}
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary after:scale-x-100" }}
              className="meta relative rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-foreground transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-primary hover:after:scale-x-100"
            >
              {item.label[i]}
            </Link>
          ))}
          <a
            href={CHURCH.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="meta ml-3 inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            WhatsApp
          </a>
          <LangSwitch className="ml-3" />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LangSwitch />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("Fechar menu", "Close menu") : t("Abrir menu", "Open menu")}
            aria-expanded={open}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border text-foreground"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-border bg-background lg:hidden"
          aria-label={t("Navegação principal (mobile)", "Main navigation (mobile)")}
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="block py-3 text-base font-semibold text-foreground"
                >
                  {item.label[i]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
