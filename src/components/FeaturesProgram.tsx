import {
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import drawing from "../assets/Drawing.jpg";
import gallery from "../assets/gallery-pic.jpg";
import girls from "../assets/Girls.jpg";
import hero from "../assets/heroimage.png";
import mecanic from "../assets/Mecanic.jpg";

type Program = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const programs: Program[] = [
  {
    icon: GraduationCap,
    title: "Skills & Vocational Training",
    description:
      "Practical technical training that helps young people build confidence, find work, and create sustainable livelihoods.",
    image: mecanic,
    imageAlt: "Young people taking part in vocational skills training",
  },
  {
    icon: ShieldCheck,
    title: "Protection & Human Rights",
    description:
      "Protecting children, survivors, and communities affected by conflict, violence, displacement, and exclusion.",
    image: drawing,
    imageAlt: "Young people participating in protection activities",
  },
  {
    icon: HeartHandshake,
    title: "Peacebuilding & Recovery",
    description:
      "Supporting communities to rebuild trust, recover from conflict, and create peaceful pathways for the future.",
    image: gallery,
    imageAlt: "Community members participating in peacebuilding activities",
  },
  {
    icon: UsersRound,
    title: "Women & Youth Empowerment",
    description:
      "Expanding education, leadership, wellbeing, and economic opportunities for women, girls, and young people.",
    image: girls,
    imageAlt: "Girls taking part in an Elman Peace empowerment program",
  },
];

function FeaturesProgram() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#00475e] py-14 sm:py-16 lg:py-20"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#00475e]/80" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#00475e]/95 via-[#00767a]/80 to-[#10d9d1]/50" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10d9d1]">
            Our programs
          </p>

          <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Creating Opportunity and Lasting Peace
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            Community-led programs protecting dignity, expanding opportunity,
            and building safer futures across Somalia.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article
                key={program.title}
                className="flex h-full flex-col overflow-hidden bg-white"
              >
                {/* Program image */}
                <div className="relative h-[190px] overflow-hidden sm:h-[210px] lg:h-[190px] xl:h-[220px]">
                  <img
                    src={program.image}
                    alt={program.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#00475e]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center bg-[#10d9d1] text-[#00475e]">
                    <Icon size={23} strokeWidth={2} />
                  </div>
                </div>

                {/* Program content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-semibold leading-snug text-[#00475e]">
                    {program.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#00475e]/70">
                    {program.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="h-px w-10 bg-[#10d9d1]" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesProgram;