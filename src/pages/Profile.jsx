import { motion } from 'framer-motion'
import { Building2, FileText, Crosshair } from 'lucide-react'

export default function Profile() {
  return (
    <div className="pt-32 pb-20 w-full max-w-5xl mx-auto px-6">
      {/* Header */}
      <section className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold mb-6 text-text-main"
        >
          Security Business <span className="text-accent italic">Profile Plan</span>
        </motion.h1>
      </section>

      <div className="space-y-12">
        {/* Business Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-light p-8 md:p-12 rounded-3xl"
        >
          <h2 className="text-2xl font-display font-bold text-accent mb-6 flex items-center gap-3 border-b border-black/10 pb-4">
            <Building2 className="text-accent" /> Business Information
          </h2>
          <ul className="space-y-4 text-text-main">
            <li className="flex flex-col md:flex-row md:justify-between py-2 border-b border-black/5">
              <span className="font-semibold text-text-muted">Business Name:</span>
              <span>Lerumo Legacy Protection Service</span>
            </li>
            <li className="flex flex-col md:flex-row md:justify-between py-2 border-b border-black/5">
              <span className="font-semibold text-text-muted">Type:</span>
              <span>Private Security Company</span>
            </li>
            <li className="flex flex-col md:flex-row md:justify-between py-2 border-b border-black/5">
              <span className="font-semibold text-text-muted">Headquarters:</span>
              <span>Softstart BTI, 2nd Street, Midrand</span>
            </li>
            <li className="flex flex-col md:flex-row md:justify-between py-2 border-b border-black/5">
              <span className="font-semibold text-text-muted">Registration number:</span>
              <span>2024/553925/07</span>
            </li>
            <li className="flex flex-col md:flex-row md:justify-between py-2">
              <span className="font-semibold text-text-muted">TAX number:</span>
              <span>9081571284</span>
            </li>
          </ul>
        </motion.div>

        {/* Executive Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-light p-8 md:p-12 rounded-3xl"
        >
          <h2 className="text-2xl font-display font-bold text-accent mb-6 flex items-center gap-3 border-b border-black/10 pb-4">
            <FileText className="text-accent" /> Executive Summary
          </h2>
          <p className="text-text-main leading-relaxed">
            Lerumo Legacy Protection Service is a professional private security firm delivering custom safety solutions to commercial, residential, and public-sector clients. We offer armed and unarmed personnel, mobile patrols, surveillance systems, and specialized services such as event security and executive protection. Our mission is to deliver dependable, technology-driven security that exceeds industry standards.
          </p>
        </motion.div>



        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent p-8 md:p-12 rounded-3xl text-white shadow-glow"
        >
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3 border-b border-white/20 pb-4">
            <Crosshair /> Mission Statement
          </h2>
          <p className="text-lg md:text-xl font-display italic leading-relaxed">
            "To protect the assets, personnel, and peace of mind of our clients through vigilant, professional, and innovative security solutions."
          </p>
        </motion.div>
      </div>
    </div>
  )
}
