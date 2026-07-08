export const METADATA = {
  author: "Syed Asif Akhtar",
  title: "Portfolio | Syed Asif Akhtar",
  description:
  "Syed Asif Akhtar is a Full Stack and Generative AI Developer focused on building AI-powered applications using LLMs, RAG, AI Agents and modern web technologies.",
 
  keywords: [
"Full Stack Developer",
"Generative AI Developer",
"AI Agents",
"RAG",
"LLM",
"AWS",
"Portfolio",

  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
    "Full Stack Developer...",
  "Generative AI Developer.",
  "AI Agents and Workflow Automation.",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:syedasifakhtar1312@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/syedasifakhtar/",
  },
  {
    name: "github",
    url: "https://github.com/syedasifakhtar91",
  },


];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "python",
    "git",
    "github",
    "vscode",
  ],

  librariesAndFrameworks: [
    "react",
    "tailwindcss",
     "nodejs",
     "express",
    "langchain",
     "langgraph",
    "streamlit",
  ],

  databases: [
    "mongodb",
    "chromadb",
    "sqlite",
  ],

  other: [
    "aws",
     "vercel",
    "huggingface",
     "claude",
       "groq",

  ],
};


export const PROJECTS = [
 {
  name: "Real Estate Research Tool",
  imageKey: "real-estate",
  description: "RAG-based research assistant using LangChain, ChromaDB and Groq",
  gradient: ["#6366F1", "#8B5CF6"],
  url: "https://github.com/syedasifakhtar91/Real_Estate_Research_Tool",
  tech: ["python.svg", "langchain.png", "streamlit.svg", "chromadb.png"],
},
  {
  name: "AI-Powered E-Commerce Chatbot",
  imageKey: "ecommerce-chatbot",
  description: "Intelligent shopping assistant powered by Generative AI",
  gradient: ["#10B981", "#34D399"],
  url: "https://github.com/syedasifakhtar91/E-commerce-Chatbot",
  tech: ["python.svg", "streamlit.svg", "sqlite.svg",],
},
  {
  name: "MCP-Powered HR Management Assistant",
  imageKey: "mcp-hr",
  description: "AI assistant for employee and HR workflow automation",
  gradient: ["#F59E0B", "#FBBF24"],
  url: "https://github.com/syedasifakhtar91/mcp-powered-hr-management-assistant",
  tech: ["python.svg", "claude.png"],
},
{
  name: "AI Resume Analyzer",
  imageKey: "ai-resume-analyzer",
  description: "AI-powered resume analysis and interview preparation platform",
  gradient: ["#3B82F6", "#06B6D4"],
  url: "https://github.com/syedasifakhtar91/AI_Resume_Analyzer",
  tech: [
  "react.svg",
  "Node.js.svg",
  "mongodb.svg",
  "google-gemini.svg"

  ],
},

];

export const WORK_CONTENTS = {
  GRAPEVINE: [
  {
    title: "RAG Real Estate Research Tool",
    description:
      "Built a Retrieval-Augmented Generation (RAG) application using LangChain, ChromaDB, Groq and Hugging Face Embeddings to answer questions from real estate articles using contextual retrieval.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        LangChain • ChromaDB • Groq
      </div>
    ),
  },

  {
    title: "MCP-Powered HR Assistant",
    description:
      "Developed an AI-powered HR assistant using MCP architecture to streamline employee information retrieval, task handling and conversational workflows.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        MCP • AI Agents
      </div>
    ),
  },

  {
    title: "AI E-Commerce Chatbot",
    description:
      "Built an intelligent shopping assistant capable of understanding user queries, retrieving product information and generating contextual responses using LLM-powered workflows.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        AI Chatbot
      </div>
    ),
  },

  {
  title: "AI Resume Analyzer",
  description:
    "Developed an AI-powered resume analyzer that evaluates resumes, provides ATS-based feedback, identifies skill gaps and helps users prepare for interviews using Generative AI.",
  content: (
    <div className="h-full w-full flex items-center justify-center text-white px-4">
      ATS • Resume Analysis • Interview Prep
    </div>
  ),
},

],
  

 DUKAAN: [
  {
    title: "Generative AI",
    description:
      "Learning and building applications using LLMs, RAG, AI Agents, Prompt Engineering and modern GenAI frameworks.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        GenAI • LLMs • RAG
      </div>
    ),
  },

  {
    title: "AWS Cloud",
    description:
      "Developing cloud fundamentals with hands-on experience in EC2, S3, IAM, Lambda, VPC and serverless architectures.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        AWS Cloud
      </div>
    ),
  },

  {
    title: "Full-Stack Development",
    description:
      "Building modern web applications using React, Node.js, Express.js and MongoDB while integrating AI capabilities into real-world solutions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        MERN Stack
      </div>
    ),
  },
],
  
};

// export const GTAG = "G-5HCTL2TJ5W";
