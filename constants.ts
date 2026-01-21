import { Project, PublicationList, Experience, Education, Badge, ContinuingEducation, AcademicCitizenship, Patent } from './types';

export const PROFILE = {
  name: "Inna Campo, PhD",
  role: "Bioinformatics AI Scientist",
  location: "Atlanta Georgia",
};

export const BADGES: Badge[] = [
  { label: "AI/ML" },
  { label: "Bioinformatics" },
  { label: "HPC" }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "SELENE",
    description: "SELENE (Scientific Evidence-based Longitudinal Endocrine Neuropsychological Engine) is a privacy-first, RAG AI platform that provides women with evidence-based psychoeducational support during menopausal transition while enabling secure, anonymized data contribution to the HARMONI Lab research infrastructure.",
    tags: ["medgemma", "privacy-first", "womens-health", "edge-ai", "rag"],
    link: "https://harmonilab.org/selene.html",
    github: "https://github.com/innacampo/selene"
  },
  {
    id: "p2",
    title: "LUCIA",
    description: "LUCIA (Language Understanding for Clinical Insight & Analysis) is a bias-aware multi-agent AI platform designed to bridge the gender diagnostic gap by transforming subjective patient narratives into structured clinical insights and advocacy tools grounded in peer-reviewed research. Built with Google ADK & Gemini",
    tags: ["agents", "gemini-api", "google-adk", "healthcare-ai", "bias-detection"],
    link: "https://harmonilab.org/lucia.html",
    github: "https://github.com/innacampo/lucia_agent"
  },
  {
    id: "p3",
    title: "CLARA",
    description: "Powered by Gemini 3 Pro, CLARA (Clinical Logic Assessment & Reasoning Auditor) is a multimodal AI safety net designed to audit consultation audio and detect diagnostic shadowing or logic errors caused by high physician cognitive load before they result in diagnostic errors.",
    tags: ["multimodal-ai", "gemini-3-pro", "diagnostic-shadowing", "clinical-logic-auditing"],
    link: "https://harmonilab.org/clara.html",
    demo: "https://aistudio.google.com/apps/drive/1d04qEW2DRK0wyxJHNnNF0JI8wtrtMiR0?fullscreenApplet=true&showPreview=true&showAssistant=true",
    github: "https://github.com/innacampo/clara"
  },
  {
    id: "p4",
    title: "GHOST",
    description: "GHOST (Global Hepatitis Outbreak and Surveillance Technology) is a cloud-based bioinformatics platform designed to detect and visualize Hepatitis C transmission clusters by analyzing next-generation sequencing data, enabling public health researchers to conduct rapid and accurate molecular outbreak investigations.",
    tags: ["bioinformatics", "next-generation-sequencing-NGS", "cloud-architecture", "public-health"],
    link: "https://www.hhs.gov/sites/default/files/Global_Hepatitis_Outbreak_Surveillance_Technology_%282019%29.pdf"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "PhD",
    institution: "Washington State University",
    year: 2014,
    program: "Computer Science",
    specialization: "High performance Computational Biology",
    supervisor: "Prof. Ananth Kalyanaraman",
    dissertation_title: "Parallel Algorithms for Large-Scale Graph Clustering on Distributed Memory Architectures"
  },
  {
    degree: "MS",
    institution: "Mississippi Valley State University",
    year: 2010,
    program: "Bioinformatics",
    supervisor: "Prof. Abigail Newsome",
    thesis_title: "Integration of DIYA (Do-It-Yourself Annotator) output with the Generic Model Organism Database Project (GMOD) standards"
  },
  {
    degree: "BS",
    institution: "Amur State University",
    country: "Russia",
    year: 2008,
    program: "Computer Science – IT Systems and Technologies",
    honors: "Graduated with Honors"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    title: "Principal Investigator & Founder",
    organization: "HARMONI Lab",
    start_date: "Jan 2025",
    end_date: "Present",
    details: ["Leading an independent initiative to develop multi-agent AI ecosystems and RAG pipelines (Gemini/ADK) that analyze hormonal impacts on women's mental health."],
    highlight: true
  },
  {
    title: "AI Model Evaluation Specialist",
    organization: "Outlier.ai",
    employment_type: "Freelance PhD-level Expert – RLHF & RLAIF",
    start_date: "Feb 2025",
    end_date: "Present",
    details: [
      "High-skill model evaluation through RLHF/RLAIF, stress-testing and ranking complex model outputs to ensure technical correctness, helpfulness, and safety across real-world user scenarios."
    ]
  },
  {
    title: "Data Scientist & AI Researcher",
    organization: "Independent Consultancy",
    start_date: "Mar 2017",
    end_date: "Dec 2025",
    selected_projects: [
      {
        project_name: "Google Gemini RAG Evaluation (Trusted Tester)",
        details: [
          "The Mission: Stress-tested pre-release RAG capabilities for personal data synthesis.",
          "Technical Focus: Evaluated hallucinations and model accuracy under strict privacy constraints."
        ]
      }
    ]
  },
  {
    title: "Data Scientist",
    organization: "IBM - The Weather Company",
    location: "Atlanta, GA",
    start_date: "May 2015",
    end_date: "Feb 2017",
    details: ["Scaled data infrastructure and predictive modeling on AWS, deploying personalized alert systems for 6M users and optimizing machine learning workflows to drive measurable business growth."]
  },
  {
    title: "Research Scientist",
    organization: "Centers for Disease Control and Prevention CDC",
    location: "Atlanta, GA",
    start_date: "Sep 2014",
    end_date: "May 2015",
    details: ["Developed high-performance NGS algorithms for Hepatitis C research, engineering the GHOST back-end to reduce processing time to ≤48 hours while cutting costs by 50% per sample."]
  },
  {
    title: "Research Assistant",
    organization: "Washington State University, High Performance Computational Biology Lab",
    location: "Pullman, WA",
    start_date: "Jan 2010",
    end_date: "Dec 2014",
    details: ["Developed parallel clustering algorithms for large-scale biological graphs, applying graph theory to cluster 10.3M amino acid sequences and 640M connections through complex multi-graph representations."]
  },
  {
    title: "Summer Intern",
    organization: "VMWare Inc",
    location: "Palo Alto, CA",
    periods: [
      "Sum 2012",
      "Fal 2013"
    ],
    details: ["Developed lock contention analysis tools using pattern mining and log data clustering, delivering three patents for automation tools that significantly improved diagnostics for large-scale distributed systems."]
  },
  {
    title: "Bioinformatics Specialist – Summer Intern",
    organization: "Dow AgroSciences",
    location: "Indianapolis, IN",
    period: "Sum 2009",
    details: ["Deployed the GMOD framework to a centralized intranet, integrating a genome browser with core bioinformatics databases and establishing rigorous integration tests to ensure data quality and transparency."]
  }
];

