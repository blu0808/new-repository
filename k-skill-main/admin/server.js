'use strict';

const path = require('node:path');
const fs = require('node:fs');
const Fastify = require('fastify');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(__dirname, 'public');
const PORT = Number(process.env.PORT) || 3001;

const EXCLUDED_DIRS = new Set([
  'admin', 'node_modules', 'packages', 'scripts', 'docs', 'examples', 'python-packages',
]);

const app = Fastify({ logger: false });

// ── frontmatter helpers ────────────────────────────────────────────────────

function parseMd(content) {
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: { metadata: {} }, body: content };

  const meta = { metadata: {} };
  let inMeta = false;

  for (const line of m[1].split('\n')) {
    if (line.trimEnd() === 'metadata:') { inMeta = true; continue; }
    if (inMeta && line.startsWith('  ')) {
      const ci = line.indexOf(':');
      if (ci > -1) meta.metadata[line.slice(0, ci).trim()] = line.slice(ci + 1).trim();
    } else if (!line.startsWith(' ')) {
      inMeta = false;
      const ci = line.indexOf(':');
      if (ci > -1) meta[line.slice(0, ci).trim()] = line.slice(ci + 1).trim();
    }
  }

  return { meta, body: m[2].trim() };
}

function buildMd({ body, folder: _f, ...meta }) {
  const { metadata = {}, ...top } = meta;
  const lines = ['---'];
  for (const [k, v] of Object.entries(top)) {
    if (v !== undefined && v !== '') lines.push(`${k}: ${v}`);
  }
  if (Object.keys(metadata).length) {
    lines.push('metadata:');
    for (const [k, v] of Object.entries(metadata)) lines.push(`  ${k}: ${v}`);
  }
  lines.push('---');
  if (body && body.trim()) lines.push('', body.trim());
  return lines.join('\n') + '\n';
}

// ── utils ──────────────────────────────────────────────────────────────────

function isValidFolder(name) {
  return typeof name === 'string' && /^[a-z0-9][a-z0-9-]*$/.test(name) && name.length < 64;
}

function skillPath(folder) {
  return path.join(ROOT, folder, 'SKILL.md');
}

function readAllSkills() {
  return fs.readdirSync(ROOT, { withFileTypes: true })
    .filter(e => e.isDirectory() && !e.name.startsWith('.') && !EXCLUDED_DIRS.has(e.name))
    .filter(e => fs.existsSync(skillPath(e.name)))
    .map(e => {
      const { meta, body } = parseMd(fs.readFileSync(skillPath(e.name), 'utf-8'));
      return { folder: e.name, ...meta, body };
    })
    .sort((a, b) => a.folder.localeCompare(b.folder));
}

// ── routes ─────────────────────────────────────────────────────────────────

app.get('/', async (_, reply) => {
  reply.type('text/html').send(fs.readFileSync(path.join(PUBLIC, 'index.html'), 'utf-8'));
});

app.get('/api/skills', async () => readAllSkills());

app.get('/api/skills/:folder', async (req, reply) => {
  const { folder } = req.params;
  if (!isValidFolder(folder)) return reply.code(400).send({ error: '잘못된 폴더 이름' });
  const sp = skillPath(folder);
  if (!fs.existsSync(sp)) return reply.code(404).send({ error: '없는 스킬' });
  const { meta, body } = parseMd(fs.readFileSync(sp, 'utf-8'));
  return { folder, ...meta, body };
});

app.post('/api/skills', async (req, reply) => {
  const { folder } = req.body ?? {};
  if (!isValidFolder(folder)) return reply.code(400).send({ error: '폴더 이름은 소문자·숫자·하이픈만 가능합니다' });
  const dir = path.join(ROOT, folder);
  if (fs.existsSync(dir)) return reply.code(409).send({ error: '이미 존재하는 스킬입니다' });
  fs.mkdirSync(dir, { recursive: false });
  fs.writeFileSync(skillPath(folder), buildMd(req.body));
  return reply.code(201).send({ folder, ...req.body });
});

app.put('/api/skills/:folder', async (req, reply) => {
  const { folder } = req.params;
  if (!isValidFolder(folder)) return reply.code(400).send({ error: '잘못된 폴더 이름' });
  const sp = skillPath(folder);
  if (!fs.existsSync(sp)) return reply.code(404).send({ error: '없는 스킬' });
  fs.writeFileSync(sp, buildMd({ ...req.body, folder }));
  return { folder, ...req.body };
});

app.delete('/api/skills/:folder', async (req, reply) => {
  const { folder } = req.params;
  if (!isValidFolder(folder)) return reply.code(400).send({ error: '잘못된 폴더 이름' });
  if (!fs.existsSync(skillPath(folder))) return reply.code(404).send({ error: '없는 스킬' });
  fs.rmSync(path.join(ROOT, folder), { recursive: true, force: true });
  return reply.code(204).send();
});

// ── start ──────────────────────────────────────────────────────────────────

app.listen({ port: PORT, host: '127.0.0.1' }, (err) => {
  if (err) { console.error(err); process.exit(1); }
  console.log(`\nk-skill 어드민 → http://localhost:${PORT}\n`);
});
