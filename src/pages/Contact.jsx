import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
