import { useEffect, useRef } from "react";

function CaptureVideo() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const videoSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const pauseVideo = () => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ method: "pause" }),
        "https://player.vimeo.com"
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          pauseVideo();
        }
      },
      {
        threshold: 0.35,
      }
    );

    const currentSection = videoSectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section ref={videoSectionRef} className="w-full bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:gap-20">
          {/* Left Text */}
          <div className="flex h-full flex-col justify-center bg-white lg:min-h-[392px]">
            <span className="mb-4 inline-flex w-fit bg-[#10d9d1]/15 px-3 py-1 text-xs font-semibold text-[#00475e]">
              Human Development
            </span>

            <h2 className="max-w-md text-[30px] font-semibold leading-tight tracking-tight text-[#00475e] sm:text-[36px] lg:text-[32px]">
              Human Development Index{" "}
              <span className="text-[#10d9d1]">(HDI)</span>
            </h2>

            <p className="mt-5 max-w-md text-sm font-normal leading-7 text-[#00475e]/75 sm:text-base">
              The Human Development Index looks beyond income alone. It helps
              show how people are doing through health, education, and living
              standards.
            </p>

            <p className="mt-4 max-w-2xl text-sm font-normal leading-7 text-[#00475e]/75 sm:text-base">
              For communities in Somalia, this approach connects directly to
              dignity, opportunity, skills, and long-term human wellbeing.
            </p>
          </div>

          {/* Video */}
          <div className="relative h-[260px] w-full overflow-hidden bg-[#00475e] sm:h-[360px] lg:h-[392px]">
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/719652908?title=0&byline=0&portrait=0&api=1&player_id=hdi-video"
              title="Human Development Index HDI"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaptureVideo;