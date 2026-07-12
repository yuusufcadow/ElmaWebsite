import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

import logo from "../assets/logo.png";

const organizationLinks = [
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Our Story",
    path: "/about#our-story",
  },
  {
    name: "Leadership",
    path: "/about#leadership",
  },
  {
    name: "Press",
    path: "/press",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const programLinks = [
  {
    name: "Sister Somalia",
    path: "/our-work/sisters-somalia",
  },
  {
    name: "Drop the Gun, Pick Up the Pen",
    path: "/our-work/drop-the-gun-pick-the-pen",
  },
  {
    name: "Front Line Activists",
    path: "/our-work/front-line-activities",
  },
  {
    name: "Skills Training",
    path: "/our-work/skill-training",
  },
  {
    name: "Job Creation",
    path: "/our-work/job-creation",
  },
];

const involvementLinks = [
  {
    name: "Donate",
    path: "/donate",
  },
  {
    name: "Volunteer",
    path: "/get-involved/volunteer",
  },
  {
    name: "Partner With Us",
    path: "/get-involved/partnership",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/ElmanPeaceHRC",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/elmanpeace",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@elmanpeace",
    icon: FaYoutube,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#00475e] text-white">
      {/* Main Call to Action */}
      <div className="bg-[#10d9d1]">
       
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_1fr_1fr] lg:gap-10">
          {/* Organization Information */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              aria-label="Elman Peace homepage"
              className="inline-flex bg-white px-4 py-3"
            >
              <img
                src={logo}
                alt="Elman Peace"
                className="h-11 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
              Elman Peace is a Somali-led nonprofit organization working to
              promote peace, protect human rights, empower communities, and
              create dignified opportunities for women and young people.
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#10d9d1]"
                />

                <div>
                  <p className="text-sm font-semibold text-white">
                    Mogadishu, Somalia
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Working alongside communities to build peace and
                    opportunity.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors duration-300 hover:text-[#10d9d1]"
              >
                <FiMail
                  size={19}
                  className="shrink-0 text-[#10d9d1]"
                />

                <span>Contact our team</span>

                <FiArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* Social Media */}
            <div className="mt-8 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Elman Peace on ${social.name}`}
                    className="flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors duration-300 hover:bg-[#10d9d1] hover:text-[#00475e]"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Organization Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10d9d1]">
              Organization
            </h3>

            <ul className="mt-6 space-y-4">
              {organizationLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/70 transition-colors duration-300 hover:text-[#10d9d1]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10d9d1]">
              Our Work
            </h3>

            <ul className="mt-6 space-y-4">
              {programLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm leading-6 text-white/70 transition-colors duration-300 hover:text-[#10d9d1]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/programs"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-[#10d9d1]"
            >
              View All Programs

              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10d9d1]">
              Stay Connected
            </h3>

            <p className="mt-6 text-sm leading-7 text-white/70">
              Receive stories, program updates, and opportunities to support
              Elman Peace.
            </p>

            <form
              className="mt-6"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <div className="flex flex-col gap-2">
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email address"
                  className="h-12 w-full bg-white/10 px-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-white/45 focus:bg-white/15"
                />

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 bg-[#10d9d1] px-5 text-sm font-semibold text-[#00475e] transition-colors duration-300 hover:bg-white"
                >
                  Subscribe
                  <FiArrowUpRight size={17} />
                </button>
              </div>
            </form>

            {/* Get Involved */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                Get Involved
              </p>

              <ul className="mt-4 space-y-3">
                {involvementLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors duration-300 hover:text-[#10d9d1]"
                    >
                      {item.name}

                      <FiArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#003847]">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="text-xs leading-6 text-white/55">
            © {currentYear} Elman Peace. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              to="/privacy-policy"
              className="text-xs text-white/55 transition-colors duration-300 hover:text-[#10d9d1]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/safeguarding"
              className="text-xs text-white/55 transition-colors duration-300 hover:text-[#10d9d1]"
            >
              Safeguarding
            </Link>

            <Link
              to="/terms"
              className="text-xs text-white/55 transition-colors duration-300 hover:text-[#10d9d1]"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;