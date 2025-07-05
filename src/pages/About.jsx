import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
        <p className="text-gray-700 text-lg">
          Hotel Bliss is a luxury resort located in the heart of paradise. With over a decade of excellence in hospitality, our mission is to offer a memorable experience to every guest.
        </p>
        <p className="mt-4 text-gray-700">
          Whether you're here for business, a romantic getaway, or a family vacation, Hotel Bliss provides the perfect setting to relax and rejuvenate. Our team is dedicated to delivering world-class service.
        </p>
      </section>
      <Footer />
    </>
  );
}
