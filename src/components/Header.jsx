export default function Header({ onRequestInvite }) {
  return (
    <header className="wrap header">
      <img
        className="header__logo"
        src="/brand/omnica-logo.svg"
        alt="Omnica"
        width="651"
        height="94"
      />
      <button className="btn" type="button" onClick={onRequestInvite}>
        Request an invite
      </button>
    </header>
  )
}
