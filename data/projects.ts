import type { Project } from "@/types/project";

export const projects: readonly Project[] = [
  {
    slug: "shopsphere",
    title: "ShopSphere: E-Commerce AI Manager",
    stage: "ingest → orchestrate → decide → respond",
    summary:
      "A full e-commerce storefront with an agentic AI assistant that searches products, tracks orders, and processes refunds, while every business decision stays in deterministic Python rules, not the model's imagination.",
    problem:
      "Customer-facing AI agents are useful for understanding free-form requests, but risky the moment they're trusted to invent facts: a hallucinated refund approval or a made-up price is a real liability.",
    approach:
      "Built a FastAPI backend with a React (Vite) storefront, backed by a Groq-orchestrated LLM that routes between specialist agents (product search, refunds, marketing copy) as tools. The LLM only decides which tool to call and phrases replies; refund eligibility, stock levels, prices, and invoice authenticity are all computed by Python against the live SQLite database. The customer ID is injected server-side, so the model can never reach another customer's data. Product search runs on ChromaDB with sentence-transformer embeddings. If Groq is unreachable, the system falls back to a local phi model via Ollama so the assistant still works offline.",
    result:
      "A working final-year-project demo covering the full loop: signup, browse, cart, checkout, order tracking with a real timeline, downloadable invoices, and OCR-based invoice verification via Tesseract, with an AI layer that reads and orchestrates, but never decides.",
    stack: [
      "FastAPI",
      "React (Vite)",
      "SQLAlchemy",
      "ChromaDB",
      "Groq (gpt-oss-20b)",
      "Ollama (phi)",
      "Tesseract OCR",
      "Pillow",
    ],
    links: [{ label: "View on GitHub", href: "https://github.com/mabdullah52/ecommerce-ai-manager" }],
    featured: true,
  },
  {
    slug: "docintelligence",
    title: "DocIntelligence",
    stage: "upload → embed → retrieve → cite",
    summary:
      "A retrieval-augmented Q&A system: upload any PDF and ask questions about it in plain language, with answers grounded in the document and backed by source citations.",
    problem:
      "Reading long documents (legal contracts, research papers, policy manuals) to find one answer is slow, and generic chatbots answer from memory rather than from the actual document in front of you.",
    approach:
      "PDF text is extracted and split into chunks, each converted into a vector embedding with a Sentence-Transformers model (all-MiniLM-L6-v2), and stored in a persistent ChromaDB index. A user's question is embedded the same way, the most similar chunks are retrieved, and only those chunks plus the original question are sent to a Groq-hosted LLaMA 3.3 70B model to generate a grounded answer with citations back to the source text.",
    result:
      "A FastAPI backend with a lightweight vanilla HTML/CSS/JS frontend that answers document questions with cited sources, applicable to legal documents, research papers, policy manuals, and resumes.",
    stack: ["FastAPI", "Groq (LLaMA 3.3 70B)", "Sentence Transformers", "ChromaDB", "Python"],
    links: [{ label: "View on GitHub", href: "https://github.com/mabdullah52/docintelligence" }],
    featured: true,
  },
  {
    slug: "weather-calc-agent",
    title: "Weather & Calculator Agent",
    stage: "route → call tool → return grounded result",
    summary:
      "A minimal function-calling agent built on Groq's LLaMA 3.3 70B that decides which real tool to call for a question (weather lookup, calculation, or both) and answers from the tool's actual output.",
    problem:
      "LLMs are prone to quietly misreporting numbers when asked to summarize a tool's result in their own words. It's a subtle bug that's easy to miss because the tool call itself succeeds.",
    approach:
      "Built a small agent that routes natural-language questions to two tools (a live weather API and a calculator), keeps conversation context across turns so follow-ups like \"what about Lahore?\" resolve correctly, and returns the tool's result directly instead of letting the LLM paraphrase it into prose.",
    result:
      "While testing, found a real bug: the model occasionally misquoted a correct tool result when asked to summarize it in words (a weather API returning one temperature and the model's sentence reporting a different one). Fixed by building the final answer directly from the tool's return value, eliminating that entire class of error.",
    stack: ["Python", "Groq (LLaMA 3.3 70B)", "OpenWeatherMap API", "Function calling"],
    links: [{ label: "View on GitHub", href: "https://github.com/mabdullah52/weather-calc-agent" }],
    featured: true,
  },
  {
    slug: "lung-cancer-prediction",
    title: "Robust Lung Cancer Prediction System",
    stage: "CT scan → CNN + XGBoost → interpretable diagnosis",
    summary:
      "Final-year project: a dual-model diagnostic pipeline that combines CNNs for CT image analysis with XGBoost for incomplete clinical data, wrapped in a desktop app built for real clinical workflows rather than a mobile demo.",
    problem:
      "Lung cancer datasets are messy in practice: imaging data is rich but clinical metadata is often incomplete, and most academic prototypes stop at a black-box accuracy score instead of something a clinician could actually trust or act on.",
    approach:
      "Built on the LIDC-IDRI dataset, combining EfficientNet and ResNet-50 for CT image analysis with XGBoost to handle incomplete structured clinical data. Engineered a FastAPI backend connected to a Python desktop interface, deliberately abandoning mobile/web frameworks in favor of a form factor suited to clinical integration. Added a multi-level interpretability protocol and a LangChain reasoning layer so the system explains its reasoning instead of just producing a heatmap.",
    result:
      "Currently in progress: the dual-model pipeline and desktop UI are functional, with the interpretability and reasoning layer being refined for explainable, clinically-usable output.",
    stack: [
      "EfficientNet",
      "ResNet-50",
      "XGBoost",
      "FastAPI",
      "LangChain",
      "Python Desktop UI",
    ],
    links: [],
    featured: false,
    status: "In Progress",
  },
  {
    slug: "clinic-management-system",
    title: "Clinic Management System",
    stage: "auth → patient records → scheduling",
    summary:
      "A full-stack clinic web app handling user authentication, patient record management, and appointment scheduling on a relational backend.",
    problem:
      "Small clinics often run on paper or spreadsheets, making patient history and scheduling error-prone and slow to search under pressure.",
    approach:
      "Designed and deployed a full-stack web application with PHP and MySQL, covering authentication, patient records, and appointment scheduling. Built a responsive front end with HTML5, CSS3, and Bootstrap for cross-device compatibility, and optimized the relational schema in MySQL (via XAMPP) to securely handle doctor-patient transactional data.",
    result:
      "A working end-to-end system covering the full patient lifecycle, from account creation to booking to record lookup, deployed and tested locally via XAMPP.",
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript", "XAMPP"],
    links: [],
    featured: false,
    status: "Complete",
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
