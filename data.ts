// ============================================================
// SHREE NARAYAN JEWELLERS — central content & business data
// ============================================================

export const business = {
  name: "Shree Narayan Jewellers",
  shortName: "Shree Narayan",
  tagline: "India's Finest Wholesale Jewellery",
  established: "Sadar Bazar, Delhi",
  phoneDisplay: "8826276208",
  phoneDial: "+918826276208",
  whatsapp: "918826276208",
  instagramHandle: "@shreenarayanjewellers__",
  instagramUrl: "https://instagram.com/shreenarayanjewellers__",
  googleRating: 4.8,
  reviewCount: 113,
  googleReviewUrl: "https://g.page/r/CfDGJTqyp6PCEBM/review",
  googlePlaceUrl: "https://g.page/r/CfDGJTqyp6PCEBM",
  mapsUrl: "https://maps.app.goo.gl/TMd924wQy5kGzgvB8",
  minOrder: 3000,
  hours: "Mon – Sun · 9:00 AM – 7:00 PM",
  address: {
    line1: "Shop No. 2451, 2nd Floor, Krishna Market",
    line2: "Near Jhanbalal Dharam Shalla",
    line3: "Telwara Chowk, Sadar Bazar",
    city: "Delhi – 110006",
  },
};

/** Build a wa.me link with a pre-filled message */
export function waLink(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit Us", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: 4.8, suffix: "★", label: "Google Rating", decimals: 1 },
  { value: 1000, suffix: "+", label: "Unique Designs", decimals: 0 },
  { value: 3000, suffix: "+", label: "Happy Resellers", decimals: 0 },
  { value: 28, suffix: "+", label: "States Served", decimals: 0 },
];

// Hero typewriter rotating phrases
export const heroWords = [
  "Wholesale Rings",
  "Bahubali Earrings",
  "Korean Jewellery",
  "Bridal Necklace Sets",
  "Kashmiri Bangles",
  "Reseller Lots",
];

export type Collection = {
  id: string;
  title: string;
  blurb: string;
  price: string;
  meta: string;
  code: string;
  images: string[];
};

