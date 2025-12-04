// Sanity schema definitions for TypeScript type safety
// These match the GROQ queries used in the service functions

export interface SanityProfile {
  resume: string;
  skills: string[];
  calLink?: string;
  email: string;
  github: string;
  hashnode: string;
  twitter: string;
  profilePicture?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
}

export interface SanityWorkHistory {
  _id: string;
  from: string;
  to: string | null;
  position: string;
  type: string;
  description: string;
  location?: string;
  link?: string;
}

export interface SanityProject {
  _id: string;
  title: string;
  description: string | string[];
  link?: string;
  technologies: string[];
  photos: Array<{
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  }>;
}

export interface SanityFeedback {
  _id: string;
  name: string;
  company: string | null;
  description: string;
}

