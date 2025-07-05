export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Hotel Bliss Logo" className="footer-logo" />
          <span className="footer-title">Hotel Bliss</span>
        </div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/rooms">Rooms</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Hotel Bliss. All rights reserved.</p>
      </div>
    </footer>
  );
}
