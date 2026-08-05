import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = { src: string; alt: string; caption?: string };

/**
 * Auto-advancing image carousel with fade+zoom transitions, arrows and dots.
 * Pauses on hover/focus and respects prefers-reduced-motion.
 */
export function Carousel({ slides, interval = 5000 }: { slides: Slide[]; interval?: number }) {
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

  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-border bg-secondary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="region"
      aria-roledescription="carrossel"
      aria-label="Momentos da igreja"
    >
      <div className="relative aspect-16/9 w-full">
        {slides.map((slide, i) => (
          <figure
            key={slide.src + i}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              width={1280}
              height={853}
              loading={i === 0 ? "eager" : "lazy"}
              className="size-full object-cover"
            />
            {slide.caption ? (
              <>
                <div
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-deep/90 to-transparent"
                  aria-hidden
                />
                <figcaption className="meta absolute bottom-0 left-0 p-6 text-sm uppercase tracking-[0.14em] text-primary-foreground md:p-8 md:text-base">
                  {slide.caption}
                </figcaption>
              </>
            ) : null}
          </figure>
        ))}
      </div>

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Imagem anterior"
        className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-primary-deep opacity-0 transition-opacity hover:bg-background focus-visible:opacity-100 group-hover:opacity-100"
      >
        <ChevronLeft aria-hidden className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Próxima imagem"
        className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-primary-deep opacity-0 transition-opacity hover:bg-background focus-visible:opacity-100 group-hover:opacity-100"
      >
        <ChevronRight aria-hidden className="size-5" />
      </button>

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={"dot" + slide.src + i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ir para a imagem ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-primary-foreground" : "w-2.5 bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
