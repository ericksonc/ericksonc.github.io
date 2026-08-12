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
          <div className={`shot shot--${shot}`}>
            <img src={src} alt={alt} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  )
}
