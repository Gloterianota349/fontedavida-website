import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = { src: string; alt: string; caption?: string };

/**
 * Sliding carousel that always shows up to 3 images at once (1 on mobile,
 * 2 on small screens). Auto-advances, pauses on hover/focus.
 */
export function Carousel({ slides, interval = 4000 }: { slides: Slide[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number) => setIndex((next + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, interval, slides.length]);

  // Duplicate the list so the track can slide continuously.
  const track = [...slides, ...slides];

  return (
    <div
      className="group relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="region"
      aria-roledescription="carrossel"
      aria-label="Momentos da igreja"
    >
      <div className="overflow-hidden rounded-lg">
        <ul
          className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {track.map((slide, i) => (
            <li
              key={slide.src + i}
              className="w-full shrink-0 px-1.5 sm:w-1/2 lg:w-1/3"
              aria-hidden={i < index || i > index + 2}
            >
              <figure className="relative overflow-hidden rounded-lg border border-border bg-secondary">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  width={1280}
                  height={853}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                />
                {slide.caption ? (
                  <>
                    <div
                      className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-deep/85 to-transparent"
                      aria-hidden
                    />
                    <figcaption className="meta absolute bottom-0 left-0 p-4 text-xs uppercase tracking-[0.14em] text-primary-foreground md:text-sm">
                      {slide.caption}
                    </figcaption>
                  </>
                ) : null}
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Imagem anterior"
        className="absolute -left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/90 text-primary-deep opacity-0 shadow-sm transition-opacity hover:bg-background focus-visible:opacity-100 group-hover:opacity-100"
      >
        <ChevronLeft aria-hidden className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Próxima imagem"
        className="absolute -right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/90 text-primary-deep opacity-0 shadow-sm transition-opacity hover:bg-background focus-visible:opacity-100 group-hover:opacity-100"
      >
        <ChevronRight aria-hidden className="size-5" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={"dot" + slide.src + i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ir para a imagem ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-primary" : "w-2.5 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
