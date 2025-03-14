import React, { useEffect, useState } from 'react';
import dummyPharmacies from './pharmacies';

const UserDashboardHome = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [pharmacies, setPharmacies] = useState([]);
    const [totalPharmacies, setTotalPharmacies] = useState(0);

    useEffect(() => {
        setUserLocation({ latitude: 34.0522, longitude: -118.2437 });

        setPharmacies(dummyPharmacies);
        setTotalPharmacies(dummyPharmacies.length);
    }, []);

    return (
        <div className="p-4 bg-white">
            <h1 className="text-2xl font-bold mb-4">Pharmacy Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-600 text-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold">Total Pharmacies</h2>
                    <p className="text-3xl font-bold mt-2">{totalPharmacies}</p>
                </div>

                <div className="bg-blue-600 text-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold">Simulated Revenue</h2>
                    <p className="text-3xl font-bold mt-2">$1,250</p>
                </div>

                <div className="bg-blue-600 text-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold">Your Location</h2>
                    {userLocation && <p className="mt-2">{userLocation.latitude}, {userLocation.longitude}</p>}
                    {!userLocation && <p className="mt-2">Loading...</p>}
                </div>
            </div>

            <h2 className="text-xl font-semibold mb-2 border-b-1 border-gray-600">Nearby Pharmacies</h2>

            <div className="mt-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-200">
                {pharmacies.map((pharmacy) => (
                    <div
                        key={pharmacy.id}
                        className="bg-white rounded-lg shadow p-4 mb-2 flex items-start"
                    >
                        {/* <img
                            src={pharmacy.image}
                            alt={`${pharmacy.name} logo`}
                            className="w-20 h-20 object-cover rounded-full mr-4"
                        /> */}
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">{pharmacy.name}</h3>
                            <p className="text-sm text-gray-600">{pharmacy.address}</p>
                            <p className="text-sm">Distance: {pharmacy.distance} miles</p>
                            <p className="text-sm">Hours: {pharmacy.operatingHours}</p>
                            <p className="text-sm">Phone: {pharmacy.phone}</p>
                            <p className="text-sm">Rating: {pharmacy.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserDashboardHome;