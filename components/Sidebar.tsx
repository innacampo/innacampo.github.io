import React from 'react';
import { Mail, Linkedin, Globe, Award, Zap, Github, FileText, GraduationCap } from 'lucide-react';
import { PROFILE, BADGES } from '../constants';
import { StatusTypewriter } from './StatusTypewriter';
import { ParticleBackground } from './ParticleBackground';


export const Sidebar: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="relative w-full md:w-[35%] lg:w-[30%] md:h-screen md:sticky md:top-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b md:border-b-0 md:border-r border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-center transition-colors duration-300">
      {/* Background: Neural Network / Constellation Particles */}
      <ParticleBackground />
      <div className="relative z-10 p-8 lg:p-12 flex flex-col h-full justify-between pointer-events-none">
        {/* Note: Content container is pointer-events-none to let mouse pass through to canvas, 
            but interactive children need pointer-events-auto */}

        {/* Top: Identity */}
        <div className="space-y-6 pointer-events-auto">
          <div className="inline-block p-1 rounded-full bg-gradient-to-br from-emerald-600 to-slate-400">
            <div className="w-40 h-40 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
              {/* User's Actual Avatar */}
              <img
                src="/profile.jpg"
                alt={PROFILE.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-800 dark:text-white mb-2">
              {PROFILE.name}
            </h1>
            <p className="text-emerald-700 dark:text-emerald-400 font-medium text-lg">
              {PROFILE.role}
            </p>
          </div>

          {/* Typewriter Status Section */}
          <StatusTypewriter />

          <div className="flex flex-wrap gap-2 pt-2">
            {BADGES.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 backdrop-blur-sm"
              >
                <Award size={12} className="text-amber-500" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom: Connect */}
        <div className="mt-16 md:mt-12 space-y-4 pointer-events-auto">
          <h3 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 font-bold">Connect</h3>
          <div className="flex justify-center gap-2 px-2">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
              aria-label="Get in Touch"
            >
              <Mail size={20} />
            </a>
            <a
              href="/CV_InnaCampo.pdf"
              target="_blank"
              className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
              aria-label="Resume / CV"
            >
              <FileText size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/innacampo/"
              target="_blank"
              className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://scholar.google.com/citations?user=mIayChgAAAAJ&hl=en&oi=ao"
              target="_blank"
              className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
              aria-label="Google Scholar"
            >
              <GraduationCap size={20} />
            </a>
            <a
              href="https://github.com/innacampo"
              target="_blank"
              className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://harmonilab.org/"
              target="_blank"
              className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
              aria-label="HARMONI Lab"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>

      </div>
    </aside>
  );
};