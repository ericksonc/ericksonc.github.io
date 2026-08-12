// ---------------------------------------------------------------------------
// Formspree endpoint for the closed-beta invite form.
//
// TODO(setup): replace REPLACE_ME with the form ID from your Formspree
// dashboard (New Form -> the endpoint reads https://formspree.io/f/<id>).
// The ID is a public value by design -- it is safe to commit.
//
// The deploy workflow refuses to build while this is still REPLACE_ME, so an
// unwired form can't reach production. See scripts/check-form-config.mjs.
// ---------------------------------------------------------------------------
export const FORMSPREE_ID = 'REPLACE_ME'

export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`

export const IS_FORM_CONFIGURED = FORMSPREE_ID !== 'REPLACE_ME'
