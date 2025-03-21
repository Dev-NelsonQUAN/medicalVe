import React from "react";

const PharmacyDashboardHome = () => {
  const pharmacies = [
    {
      id: 1,
      name: "HealthPlus Pharmacy",
      address: "123 Main St, City",
      distance: 2.5,
      operatingHours: "9 AM - 8 PM",
      phone: "(123) 456-7890",
      rating: 4.5
    },
    {
      id: 2,
      name: "WellCare Pharmacy",
      address: "456 Elm St, City",
      distance: 1.2,
      operatingHours: "8 AM - 6 PM",
      phone: "(987) 654-3210",
      rating: 4.0
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Pharmacy Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-600 text-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold">Total Pharmacies</h2>
          <p className="text-4xl font-bold mt-3">{pharmacies.length}</p>
        </div>

        <div className="bg-blue-600 text-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold">Simulated Revenue</h2>
          <p className="text-4xl font-bold mt-3">$1,250</p>
        </div>

        <div className="bg-blue-600 text-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold">Your Location</h2>
          <p className="mt-3">Lagos, Nigeria</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4 border-b pb-2">Nearby Pharmacies</h2>

      <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-200">
        {pharmacies.map((pharmacy) => (
          <div
            key={pharmacy.id}
            className="bg-white rounded-lg shadow-md p-4 flex items-start"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{pharmacy.name}</h3>
              <p className="text-sm text-gray-600">{pharmacy.address}</p>
              <p className="text-sm">Distance: {pharmacy.distance} miles</p>
              <p className="text-sm">Hours: {pharmacy.operatingHours}</p>
              <p className="text-sm">Phone: {pharmacy.phone}</p>
              <p className="text-sm">Rating: {pharmacy.rating} ⭐</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PharmacyDashboardHome;

