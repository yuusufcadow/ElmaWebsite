import un from "../../assets/un.jpg";
import vice from "../../assets/vice.jpg";
import vanity from "../../assets/vanity.jpg";
import tedx from "../../assets/tedx.jpg";
import syndey from "../../assets/syndey.jpg";
import pri from "../../assets/pri.jpg";
import kofu from "../../assets/kofui.jpg";
import huffin from "../../assets/Huffington.jpg";
import havard from "../../assets/havard.jpg";
import buzz from "../../assets/buzz.jpg";
import bet from "../../assets/bet.jpg";
import aura from "../../assets/aura.jpg";

type PressItem = {
  id: number;
  name: string;
  image: string;
  link: string;
};

const pressItems: PressItem[] = [
  {
    id: 1,
    name: "United Nations",
    image: un,
    link: "https://dam.media.un.org/archive/Twentieth-anniversary-of-the-mandate-on-children-and-armed-conflict-2AM9LOL0A6VJ.html",
  },
  {
    id: 2,
    name: "VICE",
    image: vice,
    link: "https://www.vice.com/en/article/we-spoke-with-an-activist-rehabilitating-child-soldiers-in-somalia/",
  },
  {
    id: 3,
    name: "Vanity Fair",
    image: vanity,
    link: "https://www.vanityfair.com/news/2017/03/leading-lights-one-young-world",
  },
  {
    id: 4,
    name: "TEDx Mogadishu",
    image: tedx,
    link: "https://tedxmogadishu.com/talks/ilwad-elman-in-memory-of-my-father-i-returned-to-rebuild-somalia/",
  },
  {
    id: 5,
    name: "Sydney Opera House",
    image: syndey,
    link: "https://www.ivoox.com/en/ilwad-elman-how-to-change-the-world-audios-mp3_rf_4972987_1.html",
  },
  {
    id: 6,
    name: "PRI / The World",
    image: pri,
    link: "https://theworld.org/stories/2015/11/19/mogadishu-based-mother-and-daughter-team-say-children-can-be-brought-back",
  },
  {
    id: 7,
    name: "Kofi Annan Foundation",
    image: kofu,
    link: "https://www.kofiannanfoundation.org/news/ilwad-elman-including-youth-priority/",
  },
  {
    id: 8,
    name: "HuffPost",
    image: huffin,

    // The original HuffPost feature is no longer reliably available.
    // This opens Elman Peace's verified media archive containing the feature.
    link: "https://elmanpeace.org/press/",
  },
  {
    id: 9,
    name: "Harvard University",
    image: havard,
    link: "https://www.hks.harvard.edu/announcements/gleitsman-award-honors-work-human-rights-advocates-fartuun-adan-and-ilwad-elman",
  },
  {
    id: 10,
    name: "BuzzFeed",
    image: buzz,
    link: "https://www.buzzfeed.com/ikrd/this-somali-charity-used-the-mannequinchallenge-to-highlight",
  },
  {
    id: 11,
    name: "BET",
    image: bet,
    link: "https://elmanpeace.org/press/bet/",
  },
  {
    id: 12,
    name: "Aurora Prize",
    image: aura,
    link: "https://aurorahumanitarian.org/en/aurora-s-decade-of-impact-ilwad-elman",
  },
];

function PressMedia() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#078b9f]">
            Press &amp; Media
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Elman Peace in the media
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {pressItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read the ${item.name} feature about Elman Peace`}
              title={item.name}
              className="group flex h-[130px] items-center justify-center overflow-hidden border border-[#078b9f]/35 bg-white p-4 transition-colors duration-200 hover:border-[#078b9f] hover:bg-[#f5fbfc] focus:outline-none focus-visible:border-[#078b9f] focus-visible:ring-2 focus-visible:ring-[#078b9f]/20 sm:h-[150px] sm:p-5 md:h-[170px] lg:h-[190px] lg:p-7"
            >
              <img
                src={item.image}
                alt={`${item.name} logo`}
                loading="lazy"
                decoding="async"
                className="h-[80px] w-full object-contain transition-transform duration-200 group-hover:scale-[1.03] sm:h-[95px] md:h-[110px] lg:h-[130px]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PressMedia;