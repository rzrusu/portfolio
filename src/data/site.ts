import type { ImageMetadata } from "astro";
import type { Lang } from "../i18n";

import grnLogo from "../assets/logos/grn-logo.png";
import sbLogo from "../assets/logos/sb-logo.png";
import sparkedHostLogo from "../assets/logos/sparked-host.png";
import sprpLogo from "../assets/logos/sprp-logo.png";

export const profile = {
  // Role, intro and other translated text live in src/i18n.ts
  name: "Rusu Răzvan-Iulian",
  github: "https://github.com/rzrusu",
  linkedin: "https://linkedin.com/in/rusu-razvan",
  email: "rzrusu03@gmail.com",
  discord: "rusuu",
  behance: "https://www.behance.net/rzrusu",
  spotify: "https://open.spotify.com/user/iwkw0teuznz322vtae4pulfnc",
  source: "https://github.com/rzrusu/portfolio",
};

export interface Job {
  company: string;
  logo: ImageMetadata;
  url: string;
}

// Current job, shown under the homepage intro (the job title is in src/i18n.ts). Set to null to hide it.
export const currentJob: Job | null = {
  company: "Sparked Host",
  logo: sparkedHostLogo,
  url: "https://sparkedhost.com",
};

export interface ProjectLink {
  icon: string;
  url: string;
}

export interface Project {
  title: string;
  img: ImageMetadata;
  description: Record<Lang, string>;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "gitreleasenotes.com",
    img: grnLogo,
    description: {
      en: "Generate release notes from GitHub commit history",
      ro: "Generează note de lansare din istoricul de commit-uri GitHub",
    },
    links: [{ icon: "uil:link", url: "https://gitreleasenotes.com" }],
  },
  {
    title: "Sound Bubbles",
    img: sbLogo,
    description: {
      en: "Visualize artist albums in an interactive way",
      ro: "Vizualizează albumele artiștilor într-un mod interactiv",
    },
    links: [{ icon: "uil:github", url: "https://github.com/rzrusu/songbubbles" }],
  },
  {
    title: "Singleplayer Roleplay UCP",
    img: sprpLogo,
    description: {
      en: "Multiplayer game user control panel",
      ro: "Panou de control pentru jucătorii unui joc multiplayer",
    },
    links: [{ icon: "uil:github", url: "https://github.com/rzrusu/SPRP-UCP" }],
  },
];
