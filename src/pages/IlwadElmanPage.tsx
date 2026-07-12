import { Link } from "react-router-dom";

import ilwadimage from "../assets/ilwadimage.jpg";
import ilwadimage2 from "../assets/ilwadimages.jpg";
import Footer from "../components/Footer";

const focusAreas = [
  "Human Rights",
  "Gender Justice",
  "Protection of Civilians",
  "Peace and Security",
  "Social Entrepreneurship",
];

function IlwadElmanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative h-[360px] overflow-hidden bg-[#00475e] sm:h-[420px] lg:h-[460px]">
        <img
          src={ilwadimage}
          alt="Ilwad Elman"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-[#00475e]/85" />

        <div className="container relative z-10 mx-auto flex h-full items-center px-4 sm:px-6 lg:px-10">
          <div className="pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10d9d1]">
              Leadership
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ilwad Elman
            </h1>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium">
              <Link
                to="/"
                className="text-white/80 transition-colors duration-300 hover:text-[#10d9d1]"
              >
                Home
              </Link>

              <span className="text-white/50">/</span>

              <span className="text-[#10d9d1]">Ilwad Elman</span>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="w-full bg-[#f7f9f8] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            {/* Profile */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="bg-white">
                <div className="h-[460px] overflow-hidden bg-[#00475e] sm:h-[560px]">
                  <img
                    src={ilwadimage}
                    alt="Portrait of Ilwad Elman"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="px-5 py-7 sm:px-7 sm:py-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#10d9d1]">
                    Director of Programs and Development
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#00475e] sm:text-[30px]">
                    Ilwad Elman
                  </h2>

                  <p className="mt-3 text-sm font-medium leading-6 text-[#00475e]/70">
                    Peacebuilder, human rights advocate, and social
                    entrepreneur.
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#00475e]/65">
                    Ilwad works to advance human rights, gender justice,
                    civilian protection, peace, security, and community-led
                    development in Somalia.
                  </p>
                </div>
              </div>

              <div className="mt-6 h-[420px] overflow-hidden bg-[#00475e] sm:h-[500px]">
                <img
                  src={ilwadimage2}
                  alt="Ilwad Elman during her peacebuilding and advocacy work"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </aside>

            {/* Main Content */}
            <article className="bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10d9d1]">
                Biography
              </p>

              <h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-tight text-[#00475e] sm:text-[38px]">
                About Ilwad
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#00475e]/70 sm:text-base">
                Ilwad is responsible for designing and overseeing Elman
                Peace’s programs. Her work focuses on human rights, gender
                justice, civilian protection, peace and security, and social
                entrepreneurship.
              </p>

              {/* Focus Areas */}
              <div className="mt-8 bg-[#f7f9f8] px-5 py-6 sm:px-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00475e]/55">
                  Areas of Focus
                </p>

                <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {focusAreas.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 shrink-0 bg-[#10d9d1]" />

                      <p className="text-sm font-semibold text-[#00475e]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-6 text-sm leading-8 text-[#00475e]/50 sm:text-base">
                <p>
                  Ilwad returned to Somalia from Canada in 2010 while conflict
                  continued across Mogadishu and other regions of the country.
                  Despite the difficult security environment, she remained in
                  Somalia and joined the work of rebuilding communities
                  affected by violence and displacement.
                </p>

                <p>
                  She helped establish one of Somalia’s first crisis centers for
                  survivors of sexual and gender-based violence. She also
                  developed initiatives supporting women’s participation in
                  peacebuilding and security-sector reform.
                </p>

                <p>
                  Her work has included programs for the disarmament,
                  rehabilitation, and reintegration of children and adults
                  affected by armed groups. These programs support recovery,
                  education, economic empowerment, and reintegration into
                  communities.
                </p>

                {/* Highlight */}
                <div className="my-10 bg-[#00475e] px-6 py-8 sm:px-8 sm:py-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10d9d1]">
                    Leadership in Action
                  </p>

                  <p className="mt-4 text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                    Ilwad connects community-led programs in Somalia with
                    national and international advocacy for peace, protection,
                    and human dignity.
                  </p>
                </div>

                <p>
                  Beyond her responsibilities at Elman Peace, Ilwad has
                  participated in international initiatives focused on
                  preventing violent extremism and empowering young people to
                  contribute to peace and security.
                </p>

                <p>
                  She has served in leadership and advisory roles related to
                  child protection, gender-based violence, civilian casualty
                  recording, women’s participation, and inclusive security.
                </p>

                <p>
                  Ilwad has also represented Somalia through international
                  youth-leadership programs and initiatives supporting the
                  prevention of sexual violence in conflict.
                </p>
              </div>

              {/* Key Dates */}
              <div className="my-10 grid gap-3 sm:grid-cols-3">
                <div className="bg-[#f7f9f8] px-5 py-6">
                  <p className="text-3xl font-semibold text-[#00475e]">2010</p>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#00475e]/55">
                    Returned to Somalia
                  </p>
                </div>

                <div className="bg-[#f7f9f8] px-5 py-6">
                  <p className="text-3xl font-semibold text-[#00475e]">2015</p>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#00475e]/55">
                    UN Security Council
                  </p>
                </div>

                <div className="bg-[#f7f9f8] px-5 py-6">
                  <p className="text-3xl font-semibold text-[#00475e]">2016</p>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#00475e]/55">
                    Youth Peace Adviser
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-sm leading-8 text-[#00475e]/70 sm:text-base">
                <p>
                  In 2015, Ilwad briefed the United Nations Security Council
                  during a debate on the protection of civilians. Her
                  participation brought attention to women’s empowerment,
                  civilian protection, and the importance of including civil
                  society in international peace and security discussions.
                </p>

                <p>
                  She later contributed to the Youth Action Agenda on preventing
                  violent extremism, which supported wider international
                  discussions concerning youth, peace, and security.
                </p>

                <p>
                  In 2016, she was appointed as an expert adviser on youth,
                  peace, and security, contributing to efforts connected to
                  United Nations Security Council Resolution 2250.
                </p>

                <p>
                  Ilwad has received international recognition for her activism
                  and peacebuilding work, including awards and honors from
                  institutions and humanitarian organizations.
                </p>

                <p>
                  Through Elman Peace, she continues to design community-based
                  programs while advocating globally for sustainable solutions
                  to conflict, inequality, violence, and displacement in
                  Somalia.
                </p>

                <p>
                  Her work demonstrates how local leadership, practical
                  programming, and international advocacy can work together to
                  protect vulnerable communities and support lasting peace.
                </p>
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="inline-flex bg-[#00475e] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#10d9d1] hover:text-[#00475e]"
                >
                  Back to Leadership
                </Link>

                <Link
                  to="/about"
                  className="inline-flex bg-[#10d9d1]/15 px-6 py-3 text-sm font-semibold text-[#00475e] transition-colors duration-300 hover:bg-[#10d9d1]"
                >
                  View Our Full Story
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default IlwadElmanPage;