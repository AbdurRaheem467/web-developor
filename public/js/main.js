/**
 * MAIN JAVASCRIPT APPLICATION COORDINATOR
 * ==============================================================================
 * Handles dynamic rendering from portfolio-data.js, interactive state,
 * project filtering, project details modal, mobile navigation drawer,
 * scroll-spy, and contact form validation.
 * ==============================================================================
 */

import { PORTFOLIO_DATA } from "./portfolio-data.js";

class PortfolioApp {
  static init() {
    console.log(`%c🚀 Abdur Raheem | Web Developer & Designer Portfolio`, "color: #6366f1; font-size: 16px; font-weight: bold;");
    console.log(`%cNeed a custom website? Let's talk: ${PORTFOLIO_DATA.contact.email}`, "color: #06b6d4; font-size: 12px;");

    // 1. Render all dynamic components
    this.renderStats();
    this.renderSkills();
    this.renderServices();
    this.renderProjects("all");
    this.renderTimeline();
    this.renderWhyWorkWithMe();
    this.renderTestimonials();

    // 2. Initialize Lucide icons
    this.refreshIcons();

    // 3. Set up event listeners
    this.setupNavbarScroll();
    this.setupScrollSpy();
    this.setupMobileMenu();
    this.setupSkillsSlider();
    this.setupProjectFilters();
    this.setupProjectModal();
    this.setupContactForm();
    this.setupServiceQuickInquiries();
  }

  /**
   * Refreshes Lucide Icons across the DOM
   */
  static refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  /**
   * Render Stats in the About Section
   */
  static renderStats() {
    const container = document.getElementById("statsContainer");
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.stats.map((stat, idx) => {
      const colors = ["text-indigo-400", "text-cyan-400", "text-emerald-400", "text-amber-400"];
      const color = colors[idx % colors.length];
      return `
        <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center hover:border-slate-700 transition-colors">
          <div class="font-display text-3xl sm:text-4xl font-bold ${color}">${stat.number}${stat.suffix}</div>
          <div class="text-xs font-medium text-slate-400 mt-1">${stat.label}</div>
        </div>
      `;
    }).join("");
  }

  /**
   * Render Technical Skills Section in Interactive 3D Stack Deck format
   */
  static renderSkills() {
    const viewport = document.getElementById("stackDeckViewport");
    const gridTrack = document.getElementById("skillsGridTrack");
    const pillsTrack = document.getElementById("skillsPillsTrack");
    if (!viewport) return;

    const categoryThemeMap = {
      "Frontend Core": {
        badgeBg: "bg-cyan-950/80 text-cyan-300 border-cyan-800/60",
        iconBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black group-hover:shadow-[0_0_25px_rgba(6,182,212,0.7)]",
        accentText: "text-cyan-400",
        barColor: "from-cyan-500 to-blue-500"
      },
      "Frameworks": {
        badgeBg: "bg-indigo-950/80 text-indigo-300 border-indigo-800/60",
        iconBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(99,102,241,0.7)]",
        accentText: "text-indigo-400",
        barColor: "from-indigo-500 to-purple-500"
      },
      "Workflow": {
        badgeBg: "bg-amber-950/80 text-amber-300 border-amber-800/60",
        iconBg: "bg-amber-500/10 border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:shadow-[0_0_25px_rgba(245,158,11,0.7)]",
        accentText: "text-amber-400",
        barColor: "from-amber-500 to-orange-500"
      },
      "Design & UX": {
        badgeBg: "bg-emerald-950/80 text-emerald-300 border-emerald-800/60",
        iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black group-hover:shadow-[0_0_25px_rgba(16,185,129,0.7)]",
        accentText: "text-emerald-400",
        barColor: "from-emerald-500 to-teal-500"
      }
    };

    const skillMetadata = {
      "HTML5": { pct: 95, tags: ["Semantic HTML", "W3C Standards", "SEO", "Accessibility"] },
      "CSS3": { pct: 92, tags: ["Flexbox & Grid", "Keyframes", "Custom Properties", "Responsive"] },
      "JavaScript": { pct: 90, tags: ["ES6+ Modern", "Async / Await", "DOM Engine", "Fetch & APIs"] },
      "React": { pct: 88, tags: ["Components", "Hooks", "State Flow", "Virtual DOM"] },
      "Next.js": { pct: 85, tags: ["App Router", "SSR / SSG", "Server Actions", "Vercel Deploy"] },
      "Tailwind CSS": { pct: 94, tags: ["Design Systems", "Dark Mode", "Fluid Layouts", "JIT Engine"] },
      "Git & GitHub": { pct: 86, tags: ["Branch Flow", "Pull Requests", "CI / CD", "Version Control"] },
      "Responsive Web Design": { pct: 98, tags: ["Mobile-First", "Fluid Typography", "Cross-Browser", "Retina Ready"] },
      "UI/UX Design": { pct: 88, tags: ["Wireframing", "Figma Flow", "Visual Balance", "Micro-Interactions"] },
      "API Integration": { pct: 87, tags: ["REST APIs", "JSON Endpoints", "Webhook Handlers", "Auth Tokens"] }
    };

