import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-cover bg-center h-[80vh] flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('/images/hero/hero.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl font-bold mb-4">Welcome to Hotel Bliss</h1>
          <p className="text-lg mb-6">Experience luxury, comfort, and tranquility</p>
          <Link to="/rooms" className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">Explore Rooms</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
