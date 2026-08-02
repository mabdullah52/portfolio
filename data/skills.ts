import type { Skill } from "@/types/project";

export const skills: readonly Skill[] = [
  {
    category: "AI / LLM",
    items: [
      "Agentic tool-calling",
      "RAG pipelines",
      "Groq (LLaMA 3.3 70B)",
      "Prompt orchestration",
      "Sentence-Transformer embeddings",
      "Local model fallback (Ollama)",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "Scikit-learn",
      "Random Forest",
      "Gradient Boosting",
      "XGBoost",
      "SMOTE",
      "Feature Engineering",
    ],
  },
  {
    category: "Deep Learning",
    items: [
      "TensorFlow / Keras",
      "CNNs (Conv2D, BatchNorm, Dropout)",
      "EfficientNet / ResNet-50",
      "LR Scheduling",
    ],
  },
  {
    category: "Automation",
    items: ["n8n workflows", "Multi-agent orchestration", "API integration", "Process automation"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Python", "SQLAlchemy", "SQLite", "PHP", "MySQL", "Firebase", "REST API design"],
  },
  {
    category: "Data & Retrieval",
    items: ["ChromaDB", "Vector search", "OCR (Tesseract)", "Semantic search", "Pandas / NumPy"],
  },
  {
    category: "Frontend",
    items: ["React", "Vite", "TypeScript", "Next.js", "Bootstrap", "HTML5 / CSS3"],
  },
] as const;
