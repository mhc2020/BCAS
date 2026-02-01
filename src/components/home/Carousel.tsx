import { useEffect, useMemo, useRef, useState } from "react";
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

  // We render slides + 1 clone (first slide at the end)
  const trackSlides = useMemo(() => {
    if (slides.length === 0) return [];
    return [...slides, slides[0]];
  }, [slides]);

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const intervalRef = useRef<number | null>(null);

  // Auto-play
  useEffect(() => {
    if (slides.length <= 1) return;

    intervalRef.current = window.setInterval(() => {
      setIndex((i) => i + 1);
    }, 4500);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [slides.length]);

  // When we reach the clone slide, snap back to real first slide (no animation)
  useEffect(() => {
    if (slides.length === 0) return;

    // When index === slides.length, we're on the CLONE (last item in trackSlides)
    if (index === slides.length) {
      const timeout = window.setTimeout(() => {
        setAnimate(false); // turn off animation
        setIndex(0); // snap back to real first slide
      }, 700); // must match transition duration

      return () => window.clearTimeout(timeout);
    }

    // for all normal moves, keep animation on
    setAnimate(true);
  }, [index, slides.length]);

  // Dot clicking (keep within real slides range)
  const goTo = (i: number) => {
    setAnimate(true);
    setIndex(i);
  };

  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">
        {/* SLIDES TRACK */}
        <div
          className={`flex ${animate ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {trackSlides.map((slide, i) => (
            <div key={i} className="relative min-w-full">
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-[420px] sm:h-[520px] lg:h-[600px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-green-950/70 via-green-950/30 to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="w-full px-6">
                  <div className="max-w-2xl text-white">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-green-100">
                      BCAS • Saskatchewan
                    </p>

                    <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                      {slide.title}
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-green-50">
                      {slide.subtitle}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        to="/events"
                        className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-green-900 hover:bg-green-50"
                      >
                        View events
                      </Link>
                      <Link
                        to="/membership"
                        className="rounded-full border border-white/60 px-5 py-3 text-sm font-extrabold hover:bg-white/10"
                      >
                        Membership
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS (only real slides, not the clone) */}
        <div className="absolute bottom-5 right-6 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index % slides.length === i
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
