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
