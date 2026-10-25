// ─────────────────────────────────────────────────────────────
// Everything you'll want to edit lives in this one file.
// Colors available for `color`: tangerine, lilac, butter, bubble, sky, mint
// Images/logos: put files in /public (e.g. public/logos/acme.svg)
// and reference them as "logos/acme.svg" (no leading slash).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Akosua Kernizan",
  role: "Software Engineer, Frontend",
  location: "NYC",
  email: "akosuakernizan@gmail.com",
  intro: "Frontend Dev with experience across multiple industires.",
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
      title: "Hacker News Client",
      description:
        "A modern client for Hacker News, a news aggregation and discussion platform that caters to tech enthusiasts.",
      stack: ["React", "React Router", "TanStack", "Vite", "Tailwind"],
      live: "https://corianderstudios.github.io/hacker-news-client/",
      code: "https://github.com/corianderstudios/hacker-news-client",
      image: "images/HackerNews.png", // e.g. "projects/tidepool.png"
      imageAlt: "Image of Hacker News Client homepage",
      color: "sky",
    },
    {
      title: "Fraction Lab",
      description:
        "A web app that teaches how fractions work: basics, adding, subtracting, multiplying and dividing.",
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
      description:
        " A web app that writes a multistep form component for you. Pick how many steps you need, name each step and its fields, choose a framework, press Generate code, and copy the result.",
      stack: ["Claude", "React", "Vite", "Tailwind"],
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
      stack: ["Claude", "React", "Vite", "Tailwind"],
      live: "https://corianderstudios.github.io/ts-tutor/",
      code: "https://github.com/corianderstudios/ts-tutor",
      image: "images/TypeScript.png",
      imageAlt: "Image of typescript tutor homepage",
      color: "butter",
    },
    {
      title: "Access Ready",
      description:
        "A study app for web developers preparing for the IAAP CPACC, WAS and ADS accessibility certifications.",
      stack: ["Claude", "React", "Vite", "Tailwind"],
      live: "https://corianderstudios.github.io/access-ready/",
      code: "https://github.com/corianderstudios/access-ready",
      image: "images/AccessReady.png",
      imageAlt: "Image of access ready homepage",
      color: "sky",
    },
  ],
};

export const experience = [
  {
    company: "Reddit Inc.",
    logo: "logos/reddit-icon.svg",
    role: "Software Engineer, Frontend",
    start: "2021",
    end: "2026",
    color: "sky",
    bullets: [
      "Led design and rollout of an LLM-based detection system to identify NCIM-risk subreddits, expanding user warning eligibility beyond manually-banned communities and reaching 10,400+ users with a 79% verified accuracy rate (7% false positive rate)",
      "Designed and built the frontend for user-blocking functionality end-to-end, delivering a seamless, intuitive user experience.",
    ],
  },
  {
    company: "Buffy",
    logo: "",
    role: "Frontend Developer",
    start: "2019",
    end: "2020",
    color: "buffy",
    bullets: [
      "Migrated legacy codebase to a headless architecture using GatsbyJS and Contentful, improving performance and aligning with modern web standards.",
      "Maintained legacy Shopify storefront (Liquid, jQuery) to preserve site stability during the migration.",
    ],
  },
  {
    company: "Wunderkind",
    logo: "logos/wunderkind.jpeg",
    role: "Software Engineer",
    start: "2016",
    end: "2019",
    color: "butter",
    bullets: [
      "Built an in-house PHP/SQL application to visualize client tracking variables and their downstream campaign dependencies, reducing redundancy and simplifying code removal.",
      "Led intra-departmental presentations on debugging ESP campaigns/APIs, improving turnaround time and cross-team communication",
    ],
  },
  {
    company: "Sesame Workshop",
    logo: "logos/Sesame_Workshop_2018_Logo.svg",
    role: "Frontend Developer",
    start: "2015",
    end: "2016",
    color: "butter",
    bullets: [
      `Built the "Special Projects Department" portfolio site using jQuery, uiBootstrap, and AngularJS, adopting an MVC architecture to streamline future updates`,
      "Created custom HTML/CSS/JavaScript English-learning games for pre-K children in China and Japan using a custom CMS",
    ],
  },
];

export const hobbies = [
  {
    name: "Baking",
    color: "lilac",
    blurb: "My oven runs hot, but the cookies are delicious.",
  },
  {
    name: "Running",
    color: "bubble",
    blurb: "9 + 1 baby!!",
  },
  {
    name: "Building Hardware",
    color: "butter",
    blurb: "I like to solder",
  },
  {
    name: "Travel",
    color: "sky",
    blurb: "Climbed a volcano in Guatemala to see another volcao errupt.",
  },
];
