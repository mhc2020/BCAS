import { executiveMembers } from "../data/content";

function getImageUrl(fileName?: string) {
  if (!fileName) return null;

  return new URL(
    `../assets/executives/${fileName}`,
    import.meta.url,
  ).toString();
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function Executive() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      {/* Page Header */}
      <header>
        <h1 className="text-2xl font-extrabold text-slate-900">
          Executive Committee
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Meet the BCAS executive committee members serving our community.
        </p>
      </header>

      {/* Cards */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {executiveMembers.map((m) => {
          const imageUrl = getImageUrl(m.image);

          return (
            <div
              key={`${m.position}-${m.name}`}
              className="overflow-hidden rounded-2xl bg-white border border-green-100 shadow-sm hover:shadow-md transition"
            >
              {/* Banner */}
              <div className="relative h-56 bg-gradient-to-br from-green-600 via-green-500 to-red-600">
                {/* Photo */}
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={m.name}
                    className="absolute inset-0 h-full w-full object-cover object-[50%_20%]"
                  />
                )}

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Avatar */}
                <div className="absolute left-5 bottom-[-32px] h-24 w-24 rounded-2xl bg-white/30 backdrop-blur border border-white/40 flex items-center justify-center">
                  {/* {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={m.name}
                      className="h-20 w-20 rounded-2xl object-cover bg-white"
                    />
                  ) : (
                    <div className="h-20 w-20 rounded-2xl bg-white flex items-center justify-center text-green-800 font-extrabold text-2xl">
                      {initials(m.name)}
                    </div>
                  )} */}
                  <div className="h-20 w-20 rounded-2xl bg-white flex items-center justify-center text-green-800 font-extrabold text-2xl">
                    {initials(m.name)}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="px-5 pt-12 pb-5">
                <p className="text-base font-extrabold text-slate-900">
                  {m.name}
                </p>

                <p className="mt-1 text-sm font-semibold text-green-800">
                  {m.position}
                </p>

                <p className="mt-4 text-sm text-slate-600">Short bio...</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
