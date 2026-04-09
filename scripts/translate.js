/**
 * Auto-translation script using MyMemory API (free, no key required)
 *
 * Usage:
 *   node scripts/translate.js
 *
 * Optional env vars:
 *   MYMEMORY_EMAIL  — your email (raises free limit from 5k to 10k words/day)
 *   TARGET_LANGS    — comma-separated, default: es,de,ja
 */

const fs = require('fs');
const path = require('path');

const EMAIL = process.env.MYMEMORY_EMAIL || '';
const TARGET_LANGS = (process.env.TARGET_LANGS || 'es,de,ja').split(',');
const DELAY_MS = 300; // delay between requests to avoid rate limiting

// ── helpers ──────────────────────────────────────────────────────────────────

function flatten(obj, prefix = '') {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      Object.assign(acc, flatten(value, fullKey));
    } else if (typeof value === 'string') {
      acc[fullKey] = value;
    }
    return acc;
  }, {});
}

function unflatten(flat) {
  const result = {};
  for (const [key, value] of Object.entries(flat)) {
    const parts = key.split('.');
    let cur = result;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!cur[parts[i]]) cur[parts[i]] = {};
      cur = cur[parts[i]];
    }
    cur[parts[parts.length - 1]] = value;
  }
  return result;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ── translation ───────────────────────────────────────────────────────────────

async function translateGoogle(text, target) {
  const params = new URLSearchParams({
    client: 'gtx',
    sl: 'en',
    tl: target,
    dt: 't',
    q: text,
  });

  const res = await fetch(`https://translate.googleapis.com/translate_a/single?${params}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data = await res.json();
  // Response format: [[["translated","original",...],...],...]
  const translated = data[0].map(chunk => chunk[0]).join('');
  if (!translated) throw new Error('Empty translation');
  return translated;
}

async function translateOne(text, target) {
  return translateGoogle(text, target);
}

async function translateAll(flatEntries, targetLang) {
  const translated = {};
  const entries = Object.entries(flatEntries);
  const total = entries.length;

  for (let i = 0; i < total; i++) {
    const [key, value] = entries[i];
    const progress = `${i + 1}/${total}`;
    process.stdout.write(`  [${targetLang}] ${progress} — ${key.substring(0, 40).padEnd(40)}\r`);

    try {
      translated[key] = await translateOne(value, targetLang);
    } catch (err) {
      console.warn(`\n  ⚠ "${key}": ${err.message} — kept original`);
      translated[key] = value;
    }

    await sleep(DELAY_MS);
  }

  process.stdout.write('\n');
  return translated;
}

// ── main ──────────────────────────────────────────────────────────────────────

async function main() {
  const enPath = path.join(__dirname, '../src/locales/en/translation.json');

  if (!fs.existsSync(enPath)) {
    console.error('Error: src/locales/en/translation.json not found.');
    process.exit(1);
  }

  const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  const flat = flatten(enData);
  const count = Object.keys(flat).length;

  console.log(`\n🌐 Using MyMemory API (free, no key required)`);
  if (EMAIL) console.log(`📧 Email: ${EMAIL} (10k words/day limit)`);
  else console.log(`📧 No email set (5k words/day limit) — set MYMEMORY_EMAIL for more`);
  console.log(`📝 Strings to translate: ${count}`);
  console.log(`🎯 Target languages: ${TARGET_LANGS.join(', ')}\n`);

  for (const lang of TARGET_LANGS) {
    console.log(`Translating → ${lang}...`);
    const translatedFlat = await translateAll(flat, lang);
    const nested = unflatten(translatedFlat);

    const outDir = path.join(__dirname, `../src/locales/${lang}`);
    fs.mkdirSync(outDir, { recursive: true });

    const outPath = path.join(outDir, 'translation.json');
    fs.writeFileSync(outPath, JSON.stringify(nested, null, 2) + '\n', 'utf8');
    console.log(`  ✓ Saved → src/locales/${lang}/translation.json\n`);
  }

  console.log('✅ All translations done!');
}

main().catch(err => {
  console.error('\n❌ Fatal error:', err.message);
  process.exit(1);
});
