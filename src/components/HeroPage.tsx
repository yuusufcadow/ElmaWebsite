import { Link } from "react-router-dom";
import {
  Autoplay,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero from "../assets/heroimage.png";
import drawing from "../assets/Drawing.jpg";
import girls from "../assets/Girls.jpg";
import mecanic from "../assets/Mecanic.jpg";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroSlides = [
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
      {/* Hero Swiper */}
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
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#00475e]/65" />

                <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 sm:px-6">
                  <div className="w-full max-w-[896px] px-4 text-center sm:px-10">
                    <h1 className="text-[26px] font-semibold leading-[1.15] tracking-tight text-white min-[420px]:text-[30px] min-[520px]:text-[34px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[58px]">
                      {slide.title}{" "}
                      <span className="text-[#10d9d1]">
                        {slide.highlight}
                      </span>
                    </h1>

                    <p className="mx-auto mt-4 text-[13px] font-normal leading-6 text-white/90 min-[420px]:text-sm sm:mt-5 sm:text-base md:text-lg">
                      {slide.description}
                    </p>

                    <div className="mt-7 flex flex-row items-center justify-center gap-3 sm:mt-8 sm:gap-4">
                      <Link
                        to="/donate"
                        className="bg-[#10d9d1] px-5 py-3 text-center text-xs font-semibold tracking-wide text-[#00475e] transition-colors duration-300 hover:bg-white min-[480px]:px-7 min-[480px]:py-4 min-[480px]:text-sm"
                      >
                        Donate Now
                      </Link>

                      <Link
                        to="/programs"
                        className="border border-[#10d9d1] px-5 py-3 text-center text-xs font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-[#10d9d1] hover:text-[#00475e] min-[480px]:px-7 min-[480px]:py-4 min-[480px]:text-sm"
                      >
                        Our Programs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Arrows */}
          <button
            type="button"
            className="hero-swiper-prev absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-[#10d9d1] text-[#10d9d1] transition-colors duration-300 hover:bg-[#10d9d1] hover:text-[#00475e] md:flex lg:left-8"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            className="hero-swiper-next absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-[#10d9d1] text-[#10d9d1] transition-colors duration-300 hover:bg-[#10d9d1] hover:text-[#00475e] md:flex lg:right-8"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination */}
          <div className="hero-swiper-pagination absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-2" />
        </Swiper>
      </div>

      {/* Bottom Action Links */}
     
    </section>
  );
}

export default HeroPage;