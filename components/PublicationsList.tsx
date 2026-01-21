import React from 'react';
import { BookOpen, FileText, ExternalLink, Presentation, Users } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

export const PublicationsList: React.FC = () => {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="text-emerald-700 dark:text-emerald-400" size={24} />
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Engineering & Publications</h2>
      </div>

      <div className="space-y-12">
        {/* Peer Reviewed Articles */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 pb-2">
            Peer Reviewed Articles
          </h3>
          <div className="space-y-8">
            {PUBLICATIONS.peer_reviewed_articles.map((pub, idx) => (
              <div key={idx} className="group relative pl-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors">
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 leading-snug">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {pub.authors}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs mt-1">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0.5 rounded">
                      {pub.journal}
                    </span>
                    {pub.journal_ranking && (
                      <span className="text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-1.5 py-0.5 rounded">
                        {pub.journal_ranking}
                      </span>
                    )}
                    <span className="text-slate-400">{pub.year} Vol. {pub.volume}{pub.issue ? ` (${pub.issue})` : ''} {pub.pages ? `, pp. ${pub.pages}` : ''}</span>
                  </div>
                  {pub.contribution && (
                    <div className="mt-2 text-xs text-slate-500 italic flex items-center gap-1.5">
                      <Users size={12} />
                      Contribution: {pub.contribution}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
};