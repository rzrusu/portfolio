// Renders the social preview cards (src/assets/og/og-<lang>.png, 1200x630) with headless Chrome.
// Run `npm run og` after changing the role, intro or availability text in src/i18n.ts.
// Set CHROME to the browser's path if it isn't found automatically.
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { ui } from "../src/i18n.ts";

const NAME = "Rusu Răzvan-Iulian";
const DOMAIN = "rusu.me";

const root = fileURLToPath(new URL("..", import.meta.url));
const file = (path) => pathToFileURL(join(root, path)).href;

const chrome = [
  process.env.CHROME,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].find((path) => path && existsSync(path));
if (!chrome) throw new Error("Chrome not found; set CHROME to its path");

const card = (text) => `<!doctype html>
<html lang="${text.htmlLang}">
<head>
<meta charset="utf-8" />
<style>
  @font-face { font-family: Instrument; font-weight: 400 700; unicode-range: U+0000-00FF;
    src: url(${file("node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2")}); }
  @font-face { font-family: Instrument; font-weight: 400 700; unicode-range: U+0100-024F;
    src: url(${file("node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-ext-wght-normal.woff2")}); }
  @font-face { font-family: Geist; src: url(${file("node_modules/@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff2")}); }
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body { display: flex; flex-direction: column; justify-content: space-between; padding: 72px 80px; color: #fff;
    background: #07090e url(${file("src/assets/backgrounds/bg@2x.png")}) top center / 1440px auto no-repeat; }
  .who { display: flex; align-items: center; gap: 18px; }
  .who img { width: 72px; height: 72px; border-radius: 50%; image-rendering: pixelated; }
  .name { font: 700 30px/1.15 Instrument; }
  .role { font: 400 21px/1.4 Geist; color: #d1d5dc; }
  .pitch { max-width: 1000px; font: 600 66px/1.12 Instrument; letter-spacing: -0.025em; color: #99a1af; text-wrap: balance; }
  .pitch span { color: #fff; }
  .foot { display: flex; align-items: center; justify-content: space-between; font: 400 22px Geist; color: #99a1af; }
  .pill { display: flex; align-items: center; gap: 12px; padding: 10px 20px; border-radius: 999px; font-size: 19px;
    color: #86efac; border: 1px solid rgb(34 197 94 / 0.3); background: rgb(34 197 94 / 0.1); }
  .pill i { width: 10px; height: 10px; border-radius: 50%; background: #4ade80; }
</style>
</head>
<body>
  <div class="who">
    <img src="${file("src/assets/avatar.png")}" alt="" />
    <div><p class="name">${NAME}</p><p class="role">${text.role}</p></div>
  </div>
  <p class="pitch">${text.pitchLead} <span>${text.pitchHighlight}.</span></p>
  <div class="foot">
    <span>${DOMAIN}</span>
    ${text.availability ? `<span class="pill"><i></i>${text.availability}</span>` : ""}
  </div>
</body>
</html>`;

const tmp = mkdtempSync(join(tmpdir(), "og-cards-"));
try {
  for (const [lang, text] of Object.entries(ui)) {
    const page = join(tmp, `${lang}.html`);
    const out = join(root, "src/assets/og", `og-${lang}.png`);
    writeFileSync(page, card(text));
    execFileSync(chrome, [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--window-size=1200,630",
      "--virtual-time-budget=3000",
      `--user-data-dir=${join(tmp, "profile")}`,
      `--screenshot=${out}`,
      pathToFileURL(page).href,
    ], { stdio: "ignore" });
    console.log(`wrote src/assets/og/og-${lang}.png`);
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
