import { Mail, MapPin, Phone } from "lucide-react";

export default function Slider() {
  return (
    <>
      <section className="p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Get In Touch</h1>
      </section>
      <section className="p-8 text-center bg-gray-100 text-gray-300">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="flex flex-col items-center">
            <MapPin className="text-orange-600 w-8 h-8 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Address
            </h3>
            <p className="text-gray-400">123 Main Street New York, NY 10001</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <Phone className="text-orange-600 w-8 h-8 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <Mail className="text-orange-600 w-8 h-8 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-400">info@universal.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
