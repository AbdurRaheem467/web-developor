/**
 * SoundWave - FAQ Page Component
 */

export class FaqPage {
  static render() {
    return `
      <div class="bg-[#070709] min-h-screen text-white py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div class="text-center space-y-3">
            <span class="text-xs font-bold text-[#FFC107] uppercase tracking-widest">Help Center</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold">Frequently Asked Questions</h1>
            <p class="text-zinc-400 text-sm">Find answers regarding SoundWave orders, warranty, shipping, and pairing.</p>
          </div>

          <div class="space-y-4">
            
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 class="text-base font-bold text-white mb-2">How do I pair my SoundWave earbuds?</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">
                Simply open the charging case lid near your smartphone or device. Select "SoundWave Pro" or "SoundWave Air" in your Bluetooth settings menu to pair instantly.
              </p>
            </div>

            <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 class="text-base font-bold text-white mb-2">What is the warranty period on SoundWave products?</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">
                All SoundWave earbuds and headphones come with a 1-Year Official Replacement Warranty covering manufacturing defects.
              </p>
            </div>

            <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 class="text-base font-bold text-white mb-2">How long does shipping take?</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">
                Orders placed before 3:00 PM are dispatched on the same business day. Standard delivery takes 2 to 4 working days across Pakistan.
              </p>
            </div>

          </div>

        </div>
      </div>
    `;
  }

  static setupEvents() {}
}
