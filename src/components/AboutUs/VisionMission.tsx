import { Link } from "react-router-dom";
import { ArrowUpRight, Eye, Target } from "lucide-react";

const visionMission = [
  {
    icon: Eye,
    label: "Our Vision",
    title: "A Peaceful and Inclusive Somalia",
    description:
      "A Somalia where every person can live with dignity, enjoy equal rights, access meaningful opportunities, and contribute to peaceful and resilient communities.",
  },
  {
    icon: Target,
    label: "Our Mission",
    title: "Creating Peace Through Local Action",
    description:
      "To promote peace, protect human rights, and empower women, girls, young people, and vulnerable communities through locally driven protection, education, rehabilitation, leadership, and livelihood programs.",
  },
];

function VisionMission() {
  return (
    <section className="w-full bg-[#00475e] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          {/* Section Introduction */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="inline-flex bg-[#10d9d1] px-3 py-1 text-xs font-semibold text-[#00475e]">
              What Guides Us
            </span>

            <h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-tight text-white sm:text-[38px] lg:text-[44px]">
              Guided by Peace,
              <span className="block text-[#10d9d1]">
                Driven by Human Dignity
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Our vision and mission guide every program, partnership, and
              community initiative as we work toward a safer and more inclusive
              future for Somalia.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 bg-[#10d9d1] px-6 py-3 text-sm font-semibold text-[#00475e] transition-colors duration-300 hover:bg-white"
            >
              Learn About Elman Peace

              <span className="flex h-6 w-6 items-center justify-center bg-[#00475e] text-white">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>

          {/* Vision and Mission Cards */}
          <div className="grid border border-white/20 md:grid-cols-2">
            {visionMission.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className={`p-6 sm:p-8 lg:p-10 ${
                    index === 0
                      ? "border-b border-white/20 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-[#10d9d1] text-[#00475e]">
                    <Icon size={24} />
                  </div>

                  <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.18em] text-[#10d9d1]">
                    {item.label}
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-[28px]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;