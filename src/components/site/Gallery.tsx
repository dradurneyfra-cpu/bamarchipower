import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { GALLERY, type Category } from "@/lib/portfolio";

const FILTERS: Array<"All" | Category> = [
  "All",
  "Electrical",
  "Architecture",
  "Solar & Inverter",
  "Construction",
];

export function Gallery() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [index, setIndex] = useState<number | null>(null);

  const items = GALLERY.filter((i) => filter === "All" || i.category === filter);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const active = index === null ? null : items[index];

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => {
              setFilter(f);
              setIndex(null);
            }}
            className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-[0.08em] uppercase transition-colors ${
              filter === f
                ? "bg-navy text-navy-foreground"
                : "border border-border text-muted-foreground hover:border-gold hover:text-navy"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border bg-surface px-6 py-14 text-center text-sm text-muted-foreground">
          No project photographs have been added to this category yet.
        </p>
      ) : (
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-xl border border-border bg-surface text-left"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy-deep/85 via-navy-deep/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block text-[0.65rem] font-bold tracking-[0.2em] text-gold uppercase">
                  {item.category}
                </span>
                <span className="mt-1 block text-sm font-semibold text-navy-foreground">
                  {item.caption}
                </span>
              </span>
              <span className="pointer-events-none absolute top-4 right-4 grid size-9 place-items-center rounded-full bg-navy-deep/70 opacity-0 transition-opacity group-hover:opacity-100">
                <ZoomIn className="size-4 text-navy-foreground" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      )}

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-100 flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            className="absolute top-5 right-5 grid size-11 place-items-center rounded-full border border-navy-foreground/25 text-navy-foreground"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 grid size-12 place-items-center rounded-full border border-navy-foreground/25 text-navy-foreground md:left-8"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 grid size-12 place-items-center rounded-full border border-navy-foreground/25 text-navy-foreground md:right-8"
          >
            <ChevronRight className="size-6" />
          </button>

          <figure
            className="max-h-[86vh] w-full max-w-4xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="mx-auto max-h-[74vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-4">
              <span className="block text-[0.65rem] font-bold tracking-[0.2em] text-gold uppercase">
                {active.category}
              </span>
              <span className="mt-1 block text-sm text-navy-foreground/85">{active.caption}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
