import { Link } from "react-router-dom";

function Card({
  title,
  text,
  link,
  linkText,
}: {
  title: string;
  text: string;
  link: string;
  linkText: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm border border-green-100">
      <h2 className="text-base font-extrabold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
      <Link
        to={link}
        className="mt-3 inline-block text-sm font-extrabold text-green-700 underline"
      >
        {linkText}
      </Link>
    </div>
  );
}

export default function InfoCards() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="grid gap-6 md:grid-cols-3">
        <Card
          title="About BCAS"
          text="BCAS connects Bangladeshi families, students, and professionals through cultural programs and support."
          link="/about"
          linkText="Read more"
        />
        <Card
          title="Events"
          text="Pohela Boishakh, Victory Day, Eid gatherings and more. See what’s coming next."
          link="/events"
          linkText="View events"
        />
        <Card
          title="News & Announcements"
          text="Important updates, notices, and announcements from the executive committee."
          link="/news"
          linkText="See latest news"
        />
      </div>
    </section>
  );
}
