/**
 * Hero video slot.
 *
 * There is no overview clip yet, so this renders the designed frame as an inert
 * still rather than a play button that does nothing. When the video lands, make
 * the circle a real <button>, restore cursor:pointer + the hover state, and open
 * a player; the surrounding frame is already the right shape.
 */
export default function VideoPlaceholder() {
  return (
    <section className="wrap video" aria-hidden="true">
      <div className="video__frame">
        <div className="video__inner">
          <div className="video__play">
            <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
              <path
                d="M2 2.5v21c0 1.2 1.3 1.9 2.3 1.3l17-10.5c1-.6 1-2 0-2.6L4.3 1.2C3.3.6 2 1.3 2 2.5z"
                fill="oklch(94% 0.0045 250)"
              />
            </svg>
          </div>
          <div className="video__caption">Overview video coming soon</div>
        </div>
        <div className="video__time">0:60</div>
      </div>
    </section>
  )
}
