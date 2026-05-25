import elamnodey from '../../assets/elmanOdey.jpg'
import mapelman from '../../assets/mapelan.jpg'

function OurStory() {
  return (
    <section id="our-story" className="w-full bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              <div className="absolute -left-4 -top-4 z-10 h-20 w-20 border-l-4 border-t-4 border-[#10d9d1]" />
              <div className="absolute -bottom-4 -right-4 z-10 h-20 w-20 border-b-4 border-r-4 border-[#00475e]" />

              <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="relative bg-[#00475e]">
                  <img
                    src={elamnodey}
                    alt="Elman Ali Ahmed and Elman Peace story"
                    className="h-auto w-full object-contain"
                  />

                  <div className="absolute inset-0 bg-[#00475e]/10" />

                  <div className="absolute bottom-0 left-0 w-full bg-[#00475e]/90 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#10d9d1]">
                      Elman Peace
                    </p>

                    <h3 className="mt-2 text-lg font-extrabold leading-tight text-white">
                      A legacy carried through generations.
                    </h3>
                  </div>
                </div>

                <div className="grid content-start gap-4">
                  <div className="relative bg-slate-100">
                    <img
                      src={mapelman}
                      alt="Elman Peace map"
                      className="h-auto w-full object-contain"
                    />

                    <div className="absolute inset-0 bg-[#00475e]/10" />
                  </div>

                  <div className="bg-[#00475e] p-6">
                    <span className="text-3xl font-extrabold text-[#10d9d1]">
                      1990
                    </span>

                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                      Founded for Peace
                    </p>

                    <p className="mt-4 text-xs leading-6 text-white/80">
                      Promoting peace, cultivating leadership, and empowering
                      marginalized communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="min-h-screen">
            <div className="border-l-4 border-[#10d9d1] bg-slate-50 px-5 py-5 sm:px-7">
              <span className="inline-flex bg-[#10d9d1]/15 px-3 py-1 text-xs font-semibold text-[#00475e]">
                Our Story
              </span>

              <h2 className="mt-4 max-w-2xl text-2xl font-extrabold leading-tight text-[#00475e] sm:text-3xl lg:text-4xl">
                A legacy of peace, courage, and community leadership.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                The story of Elman Peace is rooted in sacrifice, resilience, and
                a lifelong commitment to protecting human rights in Somalia.
              </p>
            </div>

            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
              <p>
                Elman Peace is a non-profit organization, founded in 1990 and is
                dedicated to promoting peace, cultivating leadership and
                empowering the marginalized brackets of society to be decision
                makers in the processes that ensure their wellbeing.
              </p>

              <p>
                We provide innovative, life-saving support to those in need and
                strive to create more enabling and progressive environments
                through our work. Our philosophy on aid and development is
                centered on locally driven solutions from a committed and
                professional collective of compassionate people.
              </p>

              <div className="grid gap-4 border-l-4 border-[#10d9d1] bg-slate-50 p-5 sm:grid-cols-3">
                <div>
                  <p className="text-2xl font-extrabold text-[#00475e]">
                    1990
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Founded
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-extrabold text-[#00475e]">
                    Peace
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Mission
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-extrabold text-[#00475e]">
                    Somalia
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Community
                  </p>
                </div>
              </div>

              <p>
                Elman Peace is named after its founder, Elman Ali Ahmed; an
                ardent and pioneering peace activist, remembered to this day as
                the Somali Father of Peace. Elman and his wife, Fartuun Adan ran
                the organization together until the war worsened in Somalia, and
                they made the decision to split up; Elman would stay behind and
                continue to fight for peace and Fartuun would flee the country
                for the safety and future of their daughters. It would be the
                last time Fartuun and her children would see Elman alive.
              </p>

              <div className="grid gap-4 bg-[#00475e] p-5 sm:grid-cols-[0.75fr_1.25fr]">
                <div className="bg-white/10">
                  <img
                    src={mapelman}
                    alt="Elman Peace map small"
                    className="h-auto w-full object-contain opacity-90"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#10d9d1]">
                    Map 2 Small
                  </p>

                  <h3 className="mt-3 text-xl font-extrabold text-white">
                    Locally driven solutions for lasting peace.
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/75">
                    Elman Peace continues to work with communities through
                    protection, leadership, reconciliation, and life-saving
                    support.
                  </p>
                </div>
              </div>

              <p>
                A few years later Elman was the victim of a political, execution
                style assassination on March 9th 1996.
              </p>

              <blockquote className="border-l-4 border-[#10d9d1] bg-slate-50 px-5 py-4 text-sm font-medium leading-7 text-[#00475e]">
                “His murder has sent a chilling message to Somalis desirous of
                peace and normality.” — Amnesty International
              </blockquote>

              <p>
                In 2006, Fartuun left her daughters in the safety of Canada,
                where she had raised them on her own as a refugee from the war in
                Somalia. She left Canada to return to conflict laden Somalia
                during the height of the war to continue the work her husband was
                killed doing.
              </p>

              <p>
                The torch of activism was passed to their daughter, Ilwad Elman,
                who returned to Somalia in 2010 to work alongside her mother
                &amp; take part in the rebuilding of Somalia. Together Fartuun
                &amp; Ilwad lead Elman Peace, and under their visionary
                leadership, the organization has sustained Elman’s mission &amp;
                legacy of promoting peace and protecting human rights.
              </p>

              <p>
                Their unwavering commitment to the people of Somalia has garnered
                Elman Peace immeasurable recognition from their community,
                various Heads of States, the United Nations and international
                organizations across the world through awards, acknowledgements
                and partnerships.
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <a
                href="#programs"
                className="inline-flex border-2 border-[#00475e] bg-[#00475e] px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition duration-300 hover:border-[#10d9d1] hover:bg-[#10d9d1] hover:text-[#00475e]"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory