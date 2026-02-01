import { Link } from "react-router-dom";

export default function Membership() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold text-slate-900">Membership</h1>
        <p className="text-sm text-slate-600">
          Become part of BCAS and support our community programs.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm border border-green-100">
          <h2 className="text-base font-extrabold text-slate-900">Benefits</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
            <li>Members-only announcements</li>
            <li>Priority event updates</li>
            <li>Support BCAS programs and initiatives</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm border border-green-100">
          <h2 className="text-base font-extrabold text-slate-900">Plans</h2>
          <p className="mt-3 text-sm text-slate-700">
            (Pricing and plan types will be added later.)
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Future: recurring membership via Stripe.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm border border-green-100">
          <h2 className="text-base font-extrabold text-slate-900">Join</h2>
          <p className="mt-3 text-sm text-slate-700">
            Membership registration will be enabled in a later phase.
          </p>
          <Link
            to="/contact"
            className="mt-3 inline-block text-sm font-extrabold text-green-700 underline"
          >
            Contact us to learn more
          </Link>
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-r from-green-50 to-white p-6 border border-green-100">
        <h2 className="text-base font-extrabold text-slate-900">
          Want to volunteer too?
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          We welcome volunteers for cultural programs, event setup, and
          community support.
        </p>
      </section>
    </div>
  );
}
