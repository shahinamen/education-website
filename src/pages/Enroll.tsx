import Breadcrumb from "@/components/Breadcrumb";

export default function Enrollment() {
  return (
    <>
      <Breadcrumb pageTitle="Enroll" />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Application form
            </p>
            <h1 className="mt-4 text-4xl font-bold">Start your child’s journey.</h1>
            <p className="mt-4 text-base leading-7 text-slate-300">
              We would love to learn more about your family and help you find the right
              academic fit for your child.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">Campus Visit</p>
                <p className="mt-1 text-lg font-semibold text-white">Book a personal tour</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">Admissions Support</p>
                <p className="mt-1 text-lg font-semibold text-white">Guidance from start to finish</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">Student Life</p>
                <p className="mt-1 text-lg font-semibold text-white">Exceptional learning and community</p>
              </div>
            </div>
          </div>

          <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Parent/Guardian Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Student Name</label>
                <input
                  type="text"
                  placeholder="Emma Smith"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Grade Applying For</label>
                <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
                  <option>Kindergarten</option>
                  <option>Primary School</option>
                  <option>Middle School</option>
                  <option>Senior School</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Preferred Start Date</label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your child, interests, and any questions you have..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
