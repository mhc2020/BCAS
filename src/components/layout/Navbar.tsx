import { Link, NavLink } from "react-router-dom";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-xl text-sm font-semibold transition ${
    isActive
      ? "bg-green-200 text-green-950"
      : "text-slate-700 hover:bg-green-100"
  }`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-green-600 to-red-600" />
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-slate-900">BCAS</p>
            <p className="text-xs text-slate-500">Saskatchewan</p>
          </div>
        </Link>

        <nav className="hidden gap-1 md:flex">
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

        <Link
          to="/donate-sponsor"
          className="rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700 transition"
        >
          Donate
        </Link>
      </div>
    </header>
  );
}
