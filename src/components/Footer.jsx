export default function Footer() {
  return (
    <footer className="wrap footer">
      <img
        className="footer__mark"
        src="/brand/omnica-mark.svg"
        alt="Omnica"
        width="113"
        height="94"
      />
      <div className="footer__meta">© {new Date().getFullYear()} Omnica</div>
    </footer>
  )
}
