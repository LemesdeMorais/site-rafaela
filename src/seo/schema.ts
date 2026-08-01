const siteUrl = "https://rafaelalemes.com.br";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  name: "Rafaela Lemes",
  url: siteUrl,

  inLanguage: "pt-BR",

  description:
    "Desenvolvimento de sites, landing pages e sistemas web personalizados.",

  publisher: {
    "@type": "Person",
    name: "Rafaela Lemes",
  },
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Rafaela Lemes",

  url: siteUrl,

  jobTitle: "Desenvolvedora Full Stack",

  image: `${siteUrl}/og-image.jpg`,

  knowsAbout: [
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Node.js",
    "Desenvolvimento Web",
    "Landing Pages",
    "Sistemas Web",
  ],

  sameAs: [
    "https://github.com/LemesdeMorais",
    "https://www.linkedin.com/in/rafamorais/",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "Rafaela Lemes",

  url: siteUrl,

  logo: `${siteUrl}/favicon.svg`,

  founder: {
    "@type": "Person",
    name: "Rafaela Lemes",
  },
};

export const schemas = [
  websiteSchema,
  personSchema,
  organizationSchema,
];