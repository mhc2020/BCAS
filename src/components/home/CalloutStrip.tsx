import { Link } from "react-router-dom";

export default function CalloutStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-green-100 md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-base font-extrabold text-slate-900">
            Want to get involved?
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Become a member, volunteer at events, or support BCAS through
            donations and sponsorships.
          </p>
        </div>
        <div className="mt-4 flex gap-3 md:mt-0">
          <Link
            to="/membership"
            className="rounded-full bg-green-700 px-5 py-2 text-sm font-extrabold text-white hover:bg-green-800"
          >
            Membership info
          </Link>
          <Link
            to="/donate-sponsor"
            className="rounded-full border border-slate-200 px-5 py-2 text-sm font-extrabold text-slate-700 hover:bg-slate-50"
          >
            Donate & Sponsor
          </Link>
        </div>
      </div>
    </section>
  );
}
