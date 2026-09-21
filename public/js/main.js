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
   * Render Technical Skills Section
   */
  static renderSkills() {
    const container = document.getElementById("skillsGrid");
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.skills.map((skill) => {
      return `
        <div class="glass-card p-4 sm:p-5 rounded-xl border border-slate-800 flex flex-col justify-between group">
          <div class="space-y-3">
            <div class="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              <i data-lucide="${skill.icon}" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="flex items-center justify-between gap-1">
                <h3 class="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors">${skill.name}</h3>
              </div>
              <p class="text-[11px] font-mono-code text-indigo-400 uppercase tracking-wider mt-0.5">${skill.category}</p>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed">${skill.desc}</p>
          </div>
          <div class="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
            <span class="text-slate-500">Proficiency</span>
            <span class="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-medium">${skill.level}</span>
          </div>
        </div>
      `;
    }).join("");
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

// Start application when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  PortfolioApp.init();
});