export const collections: Collection[] = [
  {
    id: "rings",
    title: "Rings Collection",
    blurb:
      "Anti-tarnish, gold-plated stone rings, sleek bands, couple rings & statement cocktail designs.",
    price: "From ₹9",
    meta: "50+ Designs",
    code: "SNJ-RG-101",
    images: [
      "https://images.pexels.com/photos/8306532/pexels-photo-8306532.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6774653/pexels-photo-6774653.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/28985981/pexels-photo-28985981.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    id: "bridal",
    title: "Traditional & Bridal",
    blurb:
      "Kashmiri bangles, Bahubali earrings, heavy necklace sets & full bridal jewellery ensembles.",
    price: "Wholesale Price",
    meta: "100+ Designs",
    code: "SNJ-BR-202",
    images: [
      "https://images.pexels.com/photos/35059564/pexels-photo-35059564.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/29038003/pexels-photo-29038003.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/30276932/pexels-photo-30276932.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    id: "earrings",
    title: "Earrings & Sets",
    blurb:
      "Bahubali earrings, Korean studs, jhumkas, hoops, huggies & matching necklace-earring sets.",
    price: "From ₹14",
    meta: "200+ Designs",
    code: "SNJ-ER-303",
    images: [
      "https://images.pexels.com/photos/20943478/pexels-photo-20943478.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/17399543/pexels-photo-17399543.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/20943477/pexels-photo-20943477.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    id: "wholesale",
    title: "Wholesale Specials",
    blurb:
      "Bulk lots, curated combo packs & reseller-ready assorted mixes for fast-selling inventory.",
    price: "Bulk Discount",
    meta: "Min. 50 Pcs",
    code: "SNJ-WS-404",
    images: [
      "https://images.pexels.com/photos/28985984/pexels-photo-28985984.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/8306531/pexels-photo-8306531.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/28985978/pexels-photo-28985978.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
];

export const features = [
  {
    title: "Pan-India Delivery",
    desc: "We ship securely to every corner of India — packed carefully and dispatched fast to your doorstep.",
    icon: "truck",
  },
  {
    title: "Wholesale Pricing",
    desc: "Straight from our workshop floor. Rings from ₹9, earrings from ₹14 — the best rates in Delhi.",
    icon: "tag",
  },
  {
    title: "Trusted Quality",
    desc: "Every piece is anti-tarnish & long-lasting premium material. What you see is exactly what you get.",
    icon: "shield",
  },
  {
    title: "New Designs Weekly",
    desc: "Fresh Korean, bridal, everyday & seasonal stock lands every week — always something new to sell.",
    icon: "sparkle",
  },
];

export const perks = [
  { label: "GST Verified", sub: "Registered wholesale business" },
  { label: "Resellers Welcome", sub: "Extra discount on bulk orders" },
  { label: "WhatsApp Orders", sub: "Order in minutes, pay via UPI" },
  { label: "Same-Day Dispatch", sub: "Order before 3 PM, shipped today" },
];

export const steps = [
  {
    n: "01",
    title: "Browse Designs",
    desc: "Explore designs on Instagram @shreenarayanjewellers__ — or simply WhatsApp what you need and we'll confirm stock instantly.",
    icon: "search",
  },
  {
    n: "02",
    title: "WhatsApp & Pay",
    desc: "Send your order on 8826276208. We share the total and UPI details. Pay securely via UPI / PhonePe / GPay.",
    icon: "chat",
  },
  {
    n: "03",
    title: "Receive Your Order",
    desc: "We pack & dispatch. Orders before 3 PM ship the same day; later orders go next working day. Pan-India delivery.",
    icon: "package",
  },
];

export const faqs = [
  {
    q: "Do you sell retail, or wholesale only?",
    a: "We are a wholesale-only business. This keeps our prices exceptionally low for resellers, retailers and bulk buyers. The minimum order value is ₹3,000.",
  },
  {
    q: "What is the minimum order value?",
    a: "Our minimum order is ₹3,000. This unlocks wholesale pricing across rings, earrings, bangles, necklace sets and reseller lots.",
  },
  {
    q: "How do I place an order?",
    a: "Just message us on WhatsApp at 8826276208. Share the designs or codes you want (or browse Instagram), confirm stock, and we'll send you the total with UPI payment details.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, PhonePe, GPay and bank transfer. Once payment is confirmed, your order is packed and dispatched the same or next working day.",
  },
  {
    q: "Do you deliver across India?",
    a: "Yes — we ship pan-India. Orders placed before 3:00 PM are dispatched the same day; orders after 3 PM go out the next working day, securely packed.",
  },
  {
    q: "Is your jewellery really anti-tarnish?",
    a: "Absolutely. Every piece is crafted from premium anti-tarnish, long-lasting material with a rich gold finish that stays looking new with normal care.",
  },
  {
    q: "Are you a GST-registered business?",
    a: "Yes, Shree Narayan Jewellers is a GST-verified wholesale business, so your purchases are fully supported with valid billing.",
  },
  {
    q: "Do resellers get extra discounts?",
    a: "Yes. Resellers and bulk buyers enjoy additional discounts on wholesale lots (minimum 50 pieces). Message us with your requirement for a custom quote.",
  },
];

export type Review = {
  name: string;
  place: string;
  rating: number;
  text: string;
  initial: string;
  date?: string;
};

export const seedReviews: Review[] = [
  {
    name: "Pooja Sharma",
    place: "Jaipur, Rajasthan",
    rating: 5,
    text: "The quality is honestly better than pieces I've paid triple for. Anti-tarnish rings still look brand new after months. My customers love them!",
    initial: "P",
  },
  {
    name: "Rahul Verma",
    place: "Lucknow, Uttar Pradesh",
    rating: 5,
    text: "Genuine wholesale rates and super fast dispatch. Ordered Tuesday afternoon, had it by Thursday. Bahubali earrings sold out in two days.",
    initial: "R",
  },
  {
    name: "Sneha Patil",
    place: "Pune, Maharashtra",
    rating: 5,
    text: "Beautiful Korean designs and bridal sets. Packaging was secure and everything matched the photos. Now my regular supplier.",
    initial: "S",
  },
  {
    name: "Imran Khan",
    place: "Hyderabad, Telangana",
    rating: 4,
    text: "Great prices for resellers like me. The combo lots are perfect for fast-selling stock. WhatsApp ordering is so easy.",
    initial: "I",
  },
];

export const galleryImages = [
  {
    src: "https://images.pexels.com/photos/33257665/pexels-photo-33257665.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Our jewellery showroom interior",
    span: "tall",
  },
  {
    src: "https://images.pexels.com/photos/8306531/pexels-photo-8306531.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Diamond necklace & earring set",
    span: "normal",
  },
  {
    src: "https://images.pexels.com/photos/28146843/pexels-photo-28146843.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Necklace and rings on display",
    span: "normal",
  },
  {
    src: "https://images.pexels.com/photos/29486061/pexels-photo-29486061.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Sparkling jewellery display",
    span: "wide",
  },
  {
    src: "https://images.pexels.com/photos/33257666/pexels-photo-33257666.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Modern jewellery store interior",
    span: "normal",
  },
  {
    src: "https://images.pexels.com/photos/13325931/pexels-photo-13325931.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Gold pendant necklace on stand",
    span: "normal",
  },
];

export const marqueeItems = [
  "Anti-Tarnish",
  "GST Verified",
  "Rings from ₹9",
  "Pan-India Delivery",
  "Reseller Friendly",
  "New Designs Weekly",
  "Earrings from ₹14",
  "Same-Day Dispatch",
  "Bulk Discounts",
  "Premium Quality",
];

export const socialLinks = [
  { label: "WhatsApp", href: waLink("Hi! I'd like to know more about your wholesale jewellery."), icon: "whatsapp" },
  { label: "Instagram", href: business.instagramUrl, icon: "instagram" },
  { label: "Google", href: business.googlePlaceUrl, icon: "google" },
  { label: "Call", href: `tel:${business.phoneDial}`, icon: "phone" },
];
