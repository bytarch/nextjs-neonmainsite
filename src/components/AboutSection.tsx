export default function AboutSection() {
  return (
    <section className="w-full px-4 py-16 backdrop-blur-md bg-black/20" id="about-us">
      <div className="flex items-center flex-col justify-center max-w-6xl md:flex-row-reverse md:space-x-8 md:space-x-reverse mx-auto">
        <div className="animate-on-scroll md:w-1/2 mb-8 md:mb-0 slide-right md:text-left text-center">
          <h2 className="font-extrabold text-4xl mb-8 md:text-5xl">
            About <span className="gradient-text-hosting">Us</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            We are an Australian-based company specializing in cutting-edge solutions for software development, hosting, game
            development, VPN solutions, and merchandise. We provide businesses, content creators, and developers with customized,
            high-performance solutions tailored to their specific needs. As a company, we prioritize the well-being of our
            employees, ensuring they are well-supported so that we can provide the best possible service to your business.
          </p>
        </div>

        <div className="flex items-center animate-on-scroll justify-center md:w-1/2 slide-left">
          <div className="container w-full">
            <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="relative">
                <video
                  id="player"
                  playsInline
                  controls
                  loop
                  poster="https://neonnextgeneration.com/favico.png"
                  className="w-full"
                >
                  <source
                    src="https://neonnextgeneration.com/Neon%20next%20generation%20theme%20song%20-%20Neon%20Next%20Generation%20(1080p,%20h264).mp4"
                    type="video/mp4"
                  />
                  <track
                    kind="captions"
                    label="English"
                    src="https://neonnextgeneration.com/captions-en.vtt"
                    srcLang="en"
                  />
                  <a
                    href="https://neonnextgeneration.com/Neon%20next%20generation%20theme%20song%20-%20Neon%20Next%20Generation%20(1080p,%20h264).mp4"
                    download
                  >
                    Download video
                  </a>
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}