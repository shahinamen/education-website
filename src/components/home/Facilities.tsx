import { BookOpen, Users, Globe } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      icon: Users,
      title: "Expert Teachers",
      description:
        "Our experienced faculty ensures quality education and personal growth for every student.",
    },
    {
      icon: BookOpen,
      title: "Modern Library",
      description:
        "Access to a wide range of books, e-resources, and study materials for all levels.",
    },
    {
      icon: Users,
      title: "Student Community",
      description:
        "Collaborative environment fostering teamwork, extracurricular activities, and lifelong friendships.",
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description:
        "Exchange programs and international partnerships to broaden students’ horizons.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {facilities.map((facility, index) => {
        const Icon = facility.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border hover:border-orange-600"
          >
            <div className="p-4 rounded-full bg-red-100 mb-4">
              <Icon className="w-10 h-10 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{facility.title}</h3>
            <p className="text-gray-600 text-sm">{facility.description}</p>
          </div>
        );
      })}
    </div>
  );
}
