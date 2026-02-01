import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center space-y-4">
      <h1 className="text-3xl font-extrabold text-slate-900">Page not found</h1>
      <p className="text-sm text-slate-600">
        The page you are looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="inline-flex rounded-full bg-green-700 px-5 py-2 text-sm font-extrabold text-white hover:bg-green-800"
      >
        Go Home
      </Link>
    </div>
  );
}
