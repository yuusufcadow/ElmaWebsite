import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function CaptureVideo() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const sendVimeoCommand = (method: "play" | "pause") => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ method }),
      "https://player.vimeo.com",
    );
  };

  const handlePlay = () => {
    setIsPlaying(true);
    sendVimeoCommand("play");
  };

  useEffect(() => {
    const section = sectionRef.current;
    const iframe = iframeRef.current;

    if (!section || !iframe) return;

    const subscribeToVimeoEvents = () => {
      ["play", "pause", "finish"].forEach((eventName) => {
        iframe.contentWindow?.postMessage(
          JSON.stringify({
            method: "addEventListener",
            value: eventName,
          }),
          "https://player.vimeo.com",
        );
      });
    };

    const handleVimeoMessage = (event: MessageEvent) => {
      if (event.origin !== "https://player.vimeo.com") return;

      try {
        const data =
          typeof event.data === "string"
            ? JSON.parse(event.data)
            : event.data;

        if (data.event === "play") {
          setIsPlaying(true);
        }

        if (data.event === "pause" || data.event === "finish") {
          setIsPlaying(false);
        }
      } catch {
        // Ignore unrelated Vimeo messages.
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          sendVimeoCommand("pause");
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.2,
      },
    );

    iframe.addEventListener("load", subscribeToVimeoEvents);
    window.addEventListener("message", handleVimeoMessage);
    observer.observe(section);

    return () => {
      iframe.removeEventListener("load", subscribeToVimeoEvents);
      window.removeEventListener("message", handleVimeoMessage);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[360px] w-full overflow-hidden bg-black sm:h-[460px] lg:h-[580px]">
          <iframe
            ref={iframeRef}
            id="hdi-video"
            src="https://player.vimeo.com/video/719652908?title=0&byline=0&portrait=0&badge=0&autopause=0&api=1&player_id=hdi-video"
            title="Human Development Index"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
          />

          <div
            className={`absolute inset-0 z-10 transition-all duration-500 ${
              isPlaying
                ? "pointer-events-none invisible opacity-0"
                : "visible opacity-100"
            }`}
          >
            {/* Brand gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#006f6b]/90 via-[#009f9a]/65 to-black/55" />

            <div className="absolute inset-0 bg-black/10" />

            {/* Center content */}
            <div className="relative flex h-full w-full items-center justify-center px-5 text-center sm:px-8">
              <div className="flex max-w-2xl flex-col items-center">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-sm">
                  Human Development
                </p>

                <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Human Development Index
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
                  Measuring progress through health, education, and quality of
                  life.
                </p>

                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Play Human Development Index video"
                  className="mt-7 flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-white text-[#009f9a] transition duration-300 hover:scale-105 hover:bg-[#10d9d1] hover:text-white sm:h-20 sm:w-20"
                >
                  <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
                </button>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaptureVideo;