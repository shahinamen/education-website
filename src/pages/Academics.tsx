import Breadcrumb from "@/components/Breadcrumb";

const programs = [
  {
    label: "Foundation Phase",
    title: "Early Years & Primary Learning",
    description:
      "A joyful and engaging environment that develops literacy, numeracy, creativity, and confidence through hands-on learning and personal attention.",
  },
  {
    label: "Middle School",
    title: "Inquiry, Research & Discovery",
    description:
      "Students explore STEM, humanities, arts, and communication while learning independence, collaboration, and critical problem solving.",
  },
  {
    label: "Senior School",
    title: "Academic Excellence & Pathway Planning",
    description:
      "Our senior curriculum prepares learners for university, technical training, and future careers through rigorous coursework and career guidance.",
  },
];

const highlights = [
  "STEM labs and maker spaces",
  "Creative arts, music, and performing arts",
  "Leadership and service learning",
  "Strong teacher mentoring and support",
  "Digital literacy and project-based learning",
  "Global perspectives and cultural exchange",
];

export default function Academics() {
  return (
    <>
      <Breadcrumb pageTitle="Academics" />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {programs.map((program) => (
            <div key={program.label} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
                {program.label}
              </p>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">{program.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
                Curriculum
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                A balanced academic journey for every learner.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We combine rigorous academics with personal development, practical learning,
                and future-ready skills so students can thrive in school and beyond.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg"
                alt="Students in a classroom"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
