import { Facebook, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  // Update these later with real links
  const socials = {
    facebook: "https://www.facebook.com/groups/ourbcas",
    x: "https://x.com/",
    youtube: "https://youtube.com/",
  };

  // Update these later with real info
  const contact = {
    email: "info@bcas.ca",
    phone: "+1 (306) 000-0000",
    location: "Saskatoon, Saskatchewan, Canada",
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-200">
      {/* Main footer area (taller) */}
      <div className="w-full px-6 py-4">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-500 to-red-600" />
              <div className="leading-tight">
                <p className="text-sm font-extrabold text-white">
                  Bangladeshi Community Association of Saskatchewan
                </p>
                <p className="text-xs text-slate-400">BCAS</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Building a welcoming Bangladeshi community in Saskatchewan through
              cultural events, support for newcomers, and community engagement.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 rounded-full bg-red-600/90 hover:bg-red-600 transition flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>

              <a
                href={socials.x}
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 rounded-full bg-red-600/90 hover:bg-red-600 transition flex items-center justify-center"
                aria-label="X"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>

              <a
                href={socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 rounded-full bg-red-600/90 hover:bg-red-600 transition flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link className="hover:text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/events">
                  Our Events
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/membership">
                  Membership
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/donate-sponsor">
                  Donate & Sponsor
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-white">Contact</h3>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-slate-400" />
                <span>{contact.email}</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-slate-400" />
                <span>{contact.phone}</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-slate-400" />
                <span>{contact.location}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-white">
              Join Our Newsletter
            </h3>

            <p className="text-sm text-slate-300">
              Get updates about upcoming events, announcements, and community
              news.
            </p>

            {/* UI-only newsletter form */}
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed (UI only). We'll connect email later.");
              }}
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full rounded-xl bg-slate-800 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-green-300"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-green-600 px-5 py-2.5 text-sm font-extrabold text-white hover:bg-green-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="w-full px-6 py-5">
          <div className="mx-auto max-w-6xl flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-slate-400">
            <p>© {new Date().getFullYear()} BCAS. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-slate-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-slate-200">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
