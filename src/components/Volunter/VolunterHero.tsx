import elmanstory from '../../assets/arts.jpg'

function VolunterHero() {
  return (
    <section className="relative flex min-h-[420px] w-full items-center overflow-hidden bg-[#00475e]">
      <img
        src={elmanstory}
        alt="Elman Peace about us"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#00475e]/75" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Volunteer
          </h1>

          <div className="mt-4 flex items-center gap-2 text-xs font-medium sm:text-sm">
            <a
              href="/"
              className="text-white transition duration-300 hover:text-[#10d9d1]"
            >
              Home
            </a>

            <span className="text-white/70">/</span>

            <span className="text-[#10d9d1]">Join Elman Peace</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VolunterHero