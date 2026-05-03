import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <div className="relative min-h-screen pt-24 pb-12 w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 fixed">
        <img 
          src="/images/transport.jpeg" 
          alt="Lerumo Mobile Patrol Transport" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
      <section className="py-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold mb-6"
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-text-muted text-lg max-w-2xl mx-auto"
        >
          Ready to secure your business or residential property? Contact us today for a custom security assessment.
        </motion.p>
      </section>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div className="glass-light p-8 rounded-2xl border border-accent/20">
            <h2 className="text-2xl font-bold text-text-main mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 border border-accent/30 shadow-glow">
                  <MapPin className="text-accent" />
                </div>
                <div>
                  <h3 className="text-text-main font-bold mb-1">Headquarters</h3>
                  <p className="text-text-muted">Softstart BTI, 2nd Street<br />Midrand, South Africa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 border border-accent/30 shadow-glow">
                  <Phone className="text-accent" />
                </div>
                <div>
                  <h3 className="text-text-main font-bold mb-1">Phone</h3>
                  <p className="text-text-muted">Available 24/7 for emergencies</p>
                  <p className="text-text-main font-medium mt-1">+27 (0) 800 123 456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 border border-accent/30 shadow-glow">
                  <Mail className="text-accent" />
                </div>
                <div>
                  <h3 className="text-text-main font-bold mb-1">Email</h3>
                  <p className="text-text-muted">General Inquiries</p>
                  <p className="text-text-main font-medium mt-1">info@lerumoprotection.co.za</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <form className="glass p-8 rounded-2xl border border-black/5 flex flex-col gap-5">
            <h2 className="text-2xl font-bold text-text-main mb-2">Send a Message</h2>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-muted">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-primary/50 border border-black/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-muted">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-primary/50 border border-black/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-muted">Service Required</label>
              <select className="w-full bg-primary/50 border border-black/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-colors appearance-none">
                <option>Armed & Unarmed Guards</option>
                <option>Mobile Patrols</option>
                <option>Event Security</option>
                <option>Surveillance Monitoring</option>
                <option>Executive Protection</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-muted">Message</label>
              <textarea 
                rows="4"
                placeholder="How can we help protect your assets?"
                className="w-full bg-primary/50 border border-black/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-colors resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="w-full mt-2 bg-gradient-accent text-primary font-bold py-4 rounded-lg shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2"
            >
              Submit Request <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>
      </div>
      </div>
    </div>
  )
}
