import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { CHURCH, SERVICES } from "@/lib/church";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <img
            src={logo.url}
            alt={`Logo da ${CHURCH.name}`}
            width={220}
            height={73}
            loading="lazy"
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Uma igreja para toda a família em Toronto. Você é nosso convidado.
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href={CHURCH.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Fonte da Vida Toronto"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-background text-primary"
            >
              <Instagram aria-hidden className="size-5" />
            </a>
            <a
              href={CHURCH.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="Canal no YouTube"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-background text-primary"
            >
              <Youtube aria-hidden className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold uppercase text-primary-deep">Horários</h2>
          <ul className="mt-4 space-y-2 text-sm text-foreground">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <span className="font-semibold">{s.day}, {s.time}</span> — {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold uppercase text-primary-deep">Contato</h2>
          <ul className="mt-4 space-y-3 text-sm text-foreground">
            <li className="flex gap-2">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{CHURCH.addressLine1}<br />{CHURCH.addressLine2}</span>
            </li>
            <li className="flex gap-2">
              <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={CHURCH.phoneHref} className="hover:text-primary">{CHURCH.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${CHURCH.email}`} className="hover:text-primary">{CHURCH.email}</a>
            </li>
          </ul>
          <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Links do rodapé">
            <Link to="/visite-nos" className="text-muted-foreground hover:text-primary">Visite-nos</Link>
            <Link to="/sobre" className="text-muted-foreground hover:text-primary">Sobre</Link>
            <Link to="/pedido-de-oracao" className="text-muted-foreground hover:text-primary">Pedido de Oração</Link>
            <Link to="/contato" className="text-muted-foreground hover:text-primary">Contato</Link>
          </nav>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {CHURCH.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
