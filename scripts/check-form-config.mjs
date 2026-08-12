// Fails the production build while the Formspree endpoint is still a
// placeholder, so the closed-beta form can't go live silently dropping signups.
// Run locally with `npm run check:form`; CI runs it before `vite build`.
import { readFileSync } from 'node:fs'

const src = readFileSync(new URL('../src/config.js', import.meta.url), 'utf8')
const match = src.match(/FORMSPREE_ID\s*=\s*'([^']*)'/)

if (!match) {
  console.error('✗ Could not find FORMSPREE_ID in src/config.js')
  process.exit(1)
}

if (match[1] === 'REPLACE_ME') {
  console.error(`
✗ The invite form is not wired up.

  src/config.js still has FORMSPREE_ID = 'REPLACE_ME'.

  1. Create a form at https://formspree.io (New Form)
  2. Copy the ID out of the endpoint it gives you
     -- https://formspree.io/f/<THIS PART>
  3. Put it in src/config.js and commit

  Refusing to build: deploying now would show visitors a success message
  while throwing their email address away.
`)
  process.exit(1)
}

console.log(`✓ Formspree endpoint configured (${match[1]})`)
