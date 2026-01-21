import React from 'react';
import { ArrowUpRight, Cpu, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

export const ProjectsGrid: React.FC = () => {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <Cpu className="text-emerald-700 dark:text-emerald-400" size={24} />
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Innovations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-xl dark:hover:shadow-emerald-900/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors z-20"
                      aria-label="View Source on GitHub"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      DEMO
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-1 text-slate-400 group-hover:text-emerald-700 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-xs font-semibold uppercase">Learn More</span>
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};