/**
 * SoundWave - About Us Page
 */

export class AboutPage {
  static render() {
    return `
      <div class="bg-[#070709] min-h-screen text-white py-16">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <!-- Header -->
          <div class="text-center space-y-4">
            <span class="text-xs font-bold uppercase tracking-widest text-[#FFC107]">Our Acoustic Legacy</span>
            <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight">
              About Sound<span class="text-[#FFC107]">Wave</span>
            </h1>
            <p class="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed">
              We create high-definition audio equipment designed for music enthusiasts, creators, and everyday listeners seeking uncompromising clarity and style.
            </p>
          </div>

          <!-- Mission Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-white">Pure Sound. Total Freedom.</h2>
              <p class="text-zinc-300 text-sm leading-relaxed">
                Founded in 2024, SoundWave was created with a single objective: to engineer wireless earbuds and headphones that combine audiophile sound performance with all-day battery life and sleek ergonomic design.
              </p>
              <p class="text-zinc-400 text-sm leading-relaxed">
                Every SoundWave product undergoes rigorous acoustic tuning and testing to ensure deep, impactful bass, natural mid-tones, and sparkling highs.
              </p>
            </div>
            <div class="bg-zinc-900 border border-white/10 rounded-3xl p-8 flex justify-center items-center">
              <img src="images/products/hero-earbuds.svg" alt="SoundWave Engineering" class="w-full max-h-72 object-contain"/>
            </div>
          </div>

        </div>
      </div>
    `;
  }
}
