import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  UserRound,
} from "lucide-react";
import type {
  ChangeEvent,
  FormEvent,
} from "react";
import {
  useState,
} from "react";

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  subject: string;
  message: string;
};

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  subject: "",
  message: "",
};

function ContactsPage() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);

      /*
       * Replace this section with your API request.
       *
       * Example:
       *
       * await axios.post("/api/contact", formData);
       */

      await new Promise((resolve) => setTimeout(resolve, 800));

      setFormData(initialFormData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to send contact message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-[#f4fbfc]">
        <div className="container mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 border border-[#078b9f]/25 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#078b9f]">
              <MessageSquareText className="h-4 w-4" />
              Contact us
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Let’s work together to create lasting change.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Contact our team about partnerships, programs, media enquiries,
              volunteering, donations, or general information about our work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact area */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            {/* Contact information */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#078b9f]">
                Get in touch
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                We would be glad to hear from you.
              </h2>

              <p className="mt-4 max-w-lg leading-7 text-slate-600">
                Send us a message and select the reason for your enquiry. A
                member of our team will respond as soon as possible.
              </p>

              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                <a
                  href="mailto:info@elmanpeace.org"
                  className="group flex items-start gap-4 py-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#078b9f]/25 bg-[#f4fbfc] text-[#078b9f]">
                    <Mail className="h-5 w-5" />
                  </span>

                  <span>
                    <span className="block text-sm font-medium text-slate-500">
                      Email
                    </span>

                    <span className="mt-1 block font-semibold text-slate-900 transition-colors group-hover:text-[#078b9f]">
                      info@elmanpeace.org
                    </span>
                  </span>
                </a>

                <a
                  href="tel:+252000000000"
                  className="group flex items-start gap-4 py-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#078b9f]/25 bg-[#f4fbfc] text-[#078b9f]">
                    <Phone className="h-5 w-5" />
                  </span>

                  <span>
                    <span className="block text-sm font-medium text-slate-500">
                      Telephone
                    </span>

                    <span className="mt-1 block font-semibold text-slate-900 transition-colors group-hover:text-[#078b9f]">
                      +252 00 000 0000
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#078b9f]/25 bg-[#f4fbfc] text-[#078b9f]">
                    <MapPin className="h-5 w-5" />
                  </span>

                  <span>
                    <span className="block text-sm font-medium text-slate-500">
                      Office
                    </span>

                    <span className="mt-1 block font-semibold leading-6 text-slate-900">
                      Mogadishu, Somalia
                    </span>
                  </span>
                </div>

                <div className="flex items-start gap-4 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#078b9f]/25 bg-[#f4fbfc] text-[#078b9f]">
                    <Clock3 className="h-5 w-5" />
                  </span>

                  <span>
                    <span className="block text-sm font-medium text-slate-500">
                      Working hours
                    </span>

                    <span className="mt-1 block font-semibold leading-6 text-slate-900">
                      Sunday – Thursday, 8:00 AM – 5:00 PM
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-8 border border-[#078b9f]/25 bg-[#f4fbfc] p-5">
                <div className="flex items-start gap-3">
                  <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-[#078b9f]" />

                  <div>
                    <h3 className="font-semibold text-slate-950">
                      Partnership enquiries
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      We welcome collaboration with NGOs, institutions,
                      community organizations, donors, and development
                      partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="border border-slate-200 bg-white p-5 sm:p-7 lg:p-9">
              <div className="mb-7">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Send us a message
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Complete the form below and our team will contact you.
                </p>
              </div>

              {isSubmitted && (
                <div
                  role="status"
                  className="mb-6 flex items-start gap-3 border border-emerald-200 bg-emerald-50 p-4 text-emerald-800"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

                  <div>
                    <p className="font-semibold">Message sent successfully.</p>

                    <p className="mt-1 text-sm leading-6">
                      Thank you for contacting us. Our team will respond soon.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-medium text-slate-800"
                    >
                      Full name
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <UserRound className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        autoComplete="name"
                        className="h-12 w-full border border-slate-300 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#078b9f] focus:ring-2 focus:ring-[#078b9f]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-800"
                    >
                      Email address
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        required
                        autoComplete="email"
                        className="h-12 w-full border border-slate-300 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#078b9f] focus:ring-2 focus:ring-[#078b9f]/10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-slate-800"
                    >
                      Phone number
                    </label>

                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+252"
                        autoComplete="tel"
                        className="h-12 w-full border border-slate-300 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#078b9f] focus:ring-2 focus:ring-[#078b9f]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="mb-2 block text-sm font-medium text-slate-800"
                    >
                      Organization
                    </label>

                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Organization name"
                      autoComplete="organization"
                      className="h-12 w-full border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#078b9f] focus:ring-2 focus:ring-[#078b9f]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-800"
                  >
                    Reason for contacting us
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-12 w-full border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-colors focus:border-[#078b9f] focus:ring-2 focus:ring-[#078b9f]/10"
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>

                    <option value="general">General enquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="donation">Donation and fundraising</option>
                    <option value="volunteer">Volunteer opportunities</option>
                    <option value="program">Programs and services</option>
                    <option value="media">Media and press</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-800"
                  >
                    Your message
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    required
                    rows={6}
                    className="w-full resize-none border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#078b9f] focus:ring-2 focus:ring-[#078b9f]/10"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 border-slate-300 accent-[#078b9f]"
                  />

                  <span className="text-sm leading-6 text-slate-600">
                    I agree that my information may be used to respond to this
                    enquiry.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 bg-[#078b9f] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#06798a] focus:outline-none focus:ring-2 focus:ring-[#078b9f]/30 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? "Sending message..." : "Send message"}

                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactsPage;