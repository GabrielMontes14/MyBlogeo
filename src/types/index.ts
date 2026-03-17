export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  coverImage?: string;
  locale: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface Service {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  gradient: string;
}
