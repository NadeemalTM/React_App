import Header from "../components/Header";
import Footer from "../components/Footer";
import RoomCard from "../components/RoomCard";
import rooms from "../data/roomsData";

export default function Rooms() {
  return (
    <>
      <Header />
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Rooms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
