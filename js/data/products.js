/**
 * SoundWave - Premium Audio & Wireless Earbuds Catalog
 */

export const PRODUCTS = [
  {
    id: "soundwave-pro",
    name: "SoundWave Pro",
    brand: "SoundWave",
    category: "Wireless Earbuds",
    type: "Earbuds",
    price: 7999,
    originalPrice: 10200,
    discount: 22,
    rating: 5.0,
    reviewCount: 1248,
    images: [
      "images/products/earbuds-pro.svg",
      "images/products/hero-earbuds.svg"
    ],
    shortDescription: "Flagship True Wireless Earbuds with Hybrid Active Noise Cancellation, Quad-Mic ENC for clear calls, and 32 hours battery life.",
    description: "Experience music as the artist intended with SoundWave Pro. Powered by 11mm Graphene-Coated Dynamic Drivers and Advanced ANC up to 42dB, it cuts external noise effortlessly while delivering punchy bass and crystalline highs. Ergonomically sculpted for all-day comfort.",
    specs: {
      batteryLife: "32 Hours Total (8h earbuds + 24h case)",
      noiseControl: "Hybrid ANC (Active Noise Cancellation up to 42dB)",
      bluetoothVersion: "Bluetooth 5.3 + EDR",
      waterResistance: "IPX7 Water & Sweat Resistant",
      driverSize: "11mm Titanium-Coated Graphene Drivers",
      micCount: "4 Mics with AI Environmental Noise Cancellation",
      chargingPort: "USB-C Fast Charging + Qi Wireless",
      warranty: "1 Year Official SoundWave Replacement Warranty"
    },
    stock: 42,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    color: "Matte Black",
    tags: ["earbuds", "anc", "best seller", "wireless", "ipx7"],
    reviews: [
      { id: 1, author: "Hamza Malik", rating: 5, date: "2026-08-14", title: "Incredible Bass and Noise Cancellation", comment: "The ANC on these earbuds is mind blowing for the price! Battery lasts easily 3 days of heavy usage.", verified: true },
      { id: 2, author: "Sarah Khan", rating: 5, date: "2026-08-02", title: "Super Comfortable Fit", comment: "Doesn't fall out even during workout sessions. Mic quality in calls is extremely clear.", verified: true }
    ]
  },
  {
    id: "soundwave-air",
    name: "SoundWave Air",
    brand: "SoundWave",
    category: "True Wireless Earbuds",
    type: "Earbuds",
    price: 6499,
    originalPrice: 7999,
    discount: 18,
    rating: 4.9,
    reviewCount: 892,
    images: [
      "images/products/earbuds-air.svg",
      "images/products/hero-earbuds.svg"
    ],
    shortDescription: "Featherweight TWS Earbuds featuring ultra-low latency gaming mode, dual HD mics, and high-definition sound stage.",
    description: "Designed for effortless daily listening, SoundWave Air offers dynamic audio tuning in a sleek white finish. Weighing only 3.8g per earbud, you'll forget you're even wearing them.",
    specs: {
      batteryLife: "28 Hours Total Playtime",
      noiseControl: "Passive Isolation + ENC Call Noise Reduction",
      bluetoothVersion: "Bluetooth 5.3 Low Energy",
      waterResistance: "IPX5 Sweat Resistant",
      driverSize: "10mm Composite Polymer Driver",
      micCount: "Dual Beamforming Microphones",
      chargingPort: "USB-C Quick Charge",
      warranty: "1 Year Official SoundWave Warranty"
    },
    stock: 28,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    color: "Pure White",
    tags: ["tws", "lightweight", "white", "best seller"],
    reviews: [
      { id: 1, author: "Ali Raza", rating: 5, date: "2026-07-22", title: "Sleek and Great Sound", comment: "Sound quality is super crisp. Pairing connects instantly when opening the lid.", verified: true }
    ]
  },
  {
    id: "soundwave-max",
    name: "SoundWave Max",
    brand: "SoundWave",
    category: "Over-Ear Headphones",
    type: "Headphones",
    price: 11999,
    originalPrice: 15999,
    discount: 25,
    rating: 4.9,
    reviewCount: 634,
    images: [
      "images/products/headphones-max.svg"
    ],
    shortDescription: "Studio-Grade Wireless Over-Ear Headphones with 40mm Titanium Drivers, 50-Hour Playtime, and Plush Memory Foam Earcups.",
    description: "Dive into pure audio bliss. SoundWave Max features custom-tuned 40mm drivers delivering immersive spatial sound and deep resonance. With plush breathable protein leather ear cushions, long listening sessions remain completely fatigue-free.",
    specs: {
      batteryLife: "50 Hours (ANC Off) / 38 Hours (ANC On)",
      noiseControl: "Multi-Mode Hybrid ANC (Commute, Indoor, Transparency)",
      bluetoothVersion: "Bluetooth 5.3 + 3.5mm Aux Wired Mode",
      waterResistance: "IPX4 Resistant",
      driverSize: "40mm Titanium Dome Drivers",
      micCount: "6 HD Mics for Noise Reduction",
      chargingPort: "USB-C Fast Charging (10 min charge = 5 hrs)",
      warranty: "1 Year SoundWave Warranty"
    },
    stock: 15,
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    color: "Midnight Black",
    tags: ["headphones", "over-ear", "studio", "anc", "50h battery"],
    reviews: [
      { id: 1, author: "Usman Tariq", rating: 5, date: "2026-08-10", title: "Best Headphones Under 15k", comment: "The build quality feels premium and the bass is tight without overpowering vocals.", verified: true }
    ]
  },
  {
    id: "soundwave-sport",
    name: "SoundWave Sport",
    brand: "SoundWave",
    category: "Sports Earbuds",
    type: "Sports",
    price: 8499,
    originalPrice: 9999,
    discount: 15,
    rating: 4.8,
    reviewCount: 421,
    images: [
      "images/products/earbuds-sport.svg"
    ],
    shortDescription: "Rugged Sports Earbuds with Secure Flexible Ear Hooks, IPX8 Waterproof Coating, and Extra Bass Boost Technology.",
    description: "Built for intense gym sessions and outdoor runs. SoundWave Sport features flexible memory silicone ear hooks that lock securely in place during intense workouts, supported by full IPX8 waterproof protection against sweat and rain.",
    specs: {
      batteryLife: "36 Hours Total (9h + 27h case)",
      noiseControl: "Passive Ergonomic Noise Isolation",
      bluetoothVersion: "Bluetooth 5.3 High Range",
      waterResistance: "IPX8 SweatGuard Waterproof",
      driverSize: "12mm BassBoost Dynamic Driver",
      micCount: "Dual HD Call Mics",
      chargingPort: "USB-C Fast Charging",
      warranty: "1 Year Official SoundWave Warranty"
    },
    stock: 31,
    isNew: false,
    isBestSeller: true,
    isFeatured: true,
    color: "Stealth Black / Yellow Accent",
    tags: ["sports", "ear-hook", "ipx8", "waterproof", "gym"],
    reviews: [
      { id: 1, author: "Zubair Ahmad", rating: 5, date: "2026-08-18", title: "Perfect Gym Companion", comment: "Never drops out while running or jumping rope. Super sturdy!", verified: true }
    ]
  },
  {
    id: "soundwave-gaming-x",
    name: "SoundWave Gaming X",
    brand: "SoundWave",
    category: "Gaming Headsets",
    type: "Gaming",
    price: 9499,
    originalPrice: 11999,
    discount: 21,
    rating: 4.8,
    reviewCount: 512,
    images: [
      "images/products/headphones-max.svg"
    ],
    shortDescription: "2.4GHz Ultra-Low Latency Wireless Gaming Headset with 7.1 Spatial Surround Sound and Detachable Noise-Cancelling Boom Mic.",
    description: "Hear every enemy footstep with pinpoint 7.1 spatial audio precision. SoundWave Gaming X provides dual-mode 2.4GHz wireless dongle and Bluetooth 5.3 connectivity for lag-free gaming on PC, Console, and Mobile.",
    specs: {
      batteryLife: "40 Hours Non-Stop Gaming",
      latency: "15ms Ultra-Low Latency (2.4GHz Dongle)",
      audioFormat: "7.1 Virtual Spatial Surround",
      driverSize: "50mm Neodymium Drivers",
      microphone: "Detachable Cardioid Mic with Foam Pop Filter",
      lighting: "Custom RGB Edge Illumination",
      warranty: "1 Year SoundWave Warranty"
    },
    stock: 19,
    isNew: true,
    isBestSeller: false,
    isFeatured: true,
    color: "Cyber Black",
    tags: ["gaming", "7.1 surround", "low latency", "rgb"],
    reviews: [
      { id: 1, author: "Bilal Hassan", rating: 5, date: "2026-07-29", title: "Zero Lag in Gaming!", comment: "The 2.4GHz dongle connects instantly with zero audio delay in PUBG and CS2.", verified: true }
    ]
  },
  {
    id: "soundwave-studio-pro",
    name: "SoundWave Studio Pro",
    brand: "SoundWave",
    category: "Audiophile Headphones",
    type: "Headphones",
    price: 16999,
    originalPrice: 19999,
    discount: 15,
    rating: 5.0,
    reviewCount: 310,
    images: [
      "images/products/headphones-max.svg"
    ],
    shortDescription: "Open-Back Planar Magnetic Headphones for Music Producers and Audiophiles demanding unmatched soundstage depth.",
    description: "Crafted for acoustic purity. Features open-back planar magnetic transducers that reproduce sub-bass to ultra-high frequencies with neutral precision.",
    specs: {
      frequencyResponse: "10Hz - 45,000Hz",
      impedance: "32 Ohms",
      cable: "Detachable 3.5mm Gold-Plated Braided Kevlar Cable",
      earpads: "Velour & Memory Foam Hybrid",
      weight: "360g",
      warranty: "2 Years Premium SoundWave Warranty"
    },
    stock: 8,
    isNew: true,
    isBestSeller: false,
    isFeatured: true,
    color: "Gunmetal Slate",
    tags: ["audiophile", "planar", "open-back", "studio"],
    reviews: [
      { id: 1, author: "Dr. Shahzaib", rating: 5, date: "2026-08-11", title: "Stunning Soundstage", comment: "Instruments sound distinct and naturally placed. Unbeatable value.", verified: true }
    ]
  }
];