export const CONTINUING_EDUCATION: ContinuingEducation[] = [
  {
    program: "5-Day AI Agents Intensive Course",
    providers: "Kaggle & Google",
    date: "Dec 2025",
    focus: "Building autonomous AI agents and multi-agent systems."
  },
  {
    program: "Beyond the Basics: Designing AI Enhanced Learning Experiences",
    provider: "LinkedIn Learning",
    date: "Jun 2025"
  },
  {
    program: "Business Skills Certificate",
    provider: "Emory University Continuing Education",
    date: "Nov 2015"
  }
];



export const ACADEMIC_CITIZENSHIP: AcademicCitizenship = {
  leadership_roles: [
    {
      organization: "Women in Data Science Worldwide (WiDS)",
      role: "Ambassador",
      location: "Atlanta",
      year: "2018"
    },
    {
      organization: "Society of Electrical Engineering and Computer Science Graduate Students",
      role: "Founding Officer, Career Development Coordinator",
      institution: "Washington State University",
      years: "2011 – 2014"
    }
  ],
  invited_presentations: [
    {
      title: "International Women’s Day Panel of Data Science Industry Leaders",
      organization: "Women in Data Science, Data Science ATL MeetUp",
      year: 2018,
      role: "Organizer"
    },
    {
      title: "How The Weather Company leverages billions of data points & predictive analytics",
      organization: "Data Science ATL MeetUp",
      year: 2016,
      role: "Presenter",
      link: "https://www.youtube.com/watch?v=kiSH6PRNZ00"
    },
    {
      title: "Big Data Solutions at the Weather Channel Analytics Team",
      organization: "Georgia State University, ACM talk series",
      year: 2015,
      "role": "Presenter"
    }
  ]
};

export const PATENTS: Patent[] = [
  {
    authors: ["Song, J.", "Pan, Z.", "Rytsareva, I."],
    year: 2019,
    title: "Graphical lock analysis",
    patent_number: "US10394682B2"
  },
  {
    authors: ["Song, J.", "Pan, Z.", "Rytsareva, I."],
    year: 2018,
    title: "Hyperlink-induced topic search algorithm lock analysis",
    patent_number: "US9898382B2"
  },
  {
    authors: ["Song, J.", "Pan, Z.", "Rytsareva, I."],
    year: 2017,
    title: "Using pagerank algorithm-based lock analysis to identify key processes for improving computing system efficiency",
    patent_number: "US9552235B2"
  }
];

export const AWARDS: string[] = [
  "Charles C. Shepard Science Award in the “Laboratory and Methods” Category, Centers for Disease Control and Prevention, Atlanta, GA, 2016",
  "The Art of AMD (Advanced Molecular Detection) Special Mention, Centers for Disease Control and Prevention, Atlanta, GA, 2016",
  "Certificate of Appreciation for Exceptional Service, Centers for Disease Control and Prevention, Division of Viral Hepatitis, Atlanta, GA, 2015",
  "Outstanding Award in Bioinformatics for Academic Excellence, May 2009 (Mississippi Valley State University)",
];

export const PUBLICATIONS: PublicationList = {
  peer_reviewed_articles: [
    {
      authors: "Rytsareva, I., Campo, D., Zheng, Y., Sims, S., Thankachan, S., Tetik, C., Chirag, J., Chockalingam, S., Sue, A., Aluru, S., & others",
      year: "2017",
      title: "Efficient detection of viral transmissions with next-generation sequencing data.",
      journal: "BMC genomics",
      journal_ranking: "JCR Q1/Q2",
      volume: "18",
      pages: "1–7",
      contribution: "Lead author"
    },
    {
      authors: "Longmire, A., Sims, S., Rytsareva, I., Campo, D., Skums, P., Dimitrova, Z., Ramachandran, S., Medrzycki, M., Thai, H., Ganova-Raeva, L., & others",
      year: "2017",
      title: "GHOST: global hepatitis outbreak and surveillance technology.",
      journal: "BMC genomics",
      journal_ranking: "JCR Q1/Q2",
      volume: "18",
      pages: "21–32",
      contribution: "Algorithm development and deployment,  data analysis"
    },
    {
      authors: "Rytsareva, I., Chapman, T., & Kalyanaraman, A.",
      year: "2014",
      title: "Parallel algorithms for clustering biological graphs on distributed and shared memory architectures.",
      journal: "International Journal of High Performance Computing and Networking",
      journal_ranking: "JCR Q3 in 2014",
      volume: "7",
      issue: "4",
      pages: "241–257",
      contribution: "Lead author"
    }
  ],

};