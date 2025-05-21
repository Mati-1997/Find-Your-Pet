const BASE_URL = 'http://localhost:3001/api/pets';

export const getPets = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Error al obtener mascotas');
  return response.json();
};

export const addPet = async (petData) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(petData)
  });
  if (!response.ok) throw new Error('Error al registrar mascota');
  return response.json();
};
