import React, { useState } from 'react';
import { addPet } from '../api/petsApi';

const PetRegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    breed: '',
    color: '',
    lost_at: '',
    last_known_location: '',
    owner_contact: '',
    methods: []
  });

  const [methodInput, setMethodInput] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddMethod = () => {
    if (methodInput) {
      setFormData(prev => ({
        ...prev,
        methods: [...prev.methods, methodInput]
      }));
      setMethodInput('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPet(formData);
      alert('Mascota registrada con éxito');
    } catch (err) {
      alert('Error al registrar mascota');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-xl font-bold mb-4">Registrar Mascota Perdida</h2>
      <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
      <input type="text" name="species" placeholder="Especie" onChange={handleChange} required />
      <input type="text" name="breed" placeholder="Raza" onChange={handleChange} />
      <input type="text" name="color" placeholder="Color" onChange={handleChange} />
      <input type="datetime-local" name="lost_at" onChange={handleChange} required />
      <input type="text" name="last_known_location" placeholder="Última ubicación" onChange={handleChange} />
      <input type="text" name="owner_contact" placeholder="Contacto del dueño" onChange={handleChange} required />

      <div>
        <input type="text" value={methodInput} placeholder="Método de localización" onChange={(e) => setMethodInput(e.target.value)} />
        <button type="button" onClick={handleAddMethod}>Agregar método</button>
        <ul>
          {formData.methods.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
      </div>

      <button type="submit">Registrar Mascota</button>
    </form>
  );
};

export default PetRegisterForm;
