/**
 * SoundWave - Footer Component
 */

export class Footer {
  static render() {
    return `
      <footer class="bg-[#070709] border-t border-white/10 text-zinc-400 pt-16 pb-12 font-sans">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            
            <!-- Brand Column -->
            <div class="lg:col-span-2 space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-[#FFC107] flex items-center justify-center text-black font-bold shadow-lg">
                  <i data-lucide="headphones" class="w-6 h-6 stroke-[2.5]"></i>
                </div>
                <span class="text-2xl font-extrabold text-white">Sound<span class="text-[#FFC107]">Wave</span></span>
              </div>
              <p class="text-sm text-zinc-400 max-w-sm leading-relaxed">
                Empowering your soundtrack with premium wireless earbuds, studio noise-cancelling headphones, and sports audio gear.
              </p>
              <div class="flex items-center gap-4 text-zinc-400 pt-2">
                <a href="#" class="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FFC107] hover:text-black transition-colors">
                  <i data-lucide="instagram" class="w-4 h-4"></i>
                </a>
                <a href="#" class="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FFC107] hover:text-black transition-colors">
                  <i data-lucide="facebook" class="w-4 h-4"></i>
                </a>
                <a href="#" class="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FFC107] hover:text-black transition-colors">
                  <i data-lucide="youtube" class="w-4 h-4"></i>
                </a>
                <a href="#" class="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FFC107] hover:text-black transition-colors">
                  <i data-lucide="twitter" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="space-y-3">
              <h4 class="text-xs font-bold text-white uppercase tracking-wider">Audio Products</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="#shop" class="hover:text-[#FFC107] transition-colors">Wireless Earbuds</a></li>
                <li><a href="#shop" class="hover:text-[#FFC107] transition-colors">Over-Ear Headphones</a></li>
                <li><a href="#shop" class="hover:text-[#FFC107] transition-colors">Sports Earhooks</a></li>
                <li><a href="#shop" class="hover:text-[#FFC107] transition-colors">Gaming Headsets</a></li>
                <li><a href="#shop" class="hover:text-[#FFC107] transition-colors">Accessories</a></li>
              </ul>
            </div>

            <!-- Customer Service -->
            <div class="space-y-3">
              <h4 class="text-xs font-bold text-white uppercase tracking-wider">Support</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="#faq" class="hover:text-[#FFC107] transition-colors">Help & FAQ</a></li>
                <li><a href="#contact" class="hover:text-[#FFC107] transition-colors">Track Order</a></li>
                <li><a href="#contact" class="hover:text-[#FFC107] transition-colors">Returns & Refunds</a></li>
                <li><a href="#contact" class="hover:text-[#FFC107] transition-colors">Warranty Claim</a></li>
                <li><a href="#contact" class="hover:text-[#FFC107] transition-colors">Contact Support</a></li>
              </ul>
            </div>

            <!-- Newsletter Column -->
            <div class="space-y-3">
              <h4 class="text-xs font-bold text-white uppercase tracking-wider">Stay Tuned</h4>
              <p class="text-xs text-zinc-400">Subscribe to get exclusive discounts & product launches.</p>
              <form id="newsletter-form" class="space-y-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFC107]"
                  required
                />
                <button type="submit" class="w-full bg-[#FFC107] hover:bg-[#E0A800] text-black font-bold text-xs py-2.5 rounded-xl transition-colors">
                  Subscribe
                </button>
              </form>
            </div>

          </div>

          <!-- Bottom Footer Bar -->
          <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© 2026 SoundWave Inc. All rights reserved.</p>
            <div class="flex items-center gap-6">
              <a href="#" class="hover:text-zinc-300">Privacy Policy</a>
              <a href="#" class="hover:text-zinc-300">Terms of Service</a>
              <a href="#" class="hover:text-zinc-300">Shipping Info</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  static setupEvents() {
    const form = document.getElementById("newsletter-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for subscribing to SoundWave updates!");
        form.reset();
      });
    }
  }
}
