import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

type SubmenuItem = {
  name: string;
  path: string;
};

type NavItem = {
  name: string;
  path?: string;
  submenu?: SubmenuItem[];
};

const navLinks: NavItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Our Work",
    submenu: [
      {
        name: "Sister Somalia",
        path: "/sisters-somalia",
      },
      {
        name: "Drop the Gun, Pick Up the Pen",
        path: "/drop-gun",
      },
      {
        name: "Front Line Activists",
        path: "/front-line-activities",
      },
      {
        name: "Equal Voices",
        path: "/equal-voices",
      },
      {
        name: "She Will",
        path: "/she-will",
      },
      {
        name: "Skills Training",
        path: "/skills-training",
      },
      {
        name: "Job Creation",
        path: "/job-creation",
      },
      {
        name: "Ocean Therapy",
        path: "/ocean-therapy",
      },
    ],
  },
  {
    name: "Get Involved",
    submenu: [
      {
        name: "Volunteer",
        path: "/volunteer",
      },
      {
        name: "Partner With Us",
        path: "/partnership",
      },
    ],
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

export default function Navbar() {
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const isPathActive = (path: string) => {
    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown((current) => (current === name ? null : name));
  };

  // Close the mobile menu after navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  // Prevent the page behind the drawer from scrolling
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#00475e]/10 bg-white">
        <nav className="container mx-auto flex h-20 items-center justify-between px-5 sm:px-6 lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center"
            aria-label="Elman Peace homepage"
          >
            <img
              src={logo}
              alt="Elman Peace"
              className="h-10 w-auto object-contain sm:h-11"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navLinks.map((link) => {
              if (link.submenu) {
                const submenuActive = link.submenu.some((item) =>
                  isPathActive(item.path),
                );

                return (
                  <div
                    key={link.name}
                    className="group relative flex h-20 items-center"
                  >
                    <button
                      type="button"
                      aria-haspopup="menu"
                      className={`relative inline-flex items-center gap-1.5 py-2 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10d9d1] focus-visible:ring-offset-4 ${
                        submenuActive
                          ? "text-[#00475e]"
                          : "text-[#00475e]/75 hover:text-[#10d9d1]"
                      }`}
                    >
                      <span>{link.name}</span>

                      <ChevronDown
                        size={16}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                      />

                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-[#10d9d1] transition-all duration-300 ${
                          submenuActive
                            ? "w-full"
                            : "w-0 group-hover:w-full group-focus-within:w-full"
                        }`}
                      />
                    </button>

                    {/* Desktop dropdown */}
                    <div className="invisible absolute left-1/2 top-[calc(100%-2px)] z-50 w-80 -translate-x-1/2 translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="mt-3 border border-[#00475e]/10 bg-white p-3">
                        <div className="max-h-[calc(100vh-8rem)] space-y-1 overflow-y-auto">
                          {link.submenu.map((item) => (
                            <NavLink
                              key={item.path}
                              to={item.path}
                              className={({ isActive }) =>
                                `block border-l-2 px-4 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10d9d1] ${
                                  isActive
                                    ? "border-[#10d9d1] bg-[#10d9d1]/10 text-[#00475e]"
                                    : "border-transparent text-[#00475e]/75 hover:border-[#10d9d1] hover:bg-[#10d9d1]/10 hover:text-[#00475e]"
                                }`
                              }
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path ?? "/"}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `group relative inline-flex py-2 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10d9d1] focus-visible:ring-offset-4 ${
                      isActive
                        ? "text-[#00475e]"
                        : "text-[#00475e]/75 hover:text-[#10d9d1]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>

                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-[#10d9d1] transition-all duration-300 ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Desktop donate button */}
          <Link
            to="https://www.every.org/elman-peace-and-human-rights-centre-so"
            className="hidden items-center justify-center bg-[#10d9d1] px-7 py-3 text-sm font-semibold tracking-wide text-[#00475e] transition-colors duration-300 hover:bg-[#00475e] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10d9d1] focus-visible:ring-offset-2 lg:inline-flex"
          >
            Donate
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center text-[#00475e] transition-colors duration-300 hover:bg-[#10d9d1]/10 hover:text-[#10d9d1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10d9d1] lg:hidden"
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* Mobile background overlay */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMobileMenu}
        tabIndex={mobileMenuOpen ? 0 : -1}
        className={`fixed inset-0 z-[60] bg-[#001f2a]/55 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      />

      {/* Mobile right-side drawer */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[88%] flex-col border-l border-[#00475e]/10 bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-96 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-[#00475e]/10 px-5">
          <Link
            to="/"
            onClick={closeMobileMenu}
            tabIndex={mobileMenuOpen ? 0 : -1}
            aria-label="Elman Peace homepage"
          >
            <img
              src={logo}
              alt="Elman Peace"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={closeMobileMenu}
            tabIndex={mobileMenuOpen ? 0 : -1}
            aria-label="Close navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center text-[#00475e] transition-colors duration-300 hover:bg-[#10d9d1]/10 hover:text-[#10d9d1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10d9d1]"
          >
            <X size={27} />
          </button>
        </div>

        {/* Mobile navigation links */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6">
          <div className="flex flex-col">
            {navLinks.map((link) => {
              if (link.submenu) {
                const dropdownOpen = mobileDropdown === link.name;

                const submenuActive = link.submenu.some((item) =>
                  isPathActive(item.path),
                );

                return (
                  <div
                    key={link.name}
                    className="border-b border-[#00475e]/10"
                  >
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(link.name)}
                      tabIndex={mobileMenuOpen ? 0 : -1}
                      aria-expanded={dropdownOpen}
                      className={`flex w-full items-center justify-between py-4 text-left text-base font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:text-[#10d9d1] ${
                        submenuActive || dropdownOpen
                          ? "text-[#00475e]"
                          : "text-[#00475e]/75 hover:text-[#10d9d1]"
                      }`}
                    >
                      <span>{link.name}</span>

                      <span
                        className={`flex h-8 w-8 items-center justify-center transition-all duration-300 ${
                          dropdownOpen
                            ? "rotate-180 bg-[#10d9d1]/15 text-[#00475e]"
                            : "bg-[#00475e]/5"
                        }`}
                      >
                        <ChevronDown size={18} />
                      </span>
                    </button>

                    {/* Animated mobile submenu */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
                        dropdownOpen
                          ? "mb-4 grid-rows-[1fr] opacity-100"
                          : "mb-0 grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col border-l-2 border-[#10d9d1] bg-[#10d9d1]/5">
                          {link.submenu.map((item) => (
                            <NavLink
                              key={item.path}
                              to={item.path}
                              onClick={closeMobileMenu}
                              tabIndex={
                                mobileMenuOpen && dropdownOpen ? 0 : -1
                              }
                              className={({ isActive }) =>
                                `border-b border-[#00475e]/5 px-4 py-3 text-sm font-medium transition-colors duration-200 last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10d9d1] ${
                                  isActive
                                    ? "bg-[#10d9d1]/20 text-[#00475e]"
                                    : "text-[#00475e]/75 hover:bg-white hover:text-[#00475e]"
                                }`
                              }
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path ?? "/"}
                  end={link.path === "/"}
                  onClick={closeMobileMenu}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  className={({ isActive }) =>
                    `flex items-center border-b border-[#00475e]/10 py-4 text-base font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:text-[#10d9d1] ${
                      isActive
                        ? "text-[#10d9d1]"
                        : "text-[#00475e]/75 hover:text-[#10d9d1]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Drawer footer */}
        <div className="shrink-0 border-t border-[#00475e]/10 bg-white p-5">
          <Link
            to="/donate"
            onClick={closeMobileMenu}
            tabIndex={mobileMenuOpen ? 0 : -1}
            className="flex w-full items-center justify-center bg-[#10d9d1] px-6 py-3.5 text-sm font-semibold tracking-wide text-[#00475e] transition-colors duration-300 hover:bg-[#00475e] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10d9d1] focus-visible:ring-offset-2"
          >
            Donate
          </Link>

          <p className="mt-3 text-center text-xs text-[#00475e]/55">
            Building peace and creating opportunity.
          </p>
        </div>
      </aside>
    </>
  );
}