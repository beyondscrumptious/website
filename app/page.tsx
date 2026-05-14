'use client'

import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <main className="bg-[#111111] text-white overflow-hidden">
      <section className="relative h-screen w-full flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-6xl md:text-8xl font-light tracking-wide mb-6">
            Beyond
            <br />
            Scrumptious
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-8">
            Luxury eggless cakes, dessert stations & unforgettable event experiences.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#"
              className="px-8 py-4 bg-white text-black rounded-full hover:scale-105 transition"
            >
              Explore Our Work
            </a>

            <a
              href="https://instagram.com/beyond.scrumptious"
              target="_blank"
              className="px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </section>

      <section className="py-32 px-6 bg-[#F7F1EA] text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-16 text-center">
            Signature Creations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-[4/5] rounded-3xl bg-[#ddd] overflow-hidden"
              >
                <div className="h-full w-full hover:scale-105 transition duration-700 bg-neutral-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}