import { motion } from 'framer-motion'
import { Landmark, TrendingUp, Presentation, Rocket, Lock } from 'lucide-react'

export default function Profile() {
  return (
    <div className="pt-24 pb-12 w-full max-w-7xl mx-auto px-6">
      {/* Header */}
      <section className="py-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold mb-6"
        >
          Business <span className="text-gradient">Profile</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-text-muted text-lg max-w-2xl mx-auto"
        >
          An overview of our corporate structure, financial planning, and strategic roadmaps.
        </motion.p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Legal Structure */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-dark p-8 rounded-2xl border-t-4 border-accent"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Landmark className="text-accent" /> Legal Structure
          </h2>
          <ul className="space-y-4 text-text-light">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-text-muted">Entity Type</span>
              <span className="font-medium">Limited Liability Company (LLC)</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-text-muted">Licensing</span>
              <span className="font-medium text-right">Private Security Business License</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-text-muted">Registration Number</span>
              <span className="font-medium">2024/553925/07</span>
            </li>
            <li className="flex justify-between pb-2">
              <span className="text-text-muted">TAX Number</span>
              <span className="font-medium">9081571284</span>
            </li>
          </ul>
        </motion.div>

        {/* Financial Plan */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-dark p-8 rounded-2xl border-t-4 border-accent-light"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="text-accent-light" /> Financial Plan Overview
          </h2>
          <div className="space-y-4 text-sm md:text-base text-text-light">
            <div className="bg-primary/50 p-4 rounded-lg">
              <p className="text-text-muted mb-1 text-xs uppercase tracking-wider">Startup Costs</p>
              <p className="font-bold text-accent">R75,000 – R150,000</p>
              <p className="text-xs mt-1">(Uniforms, vehicles, equipment, licensing, office setup)</p>
            </div>
            
            <div className="bg-primary/50 p-4 rounded-lg">
              <p className="text-text-muted mb-1 text-xs uppercase tracking-wider">Revenue Streams</p>
              <p className="font-medium">Hourly guard service contracts, event-based flat fees, remote monitoring subscriptions</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/50 p-4 rounded-lg">
                <p className="text-text-muted mb-1 text-xs uppercase tracking-wider">Year 1 Target</p>
                <p className="font-bold text-white">R400,000+</p>
              </div>
              <div className="bg-primary/50 p-4 rounded-lg">
                <p className="text-text-muted mb-1 text-xs uppercase tracking-wider">Break-even</p>
                <p className="font-bold text-white">10–14 months</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Marketing Strategy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Presentation className="text-accent w-5 h-5" /> Marketing & Sales
          </h3>
          <ul className="space-y-3 text-sm text-text-light">
            <li><strong className="text-white">Website:</strong> Professional, SEO-optimized with contact form.</li>
            <li><strong className="text-white">Social Media:</strong> Targeted content/ads on LinkedIn, FB, Instagram.</li>
            <li><strong className="text-white">Outreach:</strong> Cold calls, email campaigns, and in-person meetings.</li>
            <li><strong className="text-white">Referrals:</strong> Client and employee referral bonuses.</li>
            <li><strong className="text-white">Local Events:</strong> Sponsor or secure local community events.</li>
          </ul>
        </motion.div>

        {/* Growth Strategy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Rocket className="text-accent w-5 h-5" /> Growth Strategy
          </h3>
          <ul className="space-y-3 text-sm text-text-light list-disc pl-4 marker:text-accent">
            <li>Expand into nearby metropolitan areas.</li>
            <li>Secure state contracts through minority-owned and veteran-owned certifications.</li>
            <li>Launch mobile app for client reporting and internal scheduling.</li>
            <li>Offer cybersecurity audits and partnerships with tech firms (Phase 3).</li>
          </ul>
        </motion.div>

        {/* Exit Options */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Lock className="text-accent w-5 h-5" /> Exit / Expansion
          </h3>
          <ul className="space-y-3 text-sm text-text-light list-disc pl-4 marker:text-accent">
            <li>Franchise model by Year 5.</li>
            <li>Potential merger/acquisition by national firm.</li>
            <li>Diversify into security tech (camera systems, drones, AI surveillance).</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
