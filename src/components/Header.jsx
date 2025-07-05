import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-logo">
        <img src="/images/logo.png" alt="Hotel Bliss Logo" className="logo-img" />
        <span className="logo-text">Hotel Bliss</span>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/rooms" className="nav-link">Rooms</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}
