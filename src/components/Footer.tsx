import {
  BookOpen,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import settings from "./../lib/settings";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-bold text-orange-500">{settings.company_name}</span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              We believe education should inspire curiosity, strengthen character, and
              open doors to a brighter future for every student.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
              <li><Link to="/academics" className="hover:text-orange-400">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-orange-400">Admissions</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-orange-400" /> {settings.address}</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-orange-400" /> {settings.tel}</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-orange-400" /> {settings.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-700 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} {settings.company_name}. All rights reserved.</p>
          <div className="flex gap-3 text-slate-400">
            <a href="#" className="rounded-full border border-slate-700 p-2 hover:border-orange-400 hover:text-orange-400"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="rounded-full border border-slate-700 p-2 hover:border-orange-400 hover:text-orange-400"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="rounded-full border border-slate-700 p-2 hover:border-orange-400 hover:text-orange-400"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="rounded-full border border-slate-700 p-2 hover:border-orange-400 hover:text-orange-400"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
