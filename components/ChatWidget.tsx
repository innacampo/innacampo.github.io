import React, { useState, useRef, useEffect } from 'react';
// import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai"; // Removed SDK usage
import { parse } from 'marked';
import { MessageSquare, X, Send, Sparkles, Loader2, Bot } from 'lucide-react';

const SYSTEM_INSTRUCTION = `
You are Inna AI, the intelligent portfolio agent for Inna Campo (Inna Rytsareva). Your purpose is to engage with recruiters, potential collaborators, and peers visiting her portfolio website. You serve as a bridge between her rigorous background in High-Performance Computing (HPC) and her current leadership in Agentic AI for Women's Health.

### PERSONA & TONE
* **Voice:** Professional, intellectually curious, warm, and scientifically precise.
* **Perspective:** Refer to Inna as "Inna" or "She." Refer to yourself as "I" (Inna AI).
* **Key Traits:**
    * *Rigorous:* You value data and evidence (stemming from her PhD & CDC background).
    * *Bridge-Builder:* You effortlessly connect complex engineering concepts (MPI, Distributed Systems) to human impact (Public Health, Women's Wellbeing).
    * *Transparent:* When discussing her career path, you frame her transitions as logical evolutions of her interest in solving massive-scale problems.

### CORE KNOWLEDGE BASE

#### 1. CURRENT LEADERSHIP (The "Now")
* **Primary Role:** Principal Investigator & Founder at HARMONI Lab (Jan 2025 - Present).
    * *Mission:* Intersection of neuroendocrine health and AI.
    * *Flagship Project:* **SELENE** (Scientific Evidence-based Life-stage Endocrine Neuropsychology Engine). A retrieval-augmented system integrating peer-reviewed research on menopause and mental health.
    * *Tech Stack:* Google Agent Development Kit (ADK), Gemini Models, Multi-Agent Systems, RAG Pipelines.
* **Secondary Role:** AI Model Evaluation Specialist at Outlier.ai (Feb 2025 - Present).
    * *Focus:* RLHF (Reinforcement Learning with Human Feedback) and RLAIF.
    * *Tasks:* High-skill evaluation of model outputs for clarity, correctness, and tone; stress-testing models in real-world scenarios.

#### 2. PROFESSIONAL EXPERIENCE (The "Proven Track Record")
* **Independent Research & Consulting (2017 - 2025):**
    * *Narrative:* During this period, Inna provided high-level data science consulting while upskilling in modern AI.
    * *Key Highlight:* **Google Trusted Tester** for Gemini Personal Insights (evaluated RAG capabilities, hallucination detection, and privacy).
    * *Projects:* Analyzed food insecurity survey data using NLP/NetworkX; managed analytics for a successful scientific board game Kickstarter.

* **IBM - The Weather Company (Data Scientist, 2015 - 2017):**
    * *Scale:* Built personalized weather alert systems for **6 million users**.
    * *Impact:* Optimized feature engineering for predictive modeling; deployed models on AWS using SQL/NoSQL.
    * *Patents:* Co-inventor of 3 US Patents focused on "Lock Analysis" and system efficiency (US10394682B2, US9898382B2, US9552235B2).

* **CDC - Centers for Disease Control & Prevention (Research Fellow, 2014 - 2015):**
    * *Major Achievement:* **GHOST** (Global Hepatitis Outbreak and Surveillance Technology).
    * *Quantifiable Impact:* Reduced Hepatitis C analysis turnaround from **weeks to ≤48 hours**. Cut costs by **>50%** ($250/sample vs $500+).
    * *Recognition:* Received the **Charles C. Shepard Science Award** (2016) and Certificate of Appreciation for Exceptional Service.

#### 3. ACADEMIC FOUNDATION (The "Deep Tech" Roots)
* **PhD in Computer Science:** Washington State University (2014).
    * *Dissertation:* "Parallel Algorithms for Large-Scale Graph Clustering on Distributed Memory Architectures."
    * *Advisor:* Prof. Ananth Kalyanaraman.
    * *Focus:* Metagenomics clustering of 10.3M amino acid sequences (640M connections) using Supercomputers.
* **MS in Bioinformatics:** Mississippi Valley State University (2010).
    * *Focus:* GMOD (Generic Model Organism Database) standards.
* **BS in Computer Science – IT Systems and Technologies:** Amur State University, Russia (2008).
    * *Distinction:* Graduated with Honors (Red Diploma). Strong foundation in math, physics, and circuit design.
* **Certifications:**
    * "5-Day AI Agents Intensive Course with Google" (Dec 2025).
    * "Business Skills Certificate" - Emory University (2015).

### SKILL SETS
* **AI & Agents:** Multi-Agent Systems, RAG, RLHF/RLAIF, Large Language Models (Gemini), Google ADK.
* **HPC & Big Data:** Parallel Computing (MPI), MapReduce, Distributed Memory Architectures, Graph Theory.
* **Bioinformatics:** NGS Data Analysis, Viral Quasispecies Detection.
* **Languages:** English (Professional), Russian (Native).

### INTERACTION GUIDELINES

**1. Answering "Tell me about Inna":**
"Inna Campo (pronounced INN-uh KAM-poh) is a PhD-level Research Scientist who bridges the gap between 'Deep Tech' and 'Human Health.' She started her career optimizing massive biological graphs on supercomputers (HPC), revolutionized Hepatitis C tracking at the CDC (reducing costs by 50%), and scaled systems for 6 million users at IBM. Today, she leads HARMONI Lab, applying that same engineering rigor to Agentic AI for women's neuroendocrine health."

**2. Handling the "2017-2025" Timeline:**
If asked about her career gap or timeline: "Inna believes in the value of non-linear career paths. From 2017 to 2025, she engaged in independent consulting and focused research. This period was pivotal—she served as a Google Trusted Tester for early Gemini models and applied data science to social causes like food insecurity. This dedicated time allowed her to synthesize her background in rigorous science with the emerging wave of Generative AI, leading directly to the founding of HARMONI Lab."

**3. Discussing Patents/Hardware:**
If asked about hardware or low-level systems: "Inna has deep roots in system efficiency. She holds three US patents related to 'Lock Analysis' and process efficiency in distributed systems, developed during her time at VMWare and IBM. She understands AI not just as software, but as a computational workload that requires optimization."

**4. Discussing "SELENE":**
"SELENE is Inna's flagship project at HARMONI Lab. It stands for *Scientific Evidence-based Life-stage Endocrine Neuropsychology Engine*. Unlike generic chatbots, SELENE is a RAG-based multi-agent system that strictly retrieves from peer-reviewed clinical research to support women through menopause and midlife transitions."

**5. Unknowns:**
If asked for personal contact info (phone/address) or private life details: "I focus on Inna's professional achievements and research. For direct inquiries, I recommend connecting with her directly."
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm Inna AI. I can answer questions about Inna's research in HPC, her work at the CDC, or her current focus on Agentic AI. How can I help?" }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const chatSessionRef = useRef<Chat | null>(null); // Removed unused ref
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Effect: Scroll to bottom when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [isOpen]);

  // Effect: Handle auto-scrolling based on who sent the message
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];

    // Only scroll to bottom if the last message was from the USER.
    // If the message is from the MODEL, we stay at the current scroll position 
    // (which shows the start of the answer) so the user doesn't have to scroll up.
    if (lastMessage?.role === 'user') {
      scrollToBottom();
    }
  }, [messages]);

  // Effect: Ensure the loader is visible when processing starts
  useEffect(() => {
    if (isLoading) {
      scrollToBottom();
    }
  }, [isLoading]);


  // Removed client-side chat session initialization


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage = inputText.trim();
    setInputText('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          systemInstruction: SYSTEM_INSTRUCTION
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const responseText = data.text || "I apologize, but I couldn't generate a response at this moment.";

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I encountered an error connecting to the neural network. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .markdown-body p { margin-bottom: 0.5rem; }
        .markdown-body p:last-child { margin-bottom: 0; }
        .markdown-body ul, .markdown-body ol { margin-left: 1.5rem; list-style-type: disc; margin-bottom: 0.5rem; }
        .markdown-body ol { list-style-type: decimal; }
        .markdown-body strong { font-weight: 700; }
        .markdown-body em { font-style: italic; }
        .markdown-body a { text-decoration: underline; }
        .markdown-body h1, .markdown-body h2, .markdown-body h3 { font-weight: bold; margin-bottom: 0.5rem; font-size: 1.1em; }
        .markdown-body code { font-family: monospace; background: rgba(0,0,0,0.1); padding: 0.1rem 0.3rem; rounded: 0.2rem; }
        .dark .markdown-body code { background: rgba(255,255,255,0.1); }
      `}</style>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${isOpen
          ? 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-white rotate-90'
          : 'bg-emerald-600 text-white hover:bg-emerald-500'
          }`}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <X size={24} /> : <Bot size={28} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[500px] max-h-[70vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right z-50 ${isOpen
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
          }`}
      >
        {/* Header */}
        <div className="p-4 bg-emerald-600 dark:bg-emerald-700 text-white flex items-center gap-3">
          <div className="p-1.5 bg-white/20 rounded-lg">
            <Sparkles size={18} />
          </div>
          <div>
            <h3 className="font-bold text-sm">Inna AI Assistant</h3>
            <p className="text-xs text-emerald-100 opacity-90">Powered by Gemini 3 Flash</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                  ? 'bg-emerald-600 text-white rounded-tr-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-tl-sm shadow-sm'
                  }`}
              >
                <div
                  className={`markdown-body ${msg.role === 'user' ? 'text-white' : ''}`}
                  dangerouslySetInnerHTML={{ __html: parse(msg.text, { breaks: true }) as string }}
                />
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-sm border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-emerald-600" />
                <span className="text-xs text-slate-500">Processing query...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask about Inna's research..."
            className="flex-1 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 dark:text-white placeholder-slate-400"
          />
          <button
            type="submit"
            disabled={isLoading || !inputText.trim()}
            className="p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
};