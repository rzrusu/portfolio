import type { ImageMetadata } from "astro";

import grnLogo from "../assets/logos/grn-logo.png";
import sbLogo from "../assets/logos/sb-logo.png";
import sprpLogo from "../assets/logos/sprp-logo.png";

export const profile = {
  name: "Rusu Răzvan-Iulian",
  role: "UI/UX Designer",
  // Homepage intro: the highlight is shown in white, the rest in gray
  pitch: {
    lead: "I design websites and interfaces for",
    highlight: "hosting and gaming companies",
  },
  // Status pill in the hero; set to "" to hide it
  availability: "Available for freelance",
  title: "Rusu Răzvan-Iulian - UI/UX Designer",
  description:
    "UI/UX designer portfolio showcasing website and product design case studies.",
  github: "https://github.com/rzrusu",
  linkedin: "https://linkedin.com/in/rusu-razvan",
  email: "rzrusu03@gmail.com",
  discord: "rusuu",
  behance: "https://www.behance.net/rzrusu",
  spotify: "https://open.spotify.com/user/iwkw0teuznz322vtae4pulfnc",
  source: "https://github.com/rzrusu/portfolio",
};

export interface ProjectLink {
  icon: string;
  url: string;
}

export interface Project {
  title: string;
  img: ImageMetadata;
  description: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "gitreleasenotes.com",
    img: grnLogo,
    description: "Generate release notes from GitHub commit history",
    links: [{ icon: "uil:link", url: "https://gitreleasenotes.com" }],
  },
  {
    title: "Sound Bubbles",
    img: sbLogo,
    description: "Visualize artist albums in an interactive way",
    links: [{ icon: "uil:github", url: "https://github.com/rzrusu/songbubbles" }],
  },
  {
    title: "Singleplayer Roleplay UCP",
    img: sprpLogo,
    description: "Multiplayer game user control panel",
    links: [{ icon: "uil:github", url: "https://github.com/rzrusu/SPRP-UCP" }],
  },
];
