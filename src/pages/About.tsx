import Breadcrumb from "@/components/Breadcrumb";
import { Award, Compass, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Student-Centered Learning",
    description:
      "Every lesson is designed to spark curiosity, build confidence, and support each learner’s individual pace and strengths.",
  },
  {
    icon: Lightbulb,
    title: "Innovation in Education",
    description:
      "We blend technology, creativity, and critical thinking to prepare students for the future and the world beyond the classroom.",
  },
  {
    icon: Heart,
    title: "Care and Belonging",
    description:
      "Our inclusive environment nurtures emotional growth, kindness, and a strong sense of community for every student and family.",
  },
  {
    icon: Award,
    title: "Excellence with Integrity",
    description:
      "Academic achievement is paired with character, accountability, and a commitment to excellence in all we do.",
  },
];

const stats = [
  { value: "12+", label: "Years of excellence" },
  { value: "1,800+", label: "Students nurtured" },
  { value: "35+", label: "Expert educators" },
  { value: "96%", label: "Parent satisfaction" },
];

export default function About() {
  return (
    <>
      <Breadcrumb pageTitle="About Us" />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Our Story
            </p>
            <h1 className="mt-4 text-4xl font-bold text-slate-900">
              A nurturing place where ambition meets opportunity.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Bright Horizon Academy was founded to create a learning environment where
              students feel challenged, supported, and inspired to become thoughtful,
              confident, and globally aware leaders.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              From early years through senior school, we believe education should unlock
              curiosity, strengthen character, and help young people discover their unique
              voice in the world.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
              alt="Students studying together"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-4xl font-bold text-orange-400">{stat.value}</div>
                <p className="mt-3 text-sm uppercase tracking-[0.15em] text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            Our Values
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Learning that grows the whole child.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-orange-100 p-3 text-orange-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
