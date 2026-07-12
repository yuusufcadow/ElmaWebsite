import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle } from "lucide-react";

import girls from "../assets/Girls.jpg";
import dsc from "../assets/DSC.jpg";
import gallery from "../assets/gallery-pic.jpg";

const points = [
  "Protecting Human Rights and Building Peace",
  "Empowering Women, Girls, and Young People",
  "Creating Skills, Jobs, and Safer Communities",
];

function AboutElman() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left Side */}
          <div>
            <span className="inline-flex bg-[#10d9d1]/15 px-3 py-1 text-xs font-semibold text-[#00475e]">
              About Elman Peace
            </span>

            <h2 className="mt-4 max-w-xl text-[30px] font-semibold leading-tight tracking-tight text-[#00475e] sm:text-[38px] lg:text-[44px]">
              A Legacy of Peace, Dignity, and Opportunity
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#00475e]/75 sm:text-base">
              Elman Peace promotes peace and protects human rights in Somalia
              through locally driven programs that respond to violence,
              exclusion, and limited economic opportunity.
            </p>

            <div className="mt-8 grid gap-6 lg:h-[610px] lg:grid-rows-2">
              <div className="h-[260px] overflow-hidden sm:h-[300px] lg:h-full">
                <img
                  src={dsc}
                  alt="Elman Peace community engagement program in Somalia"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="h-[260px] overflow-hidden sm:h-[300px] lg:h-full">
                <img
                  src={gallery}
                  alt="Elman Peace supporting communities and young people"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col lg:pt-[-42px]">
            <div className="h-[420px] overflow-hidden sm:h-[520px] lg:h-[610px]">
              <img
                src={girls}
                alt="Girls participating in an Elman Peace empowerment program"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-8">
              <p className="max-w-xl text-sm leading-7 text-[#00475e]/75 sm:text-base">
                From supporting survivors of gender-based violence and
                rehabilitating young people affected by armed conflict to
                advancing girls’ education, vocational skills, and job
                creation, Elman Peace helps communities recover, lead, and
                build lasting peace.
              </p>

              <ul className="mt-6 space-y-3">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm font-semibold text-[#00475e]"
                  >
                    <CheckCircle
                      size={18}
                      className="shrink-0 text-[#10d9d1]"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 bg-[#00475e] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#10d9d1] hover:text-[#00475e]"
              >
                Discover Our Story
                <span className="flex h-6 w-6 items-center justify-center bg-[#10d9d1] text-[#00475e]">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutElman;