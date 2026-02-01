import { Link } from "react-router-dom";
import { newsItems } from "../../data/content";

export default function NewsSection() {
  const top = newsItems.slice(0, 3);

  return (
    <section className="w-full">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            News & Announcements
          </h2>
          <p className="mt-2 text-slate-600">
            Important updates and notices from BCAS
          </p>
        </div>

        <Link
          to="/news"
          className="hidden sm:inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-700 hover:bg-slate-50"
        >
          View All News
        </Link>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {top.map((n) => (
          <Link
            key={n.slug}
            to={`/news/${n.slug}`}
            className="block rounded-2xl border border-green-100 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-xs font-bold text-slate-500">{n.date}</p>
            <h3 className="mt-2 text-lg font-extrabold text-slate-900">
              {n.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600">{n.summary}</p>
            <p className="mt-4 text-sm font-extrabold text-green-800 underline">
              Read more
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-10 sm:hidden">
        <Link
          to="/news"
          className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-700 hover:bg-slate-50"
        >
          View All News
        </Link>
      </div>
    </section>
  );
}
