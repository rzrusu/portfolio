import { getCollection, type CollectionEntry } from "astro:content";
import { defaultLang, type Lang } from "../i18n";

// Case studies live in src/content/work/<lang>/<slug>.md, so ids look like "ro/rocketnode".
export const slugOf = (entry: CollectionEntry<"work">) => entry.id.split("/").slice(1).join("/");
const langOf = (entry: CollectionEntry<"work">) => entry.id.split("/")[0] as Lang;

/**
 * Published case studies in one language, in homepage order. A case study that
 * hasn't been translated yet falls back to the English version.
 */
export async function getWork(lang: Lang) {
  const all = await getCollection("work", ({ data }) => !data.draft);
  const bySlug = new Map<string, CollectionEntry<"work">>();
  for (const entry of all) {
    const entryLang = langOf(entry);
    if (entryLang === lang || (entryLang === defaultLang && !bySlug.has(slugOf(entry)))) {
      bySlug.set(slugOf(entry), entry);
    }
  }
  return [...bySlug.values()].sort((a, b) => a.data.order - b.data.order);
}

/** Static paths for the case study pages in one language, each linked to the next study. */
export async function workPaths(lang: Lang) {
  const work = await getWork(lang);
  return work.map((entry, i) => ({
    params: { slug: slugOf(entry) },
    props: { entry, next: work[(i + 1) % work.length] },
  }));
}
