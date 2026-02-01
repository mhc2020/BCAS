import { Link } from "react-router-dom";
import { newsItems } from "../data/content";

export default function News() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold text-slate-900">
          News & Announcements
        </h1>
        <p className="text-sm text-slate-600">
          Updates, community notices, and announcements from BCAS.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {newsItems.map((n) => (
          <Link
            key={n.slug}
            to={`/news/${n.slug}`}
            className="block rounded-2xl bg-white p-5 shadow-sm border border-green-100 hover:shadow-md transition"
          >
            <h2 className="text-base font-extrabold text-slate-900">
              {n.title}
            </h2>
            <p className="mt-1 text-xs text-slate-500">{n.date}</p>
            <p className="mt-3 text-sm text-slate-600">{n.summary}</p>
            <p className="mt-3 text-sm font-extrabold text-green-700 underline">
              Read more
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
