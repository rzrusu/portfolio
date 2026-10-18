// Interface text in each language. English lives at "/", Romanian at "/ro/".
// Case study text lives in src/content/work/<lang>/.

export const languages = { en: "EN", ro: "RO" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const ui = {
  en: {
    htmlLang: "en",
    locale: "en_US",
    role: "UI/UX Designer",
    title: "Rusu Răzvan-Iulian - UI/UX Designer",
    description: "UI/UX designer portfolio showcasing website and product design case studies.",
    portfolio: "Portfolio",
    // Homepage intro: the highlight is shown in white, the rest in gray
    pitchLead: "I design websites and interfaces for",
    pitchHighlight: "hosting and gaming companies",
    // Status pill in the hero; set to "" to hide it
    availability: "Available for freelance",
    // Current job widget under the intro; the company name follows currentRole
    currently: "currently",
    currentRole: "Web & Graphic Designer at",
    getInTouch: "Get in touch",
    socialLinks: "Social links",
    language: "Language",
    featuredWork: "featured work",
    behanceLink: "View all my work on Behance",
    sideProjects: "side projects",
    sideProjectsIntro: "Things I've designed and built myself.",
    viewCaseStudy: "view case study",
    visitSite: "visit site",
    viewOnGitHub: "view on GitHub",
    ctaTitle: "Have a project in mind?",
    ctaBody: "I'm open to freelance website and interface design work. Tell me what you're building.",
    copyDiscord: "Copy Discord username",
    copied: "copied!",
    openSource: "This portfolio is open source.",
    viewSource: "View the source code",
    listening: "see what I'm listening to",
    backHome: "back to home",
    client: "Client",
    roleLabel: "Role",
    year: "Year",
    services: "Services",
    visitLive: "Visit the live site",
    viewOnBehance: "View the full design on Behance",
    nextCaseStudy: "next case study",
    // Page title for a case study; {title} is the project name
    caseStudyTitle: "{title} Case Study",
    notFoundTitle: "Page not found",
    notFoundBody: "This page doesn't exist or has moved.",
  },
  ro: {
    htmlLang: "ro",
    locale: "ro_RO",
    role: "Designer UI/UX",
    title: "Rusu Răzvan-Iulian - Designer UI/UX",
    description: "Portofoliu de designer UI/UX, cu studii de caz de web design și design de produs.",
    portfolio: "Portofoliu",
    pitchLead: "Proiectez site-uri și interfețe pentru",
    pitchHighlight: "companii de hosting și gaming",
    availability: "Accept proiecte freelance",
    currently: "în prezent",
    currentRole: "Designer web și grafic la",
    getInTouch: "Scrie-mi",
    socialLinks: "Rețele sociale",
    language: "Limbă",
    featuredWork: "lucrări recomandate",
    behanceLink: "Vezi toate lucrările mele pe Behance",
    sideProjects: "proiecte personale",
    sideProjectsIntro: "Lucruri pe care le-am proiectat și construit pe cont propriu.",
    viewCaseStudy: "vezi studiul de caz",
    visitSite: "vezi site-ul",
    viewOnGitHub: "vezi pe GitHub",
    ctaTitle: "Ai un proiect în minte?",
    ctaBody: "Accept proiecte freelance de web design și design de interfețe. Spune-mi ce construiești.",
    copyDiscord: "Copiază numele de utilizator Discord",
    copied: "copiat!",
    openSource: "Acest portofoliu este open source.",
    viewSource: "Vezi codul sursă",
    listening: "vezi ce ascult",
    backHome: "înapoi la pagina principală",
    client: "Client",
    roleLabel: "Rol",
    year: "An",
    services: "Servicii",
    visitLive: "Vezi site-ul live",
    viewOnBehance: "Vezi designul complet pe Behance",
    nextCaseStudy: "următorul studiu de caz",
    caseStudyTitle: "Studiu de caz: {title}",
    notFoundTitle: "Pagina nu a fost găsită",
    notFoundBody: "Pagina nu există sau a fost mutată.",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export const t = (lang: Lang) => ui[lang];

/** Prefixes a site path with the language, e.g. ("/work/x/", "ro") -> "/ro/work/x/". */
export const localizePath = (path: string, lang: Lang) => (lang === defaultLang ? path : `/${lang}${path}`);
