import { useState } from "react";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { IMAGES } from "@/config/images";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission to formsubmit.co
    const form = e.currentTarget as HTMLFormElement;
    form.submit();
  };

  return (
    <section
      id="contact"
      className="bg-white section-spacing"
    >
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In Touch With <span className="text-highlight">Us Now</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-12 h-1 bg-brand-yellow rounded-full"></div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp Card */}
          <a
            href="https://api.whatsapp.com/send/?phone=27742448556&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <MessageCircle className="w-6 h-6 text-brand-purple" />
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600">074 244 8556</p>
          </a>

          {/* Email Card */}
          <a
            href="mailto:info@nasarts.co.za"
            className="bg-white rounded-3xl border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <Mail className="w-6 h-6 text-brand-purple" />
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">info@nasarts.co.za</p>
          </a>

          {/* Location Card */}
          <a
            href="https://maps.google.com/?q=Munsieville,Krugersdorp"
            className="bg-white rounded-3xl border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <MapPin className="w-6 h-6 text-brand-purple" />
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Munsieville, Krugersdorp</p>
          </a>
        </div>

        {/* Main Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Side - Map */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-md h-80">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.5698050456397!2d27.841938999999998!3d-25.8890892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e954d5e5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sMunsieville%2C%20Krugersdorp!5e0!3m2!1sen!2s!4v1234567890"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-3">
            <form
              action="https://formsubmit.co/info@nasarts.co.za"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-brand-purple bg-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-brand-purple bg-white"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject (Optional)"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-6 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-brand-purple bg-white"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-brand-purple bg-white resize-none"
              ></textarea>

              {/* Submit Button */}
              <button type="submit" className="btn-primary w-full md:w-auto">
                Send Message Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
