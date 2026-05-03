import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldCheck, ArrowRight, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/home.jpeg" 
            alt="Lerumo Security Guards" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 glass-light mb-8">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-text-main">Professional Security Since 2024</span>
            </div>

            {/* Heading */}
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-text-main tracking-tight leading-[1.1]">
              Your Legacy,<br />
              <span className="text-accent italic">Shielded.</span>
            </h1>

            {/* Subheading */}
            <p className="text-text-muted text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              Lerumo Legacy Protection Service is a professional private security firm delivering custom safety solutions to commercial, residential, and public-sector clients.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-20">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-accent text-primary font-bold rounded-lg shadow-[0_0_20px_rgba(210,20,30,0.3)] transition-all hover:bg-accent-light"
                >
                  Secure My Legacy
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-black/5 text-text-main font-medium rounded-lg hover:bg-black/10 transition-all border border-black/10 flex items-center gap-2"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl border-t border-black/10 pt-8">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-1 italic">24/7</p>
                <p className="text-text-muted text-sm">Monitoring</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-1 italic">100%</p>
                <p className="text-text-muted text-sm">Vetted Staff</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-1 italic">6+</p>
                <p className="text-text-muted text-sm">Services</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
