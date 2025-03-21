// MedicineList.jsx
import React from 'react';
import { useGetMedicinesQuery, useDeleteMedicineMutation } from '../../../service/MedicineRtk';
import { Link } from 'react-router-dom';

const MedicineList = () => {
  const { data: medicines, isLoading } = useGetMedicinesQuery();
  const [deleteMedicine] = useDeleteMedicineMutation();

  if (isLoading) return <p className="text-center text-gray-500">Loading medicines...</p>;

  return (
    <div className="p-6 bg-white shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4">Medicine List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Image</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine._id} className="border">
              <td className="p-2"><img src={medicine.image} alt={medicine.name} className="w-16 h-16 object-cover" /></td>
              <td className="p-2">{medicine.name}</td>
              <td className="p-2">${medicine.price}</td>
              <td className="p-2">{medicine.stock}</td>
              <td className="p-2">
                <Link to={`/pharmacyDashboard/medicines/details/${medicine._id}`} className="text-blue-500 mr-2">View</Link>
                <button className="text-red-500" onClick={() => deleteMedicine(medicine._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineList;