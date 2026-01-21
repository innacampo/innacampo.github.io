export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  demo?: string;
}

export interface Publication {
  authors: string;
  year: string;
  title: string;
  journal?: string;
  journal_ranking?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  contribution?: string;
}

export interface PublicationList {
  peer_reviewed_articles: Publication[];
}

export interface SelectedProject {
  project_name: string;
  details: string[];
}

export interface Experience {
  title: string;
  organization?: string;
  company?: string; // Keeping for backward compatibility or alias
  location?: string;
  employment_type?: string;
  start_date?: string;
  end_date?: string;
  period?: string; // Keeping for backward compatibility or simple display
  periods?: string[];
  details?: string[];
  description?: string;
  selected_projects?: SelectedProject[];
  highlight?: boolean; // Keeping for logic if needed
}

export interface Education {
  degree: string;
  institution: string;
  year?: number | string;
  program?: string;
  specialization?: string;
  supervisor?: string;
  dissertation_title?: string;
  thesis_title?: string;
  major?: string;
  honors?: string;
  country?: string;
}

export interface Badge {
  label: string;
  icon?: string;
}

export interface ContinuingEducation {
  program: string;
  providers?: string;
  provider?: string;
  date: string;
  focus?: string;
}

// TeachingExperience interface removed

export interface LeadershipRole {
  organization: string;
  role: string;
  location?: string;
  year?: string;
  years?: string;
  institution?: string;
}

export interface InvitedPresentation {
  title: string;
  organization: string;
  year: number;
  role: string;
  link?: string;
}

export interface AcademicCitizenship {
  leadership_roles: LeadershipRole[];
  invited_presentations: InvitedPresentation[];
}

export interface Patent {
  authors: string[];
  year: number;
  title: string;
  patent_number: string;
}