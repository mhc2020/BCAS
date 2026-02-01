import { Link } from "react-router-dom";
import { events } from "../../data/content";

function getEventImageUrl(fileName?: string) {
  if (!fileName) return null;
  return new URL(`../../assets/events/${fileName}`, import.meta.url).toString();
}

export default function EventsSection() {
  const top3 = events.slice(0, 3);

  return (
    <section className="w-full">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Upcoming Events
          </h2>
          <p className="mt-2 text-slate-600">
            Join us for these exciting community gatherings
          </p>
        </div>

        <Link
          to="/events"
          className="hidden sm:inline-flex rounded-full bg-red-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-red-700"
        >
          View All Events
        </Link>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3 items-stretch">
        {top3.map((e) => {
          const img = getEventImageUrl(e.image);

          return (
            <Link
              key={e.slug}
              to={`/events/${e.slug}`}
              className="group rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg flex flex-col h-full overflow-hidden"
            >
              {/* image */}
              <div className="h-56 w-full bg-slate-100 overflow-hidden">
                {img ? (
                  <img
                    src={img}
                    alt={e.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                ) : null}
              </div>

              {/* content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm font-bold text-red-600">{e.date}</p>

                <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                  {e.title}
                </h3>

                {/* Keep description height consistent */}
                <p className="mt-3 text-sm text-slate-600 max-h-[4.5rem] overflow-hidden">
                  {e.description}
                </p>

                {/* Always stays at bottom */}
                <span className="mt-auto pt-6 inline-flex w-full items-center justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-extrabold text-white transition group-hover:bg-red-700">
                  Learn More
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 sm:hidden">
        <Link
          to="/events"
          className="inline-flex rounded-full bg-red-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-red-700"
        >
          View All Events
        </Link>
      </div>
    </section>
  );
}
