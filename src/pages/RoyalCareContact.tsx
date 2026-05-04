import { useState } from "react";
import {
  Mail as EnvelopeIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  X as XMarkIcon,
} from "lucide-react";

const RoyalCareContact = () => {
  const [showMapModal, setShowMapModal] = useState(false);

  // -------------------- Contact Form State & Handlers --------------------
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setMessageType("success");
      setFormMessage("Message sent successfully (simulated).");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setMessageType("error");
      setFormMessage("Sorry, there was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormMessage(""), 5000);
    }
  };

  return (
    <>
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Information */}
            <div className="p-8 lg:p-12 bg-slate-900 text-white flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
              <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                Whether you're a homeowner needing services, a skilled service
                provider, or a local business partner — we're here to answer
                your questions and explore opportunities to connect our
                community.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-slate-800 p-3 rounded-lg">
                    <EnvelopeIcon className="h-6 w-6 text-red-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">E-mail</h3>
                    <p className="mt-1 text-slate-300">hello@srvpinoy.com</p>
                  </div>
                </div>

                <a href="tel:+639939515571" className="flex items-start group hover:opacity-80 transition-opacity">
                  <div className="flex-shrink-0 bg-slate-800 p-3 rounded-lg group-hover:bg-slate-700 transition-colors">
                    <PhoneIcon className="h-6 w-6 text-red-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="mt-1 text-slate-300">(+63) 993-951-5571</p>
                    <span className="text-sm text-red-400 mt-1 block">Tap to call</span>
                  </div>
                </a>

                <button 
                  type="button"
                  onClick={() => setShowMapModal(true)}
                  className="flex items-start group text-left w-full hover:opacity-80 transition-opacity"
                >
                  <div className="flex-shrink-0 bg-slate-800 p-3 rounded-lg group-hover:bg-slate-700 transition-colors">
                    <MapPinIcon className="h-6 w-6 text-red-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <p className="mt-1 text-slate-300 leading-relaxed">
                      InTTO Office, University of the Cordilleras Legarda Campus,
                      Basement 1, Legarda Road, Baguio City, Philippines
                    </p>
                    <span className="text-sm text-red-400 mt-2 block">Click to view map</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 lg:p-12">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors bg-slate-50 text-slate-900"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors bg-slate-50 text-slate-900"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors bg-slate-50 text-slate-900"
                    placeholder="e.g. Partnership Inquiry, Feedback, Support"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors bg-slate-50 text-slate-900 resize-y"
                    placeholder="Tell us about your inquiry, feedback, or how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Submit Message"
                  )}
                </button>

                {formMessage && (
                  <div
                    className={`p-4 rounded-lg mt-4 text-sm font-medium ${
                      messageType === "success" 
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200" 
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {formMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Modal */}
      {showMapModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div 
            className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div>
                <h3 id="modal-title" className="text-xl font-bold text-slate-900">SRV Location</h3>
                <p className="text-sm text-slate-500 mt-1">
                  University of the Cordilleras (Legarda Campus) • InTTO Office
                </p>
              </div>
              <button
                onClick={() => setShowMapModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-2 rounded-lg hover:bg-slate-100"
                aria-label="Close modal"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-grow bg-slate-100 w-full h-[60vh] relative">
              <iframe
                title="SRV - University of the Cordilleras (Legarda Campus) map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.2841143403452!2d120.59157560000001!3d16.4103908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a1685e7b7073%3A0xe6bda988e8558d2!2sUniversity%20of%20Cordilleras%20Legarda!5e0!3m2!1sen!2sph!4v1759030399917!5m2!1sen!2sph"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoyalCareContact;