export const membershipPlans = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Essential Access for Self-Driven Lifters",
    monthlyPrice: 999,
    annualPrice: 799,
    period: "per month",
    popular: false,
    color: "from-zinc-800 to-zinc-900",
    features: [
      "Access to main gym floor & free weights",
      "Full access to cardio theater",
      "Standard locker & shower room access",
      "Free high-speed WiFi & water station",
      "Spartans Gym mobile companion app access",
      "1 Complimentary fitness assessment"
    ],
    notIncluded: [
      "Group fitness & HIIT classes",
      "Personal trainer sessions",
      "Custom nutrition roadmap",
      "Cryotherapy & recovery sauna lounge"
    ],
    ctaText: "Get Started",
    ctaLink: "/join?plan=basic"
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "The Ultimate All-Inclusive Fitness Experience",
    monthlyPrice: 1999,
    annualPrice: 1599,
    period: "per month",
    popular: true,
    badge: "MOST POPULAR",
    color: "from-orange-600/30 via-zinc-900 to-zinc-900 border-orange-500/50",
    features: [
      "Unlimited 24/7 access to all 4 gym zones",
      "Unlimited group fitness classes (HIIT, Yoga, Boxing, CrossFit)",
      "1 Monthly 1-on-1 personal training session",
      "Bi-weekly InBody 570 body composition scans",
      "Full locker, sauna, and steam room access",
      "Spartans Gym nutrition guidance handbook",
      "10% Discount on Spartans apparel & cafe"
    ],
    notIncluded: [
      "Dedicated weekly personal trainer",
      "Priority VIP lane & towel service"
    ],
    ctaText: "Start Pro Plan",
    ctaLink: "/join?plan=pro"
  },
  {
    id: "elite",
    name: "Elite VIP",
    tagline: "Uncompromised Personalized Results",
    monthlyPrice: 3999,
    annualPrice: 3199,
    period: "per month",
    popular: false,
    color: "from-amber-600/20 via-zinc-900 to-zinc-900",
    features: [
      "Everything in Pro Plan included",
      "4 Dedicated 1-on-1 Personal Trainer sessions/month",
      "Custom Macro & Meal Prep consultation",
      "Personalized progressive workout blueprint",
      "Free access to Sauna, Ice Bath & Recovery lounge",
      "Complimentary premium laundry & locker valet",
      "Priority equipment booking & VIP lounge access",
      "2 Guest passes per month for friends/family"
    ],
    notIncluded: [],
    ctaText: "Join Elite VIP",
    ctaLink: "/join?plan=elite"
  }
];

export const planFeaturesMatrix = [
  { feature: "Full Gym Floor & Weights Access", basic: true, pro: true, elite: true },
  { feature: "Cardio Arena & Virtual Screens", basic: true, pro: true, elite: true },
  { feature: "Lockers & Hot Showers", basic: true, pro: true, elite: true },
  { feature: "Mobile App Workout Tracking", basic: true, pro: true, elite: true },
  { feature: "Unlimited Group Fitness Classes", basic: false, pro: true, elite: true },
  { feature: "CrossFit & Boxing Arena Access", basic: false, pro: true, elite: true },
  { feature: "InBody Composition Scans", basic: "1x Only", pro: "Bi-Weekly", elite: "Weekly" },
  { feature: "Sauna & Steam Bath Recovery", basic: false, pro: true, elite: true },
  { feature: "1-on-1 Dedicated Trainer Sessions", basic: false, pro: "1 Session/mo", elite: "4 Sessions/mo" },
  { feature: "Custom Nutrition & Macro Blueprint", basic: false, pro: "Guidebook", elite: "Full Consultation" },
  { feature: "Ice Bath & Cryo Recovery Lounge", basic: false, pro: false, elite: true },
  { feature: "Guest Passes / Month", basic: false, pro: false, elite: "2 Passes" }
];
