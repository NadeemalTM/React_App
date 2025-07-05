import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-800">Hotel Bliss</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/rooms" className="hover:text-blue-500">Rooms</Link>
        <Link to="/gallery" className="hover:text-blue-500">Gallery</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
      </nav>
    </header>
  );
}
