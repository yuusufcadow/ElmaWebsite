import { Link } from "react-router-dom";
import { UsersRound } from "lucide-react";

function Redical() {
  return (
    <section className="w-full bg-white text-[#00475e]">
      <div className="container mx-auto px-6 py-16 text-center lg:px-10">
        <div className="mx-auto flex flex-col items-center">
          <UsersRound size={34} className="mb-4 text-[#10d9d1]" />

          <h2 className="text-2xl font-semibold tracking-tight text-[#00475e] sm:text-3xl">
            Radical Transparency &amp;{" "}
            <span className="text-[#10d9d1]">Local Agency</span>
          </h2>

          <p className="mt-6 text-base font-normal leading-8 text-[#00475e]/75 sm:text-lg">
            We believe in moving beyond traditional aid models. Our approach
            centers on equipping local communities with the tools, vocational
            training, and agency they need to build lasting peace and
            sustainable futures. Dignity is at the core of everything we do.
          </p>
        </div>
      </div>

      <div className="w-full bg-[#eff4ff]">
        <div className="container mx-auto px-6 py-20 text-center lg:px-10">
          <div className="mx-auto flex flex-col items-center">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#00475e] sm:text-5xl lg:text-6xl">
              Take action &amp; impact millions with{" "}
              <span className="text-[#10d9d1]">Elman Peace</span>
            </h2>

            <p className="mt-6 text-base font-normal leading-8 text-[#00475e]/75 sm:text-lg">
              Your donations will support real people &amp; visible projects;
              not overhead or administration costs
            </p>

            <Link
              to="/donate"
              className="mt-12 bg-[#10d9d1] px-7 py-3 text-sm font-semibold tracking-wide text-[#00475e] transition-colors duration-300 hover:bg-[#00475e] hover:text-white"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Redical;