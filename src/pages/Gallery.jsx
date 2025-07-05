import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
];

export default function Gallery() {
  return (
    <>
      <Header />
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
        <GalleryGrid images={images} />
      </section>
      <Footer />
    </>
  );
}
