import React, { useState } from 'react';
import ServiceList from './ServiceList';
import ServiceForm from './ServiceForm';

const App = () => {
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState(null);

  const addService = (service) => {
    if (currentService !== null) {
      const updatedServices = services.map((s, i) => (i === currentService ? service : s));
      setServices(updatedServices);
      setCurrentService(null);
    } else {
      setServices([...services, service]);
    }
  };

  const editService = (index) => {
    setCurrentService(index);
  };

  const deleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <div>
      <h1>Healthcare Service Manager</h1>
      <ServiceForm onSubmit={addService} initialService={services[currentService] || {}} />
      <ServiceList services={services} onEdit={editService} onDelete={deleteService} />
    </div>
  );
};

export default App;
