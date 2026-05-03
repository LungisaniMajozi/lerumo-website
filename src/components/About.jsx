import { motion } from 'framer-motion'

export default function About() {
  const values = [
    { icon: '💎', label: 'Integrity', desc: 'Honest and accountable in every engagement' },
    { icon: '👁️', label: 'Vigilance', desc: 'Proactive detection and response' },
    { icon: '⭐', label: 'Professionalism', desc: 'Dignified and disciplined service' },
    { icon: '🚀', label: 'Innovation', desc: 'Cutting-edge security technology' },
    { icon: '🤝', label: 'Trust', desc: 'Built through transparency and results' },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block text-accent text-sm font-bold mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              ◆ ABOUT US
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Protecting Your <span className="text-gradient">Legacy</span>
            </h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              Lerumo Legacy Protection Service is a professional private security firm delivering technology-driven security solutions. Established in 2024 and headquartered in Midrand, South Africa, we serve commercial, residential, and public-sector clients.
            </p>
            <p className="text-text-muted mb-8 leading-relaxed">
              Our mission is to provide reliable, responsive, and modern protective services built on professionalism, integrity, and trust. We're not just a security company—we're your trusted partner in protection.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block px-8 py-3.5 bg-gradient-accent text-primary font-bold rounded-lg hover:shadow-glow-lg"
            >
              Get Protected Today
            </motion.a>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 hover:border-accent/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl mt-1">{value.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-text-main mb-1">{value.label}</h3>
                    <p className="text-text-muted text-sm">{value.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6 mt-20 pt-20 border-t border-accent/20"
        >
          {[
            { num: '2024', label: 'Founded' },
            { num: '5+', label: 'Service Types' },
            { num: '24/7', label: 'Operations' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-accent text-4xl font-bold">{stat.num}</p>
              <p className="text-text-muted text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
