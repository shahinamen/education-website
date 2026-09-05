import Breadcrumb from "@/components/Breadcrumb";
import { Mail, MapPin, Phone } from "lucide-react";

const pageTitle = "Contact";

export default function Contact() {
  return (
    <>
      <Breadcrumb pageTitle={`${pageTitle} us`} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <MapPin className="mx-auto mb-4 h-10 w-10 text-orange-600" />
            <h3 className="text-xl font-semibold text-slate-900">Address</h3>
            <p className="mt-3 text-slate-600">45 Learning Avenue, Riverside, CA 92501</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <Phone className="mx-auto mb-4 h-10 w-10 text-orange-600" />
            <h3 className="text-xl font-semibold text-slate-900">Phone</h3>
            <p className="mt-3 text-slate-600">+1 (555) 234-7788</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <Mail className="mx-auto mb-4 h-10 w-10 text-orange-600" />
            <h3 className="text-xl font-semibold text-slate-900">Email</h3>
            <p className="mt-3 text-slate-600">hello@brighthorizonacademy.edu</p>
          </div>
        </div>
      </section>

      <section
        className="bg-cover bg-center bg-no-repeat px-4 py-16 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4862874/pexels-photo-4862874.jpeg')",
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/20 bg-slate-900/55 p-8 text-left shadow-2xl backdrop-blur-sm">
            <h2 className="mb-6 text-3xl font-bold text-white">Send us a message</h2>

            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-slate-200">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-slate-200">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-slate-200">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <button type="submit" className="w-full rounded-xl bg-orange-600 px-4 py-3 font-semibold text-white transition hover:bg-orange-700">
                Send Message
              </button>
            </form>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
            <iframe
              title="Campus map"
              src="https://www.google.com/maps?q=Los%20Angeles%20CA&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: "480px", border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
