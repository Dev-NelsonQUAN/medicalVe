import React, { useState } from 'react';
import { useCreateMedicineMutation } from '../../../service/MedicineRtk';

const AddMedicine = () => {
  const [formData, setFormData] = useState({
    name : '',
    genericName: '',
    sku: '',
    weight: '',
    category: '',
    manufacturer: '',
    price: '',
    manufacturerPrice: '',
    stock: '',
    expireDate: '',
    status: '',
    details: '',
    image: null
  });
  const [addMedicine] = useCreateMedicineMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    await addMedicine(formDataToSend);
  };

  return (
    <div className="p-6 bg-white shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4">Add Medicine</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Medicine Name" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="stock" placeholder="Stock" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="file" name="image" onChange={handleImageChange} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Medicine</button>
      </form>
    </div>
  );
};

export default AddMedicine;