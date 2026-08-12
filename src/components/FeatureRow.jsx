export default function FeatureRow({ eyebrow, title, bullets, shot, src, alt, flip }) {
  return (
    <section className="wrap feature">
      <div className={`feature__row${flip ? ' feature__row--flip' : ''}`}>
        <div className="feature__copy">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="feature__title">{title}</h2>
          <ul className="feature__list">
            {bullets.map((b) => (
              <li className="feature__item" key={b}>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="feature__media">
          {/* Two nested elements so each carries a single-layer mask -- see the
              note on .shot in global.css.

              These load eagerly and decode synchronously on purpose. An image
              that arrives after its masked ancestor has painted does not
              invalidate that layer in Chromium, so a lazy/async shot renders as
              an empty box until something unrelated forces a repaint. */}
          <div className={`shot shot--${shot}`}>
            <div className="shot__inner">
              <img src={src} alt={alt} decoding="sync" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
