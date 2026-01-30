import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

type Slide = { src: string; title: string; subtitle: string };

export default function Carousel() {
  const slides: Slide[] = useMemo(
    () => [
      {
        src: new URL(
          "../../assets/carousel/event1.jpg",
          import.meta.url,
        ).toString(),
        title: "Community Events",
        subtitle: "Culture • Food • Music • Togetherness",
      },
      {
        src: new URL(
          "../../assets/carousel/event2.jpg",
          import.meta.url,
        ).toString(),
        title: "Celebrate Bangladeshi Heritage",
        subtitle: "Programs for families, students, and professionals",
      },
      {
        src: new URL(
          "../../assets/carousel/event3.jpg",
          import.meta.url,
        ).toString(),
        title: "Get Involved with BCAS",
        subtitle: "Volunteer • Membership • Support",
      },
    ],
    [],
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  const active = slides[index];

  return (
    <section className="bg-gradient-to-b from-green-50 to-white">
      <div className="mx-auto max-w-6xl px-4 pt-6">
        <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">
          <img
            src={active.src}
            alt={active.title}
            className="h-[220px] w-full object-cover sm:h-[300px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-900/30 to-transparent" />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white max-w-lg">
            <p className="text-xs font-bold uppercase tracking-widest text-green-100">
              BCAS • Saskatchewan
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold">
              {active.title}
            </h2>
            <p className="mt-2 text-sm text-green-50">{active.subtitle}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                to="/events"
                className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-green-800 hover:bg-green-50"
              >
                View events
              </Link>
              <Link
                to="/membership"
                className="rounded-full border border-white/60 px-4 py-2 text-sm font-bold hover:bg-white/10"
              >
                Membership
              </Link>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 right-4 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
