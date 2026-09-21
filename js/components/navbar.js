/**
 * SoundWave - Header & Navigation Component
 */

import { store } from "../state/store.js";

export class Navbar {
  static render() {
    const cartCount = store.getCartCount();
    const user = store.getUser();

    return `
      <!-- Sticky Main Navigation Header -->
      <header id="main-header" class="sticky top-0 z-50 w-full bg-[#0a0a0d] border-b border-white/10 shadow-2xl transition-all duration-300">
        
        <!-- Top Announcement Bar -->
        <div class="w-full bg-[#121218] border-b border-[#FFC107]/20 text-[11px] py-1.5 px-4 text-center tracking-wider text-zinc-300">
          <div class="max-w-7xl mx-auto flex items-center justify-between">
            <span class="hidden md:inline-flex items-center gap-1.5 text-zinc-400">
              <i data-lucide="truck" class="w-3.5 h-3.5 text-[#FFC107]"></i>
              Free Express Shipping On All Orders Over $50
            </span>
            <span class="mx-auto md:mx-0 flex items-center gap-2 text-zinc-200 font-medium">
              <span class="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse"></span>
              Limited Time Deals — Up to 25% Off Premium Audio
            </span>
            <div class="hidden md:flex items-center gap-4 text-zinc-400">
              <a href="#contact" class="hover:text-[#FFC107] transition-colors">24/7 Support</a>
              <span class="text-zinc-700">|</span>
              <a href="https://wa.me/923354191368" target="_blank" class="hover:text-[#FFC107] transition-colors flex items-center gap-1">
                <i data-lucide="phone" class="w-3 h-3 text-[#FFC107]"></i>
                <span>Helpline: 0335-4191368</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Main Navigation Row -->
        <div class="w-full bg-[#0a0a0d]/95 backdrop-blur-md">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
            
              <!-- Mobile Hamburger Button -->
              <div class="flex items-center lg:hidden">
                <button id="mobile-menu-btn" class="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 focus:outline-none" aria-label="Open Navigation Menu">
                  <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
              </div>

              <!-- Brand Logo (Headphones + SoundWave Title) -->
              <div class="flex items-center gap-3">
                <a href="#home" class="flex items-center gap-3 group">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFC107] to-[#F59E0B] flex items-center justify-center text-black font-bold shadow-[0_0_20px_rgba(255,193,7,0.35)] group-hover:scale-105 transition-transform">
                    <i data-lucide="headphones" class="w-6 h-6 stroke-[2.5]"></i>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-2xl font-extrabold tracking-tight text-white group-hover:text-[#FFC107] transition-colors leading-tight font-sans">
                      Sound<span class="text-[#FFC107]">Wave</span>
                    </span>
                    <span class="text-[9px] uppercase tracking-[0.22em] text-zinc-400 leading-none font-semibold">
                      HEAR MORE. LIVE MORE.
                    </span>
                  </div>
                </a>
              </div>

              <!-- Navigation Links (Centered) -->
              <nav class="hidden lg:flex items-center space-x-8">
                <a href="#home" class="nav-link text-sm font-medium text-white hover:text-[#FFC107] transition-colors py-1 border-b-2 border-transparent" data-route="home">Home</a>
                <a href="#shop" class="nav-link text-sm font-medium text-zinc-300 hover:text-[#FFC107] transition-colors py-1 border-b-2 border-transparent" data-route="shop">Shop</a>
                <a href="#about" class="nav-link text-sm font-medium text-zinc-300 hover:text-[#FFC107] transition-colors py-1 border-b-2 border-transparent" data-route="about">About</a>
                <a href="#faq" class="nav-link text-sm font-medium text-zinc-300 hover:text-[#FFC107] transition-colors py-1 border-b-2 border-transparent" data-route="faq">FAQs</a>
                <a href="#contact" class="nav-link text-sm font-medium text-zinc-300 hover:text-[#FFC107] transition-colors py-1 border-b-2 border-transparent" data-route="contact">Contact</a>
              </nav>

              <!-- Right Actions Icons (Search, Cart, User Account) -->
              <div class="flex items-center gap-5">
                
                <!-- Search Button -->
                <button id="open-search-btn" class="text-zinc-300 hover:text-[#FFC107] transition-colors p-1.5 rounded-lg hover:bg-white/5" title="Search Products">
                  <i data-lucide="search" class="w-5 h-5"></i>
                </button>

                <!-- Shopping Cart Button with Badge -->
                <button id="open-cart-btn" class="relative text-zinc-300 hover:text-[#FFC107] transition-colors p-1.5 rounded-lg hover:bg-white/5" title="Shopping Cart">
                  <i data-lucide="shopping-bag" class="w-5 h-5"></i>
                  <span id="nav-cart-count" class="${cartCount > 0 ? 'scale-100' : 'scale-0'} absolute -top-1 -right-1 bg-[#FFC107] text-black text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 shadow-lg">
                    ${cartCount}
                  </span>
                </button>

                <!-- User Account Button -->
                <a href="${user ? '#account' : '#auth'}" class="text-zinc-300 hover:text-[#FFC107] transition-colors p-1.5 rounded-lg hover:bg-white/5 flex items-center gap-2" title="${user ? user.name : 'Account'}">
                  <i data-lucide="user" class="w-5 h-5"></i>
                </a>

              </div>

            </div>
          </div>
        </div>

        <!-- Mobile Drawer Menu -->
        <div id="mobile-menu-drawer" class="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 transform -translate-x-full transition-transform duration-300 lg:hidden">
          <div class="w-4/5 max-w-sm bg-[#0d0e12] h-full p-6 flex flex-col justify-between border-r border-white/10">
            <div>
              <div class="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-lg bg-[#FFC107] flex items-center justify-center text-black font-bold">
                    <i data-lucide="headphones" class="w-5 h-5"></i>
                  </div>
                  <span class="text-xl font-bold text-white">Sound<span class="text-[#FFC107]">Wave</span></span>
                </div>
                <button id="close-mobile-menu-btn" class="p-2 text-zinc-400 hover:text-white">
                  <i data-lucide="x" class="w-6 h-6"></i>
                </button>
              </div>

              <div class="flex flex-col space-y-4">
                <a href="#home" class="mobile-nav-link text-base font-medium text-white hover:text-[#FFC107] py-2 border-b border-white/5">Home</a>
                <a href="#shop" class="mobile-nav-link text-base font-medium text-zinc-300 hover:text-[#FFC107] py-2 border-b border-white/5">Shop Products</a>
                <a href="#about" class="mobile-nav-link text-base font-medium text-zinc-300 hover:text-[#FFC107] py-2 border-b border-white/5">About SoundWave</a>
                <a href="#faq" class="mobile-nav-link text-base font-medium text-zinc-300 hover:text-[#FFC107] py-2 border-b border-white/5">FAQs & Support</a>
                <a href="#contact" class="mobile-nav-link text-base font-medium text-zinc-300 hover:text-[#FFC107] py-2 border-b border-white/5">Contact Us</a>
              </div>
            </div>

            <div class="pt-6 border-t border-white/10">
              <a href="#shop" class="w-full bg-[#FFC107] text-black font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg">
                <span>Shop Catalog</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </div>

      </header>
    `;
  }

