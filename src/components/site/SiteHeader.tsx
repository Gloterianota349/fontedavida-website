import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { CHURCH } from "@/lib/church";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/visite-nos", label: "Visite-nos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/pedido-de-oracao", label: "Pedido de Oração" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center" aria-label={CHURCH.name}>
          <img
            src={logo.url}
            alt={`Logo da ${CHURCH.name}`}
            width={220}
            height={73}
            className="h-11 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CHURCH.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background lg:hidden" aria-label="Navegação principal (mobile)">
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
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
