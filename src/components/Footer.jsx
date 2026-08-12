export default function Footer() {
  return (
    <footer className="wrap footer">
      <img className="footer__mark" src="/brand/omnica-mark.png" alt="Omnica" width="191" height="159" />
      <div className="footer__meta">© {new Date().getFullYear()} Omnica</div>
    </footer>
  )
}
