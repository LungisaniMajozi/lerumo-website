import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="glass-light w-fit px-4 py-2 rounded-full mb-6"
            >
              <span className="text-accent text-sm font-semibold">🛡️ Professional Security Since 2024</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              Protect What
              <br />
              <span className="text-gradient">Matters Most</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-text-muted text-lg mb-8 max-w-lg"
            >
              Premium security solutions tailored for commercial, residential, and public-sector clients. Modern technology meets professional vigilance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex gap-4 flex-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-gradient-accent text-primary font-bold rounded-lg hover:shadow-glow-lg"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-accent/20"
            >
              {[
                { number: '24/7', label: 'Monitoring' },
                { number: '5+', label: 'Services' },
                { number: '100%', label: 'Vetted' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-accent font-bold text-3xl">{stat.number}</p>
                  <p className="text-text-muted text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative h-full flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-md">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border border-accent/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-6 border border-accent/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-12 border border-accent/10 rounded-full"
              />

              {/* Center shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative"
                >
                  <svg
                    viewBox="0 0 200 240"
                    className="w-48 h-48 drop-shadow-2xl"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D2141E" />
                        <stop offset="100%" stopColor="#0099bb" />
                      </linearGradient>
                    </defs>
                    {/* Shield */}
                    <path
                      d="M100 20 L170 60 L170 130 C170 180 100 220 100 220 C100 220 30 180 30 130 L30 60 Z"
                      fill="url(#shieldGrad)"
                      opacity="0.2"
                      stroke="url(#shieldGrad)"
                      strokeWidth="2"
                    />
                    {/* Inner shield */}
                    <path
                      d="M100 40 L160 75 L160 130 C160 170 100 205 100 205 C100 205 40 170 40 130 L40 75 Z"
                      fill="none"
                      stroke="#D2141E"
                      strokeWidth="2.5"
                    />
                    {/* Center circle */}
                    <circle cx="100" cy="100" r="35" fill="none" stroke="#D2141E" strokeWidth="2" />
                    {/* Center dot */}
                    <circle cx="100" cy="100" r="8" fill="#D2141E" />
                    {/* Text */}
                    <text
                      x="100"
                      y="220"
                      textAnchor="middle"
                      fill="#D2141E"
                      fontSize="32"
                      fontWeight="bold"
                    >
                      SECURE
                    </text>
                  </svg>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" />
                </motion.div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5], x: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-8 right-4 glass rounded-xl px-4 py-2 text-sm font-semibold text-accent"
              >
                ✓ Armed Guards
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5], x: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-16 -left-6 glass rounded-xl px-4 py-2 text-sm font-semibold text-accent"
              >
                ✓ Event Security
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
