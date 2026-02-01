export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-extrabold text-slate-900">Contact Us</h1>
        <p className="text-sm text-slate-600">
          Questions, membership inquiries, sponsorships, or volunteering — reach
          out.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-green-100">
          <h2 className="text-base font-extrabold text-slate-900">
            Send a message
          </h2>

          {/* UI only: no backend yet */}
          <form
            className="mt-4 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted (UI only). Backend will be added later.");
            }}
          >
            <div>
              <label className="text-sm font-bold text-slate-700">Name</label>
              <input
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-200"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">
                Message
              </label>
              <textarea
                rows={5}
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-200"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-green-700 px-5 py-2 text-sm font-extrabold text-white hover:bg-green-800"
            >
              Send
            </button>
          </form>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-green-100 space-y-3">
          <h2 className="text-base font-extrabold text-slate-900">BCAS</h2>
          <p className="text-sm text-slate-700">
            Saskatoon, Saskatchewan, Canada
          </p>
          <p className="text-sm text-slate-700">
            Email: <span className="font-bold">(add official email)</span>
          </p>
          <p className="text-sm text-slate-700">
            Facebook: <span className="font-bold">(add page link later)</span>
          </p>

          <div className="mt-2 rounded-2xl bg-green-50 p-4 border border-green-100">
            <p className="text-sm text-slate-700">
              (In the next phase, this form will send emails and store
              inquiries.)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
