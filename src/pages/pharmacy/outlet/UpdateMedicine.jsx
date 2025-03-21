import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMedicineByIdQuery } from '../redux/MedicineRTK';

const MedicineDetails = () => {
  const { id } = useParams();
  const { data: medicine, isLoading } = useGetMedicineByIdQuery(id);

  if (isLoading) return <p className="text-center text-gray-500">Loading medicine details...</p>;

  return (
    <div className="p-6 bg-white shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4">Medicine Details</h2>
      <img src={medicine.image} alt={medicine.name} className="w-40 h-40 object-cover rounded" />
      <p className="mt-4"><strong>Name:</strong> {medicine.name}</p>
      <p><strong>Price:</strong> ${medicine.price}</p>
      <p><strong>Stock:</strong> {medicine.stock}</p>
      <p><strong>Category:</strong> {medicine.category}</p>
      <p><strong>Details:</strong> {medicine.details}</p>
    </div>
  );
};

export default MedicineDetails;
