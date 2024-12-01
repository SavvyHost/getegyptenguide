// components/templates/hotels/RoomDetails.tsx

export default function RoomDetails() {
  const rooms = [
    {
      name: "King Room with Mountain View",
      features: [
        "1 extra-large double bed",
        "35 m²",
        "Garden view",
        "Mountain view",
        "City view",
        "Air conditioning",
        "Flat-screen TV",
        "Soundproofing",
        "Terrace",
        "Coffee machine",
        "Free WiFi",
      ],
      amenities: [
        "Hot tub",
        "Free toiletries",
        "Bidet",
        "Toilet",
        "Fireplace",
        "TV",
        "Slippers",
        "Refrigerator",
        "Private entrance",
        "Wake-up service",
      ],
      price: "EGP 1,870",
      taxes: "+ EGP 280 taxes and charges",
      discount: "72% off",
      options: [
        "No credit card needed",
        "Flexible to reschedule",
        "Non-refundable",
      ],
    },
    {
      name: "Deluxe Room with City View",
      features: [
        "1 queen-size bed",
        "40 m²",
        "City view",
        "Air conditioning",
        "Private balcony",
        "Flat-screen TV",
        "Free WiFi",
        "Coffee machine",
      ],
      amenities: [
        "Free toiletries",
        "Hairdryer",
        "Electric kettle",
        "Desk",
        "Iron",
        "Wardrobe",
        "Wake-up service",
      ],
      price: "EGP 2,077",
      taxes: "+ EGP 312 taxes and charges",
      discount: "72% off",
      options: [
        "Free cancellation before 5 December 2024",
        "No prepayment needed",
        "Pay at the property",
      ],
    },
  ];

  return (
    <div className="max-w-5xl p-3">
      {rooms.map((room, index) => (
        <div
          key={index}
          className="border rounded-lg p-6 mb-6 bg-white shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col md:flex-row justify-between">
            {/* Room Info */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {room.name}
              </h2>
              <ul className="space-y-1 text-gray-600">
                {room.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Info */}
            <div className="md:w-1/3 mt-4 md:mt-0">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-lg font-bold text-red-500 line-through">
                  {room.price}
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {room.discount}
                </p>
                <p className="text-sm text-gray-600">{room.taxes}</p>
              </div>
              <button className="w-full mt-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Select Room
              </button>
            </div>
          </div>

          {/* Amenities */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <h3 className="text-xl font-semibold text-gray-800">
                Room Amenities
              </h3>
              <ul className="grid grid-cols-2 gap-2 mt-2 text-gray-600">
                {room.amenities.map((amenity, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Your Options
              </h3>
              <ul className="mt-2 space-y-2">
                {room.options.map((option, i) => (
                  <li
                    key={i}
                    className="flex items-center bg-gray-100 p-2 rounded-md"
                  >
                    <span className="mr-2 text-green-500">✓</span>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
