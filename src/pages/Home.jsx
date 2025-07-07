import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <section
        className="hero-section"
        style={{ backgroundImage: "url('/images/hero/hero.jpg')" }}
      >
        <div className="hero-content">
          <h1 className="text-4xl font-bold mb-4">Welcome to Hotel Bliss</h1>
          <p className="text-lg mb-6">Experience luxury, comfort, and tranquility</p>
          <Link to="/rooms" className="glow-btn">Explore Rooms</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">Why Choose Us?</h2>
        <div className="features-list">
          <div className="feature-card">
            <span className="feature-icon">🌅</span>
            <h3>Scenic Views</h3>
            <p>Enjoy breathtaking views from every room and suite.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🍽️</span>
            <h3>Fine Dining</h3>
            <p>World-class cuisine prepared by top chefs, served daily.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💆‍♂️</span>
            <h3>Spa & Wellness</h3>
            <p>Relax and rejuvenate with our exclusive spa treatments.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🏊‍♀️</span>
            <h3>Infinity Pool</h3>
            <p>Swim and unwind in our luxurious infinity pool.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="testimonials-title">What Our Guests Say</h2>
        <div className="testimonials-list">
          <div className="testimonial-card">
            <p>"An unforgettable experience! The staff was amazing and the rooms were spotless."</p>
            <span className="testimonial-author">– Sarah W.</span>
          </div>
          <div className="testimonial-card">
            <p>"The food, the view, the spa... everything was perfect. Highly recommended!"</p>
            <span className="testimonial-author">– James L.</span>
          </div>
          <div className="testimonial-card">
            <p>"Best hotel stay ever. We will definitely come back next year!"</p>
            <span className="testimonial-author">– Priya S.</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
