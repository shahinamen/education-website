export default function About() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-3xl font-bold text-gray-800">
        Learn More About Our Work And Our Cultural Activities
      </h1>
      <p className="mt-2 text-gray-600">
        Empowering students through quality education.
      </p>

      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-6 sm:grid-cols-1 lg:grid-cols-2 min-h-[450px]">
        {/* Card 1 */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-left">
          <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
          <p className="text-gray-600 text-justify">
            We provide a structured curriculum and activities that promote
            intellectual and personal growth for all students. We provide a
            structured curriculum and activities that promote intellectual and
            personal growth for all students. We provide a structured curriculum
            and activities that promote intellectual and personal growth for all
            students. We provide a structured curriculum and activities that
            promote intellectual and personal growth for all students.We provide
            a structured curriculum and activities that promote intellectual and
            personal growth for all students.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <button className="px-6 py-2 rounded-full cursor-pointer bg-orange-600 text-white sm:text-base md:text-lg font-semibold shadow-md hover:bg-white hover:text-orange-600 transition duration-300 ease-in-out">
              Classes
            </button>
            <button className="px-6 py-2 rounded-full cursor-pointer bg-white text-orange-600 sm:text-base md:text-lg font-semibold shadow-md border border-orange-600 hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-left"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/16221036/pexels-photo-16221036.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </section>
  );
}
