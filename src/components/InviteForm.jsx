import { useState } from 'react'
import { FORMSPREE_ENDPOINT, IS_FORM_CONFIGURED } from '../config.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function InviteForm() {
  const [email, setEmail] = useState('')
  const [usage, setUsage] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    if (pending) return

    const value = email.trim()
    if (!EMAIL_RE.test(value)) {
      setError('Enter a valid email address.')
      return
    }

    if (!IS_FORM_CONFIGURED) {
      // Can't reach production -- the deploy workflow gates on this -- but it
      // keeps local dev honest instead of silently faking a success state.
      console.warn('[omnica] FORMSPREE_ID is unset; see src/config.js')
      setError('Signup is not configured yet.')
      return
    }

    setPending(true)
    setError('')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: value,
          usage: usage.trim(),
          _subject: 'Omnica closed beta — invite request',
        }),
      })

      if (res.ok) {
        setSubmitted(true)
        return
      }

      const data = await res.json().catch(() => null)
      setError(data?.errors?.[0]?.message || 'Something went wrong. Please try again.')
    } catch {
      setError('Could not reach the server. Please try again.')
    } finally {
      setPending(false)
    }
  }

  return (
    <section className="wrap invite" id="invite">
      <div className="invite__card">
        <div className="eyebrow">Closed beta</div>
        <h2 className="invite__title">Request an invite</h2>
        <p className="invite__blurb">
          Omnica is in closed beta. Leave your email and we&rsquo;ll reach out as we open up
          seats &mdash; no spam, one email when it&rsquo;s your turn.
        </p>

        {submitted ? (
          <div className="invite__done" role="status">
            <div className="invite__done-title">You&rsquo;re on the list.</div>
            <div className="invite__done-sub">
              We&rsquo;ll email {email.trim()} when a seat opens up.
            </div>
          </div>
        ) : (
          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="form__row">
              <input
                className="form__input"
                type="email"
                name="email"
                autoComplete="email"
                aria-label="Email address"
                aria-invalid={error ? 'true' : undefined}
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
              />
              <button className="form__submit" type="submit" disabled={pending}>
                {pending ? 'Sending…' : 'Request invite'}
              </button>
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="usage">
                What are you using agents for today?{' '}
                <span className="form__optional">(optional)</span>
              </label>
              <textarea
                className="form__textarea"
                id="usage"
                name="usage"
                rows={2}
                value={usage}
                onChange={(e) => setUsage(e.target.value)}
              />
              <div className="form__hint">One sentence is plenty.</div>
            </div>

            {/* Formspree's built-in honeypot -- bots fill it, humans never see it. */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" hidden />

            {error && (
              <div className="form__error" role="alert">
                {error}
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
