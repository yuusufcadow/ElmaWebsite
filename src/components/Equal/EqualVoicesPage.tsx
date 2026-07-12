import equalVoicesOne from "../../assets/DSC.jpg";
import equalVoicesTwo from "../../assets/Mecanic.jpg";
import equalVoicesThree from "../../assets/elmanOdey.jpg";
import equalVoicesFour from "../../assets/aqon.jpg";
import equalVoicesFive from "../../assets/arts.jpg";
import equalVoicesSix from "../../assets/faturn.jpg";

import Footer from "../Footer";

const programAgendas = [
  "Creating a better future for youth through capacity building",
  "Promoting structural gender equality through policy and advocacy",
  "Contributing to transparent and accountable governance through the training of civil servants",
];

const galleryImages = [
  {
    image: equalVoicesOne,
    alt: "Women and youth leaders participating in the Equal Voices program",
  },
  {
    image: equalVoicesTwo,
    alt: "Young leaders developing skills for political participation",
  },
  {
    image: equalVoicesThree,
    alt: "Community leaders participating in an inclusive governance activity",
  },
  {
    image: equalVoicesFour,
    alt: "Women participating in leadership and advocacy training",
  },
  {
    image: equalVoicesFive,
    alt: "Youth leaders working together during a community program",
  },
  {
    image: equalVoicesSix,
    alt: "Grassroots women and youth organizations representing their communities",
  },
];

function EqualVoices() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <header className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#008f8a] sm:text-sm">
              Elman Peace Program
            </p>

            <h1 className="mt-4 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
              Equal Voices
            </h1>

            <div className="mt-7 max-w-4xl space-y-5 text-base leading-8 text-neutral-700 sm:text-lg sm:leading-9">
              <p>
                We equip women and youth leaders with the tools necessary to
                participate meaningfully in political processes. We also
                promote inclusive governance from the grassroots up and match
                young adults with mentors to accelerate their participation.
              </p>

              <p>
                We facilitate, empower, and build strong social movements with
                grassroots women and youth organizations at the core, in order
                to represent the voices of their communities.
              </p>
            </div>
          </header>

          <section className="mt-12 border-t border-neutral-300 pt-8 sm:mt-14 sm:pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-black">
              Three Main Agendas
            </h2>

            <div className="mt-6 border-t border-neutral-200">
              {programAgendas.map((agenda, index) => (
                <div
                  key={agenda}
                  className="grid grid-cols-[44px_1fr] items-start gap-3 border-b border-neutral-200 py-5 sm:grid-cols-[64px_1fr] sm:py-6"
                >
                  <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="max-w-3xl text-base font-medium leading-7 text-black sm:text-lg sm:leading-8">
                    {agenda}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            aria-label="Equal Voices gallery"
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

export default EqualVoices;