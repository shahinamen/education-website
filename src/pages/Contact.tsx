import Breadcrumb from "@/components/Breadcrumb";
import { Mail, MapPin, Phone } from "lucide-react";
const pageTitle = "Contact";

export default function Contact() {
  return (
    <>
      <Breadcrumb pageTitle={`${pageTitle} us`} />
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
      <section
        className="p-8 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4862874/pexels-photo-4862874.jpeg')",
        }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="backdrop-blur-md bg-white/10 p-8 rounded-lg shadow-lg text-left border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              Get in Touch
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-200 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-200 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-200 mb-1">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-md transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg border border-white/20">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.847196838492!2d-74.00601558459334!3d40.71277597933045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNSJX!5e0!3m2!1sen!2sus!4v1609343020323!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ minHeight: "400px", border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
