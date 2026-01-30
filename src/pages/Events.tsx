import { Link } from "react-router-dom";
import { events } from "../data/content";

export default function Events() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-4">
      <h1 className="text-2xl font-extrabold text-slate-900">Events</h1>
      <p className="text-sm text-slate-600">
        Upcoming and recent community events organized by BCAS.
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {events.map((event) => (
          <Link
            key={event.slug}
            to={`/events/${event.slug}`}
            className="block rounded-2xl bg-white p-5 shadow-sm border border-green-100 hover:shadow-md transition"
          >
            <h2 className="text-base font-extrabold text-slate-900">
              {event.title}
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              {event.date} {event.time ? `· ${event.time}` : ""} ·{" "}
              {event.location}
            </p>
            <p className="mt-2 text-sm text-slate-600">{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
