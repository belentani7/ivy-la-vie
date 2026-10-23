import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
const root = resolve(".");
const html = readFileSync(resolve(root, "index.html"), "utf8");
const manifest = JSON.parse(readFileSync(resolve(root, "manifest.json"), "utf8"));

function readImageNames() {
  const match = html.match(/const FILES = (\[[^\n]+\]);/);
  assert.ok(match, "HTML must declare a photo list");
  return JSON.parse(match[1]);
}

test("original 167 photographs remain accessible with no broken gallery paths", () => {
  const files = readImageNames();
  assert.ok(files.length >= 167, "do not silently remove photography from this project");
  assert.equal(new Set(files).size, files.length, "no image may be duplicated");
  assert.deepEqual(files, manifest, "manifest and HTML gallery must remain identical");
  for (const path of files) {
    assert.match(path, /^image-\d{4}\.(png|jpg|jpeg|webp)$/);
    assert.ok(existsSync(resolve(root, "media", path)), path);
  }
});

test("visitor can select chronological archive without losing randomized original exhibition", () => {
  assert.match(html, /get\("order"\) === "archive"/);
  assert.match(html, /archiveMode \? \[\.\.\.FILES\] : shuffle\(\[\.\.\.FILES\]\)/);
  assert.match(html, /href="\?order=archive#essay"/);
  assert.match(html, /id="shuffleLink"/);
  assert.match(html, /aria-current/);
});

test("static fallback and a keyboard-first reader expose all frames and captions", () => {
  assert.match(html, /class="skip-to-essay" href="#essay"/);
  assert.match(html, /main class="essay" id="essay"/);
  assert.match(html, /img\.loading = i === 0 \? "eager" : "lazy"/);
  assert.match(html, /document\.querySelectorAll\("\.frame \.cap, \.frame \.num"\)/);
  assert.match(html, /prefers-reduced-motion/);
  assert.doesNotMatch(html, /\.innerHTML\s*=/);
  assert.match(html, /if \(window\.gsap && window\.ScrollTrigger\)/);
});

test("editorial entrypoint has title, index metadata and real contact surface", () => {
  assert.match(html, /<html lang="es">/);
  assert.match(html, /<title>IVY LA VIE/);
  assert.match(html, /<meta name="description"/);
  assert.match(html, /mailto:/);
  assert.equal((html.match(/<\/html>/gi)||[]).length, 1);
});

test("the no-JavaScript entrypoint shows editorial content and a real preview", () => {
  assert.match(html, /<noscript><style>[\s\S]*?#loader \{ display: none !important; \}/);
  assert.match(html, /<noscript>[\s\S]*?class="no-js-exhibit"/);
  assert.match(html, /<h2 id="no-js-title">/);
  assert.match(html, /<img src="media\/image-0001\.png" alt="Primera fotografía/);
  assert.ok(manifest.includes("image-0001.png"), "preview must refer to an original asset");
});

test("a failed image has a readable placeholder installed before its request", () => {
  assert.match(html, /\.frame--unavailable img \{ display: none; \}/);
  assert.match(html, /\.frame--unavailable \.frame-error \{ display: flex; \}/);
  assert.match(html, /img\.addEventListener\("error", \(\) => \{/);
  assert.match(html, /fig\.classList\.add\("frame--unavailable"\)/);
  assert.match(html, /errorMessage\.textContent = "Fotografía " \+ String\(i \+ 1\)/);
  assert.match(html, /fig\.appendChild\(errorMessage\)/);
  const listen = html.indexOf('img.addEventListener("error"');
  const request = html.indexOf('img.src = "media/" + file');
  assert.ok(listen > 0 && listen < request, "error handler must be installed before loading");
});


test("image request starts only after lazy policy, listeners and DOM attachment", () => {
  const start = html.indexOf("const build = () => {");
  const end = html.indexOf("\nconst animate = () => {", start);
  assert.ok(start > 0 && end > start, "gallery builder exists");
  const builder = html.slice(start, end);
  const request = builder.indexOf('img.src = "media/" + file;');
  assert.ok(request > 0);
  for (const prerequisite of [
    'img.loading = i === 0 ? "eager" : "lazy";',
    'img.decoding = "async";',
    'img.addEventListener("load",',
    'img.addEventListener("error",',
    'essay.appendChild(fig);'
  ]) {
    const at = builder.indexOf(prerequisite);
    assert.ok(at >= 0 && at < request, prerequisite + " must precede the request");
  }
  assert.equal((builder.match(/img\.src = "media\/" \+ file;/g) || []).length, 1);
});
