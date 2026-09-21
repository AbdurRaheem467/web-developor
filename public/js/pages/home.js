/**
 * SoundWave - Homepage Component
 * Recreates the exact layout from the reference image:
 * - Hero Header with Best Seller badge, yellow Earbuds title, 4 feature badges, Shop Now button, customer reviews proof, and hero earbuds image with "Small Size Big Sound" handwriting annotation arrow.
 * - White Trust Banner (Free Shipping, Secure Payments, Easy Returns, 24/7 Support).
 * - OUR BESTSELLERS section ("Top Picks for You") with 4 product cards.
 * - "Why Choose SoundWave?" feature deep dive.
 */

import { PRODUCTS } from "../data/products.js";
import { ProductCard } from "../components/productCard.js";

export class HomePage {
  static render() {
    const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);

    return `
      <div class="w-full overflow-hidden">
        
        <!-- 1. HERO SECTION (Dark Moody Aesthetic with Yellow Spotlight Glow) -->
        <section class="relative bg-[#070709] pt-12 pb-20 lg:pt-16 lg:pb-28 text-white">
          <!-- Background Ambient Glow -->
          <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FFC107]/15 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <!-- Left Column: Copy & Value Proposition -->
              <div class="lg:col-span-7 space-y-6 text-left">
                
                <!-- Best Seller Pill Badge -->
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC107]/15 border border-[#FFC107]/40 text-[#FFC107] text-xs font-bold uppercase tracking-wider">
                  <span>🔥 Best Seller</span>
                </div>

                <!-- Main Hero Headline -->
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                  Premium Wireless <br/>
                  <span class="text-[#FFC107] drop-shadow-[0_0_25px_rgba(255,193,7,0.3)]">Earbuds</span>
                </h1>

                <!-- Subtitle -->
                <p class="text-zinc-300 text-base sm:text-lg max-w-xl leading-relaxed">
                  Crystal clear sound. All-day comfort. <br class="hidden sm:inline"/>
                  Take your music, calls and lifestyle to the next level.
                </p>

                <!-- 4 Feature Badges Grid -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 border-y border-white/10 max-w-2xl">
                  <div class="flex items-center gap-2.5">
                    <div class="p-2 rounded-lg bg-white/5 text-[#FFC107] shrink-0">
                      <i data-lucide="waves" class="w-5 h-5"></i>
                    </div>
                    <span class="text-xs font-semibold text-zinc-200 leading-tight">Hi-Fi Sound Quality</span>
                  </div>

                  <div class="flex items-center gap-2.5">
                    <div class="p-2 rounded-lg bg-white/5 text-[#FFC107] shrink-0">
                      <i data-lucide="battery-charging" class="w-5 h-5"></i>
                    </div>
                    <span class="text-xs font-semibold text-zinc-200 leading-tight">Long Battery Life (Up to 32H)</span>
                  </div>

                  <div class="flex items-center gap-2.5">
                    <div class="p-2 rounded-lg bg-white/5 text-[#FFC107] shrink-0">
                      <i data-lucide="droplets" class="w-5 h-5"></i>
                    </div>
                    <span class="text-xs font-semibold text-zinc-200 leading-tight">Water & Sweat Resistant</span>
                  </div>

                  <div class="flex items-center gap-2.5">
                    <div class="p-2 rounded-lg bg-white/5 text-[#FFC107] shrink-0">
                      <i data-lucide="feather" class="w-5 h-5"></i>
                    </div>
                    <span class="text-xs font-semibold text-zinc-200 leading-tight">Lightweight & Comfortable</span>
                  </div>
                </div>

                <!-- Call To Action Button -->
                <div class="pt-2">
                  <a 
                    href="#shop" 
                    class="inline-flex items-center gap-3 bg-[#FFC107] hover:bg-[#E0A800] text-black font-extrabold text-base px-8 py-4 rounded-full shadow-[0_0_30px_rgba(255,193,7,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>Shop Now</span>
                    <i data-lucide="arrow-right" class="w-5 h-5 stroke-[3]"></i>
                  </a>
                </div>

                <!-- Customer Reviews Proof Row -->
                <div class="flex items-center gap-4 pt-4">
                  <!-- Avatars -->
                  <div class="flex -space-x-2 overflow-hidden">
                    <img class="inline-block h-9 w-9 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Customer 1"/>
                    <img class="inline-block h-9 w-9 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Customer 2"/>
                    <img class="inline-block h-9 w-9 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Customer 3"/>
                    <img class="inline-block h-9 w-9 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Customer 4"/>
                  </div>
                  <!-- Rating Text -->
                  <div class="flex flex-col text-xs">
                    <span class="font-bold text-white text-sm">+10,000 Happy Customers</span>
                    <div class="flex items-center text-[#FFC107]">
                      <i data-lucide="star" class="w-3.5 h-3.5 fill-[#FFC107]"></i>
                      <i data-lucide="star" class="w-3.5 h-3.5 fill-[#FFC107]"></i>
                      <i data-lucide="star" class="w-3.5 h-3.5 fill-[#FFC107]"></i>
                      <i data-lucide="star" class="w-3.5 h-3.5 fill-[#FFC107]"></i>
                      <i data-lucide="star" class="w-3.5 h-3.5 fill-[#FFC107]"></i>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Right Column: Hero Product Showcase Image & Annotation -->
              <div class="lg:col-span-5 relative flex justify-center items-center">
                
                <!-- Product Graphic Container -->
                <div class="relative w-full max-w-lg aspect-square flex items-center justify-center">
                  <img 
                    src="images/products/hero-earbuds.svg" 
                    alt="SoundWave Wireless Earbuds" 
                    class="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                  />

                  <!-- Handwritten Arrow Annotation "Small Size Big Sound" -->
                  <div class="absolute top-12 right-0 sm:-right-4 flex flex-col items-center pointer-events-none select-none z-20">
                    <span class="font-handwriting text-2xl sm:text-3xl text-[#FFC107] font-bold tracking-wide transform -rotate-12 drop-shadow-md">
                      Small Size <br/> Big Sound
                    </span>
                    <!-- Curved Yellow Arrow SVG -->
                    <svg class="w-16 h-16 text-[#FFC107] stroke-current fill-none transform rotate-45 -mt-2" viewBox="0 0 100 100">
                      <path d="M 20 80 Q 50 10 90 40" stroke="#FFC107" stroke-width="4" stroke-linecap="round"/>
                      <path d="M 75 25 L 90 40 L 70 50" stroke="#FFC107" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        <!-- 2. TRUST & VALUE PROPOSITION BANNER (White Strip) -->
        <section class="bg-white border-y border-zinc-200 py-8 text-zinc-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <!-- Item 1 -->
              <div class="flex items-center gap-4 p-3 rounded-xl bg-zinc-50/80 border border-zinc-100">
                <div class="p-3 rounded-xl bg-[#070709] text-[#FFC107]">
                  <i data-lucide="truck" class="w-6 h-6"></i>
                </div>
                <div>
                  <h4 class="font-bold text-sm text-zinc-900">Free Shipping</h4>
                  <p class="text-xs text-zinc-500">On all orders over $50</p>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="flex items-center gap-4 p-3 rounded-xl bg-zinc-50/80 border border-zinc-100">
                <div class="p-3 rounded-xl bg-[#070709] text-[#FFC107]">
                  <i data-lucide="shield-check" class="w-6 h-6"></i>
                </div>
                <div>
                  <h4 class="font-bold text-sm text-zinc-900">Secure Payments</h4>
                  <p class="text-xs text-zinc-500">100% protected checkout</p>
                </div>
              </div>

              <!-- Item 3 -->
              <div class="flex items-center gap-4 p-3 rounded-xl bg-zinc-50/80 border border-zinc-100">
                <div class="p-3 rounded-xl bg-[#070709] text-[#FFC107]">
                  <i data-lucide="rotate-ccw" class="w-6 h-6"></i>
                </div>
                <div>
                  <h4 class="font-bold text-sm text-zinc-900">Easy Returns</h4>
                  <p class="text-xs text-zinc-500">30 days money back</p>
                </div>
              </div>

              <!-- Item 4 -->
              <div class="flex items-center gap-4 p-3 rounded-xl bg-zinc-50/80 border border-zinc-100">
                <div class="p-3 rounded-xl bg-[#070709] text-[#FFC107]">
                  <i data-lucide="headphone-off" class="w-6 h-6"></i>
                </div>
                <div>
                  <h4 class="font-bold text-sm text-zinc-900">24/7 Support</h4>
                  <p class="text-xs text-zinc-500">We're here to help</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- 3. OUR BESTSELLERS SECTION (Light Background with Top Picks Card Grid) -->
        <section class="bg-zinc-100 py-16 lg:py-24 text-zinc-900">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Section Header -->
            <div class="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span class="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                — OUR BESTSELLERS —
              </span>
              <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
                Top Picks for You
              </h2>
              <p class="text-sm text-zinc-600">
                Premium quality. Unbeatable prices. Limited time deals.
              </p>
            </div>

            <!-- Bestsellers 4-Column Product Grid -->
            <div id="bestsellers-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              ${bestSellers.map(product => ProductCard.render(product)).join("")}
            </div>

            <!-- View All Products CTA -->
            <div class="mt-12 text-center">
              <a href="#shop" class="inline-flex items-center gap-2 bg-[#070709] hover:bg-[#FFC107] text-white hover:text-black font-bold text-sm py-3.5 px-8 rounded-full shadow-lg transition-all duration-300">
                <span>View Full Catalog</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>

          </div>
        </section>

        <!-- 4. WHY CHOOSE SOUNDWAVE? SECTION (Dark Interactive Highlights) -->
        <section class="bg-[#0a0a0d] py-20 text-white border-t border-white/10 relative overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Why Choose <span class="text-[#FFC107]">SoundWave</span>?
              </h2>
              <p class="text-zinc-400 text-sm">
                Engineered with cutting-edge audio drivers and acoustic precision for music lovers.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <!-- Card 1 -->
              <div class="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FFC107]/50 transition-all group">
                <div class="w-14 h-14 rounded-2xl bg-[#FFC107]/15 border border-[#FFC107]/30 flex items-center justify-center text-[#FFC107] mb-6 group-hover:scale-110 transition-transform">
                  <i data-lucide="volume-2" class="w-7 h-7"></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-white">42dB Active Noise Cancelling</h3>
                <p class="text-zinc-400 text-sm leading-relaxed">
                  Block out unwanted background noise with hybrid microphones that analyze ambient sound in real time.
                </p>
              </div>

              <!-- Card 2 -->
              <div class="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FFC107]/50 transition-all group">
                <div class="w-14 h-14 rounded-2xl bg-[#FFC107]/15 border border-[#FFC107]/30 flex items-center justify-center text-[#FFC107] mb-6 group-hover:scale-110 transition-transform">
                  <i data-lucide="battery-charging" class="w-7 h-7"></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-white">Up to 50 Hours Battery</h3>
                <p class="text-zinc-400 text-sm leading-relaxed">
                  Enjoy days of uninterrupted listening. Fast charge 10 minutes for 2 full hours of playback.
                </p>
              </div>

              <!-- Card 3 -->
              <div class="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FFC107]/50 transition-all group">
                <div class="w-14 h-14 rounded-2xl bg-[#FFC107]/15 border border-[#FFC107]/30 flex items-center justify-center text-[#FFC107] mb-6 group-hover:scale-110 transition-transform">
                  <i data-lucide="shield" class="w-7 h-7"></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-white">IPX8 Sweat & Water Protection</h3>
                <p class="text-zinc-400 text-sm leading-relaxed">
                  Hydrophobic nano-coating protects internal electronics against rain, splashes, and sweat during workouts.
                </p>
              </div>

            </div>

          </div>
        </section>

      </div>
    `;
  }

  static setupEvents() {
    const grid = document.getElementById("bestsellers-grid");
    if (grid) {
      ProductCard.setupCardEvents(grid);
    }
  }
}
