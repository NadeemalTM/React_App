export default function RoomCard({ room }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{room.name}</h2>
        <p className="text-gray-600">{room.description}</p>
        <p className="text-blue-600 mt-2 font-semibold">${room.price} / night</p>
      </div>
    </div>
  );
}
