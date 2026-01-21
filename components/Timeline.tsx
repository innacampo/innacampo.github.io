import React from 'react';
import { History, Briefcase, GraduationCap, BookOpen, Award } from 'lucide-react';
import { EXPERIENCE, EDUCATION, CONTINUING_EDUCATION } from '../constants';

export const Timeline: React.FC = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <History className="text-emerald-700 dark:text-emerald-400" size={24} />
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Evolution</h2>
      </div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-12 pb-4">

        {/* Experience Items */}
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative pl-8 group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 ${exp.highlight ? 'bg-emerald-600 border-emerald-600' : 'bg-white dark:bg-slate-950 border-slate-400 dark:border-slate-600'} group-hover:scale-125 transition-transform duration-300`} />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 sm:gap-4">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                {exp.title} <span className="text-slate-400 font-normal text-base">@ {exp.organization || exp.company}</span>
              </h3>
              <div className="flex flex-col sm:items-end shrink-0">
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded mb-1 whitespace-nowrap">
                  {exp.start_date || exp.period} {exp.end_date ? `– ${exp.end_date}` : ''} {exp.periods?.join(', ')}
                </span>
                {exp.location && (
                  <span className="text-xs text-slate-400">{exp.location}</span>
                )}
              </div>
            </div>

            {exp.employment_type && (
              <p className="text-xs text-slate-500 italic mb-2">{exp.employment_type}</p>
            )}

            <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
              {exp.details?.map((detail, i) => (
                <p key={i} className="mb-2 last:mb-0">• {detail}</p>
              ))}
              {exp.description && <p>{exp.description}</p>}

              {exp.selected_projects && (
                <div className="mt-4 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Featured Engagement</h4>
                  {exp.selected_projects.map((proj, pIdx) => (
                    <div key={pIdx} className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                      <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1">{proj.project_name}</p>
                      <ul className="mt-2 space-y-1">
                        {proj.details.map((d, dIdx) => (
                          <li key={dIdx} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Education Section Divider */}
        <div className="relative pl-8 pt-8">
          <div className="absolute -left-[11px] top-9 w-6 h-6 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center border border-slate-300 dark:border-slate-700 z-10">
            <GraduationCap size={12} className="text-slate-500" />
          </div>

          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-6">Academic Foundation</h3>

          <div className="space-y-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">{edu.degree}: {edu.program} {edu.major ? `– ${edu.major}` : ''}</h4>
                    <p className="text-sm text-slate-500">{edu.institution} {edu.country ? `, ${edu.country}` : ''}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{edu.year}</span>
                </div>

                {(edu.dissertation_title || edu.thesis_title) && (
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-400 pl-3 border-l-2 border-emerald-100 dark:border-emerald-900">
                    <p className="italic">"{edu.dissertation_title || edu.thesis_title}"</p>
                    {edu.supervisor && <p className="text-xs text-slate-400 mt-1">Advisor: {edu.supervisor}</p>}
                  </div>
                )}
                {edu.honors && (
                  <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">🏆 {edu.honors}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Continuing Education */}
        <div className="relative pl-8 pt-8">
          <div className="absolute -left-[11px] top-9 w-6 h-6 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center border border-slate-300 dark:border-slate-700 z-10">
            <BookOpen size={12} className="text-slate-500" />
          </div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-6">Continuing Education</h3>

          <div className="space-y-4">
            {CONTINUING_EDUCATION.map((cert, idx) => (
              <div key={idx} className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">{cert.program}</h4>
                  <p className="text-xs text-slate-500">{cert.providers || cert.provider}</p>
                  {cert.focus && <p className="text-xs text-slate-400 mt-1">{cert.focus}</p>}
                </div>
                <span className="text-xs font-mono text-slate-400 whitespace-nowrap ml-4">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};