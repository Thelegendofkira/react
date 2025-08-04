// components/PetForm.jsx
import React from 'react';

function PetForm({ pets }) {
  if (pets.length === 0) {
    return <p style={{ color: 'white', padding: '2rem' }}>No pets added yet.</p>;
  }

  return (
    <div style={{ padding: '2rem', backgroundColor: '#ffffffbb', margin: '2rem', borderRadius: '10px' }}>
      <h2>Available Pets</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#eee' }}>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Type</th>
            <th style={cellStyle}>Age</th>
            <th style={cellStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet, index) => (
            <tr key={index} style={{ background: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <td style={cellStyle}>{pet.name}</td>
              <td style={cellStyle}>{pet.type}</td>
              <td style={cellStyle}>{pet.age}</td>
              <td style={cellStyle}>{pet.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cellStyle = {
  padding: '10px',
  border: '1px solid #ccc',
};

export default PetForm;
