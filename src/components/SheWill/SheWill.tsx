import sheWillOne from "../../assets/DSC.jpg";
import sheWillTwo from "../../assets/Mecanic.jpg";
import sheWillThree from "../../assets/elmanOdey.jpg";
import sheWillFour from "../../assets/aqon.jpg";

import Footer from "../Footer";

const galleryImages = [
  {
    image: sheWillOne,
    alt: "Adolescent girls participating in the SHE WILL education program",
  },
  {
    image: sheWillTwo,
    alt: "Young women taking part in a learning activity",
  },
  {
    image: sheWillThree,
    alt: "Girls developing leadership and educational skills",
  },
  {
    image: sheWillFour,
    alt: "Students participating in a rights-based education program",
  },
];

function SheWill() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <header className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008f8a] sm:text-sm">
              Elman Peace Program
            </p>

            <h1 className="mt-4 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
              She Will
            </h1>

            <div className="mt-7 max-w-4xl space-y-5 text-base leading-8 text-neutral-700 sm:text-lg sm:leading-9">
              <p>
                We believe education can be a critical deterrent to violence
                and that violence can be a critical deterrent to education.
              </p>

              <p>
                Through quality and rights-based education, we are cultivating
                the next generation of women leaders through our SHE WILL
                program for adolescent girls’ education.
              </p>

              <p>
                Education is one of the most powerful tools for empowerment. It
                is through developed capacity that girls become equipped with
                knowledge, make informed decisions, and attain the
                self-confidence they need to seek opportunities for their
                future.
              </p>

              <p>
                We systematically invest in adolescent girls’ rights as a means
                of promoting local living economies, addressing the structural
                barriers that perpetuate inequality, and ultimately ending
                violence against women and girls.
              </p>

              <p className="font-medium text-black">
                By interceding through education during the critical period of
                adolescence, we can help unlock tremendous leadership potential
                and foster a new life trajectory for the next generation of
                girls and young women in Somalia.
              </p>
            </div>
          </header>

          <section
            aria-label="SHE WILL gallery"
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

export default SheWill;