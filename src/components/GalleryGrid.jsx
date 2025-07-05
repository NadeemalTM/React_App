export default function GalleryGrid({ images }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Gallery ${idx}`}
          className="w-full h-48 object-cover rounded-lg"
        />
      ))}
    </div>
  );
}
