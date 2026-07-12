import sisterHero from "../../assets/DSC.jpg";
import sisterOne from "../../assets/Mecanic.jpg";
import sisterTwo from "../../assets/elmanOdey.jpg";
import sisterThree from "../../assets/aqon.jpg";
import sisterFour from "../../assets/arts.jpg";
import sisterFive from "../../assets/faturn.jpg";
import sisterSix from "../../assets/inaadan.jpg";

import Footer from "../../components/Footer";

const galleryImages = [
  {
    image: sisterHero,
    alt: "Sister Somalia program participants",
  },
  {
    image: sisterOne,
    alt: "Mother and child supported through Sister Somalia",
  },
  {
    image: sisterTwo,
    alt: "Mother receiving care through Sister Somalia",
  },
  {
    image: sisterThree,
    alt: "Women participating in Sister Somalia programs",
  },
  {
    image: sisterFour,
    alt: "Woman receiving confidential support",
  },
  {
    image: sisterFive,
    alt: "Participant taking part in an educational activity",
  },
  {
    image: sisterSix,
    alt: "Women participating in a Sister Somalia empowerment program",
  },
];

function SisterSomalia() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <header className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008f8a] sm:text-sm">
              Elman Peace Program
            </p>

            <h1 className="mt-4 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
              Sister Somalia
            </h1>

            <div className="mt-7 max-w-4xl space-y-5 text-base leading-8 text-neutral-700 sm:text-lg sm:leading-9">
              <p>
                Sister Somalia is the first rape crisis center in Somalia. It
                was established to support survivors of sexual and gender-based
                violence to rebuild and reclaim their lives.
              </p>

              <p>
                Through the provision of psychosocial counselling, trauma
                healing, and emergency medical care offered at our one-stop
                crisis centers operating in various regions, Sister Somalia
                provides innovative, life-saving support to survivors.
              </p>

              <p>
                Through Sister Somalia, we have put systems in place that
                respond directly to sexual and gender-based violence and
                address its physical, psychological, and social impact on women
                and girls.
              </p>

              <p className="font-medium text-black">
                Through our Recovery to Empowerment model, we equip survivors
                with the skills and support needed to lead self-determined
                lives.
              </p>
            </div>
          </header>

          <section
            aria-label="Sister Somalia gallery"
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

export default SisterSomalia;