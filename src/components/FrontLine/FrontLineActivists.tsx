import activistHero from "../../assets/DSC.jpg";
import activistOne from "../../assets/Mecanic.jpg";
import activistTwo from "../../assets/elmanOdey.jpg";
import activistThree from "../../assets/aqon.jpg";

import Footer from "../Footer";

const reportTypes = [
  "Daily & Situational Reports",
  "Monthly Analysis Reports",
  "Annual Reports on Human Rights violations & abuses in Somalia",
  "Civilian Casualty Reports",
];

const galleryImages = [
  {
    image: activistHero,
    alt: "Human rights defenders participating in a community discussion",
  },
  {
    image: activistOne,
    alt: "Human rights defender documenting community concerns",
  },
  {
    image: activistTwo,
    alt: "Community members participating in a human rights activity",
  },
  {
    image: activistThree,
    alt: "Human rights defenders participating in advocacy work",
  },
];

function FrontLineActivists() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <header className="max-w-5xl">
            <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
              Front Line Activists
            </h1>

            <div className="mt-7 max-w-4xl space-y-5 text-base leading-8 text-neutral-700 sm:text-lg sm:leading-9">
              <p>
                We are Human Rights Defenders dedicated to defending
                fundamental rights, documenting human rights violations and
                abuses, advocating for justice, ending impunity, and fortifying
                the self-protection of human rights defenders who come under
                threat.
              </p>

              <p>
                The Elman Peace Center acts as a catalyst for change by
                promoting and protecting Human Rights in Somalia through
                reporting of Human Rights violations &amp; abuses, trend
                analysis, advocacy, and action. Our Human Rights reports and
                analysis frame the services we provide as well as influence the
                policy changes we lobby for at national and international
                levels.
              </p>
            </div>
          </header>

          <section className="mt-12 border-t border-neutral-300 pt-8 sm:mt-14 sm:pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-black">
              We Produce
            </h2>

            <div className="mt-6 border-t border-neutral-200">
              {reportTypes.map((report, index) => (
                <div
                  key={report}
                  className="grid grid-cols-[44px_1fr] items-center gap-3 border-b border-neutral-200 py-5 sm:grid-cols-[64px_1fr] sm:py-6"
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-base font-medium leading-7 text-black sm:text-lg">
                    {report}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 sm:mt-14">
            <div className="grid gap-3 sm:grid-cols-2">
              {galleryImages.map((item, index) => (
                <figure
                  key={item.alt}
                  className="h-[280px] overflow-hidden bg-neutral-100 sm:h-[340px] lg:h-[400px]"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-12 border-t border-neutral-300 pt-8 sm:mt-14 sm:pt-10">
            <p className="max-w-4xl text-base leading-8 text-neutral-700 sm:text-lg sm:leading-9">
              To learn more about our human rights work, or to receive specific
              issue based reports from Somalia; subscribe to our mailing list{" "}
              <a
                href="/subscribe"
                className="font-medium text-black underline decoration-neutral-400 underline-offset-4 transition-colors hover:text-[#008f8a]"
              >
                here
              </a>
              .
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default FrontLineActivists;