export interface CourseModule {
  title: string;
  duration: string;
  topics: string[];
}

export interface CourseBenefit {
  title: string;
  description: string;
  image?: string;
  brand?: string;
  brandLogo?: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  format: string;
  level: string;
  heroImage: string;
  articleImage: string;
  technologies: string[];
  curriculum: CourseModule[];
  uses: CourseBenefit[];
  whyLearn: CourseBenefit[];
}

export const courses: Course[] = [
  {
    id: "fs-101",
    slug: "full-stack-web-development",
    title: "Full Stack Web Development with AI",
    subtitle: "Master the modern web stack",
    description: "Go from beginner to job-ready full stack developer. Learn to build scalable, secure, and modern web applications using React, Node.js, and cutting-edge AI tools to supercharge your workflow.",
    duration: "4 Months",
    format: "Live Instructor-Led",
    level: "Beginner to Advanced",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    articleImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    technologies: ["React", "Node.js", "TypeScript", "Next.js", "MongoDB", "TailwindCSS"],
    curriculum: [
      {
        title: "Frontend Foundations",
        duration: "Week 1-4",
        topics: ["HTML5 & CSS3 Masterclass", "JavaScript Deep Dive", "Responsive Design", "DOM Manipulation"]
      },
      {
        title: "React & Advanced UI",
        duration: "Week 5-8",
        topics: ["React Hooks & Context", "State Management (Redux/Zustand)", "Routing & SPAs", "TailwindCSS Styling"]
      },
      {
        title: "Backend & Databases",
        duration: "Week 9-12",
        topics: ["Node.js & Express", "RESTful APIs", "MongoDB & Mongoose", "Authentication (JWT)"]
      },
      {
        title: "AI Tools & Capstone",
        duration: "Week 13-16",
        topics: ["GitHub Copilot & Cursor", "Deployment (Vercel/AWS)", "CI/CD Basics", "Final Capstone Project"]
      }
    ],
    uses: [
      {
        title: "Global E-Commerce Scale",
        description: "Amazon uses highly scalable full stack architecture to process millions of secure transactions per second.",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=600",
        brand: "Amazon",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
      },
      {
        title: "Seamless Video Streaming",
        description: "Netflix utilizes a robust React frontend and Node microservices to deliver content to 200M+ users seamlessly.",
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=600",
        brand: "Netflix",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/512px-Netflix_2015_N_logo.svg.png"
      },
      {
        title: "Real-time Social Feeds",
        description: "Instagram relies on complex web technologies to render high-performance, real-time infinite scrolling feeds.",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600",
        brand: "Instagram",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
      }
    ],
    whyLearn: [
      {
        title: "High Industry Demand",
        description: "Full stack developers are among the most sought-after professionals globally."
      },
      {
        title: "End-to-End Ownership",
        description: "Gain the ability to build an entire product independently from frontend to database."
      },
      {
        title: "Lucrative Career Path",
        description: "Enjoy highly competitive salaries and abundant remote work opportunities."
      }
    ]
  },
  {
    id: "ds-201",
    slug: "data-science-ai",
    title: "Data Science & Artificial Intelligence",
    subtitle: "Build the future with data",
    description: "Dive deep into machine learning, neural networks, and data analytics. Learn how to extract insights from massive datasets and build predictive AI models that solve real-world problems.",
    duration: "5 Months",
    format: "Live Instructor-Led",
    level: "Intermediate",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    articleImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    technologies: ["Python", "TensorFlow", "PyTorch", "Pandas", "Scikit-Learn", "SQL"],
    curriculum: [
      {
        title: "Data Science Fundamentals",
        duration: "Week 1-4",
        topics: ["Python for Data Science", "Applied Statistics", "Data Wrangling with Pandas", "SQL & Databases"]
      },
      {
        title: "Machine Learning Core",
        duration: "Week 5-10",
        topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"]
      },
      {
        title: "Deep Learning & AI",
        duration: "Week 11-16",
        topics: ["Neural Networks", "Computer Vision (CNNs)", "NLP Basics", "TensorFlow & PyTorch"]
      },
      {
        title: "Production & Capstone",
        duration: "Week 17-20",
        topics: ["Model Deployment", "MLOps Basics", "Ethics in AI", "Industry Capstone Project"]
      }
    ],
    uses: [
      {
        title: "Real Time View Count in IPL",
        description: "Jio Cinema uses predictive analytics to anticipate user demand for live sports content.",
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600",
        brand: "JioCinema",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/JioCinema_Logo.svg/512px-JioCinema_Logo.svg.png"
      },
      {
        title: "Traffic Prediction in Maps",
        description: "Google uses machine learning algos to predict traffic congestion on roads and optimize routing.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
        brand: "Google",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/512px-Google_%22G%22_logo.svg.png"
      },
      {
        title: "Which Videos to Watch Next?",
        description: "YouTube uses ML algos to recommend videos based on viewing history and engagement metrics.",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=600",
        brand: "YouTube",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
      }
    ],
    whyLearn: [
      {
        title: "Shape the Future",
        description: "AI is revolutionizing every industry. Be at the forefront of this technological shift."
      },
      {
        title: "Data-Driven Impact",
        description: "Help organizations make better, evidence-based decisions rather than guessing."
      },
      {
        title: "Future-Proof Career",
        description: "AI skills are rapidly becoming a necessity, ensuring long-term job security."
      }
    ]
  },
  {
    id: "cs-301",
    slug: "cyber-security",
    title: "Cyber Security & Ethical Hacking",
    subtitle: "Defend the digital frontier",
    description: "Learn how to protect networks, secure applications, and conduct penetration testing. Master the tools used by industry professionals to identify vulnerabilities before the bad guys do.",
    duration: "3 Months",
    format: "Live Instructor-Led",
    level: "Beginner to Intermediate",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
    articleImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
    technologies: ["Kali Linux", "Wireshark", "Metasploit", "Nmap", "Burp Suite", "Bash/Python"],
    curriculum: [
      {
        title: "Networking & OS Fundamentals",
        duration: "Week 1-3",
        topics: ["TCP/IP & OSI Models", "Linux Administration", "Windows Security", "Network Protocols"]
      },
      {
        title: "Vulnerability Assessment",
        duration: "Week 4-6",
        topics: ["Reconnaissance", "Scanning & Enumeration", "Vulnerability Analysis", "Nmap & Nessus"]
      },
      {
        title: "Ethical Hacking",
        duration: "Week 7-9",
        topics: ["System Hacking", "Web Application Security", "Wireless Hacking", "Metasploit Framework"]
      },
      {
        title: "Defense & Capstone",
        duration: "Week 10-12",
        topics: ["Incident Response", "Cryptography", "Security Operations (SOC)", "Live Penetration Test"]
      }
    ],
    uses: [
      {
        title: "Financial Fraud Prevention",
        description: "Stripe uses advanced security protocols and ethical hacking to prevent millions in fraudulent transactions.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600",
        brand: "Stripe",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
      },
      {
        title: "End-to-End Encryption",
        description: "WhatsApp relies on deep cryptography to ensure messages are completely secure from interception.",
        image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=600",
        brand: "WhatsApp",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      },
      {
        title: "Global Cloud Security",
        description: "AWS employs thousands of security engineers to protect the infrastructure powering half the internet.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
        brand: "AWS",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
      }
    ],
    whyLearn: [
      {
        title: "Critical Importance",
        description: "Cybercrime is rising exponentially; defenders are desperately needed."
      },
      {
        title: "Dynamic Challenges",
        description: "The field constantly evolves, meaning you will never stop learning and problem-solving."
      },
      {
        title: "Zero Unemployment",
        description: "The cybersecurity industry famously suffers from a massive global talent shortage."
      }
    ]
  }
];
