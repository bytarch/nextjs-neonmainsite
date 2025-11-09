export default function MissionSection() {
  return (
    <section className="w-full px-4 py-16 backdrop-blur-md bg-black/20" id="mission-statement">
      <div className="flex items-center flex-col justify-center max-w-6xl md:flex-row-reverse md:space-x-8 md:space-x-reverse mx-auto">
        <div className="flex items-center animate-on-scroll justify-center md:w-1/2 mb-8 md:mb-0 slide-right">
          <img
            alt="Our Mission Graphic"
            className="w-full h-auto max-w-sm md:max-w-full object-cover rounded-lg shadow-lg"
            src="https://placehold.co/600x400/000000/ffffff?text=Innovation,+Teamwork,+Empowerment."
          />
        </div>

        <div className="animate-on-scroll md:w-1/2 md:text-left text-center slide-left">
          <h2 className="font-extrabold text-4xl mb-8 md:text-5xl">
            Our <span className="gradient-text-hosting">Mission</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            To revolutionize industries with innovative technology solutions, fostering a supportive and inclusive environment
            that values our team, while empowering businesses to thrive and achieve their goals.
          </p>
        </div>
      </div>
    </section>
  );
}