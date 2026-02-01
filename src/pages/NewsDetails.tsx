import { Link, useParams } from "react-router-dom";
import { newsItems } from "../data/content";

export default function NewsDetail() {
  const { slug } = useParams();
  const item = newsItems.find((n) => n.slug === slug);

  if (!item) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-4">
        <h1 className="text-2xl font-extrabold text-slate-900">Not found</h1>
        <p className="text-sm text-slate-600">
          This announcement does not exist.
        </p>
        <Link
          to="/news"
          className="text-sm font-extrabold text-green-700 underline"
        >
          Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <article className="rounded-2xl bg-white p-6 shadow-sm border border-green-100 space-y-3">
        <h1 className="text-2xl font-extrabold text-slate-900">{item.title}</h1>
        <p className="text-xs text-slate-500">{item.date}</p>

        <p className="mt-3 text-sm text-slate-700">{item.summary}</p>

        <p className="text-sm text-slate-700">
          (Full details can be added later. For now, this is a simple detail
          page connected to your in-memory data.)
        </p>

        <div className="pt-2">
          <Link
            to="/news"
            className="text-sm font-extrabold text-green-700 underline"
          >
            Back to News
          </Link>
        </div>
      </article>
    </div>
  );
}
