import { motion } from 'framer-motion'
import { Shield, Car, Users, Cctv, Building2, HardHat, Award, Target, Monitor, Settings, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    { icon: <Shield className="w-6 h-6 text-primary" />, title: "Armed & Unarmed Guards", desc: "On-site protection, access control, and patrol duties", image: "/assets/hero_guards_1777789748724.png" },
    { icon: <Car className="w-6 h-6 text-primary" />, title: "Mobile Patrol Units", desc: "Scheduled and random drive-through patrols in marked vehicles", image: "/assets/event_security_1777789795848.png" },
    { icon: <Users className="w-6 h-6 text-primary" />, title: "Event Security", desc: "Crowd control, perimeter security, and guest screening", image: "/assets/event_security_1777789795848.png" },
    { icon: <Cctv className="w-6 h-6 text-primary" />, title: "Surveillance Monitoring", desc: "24/7 CCTV monitoring and alert response", image: "/assets/surveillance_room_1777789764428.png" },
    { icon: <Building2 className="w-6 h-6 text-primary" />, title: "Executive Protection", desc: "Close protection for VIPs and high-risk individuals", image: "/assets/executive_protection_1777789779263.png" },
    { icon: <HardHat className="w-6 h-6 text-primary" />, title: "Construction & Industrial", desc: "Theft prevention and site safety during off-hours", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=60" }
  ]

  const advantages = [
    { icon: <Award />, title: "Highly Trained and Vetted Personnel", desc: "Professional training and rigorous background checks." },
    { icon: <Target />, title: "Real-Time Guard Tracking & Digital Reporting", desc: "Complete operational transparency." },
    { icon: <Monitor />, title: "Client Portal for Service Management", desc: "Dedicated portal for scheduling, reports, and communication." },
    { icon: <Settings />, title: "Customizable Security Packages", desc: "Flexible solutions tailored to your needs." },
    { icon: <Zap />, title: "Rapid Response Protocols", desc: "Swift emergency response." }
  ]

  const markets = [
    "Commercial Properties & Offices",
    "Retail Stores & Shopping Centers",
    "High-End Residential Estates & Gated Communities",
    "Construction & Industrial Sites",
    "Hospitals & Healthcare Facilities",
    "Event Organizers & Venues",
    "Government & Public Infrastructure"
  ]

  return (
    <div className="pt-24 pb-12 w-full">
      {/* Header */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6 relative z-10">
        <p className="text-accent text-sm font-bold tracking-widest uppercase mb-4">Our Services</p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
        >
          The Protection <span className="text-accent italic">Suite</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-text-muted text-lg"
        >
          Comprehensive security solutions tailored to protect what matters most to you.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-dark rounded-[2rem] overflow-hidden border border-white/5 flex flex-col group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,217,255,0.1)] hover:border-accent/40 transition-all duration-500 bg-gradient-to-b from-white/[0.03] to-transparent"
            >
              <div className="h-60 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10"></div>
              </div>
              <div className="p-8 relative flex-grow flex flex-col justify-end pt-12">
                {/* Icon overlapping image and text area */}
                <div className="absolute -top-10 left-8 w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shadow-[0_0_30px_rgba(0,217,255,0.4)] z-20 group-hover:scale-110 transition-transform duration-500">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{srv.title}</h3>
                <p className="text-text-muted text-base leading-relaxed">{srv.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Lerumo Advantage */}
      <section className="py-24 max-w-7xl mx-auto px-6 mt-12 border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-bold tracking-widest uppercase mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              The Lerumo <span className="text-accent italic">Advantage</span>
            </h2>
            <p className="text-text-muted mb-10 text-lg">
              What sets us apart is our unwavering commitment to excellence and innovation in every aspect of security.
            </p>

            <div className="space-y-8">
              {advantages.map((adv, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-lg bg-primary border border-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                    <div className="scale-75">{adv.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1">{adv.title}</h3>
                    <p className="text-text-muted text-xs leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block h-[600px] pl-12 pb-12"
          >
            {/* Offset Border */}
            <div className="absolute inset-0 border-2 border-accent/30 rounded-[40px] translate-y-8 -translate-x-8 -z-10"></div>

            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop&q=60"
              alt="Team discussing advantage"
              className="w-full h-full object-cover rounded-[40px] shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-20 max-w-7xl mx-auto px-6 border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Target <span className="text-accent italic">Markets</span></h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {markets.map((market, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 glass rounded-full border border-white/10 text-white text-sm md:text-base font-medium hover:border-accent hover:text-accent transition-colors"
            >
              {market}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
