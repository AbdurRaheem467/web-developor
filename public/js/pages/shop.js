/**
 * SoundWave - Shop Catalog Page
 */

import { PRODUCTS } from "../data/products.js";
import { ProductCard } from "../components/productCard.js";
import { store } from "../state/store.js";

export class ShopPage {
  static render(customPreset = null) {
    if (customPreset) {
      if (customPreset.category) store.filters.category = customPreset.category;
    }

    const filtered = store.getFilteredProducts();

    return `
      <div class="shop-page bg-[#070709] min-h-screen text-white py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Header -->
          <div class="mb-10 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 text-xs text-zinc-400 uppercase tracking-wider mb-2">
                <a href="#home" class="hover:text-[#FFC107]">Home</a>
                <span>/</span>
                <span class="text-[#FFC107]">Shop Audio Catalog</span>
              </div>
              <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                All SoundWave Audio Gear
              </h1>
              <p class="text-sm text-zinc-400 mt-1">
                Explore our full line of premium wireless earbuds, noise-cancelling headphones, and sports audio.
              </p>
            </div>
            <div class="text-xs text-zinc-400">
              Showing <span class="text-[#FFC107] font-bold">${filtered.length}</span> products
            </div>
          </div>

          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="shop-products-grid">
            ${filtered.length > 0 ? filtered.map(p => ProductCard.render(p)).join("") : `
              <div class="col-span-full text-center py-20 text-zinc-400">
                <i data-lucide="headphones" class="w-12 h-12 mx-auto mb-4 text-[#FFC107]"></i>
                <p class="text-lg font-bold text-white">No products found matching filters.</p>
              </div>
            `}
          </div>

        </div>
      </div>
    `;
  }

  static setupEvents() {
    const grid = document.getElementById("shop-products-grid");
    if (grid) {
      ProductCard.setupCardEvents(grid);
    }
  }
}
