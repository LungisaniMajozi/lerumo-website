import { motion } from 'framer-motion'
import { Eye, ShieldCheck, Zap, HeartHandshake, Briefcase } from 'lucide-react'

export default function About() {
  const values = [
    { icon: <ShieldCheck className="w-5 h-5 text-primary" />, title: "Mission", desc: "To provide reliable, responsive, and modern protective services built on professionalism, integrity, and trust." },
    { icon: <Eye className="w-5 h-5 text-primary" />, title: "Vision", desc: "To be the preferred security provider in the Region, setting benchmarks in protection, technology, and client satisfaction." },
    { icon: <HeartHandshake className="w-5 h-5 text-primary" />, title: "Values", desc: "Integrity, Vigilance, Professionalism, Innovation, and Trust — the pillars of our commitment to excellence." }
  ]

  const team = [
    { name: "Miss Koketso.M", role: "Director of Operations", focus: "Security logistics, scheduling, client support", initials: "KM" },
    { name: "Mr Thapelo.R", role: "CTO", focus: "Security systems, surveillance integration", initials: "TR" }
  ]

  const objectives = [
    { year: "Year 1", goal: "Establish operations and secure 5–7 long-term contracts" },
    { year: "Year 2", goal: "Expand to 3 additional metro areas and launch a mobile app for real-time guard reporting" },
    { year: "Year 3", goal: "Achieve $1M+ in annual revenue and obtain federal and state-level security certifications" }
  ]

  return (
    <div className="pt-24 pb-12 w-full">
      {/* Protection as an Art Form */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
            Protection as an <span className="text-accent italic">Art Form</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image with Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-secondary/50">
              <img 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=800&auto=format&fit=crop&q=60" 
                alt="Business professionals high fiving" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* 2024 Card overlaying the image */}
            <div className="absolute -bottom-6 -right-6 lg:right-10 glass-dark p-6 rounded-2xl border border-white/5 shadow-2xl min-w-[240px]">
              <p className="text-3xl font-display font-bold text-accent mb-1 italic">2024</p>
              <p className="text-text-muted text-sm">Founded · Midrand, South Africa</p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8 mt-12 lg:mt-0"
          >
            <p className="text-text-muted text-lg leading-relaxed mb-10">
              Lerumo Legacy Protection Service is a professional private security firm delivering custom safety solutions to commercial, residential, and public-sector clients. We combine armed and unarmed personnel, mobile patrols, surveillance systems, and specialized services such as event security and executive protection.
            </p>

            <div className="space-y-8">
              {values.map((v, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{v.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 bg-secondary/30 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-bold tracking-widest uppercase mb-4">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Meet Our <span className="text-accent italic">Team</span>
            </h2>
            <p className="text-text-muted mt-4">Led by experienced professionals dedicated to your safety and satisfaction.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark rounded-2xl overflow-hidden border border-white/5 relative group"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <span className="text-8xl font-display font-bold text-accent/20 group-hover:scale-110 transition-transform duration-500 group-hover:text-accent/40">
                    {member.initials}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                  
                  {/* Role Pill floating at bottom of image */}
                  <div className="absolute bottom-4 left-6">
                    <span className="px-4 py-1.5 rounded-full border border-accent/50 bg-primary/80 backdrop-blur-md text-accent text-xs font-bold">
                      {member.role}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{member.name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {member.focus}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
