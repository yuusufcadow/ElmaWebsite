import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Skills & Vocational Training",
    description:
      "Equipping young people and vulnerable communities with practical skills that support employment, confidence, and independence.",
    path: "/programs",
  },
  {
    icon: ShieldCheck,
    title: "Protection & Human Rights",
    description:
      "Supporting dignity, safety, and access to justice for people affected by conflict, displacement, and social exclusion.",
    path: "/programs",
  },
  {
    icon: HeartHandshake,
    title: "Peacebuilding & Recovery",
    description:
      "Helping communities rebuild trust, strengthen local agency, and create peaceful pathways for long-term stability.",
    path: "/programs",
  },
  {
    icon: UsersRound,
    title: "Women & Youth Empowerment",
    description:
      "Investing in leadership, education, wellbeing, and opportunity for women, girls, and young people across Somalia.",
    path: "/programs",
  },
];

function FeaturesProgram() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <span className="inline-flex bg-[#10d9d1]/15 px-3 py-1 text-xs font-semibold text-[#00475e]">
            Featured Programs
          </span>

          <h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-tight text-[#00475e] sm:text-[38px] lg:text-[44px]">
            Programs That Support Human Development in Somalia
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#00475e]/75 sm:text-base">
            Our work focuses on practical, community-led solutions that protect
            dignity, expand opportunity, and help people build stronger futures.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <Link
                key={program.title}
                to={program.path}
                className={`group flex min-h-[310px] flex-col justify-between border border-[#00475e]/10 p-6 transition-colors duration-300 hover:border-[#10d9d1] ${
                  index === 0
                    ? "bg-[#00475e] text-white"
                    : "bg-white text-[#00475e] hover:bg-[#00475e]"
                }`}
              >
                <div>
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center ${
                      index === 0
                        ? "bg-[#10d9d1] text-[#00475e]"
                        : "bg-[#10d9d1]/15 text-[#00475e] group-hover:bg-[#10d9d1] group-hover:text-[#00475e]"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3
                    className={`text-xl font-semibold leading-snug ${
                      index === 0
                        ? "text-white"
                        : "text-[#00475e] group-hover:text-white"
                    }`}
                  >
                    {program.title}
                  </h3>

                  <p
                    className={`mt-4 text-sm leading-7 ${
                      index === 0
                        ? "text-white/80"
                        : "text-[#00475e]/75 group-hover:text-white/80"
                    }`}
                  >
                    {program.description}
                  </p>
                </div>

                <div
                  className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${
                    index === 0
                      ? "text-[#10d9d1]"
                      : "text-[#00475e] group-hover:text-[#10d9d1]"
                  }`}
                >
                  Learn More
                  <ArrowUpRight size={17} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-end">
          <Link
            to="/programs"
            className="inline-flex bg-[#10d9d1] px-7 py-3 text-sm font-semibold tracking-wide text-[#00475e] transition-colors duration-300 hover:bg-[#00475e] hover:text-white"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturesProgram;