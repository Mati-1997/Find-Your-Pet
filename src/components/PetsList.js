import React, { useEffect, useState } from 'react';
import { getPets } from '../api/petsApi';

const PetsList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets().then(setPets).catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Mascotas Perdidas</h2>
      <ul>
        {pets.map(pet => (
          <li key={pet.id} className="mb-2 border-b pb-2">
            <strong>{pet.name}</strong> ({pet.species}) - {pet.last_known_location}<br />
            Métodos: {pet.methods.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetsList;
