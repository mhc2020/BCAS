import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-xl text-sm font-semibold transition ${
    isActive ? "bg-white/60 text-green-950" : "text-slate-800 hover:bg-white/50"
  }`;

const mobileLinkClass =
  "block rounded-xl px-4 py-3 text-sm font-extrabold text-slate-900 hover:bg-white/60 transition";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu when screen becomes large again
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false); // lg breakpoint
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-green-200 bg-green-50/95 backdrop-blur">
      <div className="w-full px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-green-600 to-red-600" />
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-slate-900">
              Bangladeshi Community Association of Saskatchewan
            </p>
            <p className="text-xs text-slate-600">Saskatchewan, Canada</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-1 lg:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink to="/executive" className={navClass}>
            Executive
          </NavLink>
          <NavLink to="/events" className={navClass}>
            Events
          </NavLink>
          <NavLink to="/news" className={navClass}>
            News
          </NavLink>
          <NavLink to="/membership" className={navClass}>
            Membership
          </NavLink>
          <NavLink to="/donate-sponsor" className={navClass}>
            Donate & Sponsor
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          {/* Donate button (hide text on very small screens if you want) */}
          <Link
            to="/donate-sponsor"
            className="hidden sm:inline-flex rounded-full bg-red-600 px-4 py-2 text-sm font-extrabold text-white hover:bg-red-700 transition"
          >
            Donate
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 hover:bg-white transition border border-green-200"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="lg:hidden border-t border-green-200 bg-green-50/95">
          <div className="px-6 py-4 space-y-2">
            <Link
              to="/"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              to="/executive"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              Executive
            </Link>
            <Link
              to="/events"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/news"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              News
            </Link>
            <Link
              to="/membership"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              Membership
            </Link>
            <Link
              to="/donate-sponsor"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              Donate & Sponsor
            </Link>
            <Link
              to="/contact"
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile donate button */}
            <Link
              to="/donate-sponsor"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-red-700 transition"
              onClick={() => setOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
