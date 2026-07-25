import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  A11y,
  Autoplay,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import drawing from "../assets/Drawing.jpg";
import girls from "../assets/Girls.jpg";
import hero from "../assets/heroimage.png";
import mecanic from "../assets/Mecanic.jpg";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

type HeroSlide = {
  image: string;
  alt: string;
  title: string;
  highlight: string;
  description: string;
};

const heroSlides: HeroSlide[] = [
  {
    image: hero,
    alt: "Elman Peace supporting peacebuilding and human rights in Somalia",
    title: "Building Peace,",
    highlight: "Empowering Somalia",
    description:
      "Protecting human rights, strengthening communities, and creating opportunities for a peaceful and inclusive Somalia.",
  },
  {
    image: drawing,
    alt: "Young people participating in Elman Peace rehabilitation activities",
    title: "Drop the Gun,",
    highlight: "Pick Up the Pen",
    description:
      "Supporting children and young people to disengage from violence, heal from conflict, and return to their communities with new opportunities.",
  },
  {
    image: girls,
    alt: "Girls participating in an Elman Peace empowerment program",
    title: "Protecting Women,",
    highlight: "Empowering Girls",
    description:
      "Supporting survivors, investing in girls’ education, and helping women and young leaders participate meaningfully in Somalia’s future.",
  },
  {
    image: mecanic,
    alt: "Young person receiving vocational skills training at Elman Peace",
    title: "Skills for Dignity,",
    highlight: "Work for the Future",
    description:
      "Providing free technical training, practical skills, and pathways to employment and sustainable livelihoods for youth and women.",
  },
];

function HeroPage() {
  return (
    <section className="w-full bg-white">
      <div className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden bg-[#00475e]">
        <Swiper
          modules={[
            Autoplay,
            EffectFade,
            Keyboard,
            Navigation,
            Pagination,
            A11y,
          ]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          speed={1100}
          grabCursor
          keyboard={{ enabled: true }}
          navigation={{
            prevEl: ".hero-swiper-prev",
            nextEl: ".hero-swiper-next",
          }}
          pagination={{
            clickable: true,
            el: ".hero-swiper-pagination",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          a11y={{
            enabled: true,
            prevSlideMessage: "Previous hero slide",
            nextSlideMessage: "Next hero slide",
            paginationBulletMessage: "Go to hero slide {{index}}",
          }}
          className="hero-swiper min-h-[calc(100vh-5rem)] w-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Main left-side brand gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00475e]/95 via-[#00475e]/75 to-[#00475e]/20" />

                {/* Soft vertical gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />

                <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] items-center px-4 sm:px-6 lg:px-10 xl:px-12">
                  <div className="w-full max-w-3xl text-left">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#10d9d1] sm:text-sm">
                      Elman Peace
                    </p>

                    <h1 className="max-w-3xl text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[68px]">
                      <span className="block">{slide.title}</span>

                      <span className="mt-1 block text-[#10d9d1]">
                        {slide.highlight}
                      </span>
                    </h1>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8 md:text-lg">
                      {slide.description}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center justify-start gap-3 sm:mt-9 sm:gap-4">
                      <Link
                        to="/donate"
                        className="inline-flex min-h-12 items-center justify-center bg-[#10d9d1] px-6 text-sm font-semibold text-[#00475e] transition-colors duration-300 hover:bg-white sm:px-8"
                      >
                        Donate Now
                      </Link>

                      <Link
                        to="/programs"
                        className="inline-flex min-h-12 items-center justify-center border border-[#10d9d1] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#10d9d1] hover:text-[#00475e] sm:px-8"
                      >
                        Our Programs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <button
            type="button"
            className="hero-swiper-prev absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-[#10d9d1]/70 text-[#10d9d1] transition-colors duration-300 hover:bg-[#10d9d1] hover:text-[#00475e] md:flex lg:left-6"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            className="hero-swiper-next absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-[#10d9d1]/70 text-[#10d9d1] transition-colors duration-300 hover:bg-[#10d9d1] hover:text-[#00475e] md:flex lg:right-6"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="hero-swiper-pagination absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-2" />
        </Swiper>
      </div>
    </section>
  );
}

export default HeroPage;