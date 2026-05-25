import fartun from '../../assets/fartunadan.jpg'
import ilwad from '../../assets/ilwadelan.jpg'

function LearnMore() {
  return (
    <section id="leadership" className="w-full bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="inline-flex border border-[#10d9d1]/30 bg-[#10d9d1]/10 px-3 py-1 text-xs font-semibold text-[#00475e]">
              Leadership
            </span>

            <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#00475e] sm:text-3xl lg:text-4xl">
              Learn more about the women leading Elman Peace!
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-600 lg:ml-auto">
            Fartuun Adan and Ilwad Elman continue the legacy of Elman Peace
            through courageous leadership, peacebuilding, protection, and
            community-centered action.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="group border border-slate-200 bg-white">
            <div className="grid min-h-[420px] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative h-[320px] overflow-hidden bg-[#00475e] lg:h-full">
                <img
                  src={fartun}
                  alt="Fartuun Adan"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#00475e]/15" />
              </div>

              <div className="flex flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="mb-4 h-1 w-12 bg-[#10d9d1]" />

                  <h3 className="text-xl font-extrabold text-[#00475e] sm:text-2xl">
                    Fartuun Adan
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Fartuun Adan is a passionate humanitarian, educator and
                    leader. She fled Somalia in the early 1990’s with her 3
                    young daughters, leaving her husband and partner to her
                    humanitarian endeavours behind, never to see him alive again.
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <a
                    href="/fartuun-adan"
                    className="group/link inline-flex items-center gap-3 border border-[#00475e] bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00475e] transition duration-300 hover:border-[#10d9d1] hover:bg-[#10d9d1]"
                  >
                    Read Bio
                    <span className="text-sm leading-none transition duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="group border border-slate-200 bg-white">
            <div className="grid min-h-[420px] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative h-[320px] overflow-hidden bg-[#00475e] lg:h-full">
                <img
                  src={ilwad}
                  alt="Ilwad Elman"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#00475e]/15" />
              </div>

              <div className="flex flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="mb-4 h-1 w-12 bg-[#10d9d1]" />

                  <h3 className="text-xl font-extrabold text-[#00475e] sm:text-2xl">
                    Ilwad Elman
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Ilwad returned from Canada to Somalia in 2010 whilst the
                    conflict still raged heavily and the majority of Mogadishu
                    and South Central Regions of Somalia were lost to the control
                    of the Al-Qaeda linked terrorist group Al-Shabaab.
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <a
                    href="/ilwad-elman"
                    className="group/link inline-flex items-center gap-3 border border-[#00475e] bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00475e] transition duration-300 hover:border-[#10d9d1] hover:bg-[#10d9d1]"
                  >
                    Read Bio
                    <span className="text-sm leading-none transition duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href="/about"
            className="inline-flex border border-[#00475e] bg-[#00475e] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-[#10d9d1] hover:bg-[#10d9d1] hover:text-[#00475e]"
          >
            View Full Story
          </a>
        </div>
      </div>
    </section>
  )
}

export default LearnMore