  static setupEvents() {
    // Active link highlighting
    Navbar.updateActiveLink();

    // Mobile drawer toggle
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const closeBtn = document.getElementById("close-mobile-menu-btn");
    const drawer = document.getElementById("mobile-menu-drawer");

    if (mobileBtn && drawer) {
      mobileBtn.addEventListener("click", () => {
        drawer.classList.remove("-translate-x-full");
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener("click", () => {
        drawer.classList.add("-translate-x-full");
      });
    }

    // Close mobile drawer when clicking links
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => {
        if (drawer) drawer.classList.add("-translate-x-full");
      });
    });

    // Header search modal trigger
    const searchBtn = document.getElementById("open-search-btn");
    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        const searchModal = document.getElementById("search-modal");
        if (searchModal) {
          searchModal.classList.remove("hidden");
          const input = document.getElementById("search-input");
          if (input) input.focus();
        }
      });
    }

    // Header cart drawer trigger
    const cartBtn = document.getElementById("open-cart-btn");
    if (cartBtn) {
      cartBtn.addEventListener("click", () => {
        const cartDrawer = document.getElementById("cart-drawer");
        if (cartDrawer) {
          cartDrawer.classList.remove("translate-x-full");
          const overlay = document.getElementById("cart-drawer-overlay");
          if (overlay) overlay.classList.remove("hidden");
        }
      });
    }
  }

  static updateActiveLink() {
    const hash = window.location.hash || "#home";
    const currentRoute = hash.split("?")[0].replace("#", "") || "home";

    document.querySelectorAll(".nav-link").forEach(link => {
      const route = link.getAttribute("data-route");
      if (route === currentRoute) {
        link.classList.add("text-[#FFC107]", "border-[#FFC107]");
        link.classList.remove("text-zinc-300");
      } else {
        link.classList.remove("text-[#FFC107]", "border-[#FFC107]");
        link.classList.add("text-zinc-300");
      }
    });
  }
}
