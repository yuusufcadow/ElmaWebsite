import {
  GraduationCap,
  HandHeart,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";


import girls from "../../assets/elmanstory.jpg";

const focusAreas = [
  {
    title: "Education",
    description:
      "Expanding access to education, practical training, and opportunities for young people.",
    icon: GraduationCap,
  },
  {
    title: "Women & Girls",
    description:
      "Supporting survivors and helping women and girls participate safely and equally.",
    icon: HeartPulse,
  },
  {
    title: "Protection",
    description:
      "Protecting human rights and supporting children and communities affected by conflict.",
    icon: ShieldCheck,
  },
  {
    title: "Peacebuilding",
    description:
      "Strengthening local leadership and creating safer, more peaceful communities.",
    icon: HandHeart,
  },
];

function AboutUSPage() {
  return (
    <section className="w-full overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* Heading */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-7 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10a9a3]">
            About us
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#00475e] sm:text-4xl lg:text-5xl">
            Elman Peace
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#00475e]/65 sm:text-base">
            Building peace, protecting human rights, and creating opportunities
            across Somalia.
          </p>
        </div>
      </div>

      {/* Full-screen-width image */}
      <div className="h-[240px] w-full overflow-hidden sm:h-[340px] md:h-[400px] lg:h-[470px]">
        <img
          src={girls}
          alt="Girls participating in an Elman Peace empowerment program"
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-cover object-center"
        />
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 border-b border-[#00475e]/15 py-8 sm:py-10 lg:grid-cols-[0.85fr_2fr] lg:gap-12">
          <div>
            <h3 className="max-w-sm text-2xl font-semibold leading-tight text-[#00475e] sm:text-3xl">
              A legacy of peace, dignity, and opportunity
            </h3>
          </div>

          <div className="grid gap-5 text-sm leading-7 text-[#00475e]/70 sm:grid-cols-2 lg:grid-cols-3">
            <p>
              Elman Peace is a Somali organization working to protect human
              rights and respond to violence, conflict, and exclusion.
            </p>

            <p>
              Our programs support women, girls, young people, survivors, and
              communities through locally led solutions.
            </p>

            <p>
              We create pathways to education, employment, recovery,
              leadership, and lasting peace.
            </p>
          </div>
        </div>

        {/* Focus areas */}
        <div className="grid border-b border-[#00475e]/15 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className={[
                  "py-8 sm:px-6 lg:py-10",
                  index % 2 !== 0
                    ? "sm:border-l sm:border-[#00475e]/15"
                    : "",
                  index >= 2
                    ? "border-t border-[#00475e]/15 lg:border-t-0"
                    : "",
                  index > 0
                    ? "lg:border-l lg:border-[#00475e]/15"
                    : "",
                ].join(" ")}
              >
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.8}
                  className="h-9 w-9 text-[#10a9a3]"
                />

                <h3 className="mt-5 text-base font-semibold uppercase tracking-wide text-[#00475e]">
                  {area.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-6 text-[#00475e]/65">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}

export default AboutUSPage;