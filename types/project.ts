export interface ProjectLink {
  readonly label: string;
  readonly href: string;
}

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly stage: string; // e.g. "ingest -> transform -> deploy"
  readonly summary: string;
  readonly problem: string;
  readonly approach: string;
  readonly result: string;
  readonly stack: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly featured: boolean;
  readonly status?: "In Progress" | "Complete";
}

export interface Skill {
  readonly category: string;
  readonly items: readonly string[];
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly handle: string;
}

export interface ExperienceEntry {
  readonly org: string;
  readonly role: string;
  readonly period: string;
  readonly points: readonly string[];
}

export interface EducationEntry {
  readonly institution: string;
  readonly credential: string;
  readonly period: string;
  readonly detail?: string;
}

export interface CertificationEntry {
  readonly name: string;
  readonly issuer: string;
  readonly status: "Complete" | "In Progress";
}
