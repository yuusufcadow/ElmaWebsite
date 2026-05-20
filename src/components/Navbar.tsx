import { NavLink, Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

type NavItem = {
  name: string;
  path?: string;
  submenu?: {
    name: string;
    path: string;
  }[];
};

const navLinks: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Our Work",
    submenu: [
      { name: "Sisters Somalia", path: "/our-work/sisters-somalia" },
      {
        name: "Drop the Gun Pick the Pen",
        path: "/our-work/drop-the-gun-pick-the-pen",
      },
      {
        name: "Front Line Activities",
        path: "/our-work/front-line-activities",
      },
      { name: "Equal Voices", path: "/our-work/equal-voices" },
      { name: "She Will", path: "/our-work/she-will" },
      { name: "Skill Training", path: "/our-work/skill-training" },
      { name: "Job Creation", path: "/our-work/job-creation" },
      { name: "Ocean Therapy", path: "/our-work/ocean-therapy" },
    ],
  },
  {
    name: "Get Involved",
    submenu: [
      { name: "Volunteer", path: "/get-involved/volunteer" },
      { name: "Donate", path: "/donate" },
      { name: "Partnership", path: "/get-involved/partnership" },
    ],
  },
  { name: "Press", path: "/press" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown((current) => (current === name ? null : name));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Elman Peace Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) =>
            link.submenu ? (
              <div key={link.name} className="group relative pb-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-sm font-medium tracking-wide text-[#00475e]/75 transition-colors duration-300 hover:text-[#10d9d1]"
                >
                  <span>{link.name}</span>
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#10d9d1] transition-all duration-300 ease-out group-hover:w-full" />

                <div className="invisible absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 translate-y-3 rounded-2xl border border-[#00475e]/10 bg-white p-3 opacity-0 shadow-xl shadow-[#00475e]/10 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-[#00475e]/10 bg-white" />

                  <div className="relative z-10 flex flex-col">
                    {link.submenu.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          `rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                            isActive
                              ? "bg-[#10d9d1]/10 text-[#00475e]"
                              : "text-[#00475e]/75 hover:bg-[#10d9d1]/10 hover:text-[#00475e]"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.path}
                to={link.path || "/"}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `group relative inline-flex pb-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
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
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#10d9d1] transition-all duration-300 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            )
          )}
        </div>

        <Link
          to="/donate"
          className="hidden bg-[#10d9d1] px-7 py-3 text-sm font-semibold tracking-wide text-[#00475e] transition-colors duration-300 hover:bg-[#00475e] hover:text-white md:inline-flex"
        >
          Donate
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex p-2 text-[#00475e] transition-colors duration-300 hover:text-[#10d9d1] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#00475e]/10 bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.name} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(link.name)}
                    className="flex w-fit items-center gap-2 pb-2 text-base font-medium text-[#00475e]/75 transition-colors duration-300 hover:text-[#10d9d1]"
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        mobileDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileDropdown === link.name && (
                    <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-[#00475e]/10 bg-[#10d9d1]/5 p-3">
                      {link.submenu.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                              isActive
                                ? "bg-[#10d9d1]/15 text-[#00475e]"
                                : "text-[#00475e]/75 hover:bg-white hover:text-[#00475e]"
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path || "/"}
                  end={link.path === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `group relative w-fit pb-2 text-base font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-[#10d9d1]"
                        : "text-[#00475e]/75 hover:text-[#10d9d1]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>

                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-[#10d9d1] transition-all duration-300 ease-out ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              )
            )}

            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-3 bg-[#10d9d1] px-6 py-3 text-center text-sm font-semibold tracking-wide text-[#00475e] transition-colors duration-300 hover:bg-[#00475e] hover:text-white"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}