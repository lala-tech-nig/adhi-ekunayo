"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Phone, 
  FileText, 
  Info, 
  LogOut, 
  ArrowRight,
  Heart,
  AlertCircle,
  Clock,
  ShieldAlert
} from 'lucide-react';

const GBVReportPage = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const float = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] font-sans text-slate-800 selection:bg-red-100 overflow-x-hidden">
      {/* 1. Navigation with Slide-Down Animation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm"
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
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-500">
          {['Home', 'Resources', 'Safety Plan'].map((item) => (
            <motion.a 
              key={item} 
              whileHover={{ y: -2, color: "#ef4444" }} 
              href="#"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "#dc2626" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-[#ef4444] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-red-200 group"
        >
          <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
          Quick Exit
        </motion.button>
      </motion.nav>

      {/* 2. Main Content Section */}
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 bg-red-50 text-red-600 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-red-100">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            Emergency Response Active
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black leading-[0.9] text-slate-900">
            You are <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-orange-500">
              Not Alone.
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
            Confidential and compassionate support for survivors of gender-based violence in Ogun State. Your safety is our only priority.
          </motion.p>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-green-50 rounded-2xl text-green-600"><ShieldCheck /></div>
              <span className="text-sm font-bold text-slate-700">100% Secure & <br/>Confidential</span>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 rounded-2xl text-blue-600"><Clock /></div>
              <span className="text-sm font-bold text-slate-700">Available<br/>24/7 Daily</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-[2rem] font-bold transition-all"
            >
              <FileText size={22} className="text-red-400" />
              Open Secure Report Form
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column: Dynamic Contact Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          {/* Animated Background Blobs */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-red-200/40 rounded-full blur-[80px] -z-10" 
          />
          
          <div className="bg-white/70 backdrop-blur-2xl rounded-[3.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-white p-5">
            {/* Card Header */}
            <div className="relative h-64 rounded-[3rem] overflow-hidden group">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800" 
                alt="Support Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <motion.div variants={float} animate="animate" className="flex items-center gap-2 text-red-400 text-xs font-black uppercase tracking-[0.2em] mb-3">
                  <ShieldAlert size={16} />
                  Immediate Crisis Care
                </motion.div>
                <h2 className="text-4xl font-black text-white">Call for Help</h2>
              </div>
            </div>

            {/* Contacts List */}
            <div className="p-6 space-y-4">
              {[
                { name: "KOLAWOLE EKANOYE", phone: "08037101512", role: "Crisis Coordinator" },
                { name: "ADEWALE HAASTRUP", phone: "08036278055", role: "Legal & Advocacy" }
              ].map((contact, idx) => (
                <motion.a
                  key={idx}
                  href={`tel:${contact.phone}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (idx * 0.1) }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-center justify-between p-6 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-100 group transition-all"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">{contact.name}</h4>
                      <p className="text-red-500 font-bold text-sm tracking-widest">{contact.phone}</p>
                    </div>
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 15 }}
                    className="w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-200"
                  >
                    <Phone size={24} fill="currentColor" />
                  </motion.div>
                </motion.a>
              ))}

              {/* Bottom Tip */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="p-5 rounded-3xl bg-blue-50/50 border border-blue-100 flex gap-4"
              >
                <Heart size={20} className="text-blue-600 shrink-0" />
                <p className="text-sm text-blue-800 leading-snug font-semibold">
                  Click any card above to call directly. We provide safety planning and legal referrals.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* 3. Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-100 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="font-black text-slate-900 mb-2">AHDI Ogun State</h3>
            <p className="text-sm text-slate-400 font-medium">
              Advocates for Health and Development Initiative. <br/>Protecting rights, preserving dignity.
            </p>
          </div>
          <div className="flex gap-8">
            {['Twitter', 'Facebook', 'Instagram'].map(social => (
              <a key={social} href="#" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GBVReportPage;