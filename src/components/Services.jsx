import { motion } from 'framer-motion'

const services = [
  {
    icon: '🔐',
    title: 'Armed & Unarmed Guards',
    desc: 'Highly trained personnel for on-site protection and access control.',
  },
  {
    icon: '🚗',
    title: 'Mobile Patrols',
    desc: 'Scheduled and random drive-through patrols in marked vehicles.',
  },
  {
    icon: '🎪',
    title: 'Event Security',
    desc: 'Professional crowd control and perimeter security for any event.',
  },
  {
    icon: '📹',
    title: '24/7 CCTV Monitoring',
    desc: 'Real-time surveillance monitoring with instant alert response.',
  },
  {
    icon: '👔',
    title: 'Executive Protection',
    desc: 'Elite close protection for VIPs and high-risk individuals.',
  },
  {
    icon: '🏗️',
    title: 'Industrial Security',
    desc: 'Specialized theft prevention for construction and industrial sites.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Comprehensive security solutions customized to your specific needs and environment.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-8 group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-text-main">{service.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{service.desc}</p>
              <div className="mt-6 pt-6 border-t border-accent/20 flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
