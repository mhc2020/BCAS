export default function DonateSponsor() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold text-slate-900">
          Donate & Sponsor
        </h1>
        <p className="text-sm text-slate-600">
          Support BCAS programs and help us serve the community.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-green-100">
          <h2 className="text-base font-extrabold text-slate-900">Donations</h2>
          <p className="mt-2 text-sm text-slate-700">
            One-time donations help BCAS run community events, cultural
            programs, and newcomer support initiatives.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            (Online donation payments will be enabled in a later phase.)
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-green-100">
          <h2 className="text-base font-extrabold text-slate-900">
            Sponsorships
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            Sponsorship packages (Gold / Silver / Bronze) will be available
            soon. Sponsors may include a logo/advertisement.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            (Payments + automated receipts will be added later.)
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-r from-green-50 to-white p-6 border border-green-100">
        <h2 className="text-base font-extrabold text-slate-900">
          Interested in sponsoring an event?
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          Please contact us and we’ll share sponsorship options and timelines.
        </p>
      </section>
    </div>
  );
}
