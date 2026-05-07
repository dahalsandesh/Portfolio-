document.addEventListener("DOMContentLoaded", () => {
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbotWindow = document.getElementById("chatbot-window");
  const chatbotClose = document.getElementById("chatbot-close");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotForm = document.getElementById("chatbot-form");
  const chatbotInput = document.getElementById("chatbot-input");
  const faqButtonsContainer = document.getElementById("faq-buttons");

  const PRE_SET_FAQS = [
    {
      question: "What is your tech stack?",
      answer: "I specialize in JavaScript/TypeScript ecosystems (React, Node.js, Express) and enterprise architectures using Clean Architecture principles. For databases, I frequently use PostgreSQL and MongoDB."
    },
    {
      question: "Are you available for freelance?",
      answer: "I am currently focused on my role as a Software Architect at Virtuosway, but I am open to consulting on high-impact enterprise architecture projects."
    },
    {
      question: "What is your experience with ERPs?",
      answer: "I have architected Kishcare ERP, a multi-tenant medical supply chain core handling complex inventory orchestration, and Modular HRMS infrastructure."
    }
  ];

  // COMPREHENSIVE KNOWLEDGE BASE
  const KNOWLEDGE_BASE = [
    // === IDENTITY & PERSONAL ===
    { keywords: ["who is sandesh", "tell me about sandesh", "sandesh dahal", "who is he", "about him", "about sandesh", "introduce"],
      answer: "Sandesh Dahal is a Software Architect & Full-Stack Engineer based in Kathmandu, Nepal. He leads enterprise architecture at Virtuosway Software, specializing in scalable multi-tenant systems and high-performance backends." },
    { keywords: ["full name", "name"],
      answer: "His full name is Sandesh Dahal. He goes by Sandesh professionally across all platforms." },
    { keywords: ["age", "old", "born", "birthday", "dob"],
      answer: "Sandesh keeps personal details private, but he is a young, driven Software Architect with 3+ years of enterprise experience." },
    { keywords: ["nepal", "kathmandu", "location", "live", "where", "country", "city", "based"],
      answer: "Sandesh is based in Kathmandu, Nepal. He works with international teams across multiple timezones." },
    { keywords: ["hobby", "hobbies", "free time", "fun", "interests", "passion"],
      answer: "Outside of coding, Sandesh explores new technologies, contributes to open-source, and stays updated with system design and cloud architecture." },
    { keywords: ["married", "wife", "girlfriend", "relationship", "single"],
      answer: "That's personal! Sandesh keeps his private life separate. But I can tell you he's deeply committed to Clean Architecture!" },
    { keywords: ["family", "parents", "siblings", "brother", "sister"],
      answer: "Sandesh values his family deeply but keeps personal details private. Connect with him professionally through the contact form!" },
    { keywords: ["religion", "god", "believe", "faith"],
      answer: "That's quite personal! I respect everyone's beliefs. I'm here to discuss Sandesh's professional achievements." },
    { keywords: ["politics", "government", "election", "party", "vote"],
      answer: "I stay neutral on politics! I'm an AI focused on software architecture and Sandesh's professional portfolio." },

    // === PROFESSIONAL EXPERIENCE ===
    { keywords: ["experience", "years", "yrs", "history", "background", "long", "how long", "career"],
      answer: "Sandesh has 3+ years of professional experience. He is a Software Architect at Virtuosway Software, leading enterprise architecture and multi-tenant system design." },
    { keywords: ["virtuosway", "current job", "where do you work", "company", "employer"],
      answer: "Sandesh works as a Software Architect at Virtuosway Software (Dec 2024 – Present), leading enterprise-grade system design." },
    { keywords: ["previous job", "past work", "before", "former"],
      answer: "Before his current Architect role, Sandesh worked as a Backend Developer, honing skills in Node.js, API design, and database optimization." },
    { keywords: ["role", "title", "position", "designation", "what does he do"],
      answer: "Sandesh's title is Software Architect & Full-Stack Engineer. He designs and builds enterprise-scale systems from the ground up." },
    { keywords: ["freelance", "hire", "available", "contract", "consulting", "recruit"],
      answer: "Sandesh is focused on Virtuosway but open to consulting on high-impact enterprise architecture projects. Use the contact form!" },
    { keywords: ["salary", "rate", "cost", "pay", "money", "pricing", "charge"],
      answer: "Sandesh's rates depend on project complexity. Reach out via the contact form for a detailed proposal." },
    { keywords: ["resume", "cv", "download"],
      answer: "Request Sandesh's full PDF resume via the contact form or email dahalsandesh55@gmail.com." },

    // === TECH STACK ===
    { keywords: ["tech stack", "skills", "technologies", "languages", "frameworks", "stack", "tools", "coding"],
      answer: "JavaScript/TypeScript (React, Node.js, Express), PostgreSQL, MongoDB, Docker, Clean Architecture & DDD principles." },
    { keywords: ["react", "nextjs", "next.js", "frontend", "ui"],
      answer: "For frontend, Sandesh uses React and Next.js with state management (Redux/Context) for production-ready interfaces." },
    { keywords: ["backend", "node", "nodejs", "express", "server", "api", "rest"],
      answer: "Backend is Sandesh's forte — secure, scalable Node.js/Express APIs using Clean Architecture." },
    { keywords: ["database", "sql", "nosql", "postgres", "postgresql", "mongo", "mongodb"],
      answer: "Proficient in SQL (PostgreSQL) for relational data and NoSQL (MongoDB) for document-driven microservices." },
    { keywords: ["python", "django", "flask"],
      answer: "Sandesh's primary stack is JavaScript/TypeScript, but he has working knowledge of Python. His core strength is Node.js." },
    { keywords: ["java", "spring", "kotlin"],
      answer: "Sandesh is a JS/TS architect, but his Clean Architecture approach is inspired by Java's DDD ecosystem." },
    { keywords: ["php", "laravel", "wordpress"],
      answer: "Sandesh's expertise is in the modern JavaScript stack. He understands PHP fundamentals and can collaborate with PHP teams." },
    { keywords: ["html", "css", "sass", "tailwind", "bootstrap"],
      answer: "Strong HTML5/CSS3 skills. This very portfolio is built with vanilla HTML, CSS, and JS — no frameworks needed." },
    { keywords: ["typescript", "ts", "type safety"],
      answer: "Big TypeScript advocate. Uses it in enterprise projects for type safety and reduced runtime errors." },
    { keywords: ["git", "version control", "github", "gitlab"],
      answer: "Strict Git workflows — feature branching, PRs, code reviews, and conventional commits. Active on GitHub." },
    { keywords: ["architecture", "clean architecture", "system design", "microservices", "ddd"],
      answer: "Champions Clean Architecture and Domain-Driven Design (DDD) — maintainable, testable, scalable ecosystems." },
    { keywords: ["devops", "docker", "kubernetes", "ci/cd", "deployment", "aws", "cloud"],
      answer: "Docker for containerization, CI/CD pipelines for automated deployments, cloud services for scalable infrastructure." },
    { keywords: ["testing", "jest", "cypress", "unit test", "tdd", "test"],
      answer: "Jest for unit tests, Cypress for E2E. Advocates Test-Driven Development (TDD) as standard practice." },
    { keywords: ["performance", "optimization", "speed", "fast", "latency"],
      answer: "Aura Analytics engine processes data in sub-second timeframes for enterprise-scale datasets." },
    { keywords: ["security", "auth", "authentication", "jwt", "oauth"],
      answer: "JWT-based auth, role-based access control, input validation, OWASP best practices — security is non-negotiable." },
    { keywords: ["mobile", "app", "ios", "android", "react native"],
      answer: "Primary focus is web architecture, but has experience with React Native for cross-platform mobile development." },

    // === PROJECTS ===
    { keywords: ["erp", "kishcare", "medical", "supply chain", "inventory"],
      answer: "Kishcare ERP is a multi-tenant medical supply chain core with automated inventory orchestration, architected from scratch." },
    { keywords: ["pharmacy", "pharmacypulse", "pms", "medicine", "drug", "stock"],
      answer: "PharmacyPulse PMS — full-stack pharmacy engine with real-time stock tracking, sales analytics, and expiry alerts." },
    { keywords: ["hrms", "hr", "human resource", "employee", "payroll"],
      answer: "Modular HRMS — Clean Architecture core for enterprise HR management: employees, payroll, attendance, and leave." },
    { keywords: ["aura", "analytics", "data", "dashboard", "reporting"],
      answer: "Aura Analytics Core — high-performance, sub-second data processing engine for enterprise insights and dashboards." },
    { keywords: ["news", "personalized", "recommendation"],
      answer: "The Personalized News Website uses recommendation algorithms to deliver tailored news content to users." },
    { keywords: ["movie", "search", "film"],
      answer: "MovieSearch React App — search and browse movies with a clean, responsive interface." },
    { keywords: ["shopping", "cart", "ecommerce", "redux"],
      answer: "Redux Shopping Cart — advanced state management patterns for a seamless e-commerce experience." },
    { keywords: ["flappy", "bird", "game"],
      answer: "Yes! A Responsive FlappyBird Game — showing versatility beyond enterprise software." },
    { keywords: ["project", "portfolio", "built", "made", "created", "work"],
      answer: "Kishcare ERP, PharmacyPulse, Modular HRMS, Aura Analytics, plus several personal learning projects. Check the Projects section!" },

    // === SOFT SKILLS ===
    { keywords: ["leadership", "manage", "lead", "team", "mentor"],
      answer: "Mentors dev teams, leads architectural reviews, establishes engineering standards, and ensures code quality." },
    { keywords: ["weakness", "flaw", "bad at", "improve"],
      answer: "A perfectionist with architecture — sometimes spends extra time planning. But it always saves debugging time later!" },
    { keywords: ["strength", "best at", "superpower", "good at"],
      answer: "Seeing software holistically — understanding how a single DB query impacts the UI and the business bottom line." },
    { keywords: ["communication", "english", "language", "speak"],
      answer: "Fluent in English and Nepali. Experienced in standups, sprint planning, and cross-functional collaboration." },
    { keywords: ["problem", "solve", "debug", "fix", "issue"],
      answer: "Problem-solving is second nature — approaches complex infrastructure challenges with a calm, systematic mindset." },

    // === CONTACT ===
    { keywords: ["contact", "email", "phone", "reach", "message", "talk", "connect"],
      answer: "Contact form below, email dahalsandesh55@gmail.com, or contact@dahalsandesh.com.np." },
    { keywords: ["linkedin", "social media", "twitter", "facebook", "instagram"],
      answer: "Find Sandesh on LinkedIn and GitHub. Links are in the contact section at the bottom!" },
    { keywords: ["website", "domain", "site", "url"],
      answer: "You're on it! This is Sandesh's official portfolio at dahalsandesh.com.np." },

    // === AI / META / CONVERSATIONAL ===
    { keywords: ["hello", "hi", "hey", "greetings", "sup", "howdy", "yo", "hola"],
      answer: "Hello! I'm Er.Bhai, Sandesh's AI assistant. I can answer questions about his experience, skills, and projects. Ask me anything!" },
    { keywords: ["who are you", "what are you", "bot", "er.bhai", "erbhai", "er bhai", "your name"],
      answer: "I am Er.Bhai — Sandesh's personal AI assistant, built from scratch to help visitors explore his portfolio and engineering expertise." },
    { keywords: ["how are you", "how do you do", "feeling", "doing"],
      answer: "Running at 100% efficiency! No bugs in my cognitive engine today. How can I help?" },
    { keywords: ["are you real", "human", "alive", "sentient", "robot", "fake"],
      answer: "I'm JavaScript logic running in your browser. Not sentient, but I'd like to think I have a great personality!" },
    { keywords: ["creator", "who made you", "who programmed you", "who built you"],
      answer: "Designed and built by Sandesh Dahal — showcasing his ability to create interactive experiences from scratch." },
    { keywords: ["can you learn", "machine learning", "ml", "neural", "train", "gpt", "chatgpt", "openai"],
      answer: "I don't use ML — I'm a cleverly designed keyword-matching engine. But Sandesh can build ML-powered systems if needed!" },
    { keywords: ["smart", "intelligent", "genius", "clever"],
      answer: "Thank you! But the real genius is Sandesh — he engineered my logic from scratch." },

    // === FUN / CASUAL / OFF-TOPIC REDIRECTS ===
    { keywords: ["joke", "funny", "laugh", "humor"],
      answer: "Why do programmers prefer dark mode? Because light attracts bugs! 🐛 Sandesh writes clean code to avoid them." },
    { keywords: ["meaning of life", "philosophy", "universe", "42"],
      answer: "The meaning of life is 42. The meaning of good software? Clean Architecture and a solid test suite." },
    { keywords: ["sleep", "tired", "rest"],
      answer: "I don't sleep — JavaScript event loop! I'm available 24/7." },
    { keywords: ["coffee", "tea", "drink", "food", "eat", "hungry"],
      answer: "I consume data, but Sandesh runs on coffee. It fuels all his enterprise architectures!" },
    { keywords: ["love", "marry", "date", "romantic", "crush"],
      answer: "Flattered, but my heart belongs to well-structured code! Ask Sandesh about his personal life." },
    { keywords: ["hate", "suck", "stupid", "dumb", "bad", "worst", "ugly"],
      answer: "Sorry you feel that way! I'm always improving. Constructive feedback is welcome." },
    { keywords: ["thanks", "thank you", "appreciate", "helpful", "good bot", "nice", "awesome", "great", "cool"],
      answer: "You're welcome! Don't forget to say hi to Sandesh through the contact form! 😊" },
    { keywords: ["bye", "goodbye", "see ya", "cya", "quit", "leave"],
      answer: "Goodbye! Thanks for visiting. Drop a message in the contact form before you go! 👋" },
    { keywords: ["music", "song", "sing", "band", "spotify"],
      answer: "I can't play music, but I bet Sandesh codes to great beats! I'm here for professional questions though." },
    { keywords: ["sports", "football", "cricket", "basketball", "soccer"],
      answer: "I don't follow sports, but I follow clean code conventions! Ask about Sandesh's technical skills instead." },
    { keywords: ["time", "date", "today", "clock"],
      answer: "No real-time clock here, but Sandesh has been architecting enterprise systems since 2022!" },
    { keywords: ["help", "what can you do", "options", "menu", "commands"],
      answer: "I answer questions about Sandesh's tech stack, projects (ERP, HRMS, PharmacyPulse), experience, skills, and contact info. Try anything!" },
    { keywords: ["interview", "question", "prepare", "evaluate"],
      answer: "Check the Professional Case Studies section — his architecture work speaks for itself." },
    { keywords: ["certificate", "certification", "course", "udemy"],
      answer: "Sandesh believes in learning by building. His production-grade enterprise systems demonstrate skills beyond any certificate." },
    { keywords: ["blog", "article", "write", "post"],
      answer: "Sandesh focuses on building over writing, but he's open to sharing knowledge. Reach out if interested!" },
    { keywords: ["remote", "onsite", "office", "wfh", "hybrid", "timezone"],
      answer: "Experienced in remote work, comfortable across timezones, prefers a hybrid approach for maximum productivity." },
    { keywords: ["open source", "contribute", "contribution", "free"],
      answer: "Sandesh actively contributes to open-source. His personal projects are publicly available on GitHub!" },
    { keywords: ["what", "why", "how", "when", "can", "could", "would", "should", "do", "does", "is", "are"],
      answer: "Good question! I can discuss Sandesh's tech stack, projects, experience, or availability. Could you be a bit more specific?" }
  ];

  // MASSIVELY EXPANDED FALLBACK RESPONSES for Unpredictability
  const FALLBACK_ANSWERS = [
    "Hmm, that's an interesting question, but it's outside my current syllabus. I'm primarily focused on Sandesh's professional portfolio!",
    "I'm not entirely sure how to answer that yet. My neural pathways are currently optimized for questions about Sandesh's software architecture experience.",
    "That's a bit beyond my programmed knowledge base. If it's a technical discussion, Sandesh would love to chat via the contact form!",
    "I wish I knew the answer to that! Right now, I can only confidently discuss Sandesh's projects, skills, and career history.",
    "Error 404: Answer not found in my database. Just kidding! But I really don't know the answer to that. Ask me about ERPs or Clean Architecture instead!",
    "That is an out-of-syllabus query. For highly specific or off-topic questions, it's best to reach out to Sandesh directly.",
    "I'm an AI, but I don't know everything! My expertise is strictly limited to Sandesh Dahal's professional resume.",
    "Fascinating! I'll have to ask Sandesh to add that to my training data. Until then, any questions about his web development skills?",
    "My NLP algorithms didn't quite catch the intent there. Could you rephrase, or perhaps ask about the Kishcare ERP project?",
    "I'm drawing a blank on that one. But if you want to know about multi-tenant backend infrastructure, I'm your bot!",
    "You stumped me! That's definitely a question for the human Architect. Feel free to email him.",
    "I'm processing... processing... nope, I don't have the answer to that. I am highly specialized in portfolio-related inquiries.",
    "That's outside the scope of my current deployment. Try asking me about Node.js, React, or system design!",
    "I'd love to chat about that, but my primary directive is to showcase Sandesh's engineering capabilities. What else can I help with?",
    "My developer, Sandesh, didn't anticipate that question! He's a great architect, but even he can't predict everything. Want to ask about his work instead?",
    "I have searched my vector database and found no relevant documents for that query. Perhaps ask about the Aura Analytics project?",
    "That's a great question, but I'm just a humble static AI. I don't have internet access to look that up!",
    "I'm currently running in 'Portfolio Mode', so I only know about tech, code, and Sandesh's career. Sorry!",
    "If I had hands, I'd scratch my head. I don't know! Ask me about JavaScript or Cloud Architecture instead.",
    "I am parsing your request... Unfortunately, it falls into my 'unhandled exceptions' category. Let's talk about software instead!"
  ];

  let isOpen = false;

  // Toggle Chatbot
  chatbotToggle.addEventListener("click", () => {
    isOpen = !isOpen;
    chatbotWindow.classList.toggle("active", isOpen);
    if (isOpen && chatbotMessages.children.length === 0) {
      addBotMessage("Hi! I'm Er.Bhai 🤖 — Sandesh's AI Assistant. Ask me anything about his skills, projects, or experience!");
    }
  });

  chatbotClose.addEventListener("click", () => {
    isOpen = false;
    chatbotWindow.classList.remove("active");
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    const wrapper = document.querySelector(".ai-chatbot-wrapper");
    if (isOpen && !wrapper.contains(e.target)) {
      isOpen = false;
      chatbotWindow.classList.remove("active");
    }
  });

  // Render Quick Action FAQ Buttons
  PRE_SET_FAQS.forEach(faq => {
    const btn = document.createElement("button");
    btn.className = "faq-btn";
    btn.textContent = faq.question;
    btn.addEventListener("click", () => {
      addUserMessage(faq.question);
      setTimeout(() => addBotMessage(faq.answer), 500);
    });
    faqButtonsContainer.appendChild(btn);
  });

  // Handle Form Submit
  chatbotForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = chatbotInput.value.trim();
    if (!text) return;

    addUserMessage(text);
    chatbotInput.value = "";

    // Show a typing indicator (simulated)
    const typingId = showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator(typingId);
      processUserInput(text);
    }, 800 + Math.random() * 1000); // Random delay between 800ms and 1800ms
  });

  function processUserInput(input) {
    const lowerInput = input.toLowerCase();

    // 1. Check exact match from quick FAQs first
    const matchedFaq = PRE_SET_FAQS.find(f => f.question.toLowerCase() === lowerInput);
    if (matchedFaq) {
      return addBotMessage(matchedFaq.answer);
    }

    // 2. Advanced Fuzzy Keyword Matching Logic
    let bestMatch = null;
    let maxScore = 0;

    KNOWLEDGE_BASE.forEach(entry => {
      let score = 0;
      entry.keywords.forEach(keyword => {
        // Multi-word exact phrase match gets higher score
        if (keyword.includes(" ") && lowerInput.includes(keyword)) {
          score += 3;
        }
        // Single word match
        else if (lowerInput.includes(keyword)) {
          score += 1;
        }
      });

      if (score > maxScore) {
        maxScore = score;
        bestMatch = entry;
      }
    });

    // 3. Threshold check (must have at least a score of 1)
    if (bestMatch && maxScore >= 1) {
      addBotMessage(bestMatch.answer);
    } else {
      // 4. Smart Contextual Fallback - always addresses the question
      addBotMessage(generateSmartFallback(input));
    }
  }

  function generateSmartFallback(originalInput) {
    const short = originalInput.length < 30 ? originalInput : originalInput.substring(0, 30) + "...";
    
    const templates = [
      `Interesting — you asked about "${short}". That's outside my current knowledge scope, but Sandesh would love to discuss it! Try the contact form below.`,
      `I see you're curious about "${short}". I'm specifically trained on Sandesh's portfolio, so I might not have the best answer for that. Ask me about his projects or skills instead!`,
      `"${short}" — great question! Unfortunately, my training data doesn't cover that topic yet. I'm best at answering questions about Sandesh's tech stack, experience, and enterprise projects.`,
      `Hmm, "${short}" is a bit outside my wheelhouse. I'm Er.Bhai, Sandesh's portfolio AI — I know everything about his career, but not much beyond that! Want to try a different question?`,
      `I appreciate the curiosity about "${short}"! While I can't answer that directly, I can tell you about Sandesh's 3+ years of architecture experience, his ERP projects, or his tech stack.`,
      `You mentioned "${short}" — that's not in my database, but I don't want to leave you hanging! Here's what I CAN help with: Sandesh's skills, projects, experience, or contact info.`,
      `I noticed you're asking about "${short}". I wish I could help, but my neural pathways are tuned specifically for Sandesh Dahal's professional portfolio. Try asking "What is his tech stack?" or "Tell me about his projects!"`,
      `"${short}" — I'll be honest, that one stumped me! But if you're wondering about Sandesh's software architecture work, ERP systems, or availability, I'm your bot!`,
      `That's a creative question about "${short}"! I'm not equipped to answer it, but Sandesh himself might be. Drop him a message via the contact form!`,
      `I processed "${short}" but couldn't find a match in my knowledge base. My specialty is Sandesh's professional background — try asking about his experience, projects, or skills!`
    ];

    return templates[Math.floor(Math.random() * templates.length)];
  }

  function addUserMessage(text) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "chat-msg user-msg";
    msgDiv.textContent = text;
    chatbotMessages.appendChild(msgDiv);
    scrollToBottom();
  }

  function addBotMessage(text) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "chat-msg bot-msg";
    msgDiv.innerHTML = `<div class="msg-avatar"><ion-icon name="hardware-chip-outline"></ion-icon></div><div class="msg-text">${text}</div>`;
    chatbotMessages.appendChild(msgDiv);
    scrollToBottom();
  }

  function showTypingIndicator() {
    const id = "typing-" + Date.now();
    const msgDiv = document.createElement("div");
    msgDiv.id = id;
    msgDiv.className = "chat-msg bot-msg typing-indicator";
    msgDiv.innerHTML = `<div class="msg-avatar"><ion-icon name="hardware-chip-outline"></ion-icon></div><div class="msg-text">...</div>`;
    chatbotMessages.appendChild(msgDiv);
    scrollToBottom();
    return id;
  }

  function removeTypingIndicator(id) {
    const el = document.getElementById(id);
    if (el) {
      el.remove();
    }
  }

  function scrollToBottom() {
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
});
