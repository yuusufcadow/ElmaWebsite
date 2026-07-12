import { Link } from "react-router-dom";

import farta from "../assets/faturn.jpg";
import inaadan from "../assets/inaadan.jpg";
import Footer from "../components/Footer";

function FartuunAdanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative h-[360px] overflow-hidden bg-[#00475e] sm:h-[420px] lg:h-[460px]">
        <img
          src={farta}
          alt="Fartuun Adan"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#00475e]/85" />

        <div className="container relative z-10 mx-auto flex h-full items-center px-4 sm:px-6 lg:px-10">
          <div className="pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10d9d1]">
              Leadership
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Fartuun Adan
            </h1>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium">
              <Link
                to="/"
                className="text-white/80 transition-colors duration-300 hover:text-[#10d9d1]"
              >
                Home
              </Link>

              <span className="text-white/50">/</span>

              <span className="text-[#10d9d1]">Fartuun Adan</span>
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
                    src={inaadan}
                    alt="Portrait of Fartuun Adan"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="px-5 py-7 sm:px-7 sm:py-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#10d9d1]">
                    Executive Director
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#00475e] sm:text-[30px]">
                    Fartuun Adan
                  </h2>

                  <p className="mt-3 text-sm font-medium leading-6 text-[#00475e]/70">
                    Humanitarian, educator, peacebuilder, and human rights
                    advocate.
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#00475e]/65">
                    A leading advocate for peacebuilding, women’s rights,
                    community protection, and human dignity in Somalia.
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10d9d1]">
                Biography
              </p>

              <h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-tight text-[#00475e] sm:text-[38px]">
                About Fartuun
              </h2>

              <div className="mt-8 space-y-6 text-sm leading-8 text-[#00475e]/70 sm:text-base">
                <p>
                  Fartuun Adan is a passionate humanitarian, educator, and
                  leader. She fled Somalia in the early 1990s with her three
                  young daughters, leaving behind her husband and partner in
                  their humanitarian work, never to see him alive again.
                </p>

                <p>
                  She sought refuge in Canada in the hope of securing a safer
                  future for her daughters, while her husband remained in
                  Somalia to continue their shared mission of protecting and
                  promoting human rights.
                </p>

                <p>
                  In 2006, Fartuun returned to Mogadishu to lead Elman Peace, a
                  nonprofit and nongovernmental organization established in
                  honor of her late husband, Elman Ali Ahmed.
                </p>

                <p>
                  Elman Ali Ahmed was a committed peace activist known for the
                  message, “Drop the Gun and Pick Up the Pen.” He was
                  assassinated in 1996 because of his work supporting the
                  disarmament and rehabilitation of young people affected by
                  armed conflict.
                </p>

                <p>
                  As Executive Director of Elman Peace, Fartuun has guided the
                  organization as it expanded its work across Somalia. Her
                  leadership promotes human rights, peaceful coexistence, and
                  the full and equal participation of women in decisions that
                  affect their lives and communities.
                </p>

                <p>
                  As the former chair of the Peace and Human Rights Network,
                  Fartuun supported civil society organizations, journalist
                  networks, and human rights defenders through capacity
                  building, national advocacy campaigns, and coordinated action.
                </p>

                <p>
                  After serving for two years as executive chair, she declined
                  nomination for another term and continued supporting the
                  formation and strengthening of humanitarian coordination
                  groups and civil society coalitions.
                </p>

                <p>
                  Fartuun is a leading expert in the rehabilitation and
                  reintegration of children associated with, or separated from,
                  armed forces and groups.
                </p>

                <p>
                  She is also a valued partner and source of knowledge for
                  researchers, donors, journalists, human rights organizations,
                  and institutions working throughout the Horn of Africa.
                </p>

                <p>
                  Under her leadership, Elman Peace has become a prominent
                  Somali organization working across peace and security,
                  women’s political participation, education, policy reform,
                  and efforts to end violence against women and girls.
                </p>

                {/* Highlight */}
                <div className="my-10 bg-[#00475e] px-6 py-8 sm:px-8 sm:py-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10d9d1]">
                    Leadership in Action
                  </p>

                  <p className="mt-4 text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                    Fartuun’s leadership connects grassroots protection,
                    national advocacy, and international human rights action.
                  </p>
                </div>

                <p>
                  Fartuun has worked alongside organizations including Oxfam,
                  Amnesty International, and Human Rights Watch. Since 2009, she
                  has represented Somali civil society in the Universal Periodic
                  Review of Human Rights in Geneva.
                </p>

                <p>
                  She is also a founding member of the International Commission
                  on Violence Against Women and Girls, an international
                  initiative working toward a global treaty addressing violence
                  against women.
                </p>

                <p>
                  Since 2012, Fartuun has served as the Somalia coordinator for
                  V-Day, a global movement dedicated to ending violence against
                  women and girls.
                </p>

                <p>
                  On International Women’s Day, March 8, 2013, Fartuun received
                  the International Women of Courage Award. The award was
                  presented by former United States First Lady Michelle Obama
                  and former Secretary of State John Kerry.
                </p>

                <p>
                  In December 2014, she received a Human Rights Award from the
                  Friedrich Ebert Foundation for her commitment to protecting
                  human rights in Somalia, with a particular focus on women’s
                  rights.
                </p>

                <p>
                  She later received the Gleitsman International Activist Award
                  from Harvard University in 2015 and Oxfam America’s Right the
                  Wrongs Award in 2016. She was also recognized as a finalist
                  for the Aurora Prize for Awakening Humanity in 2017.
                </p>

                <p>
                  As Executive Director of Elman Peace, Fartuun has helped bring
                  international attention to sexual and gender-based violence
                  in Somalia.
                </p>

                <p>
                  Her work has supported policy reform, strengthened Somali
                  civil society organizations, and developed relationships with
                  national and international institutions working to address
                  human rights violations.
                </p>

                <p>
                  She has also contributed to the development of national
                  strategies adopted by the Somali government while ensuring
                  that affected communities remain at the center of those
                  processes.
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

export default FartuunAdanPage;