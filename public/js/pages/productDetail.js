/**
 * SoundWave - Product Details Page
 */

import { PRODUCTS } from "../data/products.js";
import { ProductCard } from "../components/productCard.js";
import { store } from "../state/store.js";
import { ToastManager } from "../components/toast.js";

export class ProductDetailPage {
  static render(productId) {
    const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
    const isWishlisted = store.isInWishlist(product.id);
    const formattedPrice = `Rs. ${product.price.toLocaleString()}`;
    const formattedOriginal = product.originalPrice ? `Rs. ${product.originalPrice.toLocaleString()}` : null;

    const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

    return `
      <div class="product-detail-page bg-[#070709] min-h-screen text-white py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 text-xs text-zinc-400 uppercase tracking-wider">
            <a href="#home" class="hover:text-[#FFC107]">Home</a>
            <span>/</span>
            <a href="#shop" class="hover:text-[#FFC107]">Shop</a>
            <span>/</span>
            <span class="text-[#FFC107] font-semibold">${product.name}</span>
          </nav>

          <!-- Main Detail Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <!-- Left Image Showcase -->
            <div class="lg:col-span-6 bg-zinc-900/60 border border-white/10 rounded-3xl p-8 flex items-center justify-center relative min-h-[420px]">
              ${product.discount ? `
                <span class="absolute top-6 left-6 bg-[#FFC107] text-black font-bold text-xs px-3 py-1.5 rounded-lg shadow-md">
                  ${product.discount}% OFF
                </span>
              ` : ''}
              <img 
                src="${product.images[0]}" 
                alt="${product.name}" 
                class="w-full max-h-[380px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
              />
            </div>

            <!-- Right Info Column -->
            <div class="lg:col-span-6 space-y-6">
              
              <div>
                <span class="text-xs font-bold uppercase text-[#FFC107] tracking-widest">${product.category}</span>
                <h1 class="text-3xl sm:text-4xl font-extrabold text-white mt-1">${product.name}</h1>
              </div>

              <!-- Rating -->
              <div class="flex items-center gap-2">
                <div class="flex items-center text-[#FFC107]">
                  <i data-lucide="star" class="w-4 h-4 fill-[#FFC107]"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-[#FFC107]"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-[#FFC107]"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-[#FFC107]"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-[#FFC107]"></i>
                </div>
                <span class="text-sm font-bold text-white">${product.rating}</span>
                <span class="text-xs text-zinc-400">(${product.reviewCount} customer reviews)</span>
              </div>

              <!-- Price -->
              <div class="flex items-baseline gap-3 pt-2">
                <span class="text-3xl font-extrabold text-red-500">${formattedPrice}</span>
                ${formattedOriginal ? `<span class="text-lg text-zinc-500 line-through">${formattedOriginal}</span>` : ''}
              </div>

              <!-- Description -->
              <p class="text-zinc-300 text-sm leading-relaxed border-t border-b border-white/10 py-4">
                ${product.description}
              </p>

              <!-- Technical Specifications Grid -->
              <div class="space-y-3">
                <h3 class="text-xs font-bold uppercase tracking-wider text-zinc-400">Technical Highlights</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  ${Object.entries(product.specs || {}).map(([key, val]) => `
                    <div class="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                      <i data-lucide="check-circle-2" class="w-4 h-4 text-[#FFC107] shrink-0 mt-0.5"></i>
                      <div>
                        <span class="text-zinc-400 block capitalize">${key.replace(/([A-Z])/g, ' $1')}</span>
                        <span class="font-bold text-white">${val}</span>
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex items-center gap-4 pt-4">
                <button 
                  id="detail-add-cart-btn" 
                  data-id="${product.id}"
                  class="flex-1 bg-[#FFC107] hover:bg-[#E0A800] text-black font-extrabold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,193,7,0.3)] transition-all"
                >
                  <i data-lucide="shopping-bag" class="w-5 h-5"></i>
                  <span>Add to Cart</span>
                </button>

                <button 
                  id="detail-wishlist-btn"
                  data-id="${product.id}"
                  class="p-4 rounded-xl bg-white/10 border border-white/20 text-white hover:text-red-500 transition-colors"
                >
                  <i data-lucide="heart" class="w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}"></i>
                </button>
              </div>

            </div>

          </div>

          <!-- Related Products Section -->
          <div class="pt-16 border-t border-white/10 space-y-6">
            <h2 class="text-2xl font-bold text-white">You May Also Like</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="related-products-grid">
              ${related.map(p => ProductCard.render(p)).join("")}
            </div>
          </div>

        </div>
      </div>
    `;
  }

  static setupEvents(productId) {
    const addBtn = document.getElementById("detail-add-cart-btn");
    if (addBtn) {
      addBtn.addEventListener("click", () => {
        const id = addBtn.getAttribute("data-id");
        store.addToCart(id, 1);
        ToastManager.show("Product added to cart!", "success");
      });
    }

    const wishBtn = document.getElementById("detail-wishlist-btn");
    if (wishBtn) {
      wishBtn.addEventListener("click", () => {
        const id = wishBtn.getAttribute("data-id");
        const added = store.toggleWishlist(id);
        ToastManager.show(added ? "Added to wishlist" : "Removed from wishlist", "info");
      });
    }

    const relatedGrid = document.getElementById("related-products-grid");
    if (relatedGrid) {
      ProductCard.setupCardEvents(relatedGrid);
    }
  }
}
