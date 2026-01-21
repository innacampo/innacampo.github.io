import React from 'react';
import { ProjectsGrid } from './ProjectsGrid';
import { PublicationsList } from './PublicationsList';
import { Timeline } from './Timeline';
import { ContactForm } from './ContactForm';
import { ScrollReveal } from './ScrollReveal';
import { Lightbulb, Users, Award, ExternalLink } from 'lucide-react';
import { PATENTS, ACADEMIC_CITIZENSHIP, AWARDS, PROFILE } from '../constants';

export const ContentArea: React.FC = () => {
  return (
    <main className="w-full md:w-[65%] lg:w-[70%] min-h-screen bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">

        {/* Intro Removed */}

        <ScrollReveal>
          <ProjectsGrid />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Timeline />
        </ScrollReveal>

        {/* Patents Section */}
        <ScrollReveal delay={150}>
          <section className="mb-20 mt-20">
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="text-emerald-700 dark:text-emerald-400" size={24} />
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Patents</h2>
            </div>
            <div className="grid gap-4">
              {PATENTS.map((patent, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">{patent.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{patent.authors.join(', ')} ({patent.year})</p>
                  </div>
                  <span className="font-mono text-xs font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-400 whitespace-nowrap">
                    {patent.patent_number}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <PublicationsList />
        </ScrollReveal>

        {/* Academic Citizenship */}
        <ScrollReveal delay={250}>
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Users className="text-emerald-700 dark:text-emerald-400" size={24} />
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Academic Citizenship</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Leadership Roles</h3>
                <ul className="space-y-4">
                  {ACADEMIC_CITIZENSHIP.leadership_roles.map((role, idx) => (
                    <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 dark:border-slate-800/50 pb-2 last:border-0">
                      <div className="font-medium text-slate-700 dark:text-slate-300">
                        {role.role}
                        <span className="block text-xs font-normal text-slate-500">{role.organization}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400 mt-1 sm:mt-0">{role.year || role.years}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Invited Presentations</h3>
                <ul className="space-y-4">
                  {ACADEMIC_CITIZENSHIP.invited_presentations.map((pres, idx) => (
                    <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 dark:border-slate-800/50 pb-2 last:border-0">
                      <div className="font-medium text-slate-700 dark:text-slate-300">
                        {pres.link ? (
                          <a
                            href={pres.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                          >
                            "{pres.title}"
                            <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          `"${pres.title}"`
                        )}
                        <span className="block text-xs font-normal text-slate-500">{pres.role} @ {pres.organization}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400 mt-1 sm:mt-0">{pres.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Awards */}
        <ScrollReveal delay={300}>
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-emerald-700 dark:text-emerald-400" size={24} />
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Honors & Awards</h2>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-slate-50 dark:from-emerald-900/10 dark:to-slate-900/50 p-6 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
              <ul className="space-y-3">
                {AWARDS.map((award, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </ScrollReveal>

        <div className="my-16 border-t border-slate-200/60 dark:border-slate-800/60" />

        <ScrollReveal delay={350}>
          <ContactForm />
        </ScrollReveal>

        <footer className="mt-24 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 text-center">
          <p className="text-sm text-slate-400 dark:text-slate-600 font-mono">
            &copy; 2026. Designed by Inna Campo
          </p>
        </footer>
      </div>
    </main>
  );
};