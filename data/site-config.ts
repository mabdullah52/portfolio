import type { SocialLink } from "@/types/project";

export const siteConfig = {
  name: "Abdullah Asim",
  role: "AI/ML Automation Engineer",
  subRole:
    "Final-year CS student, Bahria University Lahore, building agentic AI systems and n8n workflow automation",
  tagline:
    "I build systems where AI orchestrates and rules decide: agentic assistants, RAG pipelines, and n8n automations that don't hallucinate the parts that matter.",
  email: "abdullahasimnaawaz@gmail.com",
  url: "https://portfolio-buildwithabdullah.vercel.app",
  description:
    "Portfolio of Abdullah Asim, AI/ML automation engineer building agentic systems, RAG pipelines, and workflow automation with n8n.",
  resumeUrl: "/Abdullah_Asim_Resume.pdf",
} as const;

export const socialLinks: readonly SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/mabdullah52",
    handle: "@mabdullah52",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdullah-asim-367889255/",
    handle: "Abdullah Asim",
  },
  {
    label: "Email",
    href: "mailto:abdullahasimnaawaz@gmail.com",
    handle: "abdullahasimnaawaz@gmail.com",
  },
] as const;
