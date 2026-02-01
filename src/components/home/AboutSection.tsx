import { Link } from "react-router-dom";
import { events } from "../../data/content";

export default function AboutSection() {
  const nextEvent = events[0];

  return (
    <section className="w-full">
      <div className="grid gap-6 rounded-2xl bg-gradient-to-r from-green-600 via-green-500 to-green-200 p-6 text-white shadow-sm md:grid-cols-2 md:items-center">
        {/* Left (About BCAS content styled like Hero) */}
        <div className="space-y-4">
          <p className="text-xs font-extrabold uppercase tracking-widest text-green-50">
            About BCAS
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Bangladeshi Community Association of Saskatchewan
          </h2>

          <p className="text-sm text-green-50/95 md:text-base">
            BCAS is a non-profit organization dedicated to preserving
            Bangladeshi culture, supporting newcomers, and building a welcoming
            community across Saskatchewan.
          </p>

          <p className="text-sm text-green-50/95 md:text-base">
            We organize cultural programs, family gatherings, youth activities,
            and community support initiatives throughout the year.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              to="/about"
              className="rounded-full bg-white px-5 py-2 text-sm font-extrabold text-green-800 hover:bg-green-50"
            >
              Learn more about BCAS
            </Link>

            <Link
              to="/membership"
              className="rounded-full border border-white/70 px-5 py-2 text-sm font-bold hover:bg-white/10"
            >
              Membership
            </Link>

            <Link
              to="/donate-sponsor"
              className="rounded-full border border-white/70 px-5 py-2 text-sm font-bold hover:bg-white/10"
            >
              Donate & Sponsor
            </Link>
          </div>
        </div>

        {/* Right (Quick panel like Hero card) */}
        <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
          <p className="text-sm font-extrabold">Quick links</p>

          <div className="mt-3 space-y-2 text-sm">
            <Link
              to="/events"
              className="block font-bold underline text-green-50"
            >
              View events
            </Link>
            <Link
              to="/news"
              className="block font-bold underline text-green-50"
            >
              News & announcements
            </Link>
            <Link
              to="/contact"
              className="block font-bold underline text-green-50"
            >
              Contact BCAS
            </Link>
          </div>

          <div className="mt-5 border-t border-white/20 pt-4">
            <p className="text-sm font-extrabold">Next community event</p>

            {nextEvent ? (
              <>
                <p className="mt-2 text-sm text-green-50">
                  <span className="font-bold">{nextEvent.title}</span>
                </p>
                <p className="mt-1 text-xs text-green-100">
                  {nextEvent.date} • {nextEvent.location}
                </p>
                <p className="mt-3 text-sm text-green-50/95">
                  {nextEvent.description}
                </p>

                <Link
                  to={`/events/${nextEvent.slug}`}
                  className="mt-3 inline-block text-xs font-bold underline"
                >
                  View details
                </Link>
              </>
            ) : (
              <p className="mt-2 text-green-50/90 text-sm">
                Stay tuned for upcoming cultural and social programs.
              </p>
            )}

            <Link
              to="/events"
              className="mt-3 block text-xs font-bold underline"
            >
              See all events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
