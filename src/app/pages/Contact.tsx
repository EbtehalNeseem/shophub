import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const faqs = [
    {
      question: "What are your shipping options?",
      answer:
        "We offer standard (5-7 days) and express (2-3 days) shipping options.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day money-back guarantee on all products. Items must be in original condition.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to over 100 countries worldwide. Shipping costs vary by location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email.",
    },
  ];

  return (
    <div className="bg-[#f8f9fa]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#198754] to-[#146c43] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl mb-4">Get In Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help! Reach out to
            our friendly customer support team.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#198754]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#198754]" />
              </div>
              <h3 className="text-xl mb-3">Phone</h3>
              <p className="text-gray-600 mb-2">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#198754]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#198754]" />
              </div>
              <h3 className="text-xl mb-3">Email</h3>
              <p className="text-gray-600 mb-2">support@shophub.com</p>
              <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#198754]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#198754]" />
              </div>
              <h3 className="text-xl mb-3">Address</h3>
              <p className="text-gray-600 mb-2">123 Commerce Street</p>
              <p className="text-sm text-gray-500">New York, NY 10001</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <h2 className="text-3xl mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-[#198754]" />
                  </div>
                  <h3 className="text-2xl mb-3">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2 text-gray-700">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-4 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-4 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-700">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="How can we help?"
                      className="w-full px-4 py-4 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-4 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#198754] to-[#146c43] text-white rounded-xl hover:shadow-2xl transition-all text-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-80">
                <div className="w-full h-full bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p>Map Location</p>
                    <p className="text-sm mt-2">123 Commerce Street, New York</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-[#198754]" />
                  <h3 className="text-2xl">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-red-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="bg-gradient-to-br from-[#198754] to-[#146c43] rounded-3xl shadow-lg p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6" />
                  <h3 className="text-2xl">Need Immediate Help?</h3>
                </div>
                <p className="text-white/90 mb-6">
                  Chat with our support team for instant assistance
                </p>
                <button className="w-full px-6 py-3 bg-white text-[#198754] rounded-xl hover:shadow-2xl transition-all">
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Find quick answers to common questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#f8f9fa] rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
