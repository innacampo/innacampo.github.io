import React, { useState } from 'react';
import { Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm: React.FC = () => {
  const [state, handleSubmit, reset] = useForm("mykkyple");

  // Success View
  if (state.succeeded) {
    return (
      <section id="contact" className="mb-20 scroll-mt-10">
        <div className="flex items-center gap-3 mb-8">
          <MessageSquare className="text-emerald-700 dark:text-emerald-400" size={24} />
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Contact Form</h2>
        </div>
        <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-xl shadow-sm overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
          <CheckCircle2 size={48} className="text-emerald-600 mb-4 animate-bounce" />
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">Message sent</h3>
          <p className="text-slate-500 mt-2 text-sm font-mono text-center">
            Thank you for reaching out. I will be in touch soon.
          </p>
          <button
          onClick={reset}
          type="button"
          className="mt-6 px-6 py-2 rounded-lg bg-emerald-700 text-white"
          >
          Send another message
          </button>
        </div>
      </section>
    );
  }

  // Form View
  return (
    <section id="contact" className="mb-20 scroll-mt-10 relative">
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="text-emerald-700 dark:text-emerald-400" size={24} />
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Contact Form</h2>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-xl shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative z-0 w-full group">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block py-2.5 px-0 w-full text-sm text-slate-800 dark:text-slate-200 bg-transparent border-0 border-b-2 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-0 focus:border-emerald-600 dark:focus:border-emerald-500 peer transition-colors"
                placeholder=" " 
              />
              <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-600 dark:peer-focus:text-emerald-500">
                Name
              </label>
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-400 mt-1" />
            </div>

            <div className="relative z-0 w-full group">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block py-2.5 px-0 w-full text-sm text-slate-800 dark:text-slate-200 bg-transparent border-0 border-b-2 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-0 focus:border-emerald-600 dark:focus:border-emerald-500 peer transition-colors"
                placeholder=" " 
              />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-600 dark:peer-focus:text-emerald-500">
                Email Address
              </label>
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1" />
            </div>
          </div>
          
          <div className="relative z-0 w-full group">
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="block py-2.5 px-0 w-full text-sm text-slate-800 dark:text-slate-200 bg-transparent border-0 border-b-2 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-0 focus:border-emerald-600 dark:focus:border-emerald-500 peer transition-colors"
              placeholder=" " 
            />
            <label htmlFor="subject" className="peer-focus:font-medium absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-600 dark:peer-focus:text-emerald-500">
              Subject
            </label>
          </div>

          <div className="relative z-0 w-full group">
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="block py-2.5 px-0 w-full text-sm text-slate-800 dark:text-slate-200 bg-transparent border-0 border-b-2 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-0 focus:border-emerald-600 dark:focus:border-emerald-500 peer resize-none transition-colors"
              placeholder=" "
            />
            <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-600 dark:peer-focus:text-emerald-500">
              Message
            </label>
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 mt-1" />
          </div>

          <input type="text" name="_gotcha" style={{ display: 'none' }} />

          <div className="pt-4">
            <button
              type="submit"
              disabled={state.submitting}
              className={`group w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                state.submitting 
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  : 'bg-emerald-700 hover:bg-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-900/20'
              }`}
            >
              {state.submitting ? (
                <span className="animate-pulse font-mono text-sm">Sending...</span>
              ) : (
                <>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span>Send</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
