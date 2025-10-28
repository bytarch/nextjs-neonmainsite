'use client';

import { useEffect } from 'react';
import {
  Check,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Server,
  ShieldCheck
} from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    // Initialize starfield canvas
    const canvas = document.getElementById('starfield-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = [];
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        speed: Math.random() * 0.5 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
    };
  }, []);

  const handleGetProPlan = () => {
    window.open("https://billing.neonnextgeneration.com/products/hosting-plans/pro-plan", "_blank");
  };

  const handleExploreVPN = () => {
    window.open("https://platform.neonnextgeneration.com", "_blank");
  };

  return (
    <section className="hero-section relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-items-center overflow-hidden py-16 px-4">
      <canvas id="starfield-canvas" className="absolute top-0 left-0 w-full h-full z-0"></canvas>

      <div className="hero-left z-20 text-center md:text-left px-4">
        <span className="animate-on-scroll fade-up mb-4 bg-gradient-to-r font-bold from-purple-500 inline-block px-4 py-2 rounded-full text-sm text-white to-pink-500">
          MOST POPULAR CHOICE
        </span>

        <h1 className="animate-on-scroll fade-up font-extrabold leading-tight lg:text-5xl mb-2 md:text-4xl text-2xl">
          Choose Our <span className="gradient-text-hosting">Pro Plan</span> for Growing Businesses
        </h1>

        <div className="flex animate-on-scroll fade-up justify-center font-extrabold items-baseline mb-4 md:justify-start text-4xl">
          $<span>8</span><span className="text-gray-400 text-lg">/month</span>
          <span className="mx-2 text-gray-500">or</span>$<span>110</span><span className="text-gray-400 text-lg">/year</span>
        </div>

        <ul className="w-full text-gray-300 text-left animate-on-scroll fade-up max-w-md mb-4 md:mx-0 mx-auto space-y-1">
          <li className="flex items-center">
            <Check className="h-5 mr-2 w-5 text-green-400" />
            25GB NVMe Storage
          </li>
          <li className="flex items-center">
            <Check className="h-5 mr-2 w-5 text-green-400" />
            Priority Support
          </li>
          <li className="flex items-center">
            <Check className="h-5 mr-2 w-5 text-green-400" />
            Early Developer Features
          </li>
          <li className="flex items-center">
            <Check className="h-5 mr-2 w-5 text-green-400" />
            Access to VPN Services
          </li>
        </ul>

        <div className="flex animate-on-scroll fade-up flex-col md:justify-start mt-4 sm:flex-row sm:space-x-3 sm:space-y-0 space-y-2">
          <button
            className="text-white rounded-full font-semibold btn-gradient duration-300 px-8 py-3 transition-all"
            onClick={handleGetProPlan}
          >
            Get Pro Plan
          </button>
          <button
            className="btn-bland duration-300 font-semibold px-8 py-3 rounded-full transition-all"
            onClick={handleExploreVPN}
          >
            Explore VPN
          </button>
        </div>
      </div>

      <div className="hero-right hidden md:flex">
        <Square className="pattern-icon icon-1" />
        <Circle className="pattern-icon icon-2" />
        <Triangle className="pattern-icon icon-3" />
        <Hexagon className="pattern-icon icon-4" />
        <Square className="pattern-icon icon-5" />
        <Circle className="pattern-icon icon-6" />
        <Triangle className="pattern-icon icon-7" />
        <Hexagon className="pattern-icon icon-8" />
        <Square className="pattern-icon icon-9" />
        <Circle className="pattern-icon icon-10" />
        <Triangle className="pattern-icon icon-11" />
        <Hexagon className="pattern-icon icon-12" />
        <Server className="pattern-icon icon-13" />
        <ShieldCheck className="pattern-icon icon-14" />
      </div>
    </section>
  );
};

export default HeroSection;