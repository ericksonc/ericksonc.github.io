import { useState } from 'react'

/**
 * Hero video slot.
 *
 * Click-to-play rather than autoplay: the clip is narrated, so it should not
 * start talking on its own. Nothing but the poster loads until the user opts
 * in — the <video> element is not mounted at all, so preload can't fire.
 * Once mounted it carries `autoPlay` (the click is the user gesture that
 * satisfies browser autoplay policy), with sound on and native controls.
 *
 * Captions ship as a sidecar VTT, transcribed from the narration. No `default`
 * on the track: captions render bottom-centre, which sits over the app UI in
 * the zoomed shots, so the native CC control opts in rather than out.
 */

const SRC = '/video/omnica-overview.mp4'
const POSTER = '/video/poster.webp'
const DURATION = '0:54'

export default function Video() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="wrap video" aria-labelledby="video-title">
      <h2 id="video-title" className="u-sr-only">
        Omnica overview video
      </h2>

      <div className="video__frame">
        {playing ? (
          <video
            className="video__el"
            src={SRC}
            poster={POSTER}
            controls
            autoPlay
            playsInline
            preload="auto"
          >
            <track
              kind="captions"
              src="/video/omnica-overview.en.vtt"
              srcLang="en"
              label="English"
            />
          </video>
        ) : (
          <button
            type="button"
            className="video__cover"
            onClick={() => setPlaying(true)}
          >
            <img
              className="video__poster"
              src={POSTER}
              alt=""
              width="1920"
              height="1080"
            />
            <span className="video__inner">
              <span className="video__play">
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                  <path
                    d="M2 2.5v21c0 1.2 1.3 1.9 2.3 1.3l17-10.5c1-.6 1-2 0-2.6L4.3 1.2C3.3.6 2 1.3 2 2.5z"
                    fill="oklch(94% 0.0045 250)"
                  />
                </svg>
              </span>
              <span className="video__caption">
                Watch the {DURATION} overview
              </span>
            </span>
            <span className="video__time">{DURATION}</span>
          </button>
        )}
      </div>
    </section>
  )
}
