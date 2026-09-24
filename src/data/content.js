// ─────────────────────────────────────────────────────────────
// Everything you'll want to edit lives in this one file.
// Colors available for `color`: tangerine, lilac, butter, bubble, sky, mint
// Images/logos: put files in /public (e.g. public/logos/acme.svg)
// and reference them as "logos/acme.svg" (no leading slash).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Akosua Kernizan",
  role: "Frontend developer",
  location: "NYC",
  email: "akosuakernizan@gmail.com",
  intro:
    "Frontend Dev with experience across multiple industires. Specializing in JS,Typescript, and React.",
  availability: "Open to frontend roles",
  resumePdf: "resume.pdf",
  linkedin: "https://www.linkedin.com/in/akosuak/",
  github: "https://github.com/corianderstudios",
};

export const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Accessibility",
  "Design systems",
  "Testing",
  "Performance",
  "Figma",
];

export const projects = {
  human: [
    {
      title: "Tidepool",
      description:
        "Booking flow for a neighborhood swim school. Cut checkout from six steps to two and passed a full WCAG 2.2 AA audit.",
      stack: [],
      live: "",
      code: "",
      image: "", // e.g. "projects/tidepool.png"
      imageAlt: "",
      color: "sky",
    },
    {
      title: "Ledgerly UI",
      description:
        "A design system of 40 accessible components with tokens, docs and visual regression tests, shared by three product teams.",
      stack: [],
      live: "",
      code: "",
      image: "",
      imageAlt: "",
      color: "butter",
    },
    {
      title: "Plant Pal",
      description:
        "A watering tracker that works offline and syncs when you're back online. Installable as an app on your phone.",
      stack: [],
      live: "",
      code: "",
      image: "",
      imageAlt: "",
      color: "mint",
    },
  ],
  vibe: [
    {
      title: "Fraction Lab",
      description: "Teaches you how fractions work",
      stack: ["Claude", "React", "Vite", "Tailwind"],
      live: "https://corianderstudios.github.io/fraction-lab/",
      code: "https://github.com/corianderstudios/fraction-lab",
      image: "images/FractionLab.png",
      imageAlt: "Image of fraction lab homepage",
      color: "lilac",
    },
    {
      title: "DSA Tutor",
      description:
        "An interactive study guide for the data structures and algorithms most commonly tested in coding interviews.",
      stack: ["Claude", "React", "Vite", "Tailwind"],
      live: "https://corianderstudios.github.io/DSA-tutor/",
      code: "https://github.com/corianderstudios/DSA-tutor",
      image: "images/DSA.png",
      imageAlt: "Image of DSA tutor homepage",
      color: "bubble",
    },
    {
      title: "Stepwise",
      description: "Multi-step Form Builder",
      stack: ["Claude", "React", "Vite"],
      live: "https://corianderstudios.github.io/multi-step-form-builder/",
      code: "https://github.com/corianderstudios/multi-step-form-builder",
      image: "images/Stepwise.png",
      imageAlt: "Image of stepwise homepage",
      color: "tangerine",
    },
    {
      title: "TypeScript Tutor",
      description:
        "Interactive learning platform designed to help users master TypeScript through a hands-on approach.",
      stack: ["Claude", "React", "Vite"],
      live: "https://corianderstudios.github.io/ts-tutor/",
      code: "https://github.com/corianderstudios/ts-tutor",
      image: "images/TypeScript.png",
      imageAlt: "Image of typescript tutor homepage",
      color: "tangerine",
    },
  ],
};

export const experience = [
  {
    company: "Reddit Inc.",
    logo: "logos/reddit-icon.svg",
    role: "Software Engineer",
    start: "2021",
    end: "2026",
    color: "sky",
  },
  {
    company: "Buffy",
    logo: "",
    role: "Frontend Developer",
    start: "2019",
    end: "2020",
    color: "buffy",
  },
  {
    company: "Wunderkind",
    logo: "logos/wunderkind.jpeg",
    role: "Software Engineer",
    start: "2016",
    end: "2019",
    color: "butter",
  },
  {
    company: "Sesame Workshop",
    logo: "logos/Sesame_Workshop_2018_Logo.svg",
    role: "Frontend Developer",
    start: "2015",
    end: "2016",
    color: "butter",
  },
];

export const hobbies = [
  {
    name: "Building Hardware",
    color: "butter",
    blurb: "I like to solder",
  },
  {
    name: "Running",
    color: "bubble",
    blurb: "30 miles a week.",
  },
  {
    name: "Travel",
    color: "sky",
    blurb: "Climbed a volcano in Guatemala to see another volcao errupt.",
  },
  {
    name: "Baking",
    color: "lilac",
    blurb: "My oven runs hot, but the cookies are delicious.",
  },
];