    // 1. Render 3D Stack Cards
    viewport.innerHTML = PORTFOLIO_DATA.skills.map((skill, index) => {
      const theme = categoryThemeMap[skill.category] || categoryThemeMap["Frontend Core"];
      const meta = skillMetadata[skill.name] || { pct: 90, tags: ["Modern Standards", "Clean Code"] };
      const depth = index === 0 ? "0" : index <= 3 ? String(index) : "hidden";

      const tagsHtml = meta.tags.map(t => `
        <span class="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300">
          #${t}
        </span>
      `).join("");

      return `
        <div class="stack-card group" data-card-index="${index}" data-depth="${depth}">
          <!-- Dynamic 3D Glare Reflection Layer -->
          <div class="skill-3d-glare"></div>

          <div class="space-y-4">
            <!-- Top Row: Icon + Badges + Index -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl ${theme.iconBg} border flex items-center justify-center transition-all duration-300">
                  <i data-lucide="${skill.icon}" class="w-6 h-6"></i>
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <h3 class="text-xl font-display font-bold text-white group-hover:${theme.accentText} transition-colors tracking-tight">
                      ${skill.name}
                    </h3>
                  </div>
                  <span class="text-[10px] font-mono-code font-semibold px-2 py-0.5 rounded-full ${theme.badgeBg} border uppercase tracking-wider inline-block mt-0.5">
                    ${skill.category}
                  </span>
                </div>
              </div>

              <div class="text-right">
                <span class="text-xs font-mono-code text-slate-500 font-bold block">#0${index + 1} / 10</span>
                <span class="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 font-mono-code text-[11px] font-medium shadow-inner inline-block mt-1">
                  ${skill.level}
                </span>
              </div>
            </div>

            <!-- Description -->
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              ${skill.desc}
            </p>

            <!-- Feature Tags -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              ${tagsHtml}
            </div>
          </div>

          <!-- Bottom Row: Animated Proficiency Meter & Prompt -->
          <div class="pt-4 mt-2 border-t border-slate-800/80 space-y-2">
            <div class="flex items-center justify-between text-xs font-mono-code">
              <span class="text-slate-400">Mastery & Efficiency</span>
              <span class="text-white font-bold">${meta.pct}%</span>
            </div>
            
            <div class="w-full h-2 rounded-full bg-slate-950 border border-slate-800 overflow-hidden p-0.5">
              <div class="h-full rounded-full bg-gradient-to-r ${theme.barColor} transition-all duration-700" style="width: ${meta.pct}%"></div>
            </div>

            <div class="flex items-center justify-between pt-1 text-[11px] text-slate-500 font-mono-code">
              <span class="flex items-center gap-1">
                <i data-lucide="sparkles" class="w-3 h-3 text-cyan-400"></i>
                <span>3+ Years Practical Usage</span>
              </span>
              <span class="hidden sm:inline-block text-slate-500">Tap to flip &rarr;</span>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // 2. Render Grid Mode Cards (Alternative View)
    if (gridTrack) {
      gridTrack.innerHTML = PORTFOLIO_DATA.skills.map((skill, index) => {
        const theme = categoryThemeMap[skill.category] || categoryThemeMap["Frontend Core"];
        const meta = skillMetadata[skill.name] || { pct: 90, tags: [] };
        return `
          <div class="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="w-10 h-10 rounded-xl ${theme.iconBg} border flex items-center justify-center transition-all duration-300">
                  <i data-lucide="${skill.icon}" class="w-5 h-5"></i>
                </div>
                <span class="text-[10px] font-mono-code px-2 py-0.5 rounded-full ${theme.badgeBg} border uppercase">
                  ${skill.category}
                </span>
              </div>
              <div>
                <h3 class="text-base font-bold text-white group-hover:${theme.accentText} transition-colors">${skill.name}</h3>
                <p class="text-xs text-slate-400 leading-relaxed mt-1">${skill.desc}</p>
              </div>
            </div>
            <div class="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span class="text-slate-500">Proficiency</span>
              <span class="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-mono-code text-[11px]">${skill.level} (${meta.pct}%)</span>
            </div>
          </div>
        `;
      }).join("");
    }

    // 3. Render Quick Jump Tech Pills
    if (pillsTrack) {
      pillsTrack.innerHTML = PORTFOLIO_DATA.skills.map((skill, idx) => `
        <button type="button" class="skill-pill-btn ${idx === 0 ? "active" : ""}" data-index="${idx}" aria-label="Jump to ${skill.name}">
          <i data-lucide="${skill.icon}" class="w-3.5 h-3.5"></i>
          <span>${skill.name}</span>
        </button>
      `).join("");
    }
  }

  /**
   * Render Services Section
   */
  static renderServices() {
    const container = document.getElementById("servicesGrid");
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.services.map((service) => {
      const deliverablesList = service.deliverables.map(d => `
        <li class="flex items-center gap-2 text-xs text-slate-300">
          <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400 shrink-0"></i>
          <span>${d}</span>
        </li>
      `).join("");

      return `
        <div class="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 flex flex-col justify-between group">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <i data-lucide="${service.icon}" class="w-6 h-6"></i>
              </div>
              <span class="text-[11px] font-mono-code font-semibold px-2.5 py-1 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 uppercase">
                ${service.badge}
              </span>
            </div>

            <div>
              <h3 class="font-display text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">${service.title}</h3>
              <p class="text-xs sm:text-sm text-slate-300 font-medium mt-1 leading-snug">${service.shortDesc}</p>
            </div>

            <p class="text-xs text-slate-400 leading-relaxed">${service.longDesc}</p>

            <div class="pt-2">
              <p class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">What's Included:</p>
              <ul class="space-y-1.5">
                ${deliverablesList}
              </ul>
            </div>
          </div>

          <div class="pt-6 mt-6 border-t border-slate-800/80">
            <button data-service-id="${service.id}" class="inquire-service-btn w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-indigo-500/60 text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all">
              <span>Inquire About This Service</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  /**
   * Render Projects Grid (with category filtering)
   */
  static renderProjects(filterCategory = "all") {
    const container = document.getElementById("projectsGrid");
    if (!container) return;

    const filtered = filterCategory === "all" 
      ? PORTFOLIO_DATA.projects 
      : PORTFOLIO_DATA.projects.filter(p => p.filterCategory === filterCategory);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400">
          <p class="text-base font-semibold">No projects found in this category.</p>
          <button data-filter="all" class="project-filter-btn mt-3 text-xs text-indigo-400 underline">View all projects</button>
        </div>
      `;
      this.refreshIcons();
      return;
    }

    container.innerHTML = filtered.map((project) => {
      const tagsList = project.tags.slice(0, 3).map(tag => `
        <span class="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">${tag}</span>
      `).join("");

      const isWatchStore = project.id === "watch-store";
      const liveBtnText = isWatchStore ? "Watch Store Poster & Demo" : "Live Demo";

      return `
        <article class="glass-card project-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group">
          <!-- Image Mockup Frame -->
          <div class="relative project-card-image aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-800/80">
            <img src="${project.image}" alt="${project.title} Screenshot" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60"></div>
            
            <!-- Category Tag -->
            <div class="absolute top-3 left-3">
              <span class="text-[10px] font-mono-code uppercase font-semibold px-2.5 py-1 rounded-full bg-slate-950/80 text-cyan-300 border border-cyan-800/60 backdrop-blur-md">
                ${project.category}
              </span>
            </div>

            ${project.featured ? `
              <div class="absolute top-3 right-3">
                <span class="text-[10px] font-mono-code uppercase font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                  ★ Featured
                </span>
              </div>
            ` : ""}
          </div>

          <!-- Project Card Content -->
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <h3 class="font-display text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                ${project.title}
              </h3>
              <p class="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                ${project.shortDesc}
              </p>
            </div>

            <!-- Tech Tags -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              ${tagsList}
            </div>

            <!-- Card Actions -->
            <div class="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2">
              <a href="${project.liveDemoUrl}" target="${project.liveDemoUrl.startsWith('#') ? '_self' : '_blank'}" rel="noopener noreferrer" class="btn-primary py-2 px-3 rounded-lg text-xs font-semibold text-white flex items-center justify-center gap-1.5 shadow-sm">
                <span>${liveBtnText}</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              </a>
              <button data-project-id="${project.id}" class="view-project-details-btn btn-secondary py-2 px-3 rounded-lg text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-1.5">
                <span>View Details</span>
                <i data-lucide="info" class="w-3.5 h-3.5 text-indigo-400"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    this.refreshIcons();
  }

  /**
   * Render Journey / Timeline Section
   */
  static renderTimeline() {
    const container = document.getElementById("timelineContainer");
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.milestones.map((m, idx) => {
      const isEven = idx % 2 === 0;

      const tags = m.tags.map(t => `
        <span class="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">${t}</span>
      `).join("");

      return `
        <div class="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
          
          <!-- Node Dot on Timeline -->
          <div class="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 w-10 h-10 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/20 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
            <i data-lucide="${m.icon}" class="w-4 h-4"></i>
          </div>

          <!-- Left / Right Content Placement for Desktop -->
          <div class="w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'} pl-12 md:pl-0">
            <div class="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-2">
              <span class="text-[11px] font-mono-code font-bold uppercase tracking-wider text-cyan-400">${m.period}</span>
              <h3 class="font-display text-lg font-bold text-white">${m.title}</h3>
              <p class="text-xs font-semibold text-indigo-300">${m.role}</p>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">${m.description}</p>
              <div class="flex flex-wrap gap-1.5 pt-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}">
                ${tags}
              </div>
            </div>
          </div>

        </div>
      `;
    }).join("");
  }

  /**
   * Render Why Work With Me Section
   */
  static renderWhyWorkWithMe() {
    const container = document.getElementById("whyMeGrid");
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.whyWorkWithMe.map((item) => {
      return `
        <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-3 group text-left">
          <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
            <i data-lucide="${item.icon}" class="w-5 h-5"></i>
          </div>
          <h3 class="font-display text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">${item.title}</h3>
          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">${item.desc}</p>
        </div>
      `;
    }).join("");
  }

  /**
   * Render Client Testimonials
   */
  static renderTestimonials() {
    const container = document.getElementById("testimonialsGrid");
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.testimonials.map((t) => {
      return `
        <div class="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6 text-left">
          <div class="space-y-3">
            <div class="flex items-center gap-1 text-amber-400">
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            </div>
            <p class="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
              "${t.quote}"
            </p>
          </div>

          <div class="flex items-center gap-3 pt-4 border-t border-slate-800/80">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-600 text-white font-bold text-xs flex items-center justify-center">
              ${t.avatarInitials}
            </div>
            <div>
              <h4 class="text-sm font-bold text-white">${t.name}</h4>
              <p class="text-xs text-slate-400">${t.role} • <span class="text-indigo-400">${t.company}</span></p>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  /**
   * Navbar blur & style adjustments on scroll
   */
  static setupNavbarScroll() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        navbar.classList.add("bg-[#07090e]/95", "shadow-xl", "py-1");
        navbar.classList.remove("py-0");
      } else {
        navbar.classList.remove("bg-[#07090e]/95", "shadow-xl", "py-1");
      }
    });
  }

  /**
   * ScrollSpy to highlight active link
   */
  static setupScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
      let currentSectionId = "";
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSectionId = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("text-white", "bg-slate-800/80");
        link.classList.add("text-slate-300");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("text-white", "bg-slate-800/80");
          link.classList.remove("text-slate-300");
        }
      });
    });
  }

  /**
   * Mobile Hamburger Menu toggle and close logic
   */
  static setupMobileMenu() {
    const menuBtn = document.getElementById("mobileMenuBtn");
    const drawer = document.getElementById("mobileMenuDrawer");
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const closeIcon = document.getElementById("closeIcon");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    if (!menuBtn || !drawer) return;

    const toggleMenu = () => {
      const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!isExpanded));
      drawer.classList.toggle("hidden");
      hamburgerIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    };

    menuBtn.addEventListener("click", toggleMenu);

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (!drawer.classList.contains("hidden")) {
          toggleMenu();
        }
      });
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !drawer.classList.contains("hidden")) {
        toggleMenu();
      }
    });
  }

  /**
   * Project category filtering
   */
  static setupProjectFilters() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".project-filter-btn");
      if (!btn) return;

      const filter = btn.getAttribute("data-filter");
      document.querySelectorAll(".project-filter-btn").forEach((b) => {
        b.classList.remove("bg-indigo-600", "text-white");
        b.classList.add("text-slate-400");
      });

      btn.classList.add("bg-indigo-600", "text-white");
      btn.classList.remove("text-slate-400");

      this.renderProjects(filter);
    });
  }

  /**
   * Setup Project Details Modal
   */
  static setupProjectModal() {
    const modal = document.getElementById("projectModal");
    const backdrop = document.getElementById("modalBackdrop");
    const closeBtn = document.getElementById("closeModalBtn");

    const modalTitle = document.getElementById("modalProjectTitle");
    const modalDesc = document.getElementById("modalProjectDesc");
    const modalImg = document.getElementById("modalProjectImg");
    const modalCategory = document.getElementById("modalCategoryBadge");
    const modalYear = document.getElementById("modalYearBadge");
    const modalFeatures = document.getElementById("modalFeaturesList");
    const modalTags = document.getElementById("modalTagsContainer");
    const modalLiveBtn = document.getElementById("modalLiveDemoBtn");
    const modalGithubBtn = document.getElementById("modalGithubBtn");

    if (!modal) return;

    const closeModal = () => {
      modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    };

    const openModal = (projectId) => {
      const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
      if (!project) return;

      modalTitle.textContent = project.title;
      modalDesc.textContent = project.fullDesc || project.shortDesc;
      modalImg.src = project.image;
      modalCategory.textContent = project.category;
      modalYear.textContent = project.year || "2026";

      // Render features
      modalFeatures.innerHTML = (project.features || []).map(f => `
        <li class="flex items-start gap-2">
          <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
          <span>${f}</span>
        </li>
      `).join("");

      // Render tags
      modalTags.innerHTML = (project.tags || []).map(t => `
        <span class="text-xs font-mono-code px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-indigo-300">${t}</span>
      `).join("");

      // Buttons
      modalLiveBtn.href = project.liveDemoUrl || "#";
      if (project.liveDemoUrl.startsWith("#")) {
        modalLiveBtn.removeAttribute("target");
      } else {
        modalLiveBtn.setAttribute("target", "_blank");
      }

      modalGithubBtn.href = project.githubUrl || "https://github.com/AbdurRaheem467";

      this.refreshIcons();
      modal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    };

    // Click on View Details button
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".view-project-details-btn");
      if (btn) {
        const id = btn.getAttribute("data-project-id");
        openModal(id);
      }
    });

    closeBtn?.addEventListener("click", closeModal);
    backdrop?.addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });
  }

  /**
   * Service Card "Inquire" button triggers smooth scroll and selects option in form
   */
  static setupServiceQuickInquiries() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".inquire-service-btn");
      if (!btn) return;

      const serviceId = btn.getAttribute("data-service-id");
      const projectTypeSelect = document.getElementById("projectType");
      if (projectTypeSelect && serviceId) {
        projectTypeSelect.value = serviceId;
      }

      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        const nameInput = document.getElementById("fullName");
        setTimeout(() => nameInput?.focus(), 600);
      }
    });
  }

  /**
   * Contact Form Validation & Simulated Submission
   */
  static setupContactForm() {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    const submitBtn = document.getElementById("submitBtn");
    const submitBtnText = document.getElementById("submitBtnText");
    const submitBtnIcon = document.getElementById("submitBtnIcon");
    const submitBtnSpinner = document.getElementById("submitBtnSpinner");

    const successMessage = document.getElementById("formSuccessMessage");
    const successSenderName = document.getElementById("successSenderName");
    const resetFormBtn = document.getElementById("resetFormBtn");

    if (!form) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError?.classList.remove("hidden");
        nameInput.classList.add("border-rose-500");
        isValid = false;
      } else {
        nameError?.classList.add("hidden");
        nameInput.classList.remove("border-rose-500");
      }

      // Validate Email
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailError?.classList.remove("hidden");
        emailInput.classList.add("border-rose-500");
        isValid = false;
      } else {
        emailError?.classList.add("hidden");
        emailInput.classList.remove("border-rose-500");
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 8) {
        messageError?.classList.remove("hidden");
        messageInput.classList.add("border-rose-500");
        isValid = false;
      } else {
        messageError?.classList.add("hidden");
        messageInput.classList.remove("border-rose-500");
      }

      if (!isValid) return;

      // Loading state
      submitBtnText.textContent = "Sending Message...";
      submitBtnIcon.classList.add("hidden");
      submitBtnSpinner.classList.remove("hidden");
      submitBtn.disabled = true;

      setTimeout(() => {
        // Restore button
        submitBtnText.textContent = "Send Message";
        submitBtnIcon.classList.remove("hidden");
        submitBtnSpinner.classList.add("hidden");
        submitBtn.disabled = false;

        // Populate name in success overlay
        if (successSenderName) {
          successSenderName.textContent = nameInput.value.trim();
        }

        // Show success confirmation overlay
        successMessage?.classList.remove("hidden");
        PortfolioApp.refreshIcons();

        // Clear form values
        form.reset();
      }, 900);
    });

    // Reset button
    resetFormBtn?.addEventListener("click", () => {
      successMessage?.classList.add("hidden");
    });
  }

  /**
   * Set up 3D Interactive Stack Deck Carousel
   */
  static setupSkillsSlider() {
    const viewport = document.getElementById("stackDeckViewport");
    const stage = document.getElementById("stackDeckStage");
    if (!viewport || !stage) return;

    window.skills3DStack = new Skills3DStackController();
  }

  /**
   * Helper to display a lightweight toast notification
   */
  static showToast(message) {
    const toast = document.getElementById("toastNotification");
    const toastMessage = document.getElementById("toastMessage");
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.remove("opacity-0", "translate-y-20", "pointer-events-none");

    setTimeout(() => {
      toast.classList.add("opacity-0", "translate-y-20", "pointer-events-none");
    }, 3200);
  }
}

/**
 * INTERACTIVE 3D STACK DECK CAROUSEL CONTROLLER
 * ==============================================================================
 * Positions 10 skills in a neat, layered 3D card deck with smooth spring physics,
 * horizontal mouse/touch drag gestures, auto-slide progress, and quick-jump pills.
 * ==============================================================================
 */
class Skills3DStackController {
  constructor() {
    this.viewport = document.getElementById("stackDeckViewport");
    this.stage = document.getElementById("stackDeckStage");
    this.viewWrapper = document.getElementById("cylinderViewWrapper");
    this.gridWrapper = document.getElementById("cylinderGridWrapper");
    this.prevBtn = document.getElementById("skillsPrevBtn");
    this.nextBtn = document.getElementById("skillsFlipNextBtn");
    this.autoplayBtn = document.getElementById("skillsAutoplayBtn");
    this.playIcon = document.getElementById("skillsPlayIcon");
    this.pulseDot = document.getElementById("skillsAutoplayPulse");
    this.statusText = document.getElementById("skillsAutoplayStatus");
    this.focusedNameEl = document.getElementById("currentCardName");
    this.slideNumEl = document.getElementById("currentSlideNum");
    this.pillsTrack = document.getElementById("skillsPillsTrack");
    this.progressBar = document.getElementById("stackProgressFill");
    this.modeSphereBtn = document.getElementById("modeSphereBtn");
    this.modeGridBtn = document.getElementById("modeGridBtn");

    this.cards = Array.from(this.viewport.querySelectorAll(".stack-card"));
    this.totalCards = this.cards.length;
    this.currentIndex = 0;
    this.isAnimating = false;
    this.isAutoSpinning = true;
    this.autoIntervalTime = 4200; // 4.2s per card
    this.timerStartTime = Date.now();
    this.progressFrameId = null;
    this.isHovered = false;
    this.isDragging = false;
    this.startX = 0;
    this.currentDragX = 0;
    this.isGridMode = false;

    this.init();
  }

  init() {
    this.updateStackPositions();
    this.bindEvents();
    this.startProgressTimer();
  }

  updateStackPositions() {
    this.cards.forEach((card, idx) => {
      const offset = (idx - this.currentIndex + this.totalCards) % this.totalCards;
      
      card.classList.remove("is-exiting-left", "is-exiting-right");

      if (offset === 0) {
        card.setAttribute("data-depth", "0");
        this.setupFrontCardTilt(card);
      } else if (offset === 1) {
        card.setAttribute("data-depth", "1");
        this.clearCardTilt(card);
      } else if (offset === 2) {
        card.setAttribute("data-depth", "2");
        this.clearCardTilt(card);
      } else if (offset === 3) {
        card.setAttribute("data-depth", "3");
        this.clearCardTilt(card);
      } else {
        card.setAttribute("data-depth", "hidden");
        this.clearCardTilt(card);
      }
    });

    // Update Counter & Focused Name
    if (this.focusedNameEl && PORTFOLIO_DATA.skills[this.currentIndex]) {
      this.focusedNameEl.textContent = PORTFOLIO_DATA.skills[this.currentIndex].name;
    }
    if (this.slideNumEl) {
      this.slideNumEl.textContent = String(this.currentIndex + 1).padStart(2, "0");
    }

    // Update Quick Jump Pills
    const pills = this.pillsTrack?.querySelectorAll(".skill-pill-btn");
    pills?.forEach((pill, idx) => {
      pill.classList.toggle("active", idx === this.currentIndex);
    });

    // Reset timer
    this.timerStartTime = Date.now();
  }

  flipNext() {
    if (this.isAnimating || this.totalCards <= 1) return;
    this.isAnimating = true;

    const currentCard = this.cards[this.currentIndex];
    currentCard.classList.add("is-exiting-left");

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.totalCards;
      this.updateStackPositions();
      this.isAnimating = false;
    }, 280);
  }

  flipPrev() {
    if (this.isAnimating || this.totalCards <= 1) return;
    this.isAnimating = true;

    const prevIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
    const prevCard = this.cards[prevIndex];
    prevCard.classList.add("is-exiting-right");

    this.currentIndex = prevIndex;
    this.updateStackPositions();

    setTimeout(() => {
      this.isAnimating = false;
    }, 400);
  }

  jumpToCard(targetIndex) {
    if (this.isAnimating || targetIndex === this.currentIndex) return;
    this.isAnimating = true;

    const currentCard = this.cards[this.currentIndex];
    currentCard.classList.add("is-exiting-left");

    setTimeout(() => {
      this.currentIndex = targetIndex;
      this.updateStackPositions();
      this.isAnimating = false;
    }, 260);
  }

  startProgressTimer() {
    const loop = () => {
      if (!this.isGridMode && this.isAutoSpinning && !this.isHovered && !this.isDragging) {
        const elapsed = Date.now() - this.timerStartTime;
        const progress = Math.min((elapsed / this.autoIntervalTime) * 100, 100);
        
        if (this.progressBar) {
          this.progressBar.style.width = `${progress}%`;
        }

        if (elapsed >= this.autoIntervalTime) {
          this.flipNext();
        }
      } else if (this.isHovered || this.isDragging || !this.isAutoSpinning) {
        this.timerStartTime = Date.now();
      }

      this.progressFrameId = requestAnimationFrame(loop);
    };

    if (this.progressFrameId) cancelAnimationFrame(this.progressFrameId);
    this.progressFrameId = requestAnimationFrame(loop);
  }

  toggleAutoSpin() {
    this.isAutoSpinning = !this.isAutoSpinning;
    if (this.pulseDot) {
      this.pulseDot.className = this.isAutoSpinning ? "w-2 h-2 rounded-full bg-cyan-400 animate-pulse" : "w-2 h-2 rounded-full bg-slate-500";
    }
    if (this.statusText) {
      this.statusText.textContent = this.isAutoSpinning ? "3D Auto-Stack: Active" : "3D Auto-Stack: Paused";
    }
    if (this.playIcon) {
      this.playIcon.setAttribute("data-lucide", this.isAutoSpinning ? "pause" : "play");
      PortfolioApp.refreshIcons();
    }
    this.timerStartTime = Date.now();
  }

  setupFrontCardTilt(card) {
    const glare = card.querySelector(".skill-3d-glare");

    const onMouseMove = (e) => {
      if (this.isDragging) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const tiltX = ((y - centerY) / centerY) * -9;
      const tiltY = ((x - centerX) / centerX) * 9;

      card.style.transform = `translate3d(0, 0, 0) rotateX(${tiltX.toFixed(1)}deg) rotateY(${tiltY.toFixed(1)}deg) scale(1.01)`;

      if (glare) {
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.22), transparent 60%)`;
        glare.style.opacity = "1";
      }
    };

    const onMouseLeave = () => {
      if (this.isDragging) return;
      card.style.transform = "";
      if (glare) glare.style.opacity = "0";
    };

    card.onmousemove = onMouseMove;
    card.onmouseleave = onMouseLeave;
  }

  clearCardTilt(card) {
    card.onmousemove = null;
    card.onmouseleave = null;
    card.style.transform = "";
    const glare = card.querySelector(".skill-3d-glare");
    if (glare) glare.style.opacity = "0";
  }

  bindEvents() {
    // 1. Buttons
    this.nextBtn?.addEventListener("click", () => this.flipNext());
    this.prevBtn?.addEventListener("click", () => this.flipPrev());
    this.autoplayBtn?.addEventListener("click", () => this.toggleAutoSpin());

    // 2. Pause on hover
    this.viewport?.addEventListener("mouseenter", () => {
      this.isHovered = true;
    });

    this.viewport?.addEventListener("mouseleave", () => {
      this.isHovered = false;
      this.timerStartTime = Date.now();
    });

    // 3. Click front or layer cards to flip
    this.viewport?.addEventListener("click", (e) => {
      if (this.isDragging) return;
      const card = e.target.closest(".stack-card");
      if (!card) return;

      const depth = card.getAttribute("data-depth");
      if (depth === "1" || depth === "0") {
        this.flipNext();
      } else if (depth === "2") {
        this.flipNext();
        setTimeout(() => this.flipNext(), 300);
      }
    });

    // 4. Quick Jump Pills
    this.pillsTrack?.addEventListener("click", (e) => {
      const pill = e.target.closest(".skill-pill-btn");
      if (!pill) return;
      const index = parseInt(pill.getAttribute("data-index"), 10);
      if (!isNaN(index)) {
        this.jumpToCard(index);
      }
    });

    // 5. Keyboard Arrow Keys
    window.addEventListener("keydown", (e) => {
      const rect = this.stage?.getBoundingClientRect();
      if (!rect) return;
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!isVisible || this.isGridMode) return;

      if (e.key === "ArrowRight") {
        this.flipNext();
      } else if (e.key === "ArrowLeft") {
        this.flipPrev();
      }
    });

    // 6. Touch & Pointer Drag Gestures
    const handleDragStart = (clientX) => {
      if (this.isGridMode || this.isAnimating) return;
      this.isDragging = true;
      this.startX = clientX;
      this.currentDragX = 0;
    };

    const handleDragMove = (clientX) => {
      if (!this.isDragging || this.isGridMode) return;
      this.currentDragX = clientX - this.startX;
      const frontCard = this.cards[this.currentIndex];
      if (frontCard) {
        const rot = this.currentDragX * 0.06;
        frontCard.style.transform = `translate3d(${this.currentDragX}px, 0, 0) rotate(${rot}deg) scale(1)`;
      }
    };

    const handleDragEnd = () => {
      if (!this.isDragging) return;
      this.isDragging = false;
      const frontCard = this.cards[this.currentIndex];

      if (this.currentDragX < -65) {
        this.flipNext();
      } else if (this.currentDragX > 65) {
        this.flipPrev();
      } else if (frontCard) {
        frontCard.style.transform = "";
      }
      this.currentDragX = 0;
    };

    this.viewport?.addEventListener("mousedown", (e) => handleDragStart(e.clientX));
    window.addEventListener("mousemove", (e) => handleDragMove(e.clientX));
    window.addEventListener("mouseup", () => handleDragEnd());

    this.viewport?.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) handleDragStart(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (this.isDragging && e.touches.length === 1) handleDragMove(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("touchend", () => handleDragEnd());

    // 7. View Mode Switcher
    this.modeSphereBtn?.addEventListener("click", () => this.setGridMode(false));
    this.modeGridBtn?.addEventListener("click", () => this.setGridMode(true));
  }

  setGridMode(isGrid) {
    this.isGridMode = isGrid;
    if (this.viewWrapper && this.gridWrapper) {
      if (isGrid) {
        this.viewWrapper.classList.add("hidden");
        this.gridWrapper.classList.remove("hidden");
        if (this.modeSphereBtn) this.modeSphereBtn.className = "px-3.5 py-1 rounded-full text-xs font-semibold text-slate-400 hover:text-white transition-all flex items-center gap-1.5";
        if (this.modeGridBtn) this.modeGridBtn.className = "px-3.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white transition-all shadow-sm flex items-center gap-1.5";
      } else {
        this.viewWrapper.classList.remove("hidden");
        this.gridWrapper.classList.add("hidden");
        if (this.modeSphereBtn) this.modeSphereBtn.className = "px-3.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white transition-all shadow-sm flex items-center gap-1.5";
        if (this.modeGridBtn) this.modeGridBtn.className = "px-3.5 py-1 rounded-full text-xs font-semibold text-slate-400 hover:text-white transition-all flex items-center gap-1.5";
        this.updateStackPositions();
      }
    }
  }
}

// Start application when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  PortfolioApp.init();
});


