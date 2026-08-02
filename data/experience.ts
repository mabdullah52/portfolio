import type {
  CertificationEntry,
  EducationEntry,
  ExperienceEntry,
} from "@/types/project";

export const experience: readonly ExperienceEntry[] = [
  {
    org: "Allah Walay Trust (AWT) Youth Fellowship",
    role: "Fellow",
    period: "Jul 2025 to Aug 2025",
    points: [
      "Selected for a competitive leadership program and led a Social Action Project end-to-end, from planning through execution.",
      "Built communication, teamwork, and project-management skills through community-impact programs.",
    ],
  },
] as const;

export const education: readonly EducationEntry[] = [
  {
    institution: "Bahria University, Lahore Campus",
    credential: "B.Sc. Computer Science (Final Year)",
    period: "Expected 2027",
    detail:
      "Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Databases, Artificial Intelligence, Web Engineering, Probability & Statistics.",
  },
] as const;

export const certifications: readonly CertificationEntry[] = [
  {
    name: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM · Coursera",
    status: "Complete",
  },
  {
    name: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM · Coursera",
    status: "Complete",
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI · Stanford Online",
    status: "Complete",
  },
  { name: "Cybersecurity Basics", issuer: "IBM", status: "Complete" },
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    status: "Complete",
  },
  {
    name: "AI Fluency: AI Capabilities & Limitations",
    issuer: "Anthropic",
    status: "Complete",
  },
  { name: "AI Fluency for Students", issuer: "Anthropic", status: "Complete" },
  { name: "AI Fluency for Educators", issuer: "Anthropic", status: "Complete" },
  {
    name: "AI Fluency for Small Businesses",
    issuer: "Anthropic · PayPal",
    status: "Complete",
  },
  { name: "Claude 101", issuer: "Anthropic", status: "Complete" },
  {
    name: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    status: "Complete",
  },
  {
    name: "Machine Learning & Deep Learning Tracks",
    issuer: "Kaggle Learn",
    status: "In Progress",
  },
] as const;

export interface InProgressCourse {
  readonly name: string;
  readonly issuer: string;
  readonly percentComplete: number;
}

export const inProgressCourses: readonly InProgressCourse[] = [
  {
    name: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI",
    percentComplete: 67,
  },
  {
    name: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI · Stanford Online",
    percentComplete: 18,
  },
] as const;

