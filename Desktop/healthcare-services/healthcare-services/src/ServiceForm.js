// ServiceForm.js
import React, { useState, useEffect } from 'react';

const ServiceForm = ({ onSubmit, initialService }) => {
  const [service, setService] = useState(initialService);

  useEffect(() => {
    setService(initialService);
  }, [initialService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(service);
    setService({ name: '', description: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Service Name"
        value={service.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Service Description"
        value={service.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Service Price"
        value={service.price}
        onChange={handleChange}
        required
      />
      <button type="submit">{initialService.name ? 'Update' : 'Add'} Service</button>
    </form>
  );
};

export default ServiceForm;
