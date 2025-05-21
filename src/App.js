import React from 'react';
import PetsList from './components/PetsList';
import PetRegisterForm from './components/PetRegisterForm';

function App() {
  return (
    <div className="p-4">
      <PetRegisterForm />
      <PetsList />
    </div>
  );
}

export default App;
