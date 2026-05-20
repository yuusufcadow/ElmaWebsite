import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../assets/logo.png";

const footerLinks = [
  {
    title: "Organization",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Programs", path: "/programs" },
      { name: "Projects", path: "/projects" },
      { name: "News", path: "/news" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { name: "Donate", path: "/donate" },
      { name: "Volunteer", path: "/volunteer" },
      { name: "Partner With Us", path: "/contact" },
      { name: "Contact", path: "/contact" },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    name: "X",
    href: "https://x.com",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
];

function Footer() {
  return (
    <footer className="w-full bg-[#00475e] text-white">
      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src={logo}
                alt="Elman Peace Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/75">
              Supporting human development, peacebuilding, protection, and
              community-led opportunity across Somalia.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center border border-[#10d9d1]/40 text-[#10d9d1] transition-colors duration-300 hover:bg-[#10d9d1] hover:text-[#00475e]"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10d9d1]">
                {group.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group relative inline-flex text-sm text-white/75 transition-colors duration-300 hover:text-[#10d9d1]"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#10d9d1] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10d9d1]">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3 text-sm leading-6 text-white/75">
                <MapPin size={18} className="mt-1 shrink-0 text-[#10d9d1]" />
                <span>Mogadishu, Somalia</span>
              </div>

              <a
                href="mailto:info@example.org"
                className="group inline-flex items-center gap-3 text-sm text-white/75 transition-colors duration-300 hover:text-[#10d9d1]"
              >
                <Mail size={18} className="shrink-0 text-[#10d9d1]" />

                <span className="relative">
                  info@example.org
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#10d9d1] transition-all duration-300 group-hover:w-full" />
                </span>
              </a>

              <a
                href="tel:+252610000000"
                className="group inline-flex items-center gap-3 text-sm text-white/75 transition-colors duration-300 hover:text-[#10d9d1]"
              >
                <Phone size={18} className="shrink-0 text-[#10d9d1]" />

                <span className="relative">
                  +252 61 000 0000
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#10d9d1] transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#10d9d1]/25 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Elman Peace. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <Link
              to="/privacy"
              className="group relative transition-colors duration-300 hover:text-[#10d9d1]"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#10d9d1] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              to="/terms"
              className="group relative transition-colors duration-300 hover:text-[#10d9d1]"
            >
              Terms
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#10d9d1] transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;