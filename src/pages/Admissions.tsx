import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight, CheckCircle, GraduationCap, NotebookText } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Primary Admission",
    desc: "A warm, engaging start for children ages 4-11, built on foundations in literacy, numeracy, creativity, and social confidence.",
  },
  {
    title: "Middle School Admission",
    desc: "A dynamic learning stage for students ages 11-14 who are ready to explore a wider academic and extracurricular landscape.",
  },
  {
    title: "Senior School Admission",
    desc: "A high-achievement pathway for students ages 14-18 focused on advanced study, leadership, and university readiness.",
  },
];

const steps = [
  "Book a campus tour and consultation",
  "Submit the admission inquiry form",
  "Attend an interview or assessment session",
  "Receive your offer and enroll with confidence",
];

export default function Admissions() {
  return (
    <>
      <Breadcrumb pageTitle="Admissions" />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            Enrollment Process
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">
            Join a community that supports achievement and belonging.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            We welcome families who want a school experience rooted in personal growth,
            academic excellence, and meaningful connection.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {programs.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-orange-100 p-3 text-orange-600">
                {item.title.includes("Primary") ? <NotebookText className="h-6 w-6" /> : item.title.includes("Middle") ? <GraduationCap className="h-6 w-6" /> : <CheckCircle className="h-6 w-6" />}
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                How it works
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white">
                A simple, transparent admissions journey.
              </h2>
              <ol className="mt-8 space-y-5">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-slate-200">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-8 text-slate-900 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">
                Start your application
              </p>
              <h3 className="mt-4 text-3xl font-bold">Ready to take the first step?</h3>
              <p className="mt-4 text-base leading-7 text-slate-800">
                We’d be delighted to show you our campus, answer your questions, and help
                your child find the right place to thrive.
              </p>
              <Link
                to="/enroll"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Apply now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
