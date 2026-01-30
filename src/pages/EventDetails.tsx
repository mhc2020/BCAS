import { useParams } from "react-router-dom";
import { events } from "../data/content";

export default function EventDetail() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-extrabold">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <article className="space-y-3 rounded-2xl bg-white p-6 shadow-sm border border-green-100">
        <h1 className="text-2xl font-extrabold text-slate-900">
          {event.title}
        </h1>
        <p className="text-xs text-slate-500">
          {event.date} {event.time ? `· ${event.time}` : ""} · {event.location}
        </p>
        <p className="mt-2 text-sm text-slate-700">{event.description}</p>
      </article>
    </div>
  );
}
