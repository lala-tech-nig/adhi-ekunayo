'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, MessageCircle, ShieldCheck, AlertCircle, 
  Users, Home, Info, BookOpen, Mail, X, 
  ArrowRight, Heart, Gavel, Scale 
} from 'lucide-react';
import Link from "next/link";

// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const GBVLandingPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-3">
          {/* LOGO IMAGE REPLACEMENT */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img 
              src="/logo.png" 
              alt="AHDI Logo" 
              className="h-10 w-auto object-contain" 
            />
            <span className="font-black text-2xl tracking-tighter text-slate-900">AHDI</span>
          </motion.div>
        </div>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            {['Home', 'About', 'Legal Resources', 'Contact'].map((item) => (
              <a key={item} href="#" className="hover:text-red-600 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </a>
            ))}

<Link href="/report">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-red-600 text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-red-700 transition shadow-lg shadow-red-200"
  >
    <AlertCircle size={18} /> Report Incident
  </motion.button>
</Link>
          </div>
        </div>
      </nav>

      {/* --- QUICK EXIT --- */}
      <motion.button 
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        whileHover={{ x: -5 }}
        className="fixed right-0 top-1/3 bg-gray-900 text-white px-4 py-3 rounded-l-2xl flex items-center gap-3 z-50 shadow-2xl border-l border-t border-b border-gray-700"
        onClick={() => window.location.href = 'https://google.com'}
      >
        <div className="bg-red-500 p-1 rounded-full"><X size={14} /></div>
        <div className="text-left">
          <p className="text-[10px] uppercase font-bold leading-none opacity-70">Escape Site</p>
          <p className="text-xs font-bold leading-none mt-1">Quick Exit</p>
        </div>
      </motion.button>

      {/* --- HERO SECTION --- */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.span variants={fadeIn} className="inline-block bg-red-50 text-red-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Ogun State Protection Services
          </motion.span>
          <motion.h1 variants={fadeIn} className="text-6xl md:text-7xl font-black mt-4 leading-[1.1] tracking-tight text-slate-900">
            Break the <span className="text-red-600">Silence</span>, <br />
            Find Your <span className="relative">
              Strength
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-red-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-gray-600 mt-8 text-xl leading-relaxed max-w-lg">
            Gender-Based Violence is a crime in Ogun State. AHDI provides a safe sanctuary, legal advocacy, and a path to justice. You are not alone.
          </motion.p>
          <Link href="/report">
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-xl shadow-red-100">
              <Phone size={20} /> Get Immediate Help
            </button>
          
            <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:border-red-600 hover:text-red-600 transition-all">
              <BookOpen size={20} /> Know Your Rights
            </button>
          </motion.div>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-red-100 rounded-[2rem] -rotate-3 z-0"></div>
          <img 
            src="/hands.jpg" 
            alt="Supportive community" 
            className="relative z-10 rounded-[2rem] shadow-2xl object-cover h-[500px] w-full"
          />
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-gray-500 uppercase">Available Now</span>
            </div>
            <p className="text-sm font-bold text-slate-800">24/7 Crisis Counselors Online</p>
          </motion.div>
        </motion.div>
      </section>

      {/* --- STATS / BANNER --- */}
      <section className="bg-slate-900 py-16 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-red-600 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white tracking-tight">Zero Tolerance for Violence.</h2>
            <p className="text-slate-400 mt-2 text-lg italic">"Protection is not a privilege; it is your legal right under Ogun State Law."</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl"
          >
            <p className="text-red-400 font-black text-4xl mb-1">100%</p>
            <p className="text-white text-sm font-medium">Confidential Reporting</p>
          </motion.div>
        </div>
      </section>

      {/* --- SIGNS SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-red-600 text-xs font-black uppercase tracking-[0.3em]"
          >
            Education & Awareness
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black mt-4 text-slate-900"
          >
            Identify the Forms of Abuse
          </motion.h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { title: 'Sexual Violence', icon: <Heart size={24}/>, desc: 'Non-consensual acts, harassment, or exploitation involving force.', color: 'bg-red-50' },
            { title: 'Domestic Abuse', icon: <Home size={24}/>, desc: 'Physical, emotional, or economic control within a household.', color: 'bg-blue-50' },
            { title: 'Child Neglect', icon: <Users size={24}/>, desc: 'Failure to provide basic needs or safety for a minor.', color: 'bg-orange-50' },
            { title: 'Legal Violations', icon: <Gavel size={24}/>, desc: 'Any act infringing upon the Ogun State GBV prohibition laws.', color: 'bg-purple-50' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className={`${item.color} p-10 rounded-[2rem] border border-black/5 hover:shadow-2xl transition-all duration-300`}
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <div className="text-slate-800">{item.icon}</div>
              </div>
              <h3 className="font-bold text-xl mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- WHY SPEAK UP --- */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-slate-900 leading-tight">
              Why Your <span className="text-red-600">Voice</span> <br /> Matters Today
            </h2>
            <div className="mt-10 space-y-8">
              {[
                { t: "End the Cycle", d: "Reporting stops the perpetrator from finding new victims and breaks the generational pattern of violence." },
                { t: "Legal Protection", d: "Once reported, we can activate restraining orders and provide safe house locations immediately." },
                { t: "Community Healing", d: "Every story shared empowers another survivor to step out of the shadows and seek justice." }
              ].map((point, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">{point.t}</h4>
                    <p className="text-gray-500 mt-1">{point.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl"></div>
            <div className="relative z-10">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-xl border border-white/20">
                <Scale className="text-red-500 w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold">Justice is Possible</h3>
              <p className="text-slate-400 mt-4 leading-relaxed">
                "Our legal team has successfully prosecuted over 200 cases in Ogun State this year alone. Your safety is our mission."
              </p>
              <button className="mt-10 group flex items-center gap-2 mx-auto font-bold text-red-400 hover:text-red-300 transition">
                Meet our Legal Advocates <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            whileInView={{ scale: [0.95, 1] }}
            className="bg-gradient-to-br from-red-600 to-red-800 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-red-200 relative overflow-hidden"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Need Immediate Assistance?</h2>
            <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto opacity-90">
              Our emergency response team is available 24 hours a day, 7 days a week. All calls and chats are strictly confidential.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-white text-red-600 px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl"
              >
                <Phone size={24} /> Call Toll-Free 112
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-red-900/30 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3"
              >
                <MessageCircle size={24} /> Live Chat Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-8">
              <div className="bg-red-600 p-1 rounded">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-2xl tracking-tight">AHDI</span>
            </div>
            <p className="leading-relaxed text-sm">
              The Advocates for Health and Development Initiative (AHDI) is a registered non-profit dedicated to human rights and community safety in Ogun State.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Support Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition">Emergency Shelter</a></li>
              <li><a href="#" className="hover:text-white transition">Legal Representation</a></li>
              <li><a href="#" className="hover:text-white transition">Trauma Counseling</a></li>
              <li><a href="#" className="hover:text-white transition">Safety Planning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">The Organization</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition">Annual Reports</a></li>
              <li><a href="#" className="hover:text-white transition">Volunteer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Reach Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3"><Home size={18} className="text-red-500" /> Abeokuta, Ogun State, Nigeria</div>
              <div className="flex gap-3"><Mail size={18} className="text-red-500" /> help@ahdi-ogun.org</div>
              <div className="flex gap-3"><Phone size={18} className="text-red-500" /> +234 (0) 800 123 4567</div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between gap-6 text-[10px] uppercase font-bold tracking-widest">
          <p>© 2025 AHDI OGUN STATE. PROTECTING LIVES, ENSURING JUSTICE.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition">Legal Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GBVLandingPage;