import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    number: "12+",
    label: "Years of Community Impact",
  },
  {
    number: "69+",
    label: "Monthly Support Programs",
  },
  {
    number: "3+",
    label: "Global & Local Partners",
  },
  {
    number: "93+",
    label: "Projects Completed",
  },
];

function Charity() {
  return (
    <section className="relative w-full overflow-hidden bg-[#00475e] py-16 text-white sm:py-20 lg:py-24 mt-20">
     

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <span className="inline-flex bg-[#10d9d1]/15 px-3 py-1 text-xs font-semibold text-[#10d9d1]">
              Organization Statistics
            </span>

            <h2 className="mt-5 max-w-xl text-[30px] font-semibold leading-tight tracking-tight text-white sm:text-[38px] lg:text-[44px]">
              Advancing Human Development Across Somalia
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Our work focuses on strengthening communities through education,
              skills training, peacebuilding, protection, and locally led
              development programs that create lasting change.
            </p>

            <Link
              to="/donate"
              className="mt-8 inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-[#00475e] transition-colors duration-300 hover:bg-[#10d9d1]"
            >
              Donate Now
              <span className="flex h-6 w-6 items-center justify-center bg-[#10d9d1] text-[#00475e]">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-[120px] flex-col items-center justify-center bg-[#10d9d1]/25 px-4 py-6 text-center transition-colors duration-300 hover:bg-[#10d9d1]"
              >
                <h3 className="text-[30px] font-semibold leading-none text-white sm:text-[36px]">
                  {stat.number}
                </h3>

                <p className="mt-3 text-xs font-medium leading-5 text-white/85 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Charity;