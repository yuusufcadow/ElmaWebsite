import { useEffect, useRef } from "react";

function CaptureVideo() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const videoSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const pauseVideo = () => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({
          method: "pause",
        }),
        "https://player.vimeo.com"
      );
    };

    const currentSection = videoSectionRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          pauseVideo();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={videoSectionRef}
      className="w-full border-t border-neutral-200 bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-10 max-w-4xl sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#10d9d1]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#008f8a] sm:text-sm">
              Human Development
            </p>
          </div>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-black sm:text-5xl lg:text-6xl">
            Human Development Index{" "}
            <span className="text-[#009f9a]">(HDI)</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid items-stretch gap-10 lg:grid-cols-[0.75fr_1.45fr] lg:gap-14 xl:gap-20">
          {/* Text */}
          <div className="flex flex-col justify-between border-l border-neutral-300 pl-5 sm:pl-7 lg:min-h-[560px]">
            <div>
              <p className="max-w-xl text-lg font-medium leading-8 text-black sm:text-xl sm:leading-9">
                The Human Development Index looks beyond income alone. It
                measures progress through health, education, and living
                standards.
              </p>

              <div className="mt-7 space-y-6 text-base leading-8 text-neutral-700 sm:text-lg sm:leading-9">
                <p>
                  It provides a broader understanding of whether people have
                  the opportunities, knowledge, resources, and conditions they
                  need to live fulfilling lives.
                </p>

                <p>
                  For communities in Somalia, this approach connects directly
                  to dignity, education, economic opportunity, practical skills,
                  and long-term wellbeing.
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-neutral-200 pt-6">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
                Health · Education · Living standards
              </p>
            </div>
          </div>

          {/* Video */}
          <div className="relative h-[360px] w-full overflow-hidden bg-black sm:h-[480px] lg:h-[560px] xl:h-[620px]">
            <iframe
              ref={iframeRef}
              id="hdi-video"
              src="https://player.vimeo.com/video/719652908?title=0&byline=0&portrait=0&badge=0&autopause=0&api=1&player_id=hdi-video"
              title="Human Development Index HDI"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaptureVideo;