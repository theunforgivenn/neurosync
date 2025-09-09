import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, BookOpen, Brain, Zap, Shield, Users, ArrowRight, Menu, X, Play, Sparkles } from 'lucide-react';

const NeuroSyncLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 800], [0, 200]);
  const y2 = useTransform(scrollY, [0, 800], [0, -150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 6 + 4,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 6,
  }));

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 relative overflow-hidden">
      {/* Фоновые элементы */}
      <motion.div 
        className="absolute top-40 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 blur-2xl"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute top-96 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-30 blur-2xl"
        style={{ y: y2 }}
      />
      <motion.div 
        className="absolute bottom-40 left-1/2 -ml-12 w-16 h-16 flex items-center justify-center text-blue-600"
        style={{ y: y1, rotate }}
      >
        <Sparkles className="w-12 h-12 opacity-60" />
      </motion.div>

      {/* Частицы */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute bg-white rounded-full shadow-md"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Контент */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">NeuroSync</h1>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Добро пожаловать в NeuroSync</h2>
          <p className="text-xl text-slate-600">Лендинг с анимацией и частицами ✨</p>
        </div>
      </section>
    </div>
  );
};

export default NeuroSyncLanding;