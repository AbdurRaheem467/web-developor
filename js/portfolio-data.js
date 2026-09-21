/**
 * PORTFOLIO DATA CONFIGURATION
 * ==============================================================================
 * This file centralizes all your personal information, links, skills, services,
 * projects, milestones, and testimonials in one place.
 * 
 * To customize the website with your own details:
 * Simply edit the values below! Everything updates across the entire site automatically.
 * ==============================================================================
 */

export const PORTFOLIO_DATA = {
  // 1. Personal & Brand Details
  personal: {
    name: "Abdur Raheem",
    role: "Web Developer & Designer",
    tagline: "Building Digital Experiences That Stand Out.",
    heroBio: "I'm a Web Developer & Designer focused on creating modern, responsive and user-friendly websites for businesses, brands and individuals.",
    aboutBio1: "Hello! I'm Abdur Raheem, a passionate Web Developer and Designer. I specialize in turning complex ideas into clean, functional, and visually striking digital experiences that help businesses establish credibility and attract customers.",
    aboutBio2: "With a strong foundation in modern frontend architecture and a sharp eye for visual aesthetics, I bridge the gap between design and engineering. My focus is on writing clean, accessible, and performant code that delivers measurable results for clients.",
    availability: "Available for freelance & contract work",
    location: "Global / Remote",
    experienceYears: "3+",
  },

  // 2. Direct Contact & Social Links
  contact: {
    email: "hello@abdurraheem.com",
    whatsapp: "+923000000000",
    whatsappDisplay: "+92 300 0000000",
    instagram: "https://instagram.com/AbdurRaheem_Web",
    instagramHandle: "@AbdurRaheem_Web",
    linkedin: "https://linkedin.com/in/abdurraheem",
    linkedinDisplay: "linkedin.com/in/abdurraheem",
    github: "https://github.com/AbdurRaheem467",
    githubDisplay: "github.com/AbdurRaheem467",
    facebook: "https://facebook.com/AbdurRaheemWeb",
  },

  // 3. Key Statistics (Highlighted in About Section)
  stats: [
    { number: 24, suffix: "+", label: "Projects Completed" },
    { number: 12, suffix: "+", label: "Technologies Mastered" },
    { number: 18, suffix: "+", label: "Happy Clients" },
    { number: 3, suffix: "+", label: "Years Experience" },
  ],

  // 4. Technical Skills
  skills: [
    { name: "HTML5", category: "Frontend Core", level: "Advanced", icon: "code-2", desc: "Semantic structure, accessibility, modern standards" },
    { name: "CSS3", category: "Frontend Core", level: "Advanced", icon: "palette", desc: "Flexbox, CSS Grid, custom properties, animations" },
    { name: "JavaScript", category: "Frontend Core", level: "Advanced", icon: "file-code", desc: "ES6+, asynchronous programming, DOM manipulation" },
    { name: "React", category: "Frameworks", level: "Proficient", icon: "atom", desc: "Components, hooks, state management, modern patterns" },
    { name: "Next.js", category: "Frameworks", level: "Proficient", icon: "layers", desc: "Server-side rendering, routing, static generation" },
    { name: "Tailwind CSS", category: "Frameworks", level: "Advanced", icon: "sparkles", desc: "Utility-first design systems, responsive UI architecture" },
    { name: "Git & GitHub", category: "Workflow", level: "Proficient", icon: "git-branch", desc: "Version control, collaboration, CI/CD pipelines" },
    { name: "Responsive Web Design", category: "Design & UX", level: "Expert", icon: "smartphone", desc: "Fluid layouts for mobile, tablet, and ultra-wide screens" },
    { name: "UI/UX Design", category: "Design & UX", level: "Proficient", icon: "layout-template", desc: "User flows, wireframing, typography, visual hierarchy" },
    { name: "API Integration", category: "Workflow", level: "Proficient", icon: "webhook", desc: "RESTful endpoints, JSON consumption, third-party services" },
  ],

  // 5. Professional Services
  services: [
    {
      id: "business-websites",
      title: "Business Websites",
      shortDesc: "Modern websites for companies, startups and small businesses.",
      longDesc: "High-impact web solutions designed to establish credibility, communicate your value proposition, and convert visitors into paying clients.",
      icon: "briefcase",
      deliverables: ["Custom Brand Architecture", "Lead Generation Forms", "Speed & SEO Optimized", "CMS / Admin Integration"],
      badge: "Popular"
    },
    {
      id: "ecommerce-websites",
      title: "E-Commerce Websites",
      shortDesc: "Professional online stores with product-focused layouts and smooth user experiences.",
      longDesc: "Conversion-optimized storefronts with frictionless shopping cart flows, product filtering, secure payment gateways, and inventory displays.",
      icon: "shopping-bag",
      deliverables: ["Product Catalog & Filters", "Cart & Checkout Flow", "Payment Gateway Integration", "Order Notification Setup"],
      badge: "High ROI"
    },
    {
      id: "landing-pages",
      title: "Landing Pages",
      shortDesc: "High-converting landing pages for products, services and campaigns.",
      longDesc: "Persuasive single-page experiences built with strategic storytelling, compelling calls-to-action, and high-velocity page loads.",
      icon: "zap",
      deliverables: ["Conversion-Focused Layout", "Interactive Product Demos", "A/B Testing Ready", "Fast Time-to-Interactive"],
      badge: "High Conversion"
    },
    {
      id: "website-redesign",
      title: "Website Redesign",
      shortDesc: "Modernize outdated websites with a cleaner and more professional design.",
      longDesc: "Transform dated, slow, or cluttered websites into modern, sleek digital assets that reflect your current brand evolution.",
      icon: "refresh-cw",
      deliverables: ["Visual UI Overhaul", "Codebase Modernization", "Mobile Responsiveness Fixes", "Asset & Speed Optimization"],
      badge: "Modernization"
    },
    {
      id: "responsive-design",
      title: "Responsive Web Design",
      shortDesc: "Websites that work beautifully across mobile, tablet and desktop.",
      longDesc: "Pixel-perfect multi-device responsiveness ensuring that every button, image, and text block delivers an exceptional experience everywhere.",
      icon: "smartphone",
      deliverables: ["Mobile-First Design", "Touch-Friendly Interactions", "Adaptive Media", "Cross-Browser Testing"],
      badge: "Essential"
    }
  ],

  // 6. Featured Projects
  projects: [
    {
      id: "watch-store",
      title: "Watch Store Website",
      category: "E-Commerce",
      filterCategory: "ecommerce",
      featured: true,
      image: "images/watches/watch-1.jpg",
      gallery: [
        "images/watches/watch-1.jpg",
        "images/watches/watch-2.jpg",
        "images/watches/watch-3.jpg",
        "images/watches/watch-4.jpg"
      ],
      shortDesc: "A modern e-commerce watch store featuring a clean product-focused interface, responsive design and a smooth shopping experience.",
      fullDesc: "TIMEORA is an ultra-premium, production-ready e-commerce platform crafted for luxury timepieces and grand complications. Built with a bespoke dark luxury aesthetic (obsidian and brushed champagne gold), the application provides a smooth customer journey from interactive filtering to slide-out cart management and instant checkout.",
      tags: ["JavaScript (ES6)", "Tailwind CSS", "Responsive UI", "E-Commerce Flow", "Product Filtering"],
      features: [
        "Product catalog with multifaceted filtering by metal, strap, and price",
        "Slide-out shopping bag drawer with live subtotal and discount code engine",
        "Interactive product image gallery with zoom inspect view",
        "Responsive checkout flow with simulated payment confirmation",
        "Private client wishlist with real-time state persistence"
      ],
      client: "Luxury Horology Boutique",
      year: "2026",
      liveDemoUrl: "poster.html",
      githubUrl: "https://github.com/AbdurRaheem467/Abdurraheem"
    },
    {
      id: "saas-analytics",
      title: "CloudPulse SaaS Dashboard",
      category: "Websites",
      filterCategory: "websites",
      featured: false,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      ],
      shortDesc: "Real-time analytics dashboard with interactive data charts, performance telemetry, and customizable widget views.",
      fullDesc: "A sleek enterprise analytics platform designed for software companies. It features dark-mode first data visualizations, real-time KPI streaming counters, user behavior funnels, and clean exports for business intelligence teams.",
      tags: ["React", "Next.js", "Tailwind CSS", "Data Visualization", "API Integration"],
      features: [
        "Dynamic SVG interactive data charts and KPI metrics",
        "Role-based navigation with customizable dashboard views",
        "Instant theme switching and responsive sidebar layout",
        "REST API endpoints integration for live metrics streaming"
      ],
      client: "B2B Cloud Analytics Startup",
      year: "2026",
      liveDemoUrl: "#",
      githubUrl: "https://github.com/AbdurRaheem467"
    },
    {
      id: "nova-landing",
      title: "NovaTech Product Launch Page",
      category: "Landing Pages",
      filterCategory: "landing-pages",
      featured: false,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80"
      ],
      shortDesc: "High-velocity product launch landing page engineered for maximum visitor-to-subscriber conversion rates.",
      fullDesc: "Created for a next-generation AI hardware company, this landing page blends bold futuristic typography, interactive feature accordions, client proof sections, and high-speed asset delivery to maximize early beta signups.",
      tags: ["Tailwind CSS", "JavaScript", "Responsive Design", "Conversion Rate Optimization"],
      features: [
        "Sub-second load times with optimized asset delivery",
        "Interactive product feature hotspots and preview toggle",
        "Custom email capture form with validation and webhook integration",
        "Fully responsive typography scale adapted for mobile devices"
      ],
      client: "NovaTech Hardware Labs",
      year: "2025",
      liveDemoUrl: "#",
      githubUrl: "https://github.com/AbdurRaheem467"
    },
    {
      id: "luxe-dining",
      title: "Aura Artisan Bistro & Dining",
      category: "Websites",
      filterCategory: "websites",
      featured: false,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
      ],
      shortDesc: "Sensory dining web experience featuring interactive menu cards, reservation scheduling, and location guides.",
      fullDesc: "A warm, high-end hospitality website created for an artisan culinary restaurant. Designed with fluid editorial layout principles, high-res culinary showcases, interactive dietary filters, and direct reservation forms.",
      tags: ["HTML5", "CSS3 / Grid", "JavaScript", "UI/UX Design", "Responsive Layout"],
      features: [
        "Interactive food and beverage menu with dietary filter tabs",
        "Custom online table reservation booking interface",
        "Mobile-first responsive layout tailored for on-the-go diners",
        "Google Maps location embed and event booking inquiries"
      ],
      client: "Aura Hospitality Group",
      year: "2025",
      liveDemoUrl: "#",
      githubUrl: "https://github.com/AbdurRaheem467"
    },
    {
      id: "zenith-audio",
      title: "SoundWave Audio Gear Store",
      category: "E-Commerce",
      filterCategory: "ecommerce",
      featured: false,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
      ],
      shortDesc: "Minimalist audio e-commerce experience engineered for wireless earbuds, headphones, and audiophile accessories.",
      fullDesc: "A sleek shopping website featuring bold product imagery, instant sound profile comparisons, quick customer add-to-bag interactions, and responsive product specifications tabs.",
      tags: ["JavaScript (ES6)", "Tailwind CSS", "E-Commerce", "UX Design"],
      features: [
        "Dynamic audio hardware spec comparison matrix",
        "Instant quick-cart slideout and persistent cart memory",
        "Customer review ratings and photo feedback component",
        "Smooth page transitions and micro-interactions"
      ],
      client: "SoundWave Consumer Electronics",
      year: "2025",
      liveDemoUrl: "#",
      githubUrl: "https://github.com/AbdurRaheem467"
    },
    {
      id: "studio-creative",
      title: "Mono Minimalist Portfolio",
      category: "Landing Pages",
      filterCategory: "landing-pages",
      featured: false,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
      ],
      shortDesc: "Clean portfolio concept highlighting editorial photography, smooth typography animations, and creative showcases.",
      fullDesc: "A boutique portfolio created for a visual director. Incorporates modern layout techniques, custom cursor effects, subtle card perspective tilts, and frictionless contact flows.",
      tags: ["CSS Animations", "JavaScript", "Responsive Design", "UI/UX"],
      features: [
        "Subtle magnetic hover physics on interactive elements",
        "High-definition project preview modal with keyboard navigation",
        "Optimized accessibility contrast and responsive text flow",
        "Instant direct email copy and contact triggers"
      ],
      client: "Mono Creative Studio",
      year: "2025",
      liveDemoUrl: "#",
      githubUrl: "https://github.com/AbdurRaheem467"
    }
  ],

  // 7. Development Journey & Milestones (Timeline Section)
  milestones: [
    {
      period: "Milestone 1",
      title: "Learning Web Development",
      role: "Core Foundations & Standards",
      description: "Immersed deeply into web standards, mastering semantic HTML5, modern CSS3 layout engines (Flexbox & CSS Grid), and modern JavaScript (ES6+). Built a solid foundation in responsive design principles and web accessibility.",
      icon: "book-open",
      tags: ["HTML5", "CSS3", "JavaScript", "Algorithms"]
    },
    {
      period: "Milestone 2",
      title: "Building First Projects",
      role: "Interactive Applications",
      description: "Started constructing real-world web applications: interactive calculators, dynamic dashboards, and fully functional e-commerce prototypes. Honed component-driven architecture, state handling, and DOM performance.",
      icon: "code",
      tags: ["React", "DOM Scripting", "Tailwind CSS", "Git"]
    },
    {
      period: "Milestone 3",
      title: "Freelance Projects",
      role: "Client Web Solutions",
      description: "Began collaborating with real clients and small businesses. Delivered tailored business websites, high-converting product landing pages, and responsive online stores that increased brand visibility and client revenue.",
      icon: "briefcase",
      tags: ["Client Consultation", "E-Commerce", "SEO Optimization", "Speed"]
    },
    {
      period: "Milestone 4",
      title: "Current Work & Evolution",
      role: "Full-Stack Development & UI Systems",
      description: "Currently designing and developing modern, responsive web experiences using React, Next.js, and Tailwind CSS. Continuously refining UI/UX micro-interactions, API integrations, and delivering client-focused web excellence.",
      icon: "rocket",
      tags: ["Next.js", "Full-Stack", "Modern Web Architecture", "Freelance"]
    }
  ],

  // 8. Why Work With Me (Trust Pillars)
  whyWorkWithMe: [
    {
      title: "Modern & Clean Design",
      desc: "Every website is crafted with a contemporary aesthetic, balanced whitespace, and purposeful visual hierarchy that makes your brand look elite.",
      icon: "sparkles"
    },
    {
      title: "Responsive on Every Device",
      desc: "Flawless rendering across smartphones, tablets, laptops, and ultra-wide desktops. Your users get a premium experience anywhere.",
      icon: "smartphone"
    },
    {
      title: "User-Friendly Experience",
      desc: "Intuitive navigation, frictionless forms, and crystal-clear layouts designed to guide your visitors directly toward taking action.",
      icon: "smile"
    },
    {
      title: "Customized Solutions",
      desc: "No cookie-cutter shortcuts. Every solution is custom-coded and tailored specifically around your business goals and audience needs.",
      icon: "sliders"
    },
    {
      title: "Attention to Detail",
      desc: "Micro-interactions, smooth hover states, performance optimization, and clean semantic code crafted with meticulous care.",
      icon: "check-circle-2"
    },
    {
      title: "Clear Communication",
      desc: "Transparent milestone updates, reliable turnaround times, and direct consultation throughout the entire development process.",
      icon: "message-square"
    }
  ],

  // 9. Testimonials (Client Reviews - Editable Placeholders)
  testimonials: [
    {
      quote: "Abdur Raheem exceeded our expectations. He built our online watch store with incredible precision, fast loading speeds, and an intuitive checkout flow that our customers love.",
      name: "Tariq Mansoor",
      role: "Founder, ChronoVibe Watches",
      company: "E-Commerce Client",
      rating: 5,
      avatarInitials: "TM"
    },
    {
      quote: "Working with Abdur Raheem was seamless from day one. He redesigned our company website into a modern, responsive showcase that has already doubled our inbound client inquiries.",
      name: "Sophia Martinez",
      role: "Marketing Director",
      company: "Vanguard Design Studio",
      rating: 5,
      avatarInitials: "SM"
    },
    {
      quote: "High attention to detail, proactive communication, and clean modern code. The landing page he created for our product launch had stellar conversions and worked flawlessly on all mobile devices.",
      name: "Liam O'Connor",
      role: "Product Lead",
      company: "NovaTech Solutions",
      rating: 5,
      avatarInitials: "LO"
    }
  ]
};
