import elamnodey from "../../assets/elmanOdey.jpg";
import mapelman from "../../assets/mapelan.jpg";

function OurStory() {
  return (
    <section id="our-story" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10d9d1]">
            Our Story
          </span>

          <h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-tight text-[#00475e] sm:text-[38px] lg:text-[46px]">
            A Legacy of Peace, Courage, and Community Leadership
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#00475e]/70 sm:text-base">
            The story of Elman Peace is rooted in sacrifice, resilience, and a
            lasting commitment to promoting peace and protecting human rights
            in Somalia.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left Side */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden bg-[#00475e]">
              <img
                src={elamnodey}
                alt="Elman Ali Ahmed, founder of Elman Peace"
                className="h-auto w-full object-cover"
              />

              <div className="border-t border-white/15 px-5 py-6 sm:px-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10d9d1]">
                  Elman Ali Ahmed
                </span>

                <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
                  A legacy of peace carried through generations.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  Remembered as the Somali Father of Peace, Elman Ali Ahmed
                  dedicated his life to peace, dignity, and opportunity for the
                  people of Somalia.
                </p>
              </div>
            </div>

            <div className="mt-6 border border-[#00475e]/15">
              <img
                src={mapelman}
                alt="Map showing Elman Peace community presence"
                className="h-auto w-full object-cover"
              />

              <div className="border-t border-[#00475e]/15 px-5 py-5">
                <p className="text-sm font-semibold text-[#00475e]">
                  Locally driven solutions for lasting peace
                </p>

                <p className="mt-2 text-xs leading-6 text-[#00475e]/65">
                  Elman Peace works alongside communities through protection,
                  education, rehabilitation, leadership, and livelihood
                  programs.
                </p>
              </div>
            </div>
          </aside>

          {/* Right Side */}
          <div>
            <div className="space-y-6 text-sm leading-7 text-[#00475e]/75 sm:text-base sm:leading-8">
              <p>
                Elman Peace is a nonprofit organization founded in 1990. It is
                dedicated to promoting peace, cultivating leadership, and
                empowering marginalized communities to become active
                participants in the decisions that affect their lives and
                wellbeing.
              </p>

              <p>
                The organization provides innovative and life-saving support to
                people affected by conflict, violence, and exclusion. Its
                approach to humanitarian aid and development is centered on
                locally driven solutions delivered by a committed and
                professional team.
              </p>
            </div>

            {/* Key Information */}
            <div className="my-10 grid border-y border-[#00475e]/15 sm:grid-cols-3">
              <div className="py-6 sm:border-r sm:border-[#00475e]/15 sm:px-6">
                <p className="text-3xl font-semibold text-[#00475e]">1990</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#00475e]/55">
                  Founded
                </p>
              </div>

              <div className="border-t border-[#00475e]/15 py-6 sm:border-r sm:border-t-0 sm:px-6">
                <p className="text-3xl font-semibold text-[#00475e]">Peace</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#00475e]/55">
                  Core Mission
                </p>
              </div>

              <div className="border-t border-[#00475e]/15 py-6 sm:border-t-0 sm:px-6">
                <p className="text-3xl font-semibold text-[#00475e]">Somalia</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#00475e]/55">
                  Community Led
                </p>
              </div>
            </div>

            <div className="space-y-6 text-sm leading-7 text-[#00475e]/75 sm:text-base sm:leading-8">
              <p>
                Elman Peace is named after its founder, Elman Ali Ahmed, a
                pioneering peace activist remembered as the Somali Father of
                Peace. Elman and his wife, Fartuun Adan, led the organization
                together during a period of growing conflict in Somalia.
              </p>

              <p>
                As the war intensified, the family made the difficult decision
                to separate. Elman remained in Somalia to continue his
                peacebuilding work, while Fartuun left the country to protect
                their daughters and secure their future. It was the last time
                Fartuun and her children would see him alive.
              </p>

              <p>
                On March 9, 1996, Elman Ali Ahmed was assassinated because of
                his peace activism. His death became a painful moment in
                Somalia’s struggle for peace, but his mission continued through
                his family and the communities he served.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="my-10 border-l-2 border-[#10d9d1] py-2 pl-6">
              <p className="text-lg font-medium leading-8 text-[#00475e] sm:text-xl">
                “His murder has sent a chilling message to Somalis desirous of
                peace and normality.”
              </p>

              <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#00475e]/55">
                Amnesty International
              </footer>
            </blockquote>

            <div className="space-y-6 text-sm leading-7 text-[#00475e]/75 sm:text-base sm:leading-8">
              <p>
                In 2006, Fartuun returned to Somalia after raising her daughters
                in Canada as a refugee from the war. She returned during one of
                the country’s most difficult periods to continue the work her
                husband had begun.
              </p>

              <p>
                The torch of activism was later passed to their daughter, Ilwad
                Elman, who returned to Somalia in 2010 to work alongside her
                mother and contribute to the country’s rebuilding.
              </p>

              <p>
                Together, Fartuun and Ilwad lead Elman Peace and continue
                Elman’s mission of promoting peace, protecting human rights,
                supporting survivors, and empowering women and young people.
              </p>

              <p>
                Their commitment to Somalia has earned recognition from local
                communities, international organizations, the United Nations,
                and leaders around the world through awards, partnerships, and
                acknowledgements.
              </p>
            </div>

            {/* Closing Statement */}
            <div className="mt-10 border-t border-[#00475e]/15 pt-8">
              <h3 className="text-2xl font-semibold leading-tight text-[#00475e]">
                Continuing a Mission That Began With Courage
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#00475e]/70 sm:text-base">
                Today, Elman Peace continues to turn a legacy of sacrifice into
                practical action that protects dignity, creates opportunity,
                and strengthens peace across Somalia.
              </p>

              <a
                href="#programs"
                className="mt-7 inline-flex border border-[#00475e] bg-[#00475e] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#10d9d1] hover:bg-[#10d9d1] hover:text-[#00475e]"
              >
                Explore Our Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;