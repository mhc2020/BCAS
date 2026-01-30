import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-green-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} BCAS. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-slate-700">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-slate-700">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
