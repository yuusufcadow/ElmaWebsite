import programHero from "../../assets/DSC.jpg";
import programOne from "../../assets/Mecanic.jpg";
import programTwo from "../../assets/elmanOdey.jpg";
import programThree from "../../assets/aqon.jpg";
import programFour from "../../assets/arts.jpg";
import programFive from "../../assets/faturn.jpg";
import programSix from "../../assets/inaadan.jpg";

import Footer from "../Footer";

const programModel = [
  {
    number: "01",
    title: "Disengage",
  },
  {
    number: "02",
    title: "Rehabilitate",
  },
  {
    number: "03",
    title: "Reintegrate",
  },
];

const galleryImages = [
  {
    image: programHero,
    alt: "Young people participating in the Drop the Gun Pick Up the Pen initiative",
  },
  {
    image: programOne,
    alt: "Young participant developing practical livelihood skills",
  },
  {
    image: programTwo,
    alt: "Community member participating in a reintegration program",
  },
  {
    image: programThree,
    alt: "Young people taking part in an educational activity",
  },
  {
    image: programFour,
    alt: "Creative learning activity for young people",
  },
  {
    image: programFive,
    alt: "Participant building skills for an alternative livelihood",
  },
  {
    image: programSix,
    alt: "Young people participating in a community empowerment program",
  },
];

function DropTheGunPickUpThePen() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <header className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008f8a] sm:text-sm">
              Elman Peace Program
            </p>

            <h1 className="mt-4 max-w-5xl text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
              Drop the Gun,
              <span className="block text-[#009f9a]">Pick Up the Pen</span>
            </h1>

            <div className="mt-7 max-w-4xl space-y-5 text-base leading-8 text-neutral-700 sm:text-lg sm:leading-9">
              <p>
                Through our Drop the Gun, Pick Up the Pen initiative, we
                launched a pioneering intervention in the early 1990s that has
                led to the disarmament, rehabilitation, and reintegration of
                thousands of young women and men who were being co-opted into
                clan-based militias by warlords.
              </p>

              <p>
                Through this project, we have been successful in reinserting
                them back into their societies with non-violent behaviours and
                alternative livelihoods.
              </p>

              <p>
                Through our lengthy experience in the field, we have designed a
                three-tiered model to disengage, rehabilitate, and reintegrate
                children and young adults from armed groups in contexts of
                ongoing conflicts, as well as preventing the use and recruitment
                of children into armed forces.
              </p>
            </div>
          </header>

          <section className="mt-12 border-t border-neutral-300 pt-8 sm:mt-14 sm:pt-10">
            <div className="border-t border-neutral-200">
              {programModel.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-[44px_1fr] items-center gap-3 border-b border-neutral-200 py-5 sm:grid-cols-[64px_1fr] sm:py-6"
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-neutral-400">
                    {item.number}
                  </span>

                  <h2 className="text-base font-medium leading-7 text-black sm:text-lg">
                    {item.title}
                  </h2>
                </div>
              ))}
            </div>
          </section>

          <section
            aria-label="Drop the Gun Pick Up the Pen gallery"
            className="mt-12 sm:mt-14 lg:mt-16"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
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
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default DropTheGunPickUpThePen;