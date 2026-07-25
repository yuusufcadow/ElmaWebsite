import {
  CheckCircle2,
  Eye,
  ListChecks,
  Target,
  type LucideIcon,
} from "lucide-react";

type VisionMissionItem = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
};

const visionMission: VisionMissionItem[] = [
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
      "To promote peace, protect human rights, and empower women, girls, young people, and vulnerable communities through locally driven programs.",
  },
];

const objectives = [
  "Protect human rights and strengthen access to justice.",
  "Support women, girls, youth, and vulnerable communities.",
  "Expand education, vocational skills, and employment opportunities.",
  "Promote peacebuilding, rehabilitation, and community recovery.",
  "Strengthen local leadership and community participation.",
];

function VisionMission() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section title */}
        <div className="mb-9 max-w-3xl sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009f9a]">
            What Guides Us
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#00475e] sm:text-4xl lg:text-5xl">
            Our Vision, Mission
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#00475e]/65 sm:text-base">
            The principles and priorities that guide our work with communities
            across Somalia.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-stretch gap-5 lg:grid-cols-2">
          {/* Vision and Mission */}
          <div className="grid h-full gap-5">
            {visionMission.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="flex min-h-[280px] flex-col bg-[#f3fbfb] p-6 sm:p-8 lg:p-10"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#009f9a]">
                        {item.label}
                      </span>

                      <h3 className="mt-3 max-w-lg text-2xl font-semibold leading-tight text-[#00475e] sm:text-[28px]">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#10d9d1] text-[#00475e]">
                      <Icon size={24} strokeWidth={2} />
                    </div>
                  </div>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#00475e]/70 sm:text-base">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Objectives */}
          <article className="flex h-full min-h-[585px] flex-col bg-[#00475e] p-6 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#10d9d1]">
                  Our Objectives
                </span>

                <h3 className="mt-3 max-w-lg text-2xl font-semibold leading-tight text-white sm:text-[28px]">
                  Turning Our Purpose Into Action
                </h3>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#10d9d1] text-[#00475e]">
                <ListChecks size={24} strokeWidth={2} />
              </div>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Our objectives shape the practical actions and community programs
              we deliver.
            </p>

            <ul className="mt-8 space-y-5">
              {objectives.map((objective) => (
                <li
                  key={objective}
                  className="flex items-start gap-4 text-sm leading-7 text-white/85 sm:text-base"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-[#10d9d1] text-[#00475e]">
                    <CheckCircle2 size={16} strokeWidth={2.2} />
                  </span>

                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;