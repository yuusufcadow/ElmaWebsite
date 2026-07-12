import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import charityImage from "../assets/Mecanic.jpg";

function Charity() {
  return (
    <section className="relative my-20 min-h-[560px] w-full overflow-hidden bg-[#00475e] sm:min-h-[620px] lg:min-h-[680px]">
      {/* Background Image */}
      <img
        src={charityImage}
        alt="Elman Peace community program in Somalia"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#002f3f]/65" />

      {/* Left Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002f3f]/95 via-[#002f3f]/55 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[560px] items-center px-4 sm:min-h-[620px] sm:px-6 lg:min-h-[680px] lg:px-10">
        <div className="max-w-2xl py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10d9d1]">
            Support Elman Peace
          </p>

          <h2 className="mt-5 text-[32px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[42px] lg:text-[52px]">
            Help Build a Peaceful and Inclusive Future for Somalia
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base lg:text-lg lg:leading-8">
            Your support helps Elman Peace protect human rights, empower women
            and young people, provide vocational training, and create safer,
            stronger communities across Somalia.
          </p>

          <Link
            to="/donate"
            className="mt-8 inline-flex items-center gap-3 bg-[#10d9d1] px-7 py-4 text-sm font-semibold text-[#00475e] transition-colors duration-300 hover:bg-white"
          >
            Donate Now
            <FiArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Charity;