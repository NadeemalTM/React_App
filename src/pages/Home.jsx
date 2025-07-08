import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <section
        className="hero-section"
        style={{ backgroundImage: "url('C:\Users\NadeemalTech\vite-app\public\images\rooms\deluxe.jpg')" }}
      >
        <div className="hero-content animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 rainbow-text">Welcome to Hotel Bliss</h1>
          <p className="text-lg mb-6">Experience luxury, comfort, and tranquility</p>
          <Link to="/rooms" className="glow-btn animate-bounce">Explore Rooms</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">Why Choose Us?</h2>
        <div className="features-list">
          <div className="feature-card animate-slide-up" style={{ background: "linear-gradient(135deg, #fbbf24 0%, #f59e42 100%)" }}>
            <span className="feature-icon">🌅</span>
            <h3>Scenic Views</h3>
            <p>Enjoy breathtaking views from every room and suite.</p>
          </div>
          <div className="feature-card animate-slide-up" style={{ background: "linear-gradient(135deg, #34d399 0%, #38bdf8 100%)" }}>
            <span className="feature-icon">🍽️</span>
            <h3>Fine Dining</h3>
            <p>World-class cuisine prepared by top chefs, served daily.</p>
          </div>
          <div className="feature-card animate-slide-up" style={{ background: "linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)" }}>
            <span className="feature-icon">💆‍♂️</span>
            <h3>Spa & Wellness</h3>
            <p>Relax and rejuvenate with our exclusive spa treatments.</p>
          </div>
          <div className="feature-card animate-slide-up" style={{ background: "linear-gradient(135deg, #f87171 0%, #fbbf24 100%)" }}>
            <span className="feature-icon">🏊‍♀️</span>
            <h3>Infinity Pool</h3>
            <p>Swim and unwind in our luxurious infinity pool.</p>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-preview-section">
        <h2 className="gallery-preview-title">Peek Into Paradise</h2>
        <div className="gallery-preview-list">
          <img src="/images/rooms/deluxe.jpg" alt="Room" className="gallery-img animate-zoom-in" />
          <img src="/images/gallery/2.jpg" alt="Pool" className="gallery-img animate-zoom-in" />
          <img src="/images/gallery/3.jpg" alt="Dining" className="gallery-img animate-zoom-in" />
        </div>
        <Link to="/gallery" className="gallery-btn">View Full Gallery</Link>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="testimonials-title">What Our Guests Say</h2>
        <div className="testimonials-list">
          <div className="testimonial-card animate-fade-in">
            <p>"An unforgettable experience! The staff was amazing and the rooms were spotless."</p>
            <span className="testimonial-author">– Sarah W.</span>
          </div>
          <div className="testimonial-card animate-fade-in">
            <p>"The food, the view, the spa... everything was perfect. Highly recommended!"</p>
            <span className="testimonial-author">– James L.</span>
          </div>
          <div className="testimonial-card animate-fade-in">
            <p>"Best hotel stay ever. We will definitely come back next year!"</p>
            <span className="testimonial-author">– Priya S.</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* App.css (add at the end or in a suitable place) 

@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
}
@keyframes bounce {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(-10px);}
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px);}
  to { opacity: 1; transform: translateY(0);}
}
@keyframes zoom-in {
  from { opacity: 0; transform: scale(0.8);}
  to { opacity: 1; transform: scale(1);}
}

.animate-fade-in { animation: fade-in 1s ease; }
.animate-bounce { animation: bounce 1.2s infinite; }
.animate-slide-up { animation: slide-up 1s cubic-bezier(.23,1.01,.32,1) both; }
.animate-zoom-in { animation: zoom-in 1s cubic-bezier(.23,1.01,.32,1) both; }

.rainbow-text {
  background: linear-gradient(90deg, #2563eb, #fbbf24, #34d399, #f472b6, #2563eb);
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow-move 3s linear infinite;
}
@keyframes rainbow-move {
  0% { background-position: 0% 50%;}
  100% { background-position: 100% 50%;}
}


*/
