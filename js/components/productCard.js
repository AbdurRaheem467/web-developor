/**
 * SoundWave - Product Card Component
 * Matches the reference screenshot layout:
 * - Yellow discount pill tag in top left
 * - Clean white card background with soft shadow
 * - Product Title & Subtitle category
 * - Gold star ratings & review count in parentheses
 * - Price formatted in `Rs.` with original strikethrough price
 * - Dark Add to Cart button with hover yellow highlight
 */

import { store } from "../state/store.js";
import { ToastManager } from "./toast.js";

export class ProductCard {
  static render(product) {
    const formattedPrice = `Rs. ${product.price.toLocaleString()}`;
    const formattedOriginal = product.originalPrice ? `Rs. ${product.originalPrice.toLocaleString()}` : null;
    const isWishlisted = store.isInWishlist(product.id);

    return `
      <div class="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200/80 flex flex-col justify-between relative overflow-hidden text-zinc-900">
        
        <!-- Top Row: Discount Pill Badge & Wishlist Heart -->
        <div class="flex items-center justify-between z-10">
          ${product.discount ? `
            <span class="inline-flex items-center gap-1 bg-[#FFC107] text-black font-bold text-[11px] px-2.5 py-1 rounded-md shadow-sm">
              <i data-lucide="tag" class="w-3 h-3"></i>
              ${product.discount}% OFF
            </span>
          ` : `<span></span>`}

          <button 
            data-action="wishlist" 
            data-id="${product.id}" 
            class="p-2 rounded-full bg-white/90 shadow-sm border border-zinc-200 text-zinc-400 hover:text-red-500 transition-colors"
            title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
          >
            <i data-lucide="heart" class="w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}"></i>
          </button>
        </div>

        <!-- Product Image Container -->
        <a href="#product-${product.id}" class="block my-3 cursor-pointer group-hover:scale-105 transition-transform duration-300">
          <div class="w-full h-48 rounded-xl bg-zinc-100 flex items-center justify-center p-4 overflow-hidden">
            <img 
              src="${product.images[0]}" 
              alt="${product.name}" 
              class="w-full h-full object-contain drop-shadow-md"
              loading="lazy"
            />
          </div>
        </a>

        <!-- Product Info Body -->
        <div class="flex flex-col flex-1 justify-end space-y-2 mt-2">
          
          <!-- Title & Category Subtitle -->
          <div>
            <h3 class="font-bold text-base text-zinc-900 leading-tight group-hover:text-[#F59E0B] transition-colors">
              <a href="#product-${product.id}">${product.name}</a>
            </h3>
            <p class="text-xs text-zinc-500 mt-0.5">${product.category}</p>
          </div>

          <!-- Star Ratings & Review Count -->
          <div class="flex items-center gap-1.5 text-xs">
            <div class="flex items-center text-[#FFC107]">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-[#FFC107]"></i>
              <i data-lucide="star" class="w-3.5 h-3.5 fill-[#FFC107]"></i>
              <i data-lucide="star" class="w-3.5 h-3.5 fill-[#FFC107]"></i>
              <i data-lucide="star" class="w-3.5 h-3.5 fill-[#FFC107]"></i>
              <i data-lucide="star" class="w-3.5 h-3.5 fill-[#FFC107]"></i>
            </div>
            <span class="text-zinc-400 text-[11px]">(${product.reviewCount ? product.reviewCount.toLocaleString() : '100+'})</span>
          </div>

          <!-- Price Row -->
          <div class="flex items-baseline gap-2 pt-1">
            <span class="text-base font-extrabold text-red-600 sm:text-lg">${formattedPrice}</span>
            ${formattedOriginal ? `<span class="text-xs text-zinc-400 line-through">${formattedOriginal}</span>` : ''}
          </div>

          <!-- Full Width Add to Cart Button -->
          <button 
            data-action="add-to-cart" 
            data-id="${product.id}"
            class="w-full mt-3 bg-[#0f1117] hover:bg-[#FFC107] text-white hover:text-black font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-md group/btn"
          >
            <i data-lucide="shopping-cart" class="w-4 h-4 group-hover/btn:scale-110 transition-transform"></i>
            <span>Add to Cart</span>
          </button>

        </div>

      </div>
    `;
  }

  static setupCardEvents(container) {
    if (!container) return;

    // Add to Cart handler
    container.querySelectorAll('[data-action="add-to-cart"]').forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        store.addToCart(id, 1);
        ToastManager.show("Product added to cart!", "success");
      });
    });

    // Wishlist handler
    container.querySelectorAll('[data-action="wishlist"]').forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        const added = store.toggleWishlist(id);
        ToastManager.show(added ? "Added to wishlist" : "Removed from wishlist", "info");
      });
    });
  }
}
