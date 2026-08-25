export const classCategories = ["All", "HIIT", "CrossFit", "Strength", "Boxing", "Yoga", "Zumba", "Functional"];

export const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const scheduleTimetable = [
  {
    time: "06:30 AM - 07:30 AM",
    Monday: { name: "HIIT Blast", coach: "Emma Johnson", category: "HIIT", intensity: "High", calories: "600 kcal", room: "Studio A" },
    Tuesday: { name: "Vinyasa Flow", coach: "Maya Patel", category: "Yoga", intensity: "Low-Med", calories: "300 kcal", room: "Zen Studio" },
    Wednesday: { name: "HIIT Blast", coach: "Emma Johnson", category: "HIIT", intensity: "High", calories: "600 kcal", room: "Studio A" },
    Thursday: { name: "Power Yoga", coach: "Maya Patel", category: "Yoga", intensity: "Moderate", calories: "350 kcal", room: "Zen Studio" },
    Friday: { name: "HIIT & Core", coach: "Emma Johnson", category: "HIIT", intensity: "High", calories: "650 kcal", room: "Studio A" },
    Saturday: { name: "Endurance BootCamp", coach: "Alex Morgan", category: "Functional", intensity: "Very High", calories: "750 kcal", room: "Main Turf" },
    Sunday: { name: "Restorative Yin Yoga", coach: "Maya Patel", category: "Yoga", intensity: "Gentle", calories: "200 kcal", room: "Zen Studio" },
  },
  {
    time: "08:30 AM - 09:30 AM",
    Monday: { name: "Olympic CrossFit", coach: "Alex Morgan", category: "CrossFit", intensity: "High", calories: "700 kcal", room: "CrossFit Box" },
    Tuesday: { name: "Heavy Barbell Squad", coach: "David Smith", category: "Strength", intensity: "High", calories: "550 kcal", room: "Iron Deck" },
    Wednesday: { name: "Boxing Conditioning", coach: "Marcus Vance", category: "Boxing", intensity: "High", calories: "650 kcal", room: "Combat Ring" },
    Thursday: { name: "CrossFit WOD", coach: "Alex Morgan", category: "CrossFit", intensity: "Very High", calories: "720 kcal", room: "CrossFit Box" },
    Friday: { name: "Zumba Party", coach: "Sarah Williams", category: "Zumba", intensity: "Moderate", calories: "500 kcal", room: "Studio B" },
    Saturday: { name: "Spartan WOD Team", coach: "Marcus Vance", category: "CrossFit", intensity: "Peak", calories: "800 kcal", room: "CrossFit Box" },
    Sunday: { name: "Mobility & Stretch", coach: "Maya Patel", category: "Functional", intensity: "Gentle", calories: "250 kcal", room: "Zen Studio" },
  },
  {
    time: "05:30 PM - 06:30 PM",
    Monday: { name: "Powerlifting Foundations", coach: "Alex Morgan", category: "Strength", intensity: "High", calories: "500 kcal", room: "Iron Deck" },
    Tuesday: { name: "Boxing Striking Drills", coach: "Marcus Vance", category: "Boxing", intensity: "High", calories: "680 kcal", room: "Combat Ring" },
    Wednesday: { name: "Metabolic Shred HIIT", coach: "Sarah Williams", category: "HIIT", intensity: "High", calories: "650 kcal", room: "Studio A" },
    Thursday: { name: "Upper Body Hypertrophy", coach: "David Smith", category: "Strength", intensity: "High", calories: "520 kcal", room: "Iron Deck" },
    Friday: { name: "Knockout Boxing", coach: "Marcus Vance", category: "Boxing", intensity: "High", calories: "700 kcal", room: "Combat Ring" },
    Saturday: { name: "Zumba Burnout", coach: "Sarah Williams", category: "Zumba", intensity: "Moderate", calories: "520 kcal", room: "Studio B" },
    Sunday: { name: "Open Turf Challenge", coach: "David Smith", category: "Functional", intensity: "Moderate", calories: "450 kcal", room: "Main Turf" },
  },
  {
    time: "07:00 PM - 08:00 PM",
    Monday: { name: "CrossFit Hero WOD", coach: "Alex Morgan", category: "CrossFit", intensity: "Peak", calories: "750 kcal", room: "CrossFit Box" },
    Tuesday: { name: "Zumba Dance Beat", coach: "Sarah Williams", category: "Zumba", intensity: "Moderate", calories: "500 kcal", room: "Studio B" },
    Wednesday: { name: "Functional Kettlebell & Sleds", coach: "Emma Johnson", category: "Functional", intensity: "High", calories: "620 kcal", room: "Main Turf" },
    Thursday: { name: "Night Boxing Sparring", coach: "Marcus Vance", category: "Boxing", intensity: "Very High", calories: "750 kcal", room: "Combat Ring" },
    Friday: { name: "Friday Night Iron Lift", coach: "David Smith", category: "Strength", intensity: "High", calories: "600 kcal", room: "Iron Deck" },
    Saturday: { name: "Sunset Flow Yoga", coach: "Maya Patel", category: "Yoga", intensity: "Low-Med", calories: "280 kcal", room: "Zen Studio" },
    Sunday: { name: "Recovery & Sauna Session", coach: "Team Spartans", category: "Functional", intensity: "Relaxed", calories: "150 kcal", room: "Recovery Suite" },
  }
];

export const classDescriptions = [
  {
    id: "hiit",
    name: "HIIT Blast",
    category: "HIIT",
    duration: "45-60 Mins",
    burn: "600-750 kcal",
    level: "All Levels",
    description: "Explosive intervals of high intensity work followed by brief recovery periods to melt fat and supercharge stamina.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "crossfit",
    name: "Olympic CrossFit",
    category: "CrossFit",
    duration: "60 Mins",
    burn: "700-850 kcal",
    level: "Intermediate - Advanced",
    description: "High-power Olympic barbell movements, gymnastics, rowers, and timed WOD circuits that build an unstoppable engine.",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "boxing",
    name: "Knockout Boxing",
    category: "Boxing",
    duration: "60 Mins",
    burn: "650-800 kcal",
    level: "All Levels",
    description: "Heavy bag combinations, rapid footwork, mitt work, and core conditioning designed by championship fighters.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "yoga",
    name: "Power & Recovery Yoga",
    category: "Yoga",
    duration: "60 Mins",
    burn: "300-400 kcal",
    level: "All Levels",
    description: "Dynamic Vinyasa flows for athletic flexibility, deep hip openers, spinal decompression, and mindful breath control.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "zumba",
    name: "Zumba Dance Beat",
    category: "Zumba",
    duration: "55 Mins",
    burn: "500-650 kcal",
    level: "Beginner Friendly",
    description: "High-energy Latin and global rhythm cardio dance party that turns intense fat burning into sheer fun.",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "strength",
    name: "Iron Strength Barbell",
    category: "Strength",
    duration: "60 Mins",
    burn: "500-600 kcal",
    level: "All Levels",
    description: "Structured barbell and dumbbell resistance work targeting fundamental strength movements for maximum muscle tone.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
  }
];
