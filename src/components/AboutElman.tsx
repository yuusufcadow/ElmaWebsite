import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle } from "lucide-react";

import girls from "../assets/Girls.jpg";
import dsc from "../assets/DSC.jpg";
import gallery from "../assets/gallery-pic.jpg";

const points = [
  "Join Our Mission to Make a Difference",
  "Transforming Lives and Communities",
  "Standing Up for Human Rights",
];

function AboutElman() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left Side */}
          <div>
            <span className="inline-flex bg-[#10d9d1]/15 px-3 py-1 text-xs font-semibold text-[#00475e]">
              Our Journey
            </span>

            <h2 className="mt-4 max-w-xl text-[30px] font-semibold leading-tight tracking-tight text-[#00475e] sm:text-[38px] lg:text-[44px]">
              Our Journey: Protecting Human Rights for All
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#00475e]/75 sm:text-base">
              We are a dedicated group of advocates, partners, allies committed
              to protecting and promoting human rights for all. Our mission is
              to stand up for those whose voices often go unheard, defend.
            </p>

            <div className="mt-8 grid gap-6 lg:h-[610px] lg:grid-rows-2">
              <div className="h-[260px] overflow-hidden sm:h-[300px] lg:h-full">
                <img
                  src={dsc}
                  alt="Human rights advocacy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="h-[260px] overflow-hidden sm:h-[300px] lg:h-full">
                <img
                  src={gallery}
                  alt="Community protection campaign"
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
                alt="Women empowerment and human rights"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-8">
              <p className="max-w-xl text-sm leading-7 text-[#00475e]/75 sm:text-base">
                Through advocacy, education, and community empowerment, we work
                to create a world where every individual can live with dignity,
                equality, and freedom from policy reform grassroots
                mobilization.
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
                Stand with Us
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