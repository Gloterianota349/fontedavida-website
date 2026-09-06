import { useI18n, type Lang } from "@/lib/i18n";

const OPTIONS: { value: Lang; label: string; aria: string }[] = [
  { value: "pt", label: "PT", aria: "Mudar para português" },
  { value: "en", label: "EN", aria: "Switch to English" },
];

export function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      className={`inline-flex items-center overflow-hidden rounded-md border border-border ${className}`}
      role="group"
      aria-label="Idioma / Language"
    >
      {OPTIONS.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => setLang(o.value)}
          aria-label={o.aria}
          aria-pressed={lang === o.value}
          className={`meta min-h-9 px-3 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
            lang === o.value
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
