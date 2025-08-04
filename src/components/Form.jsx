// components/Form.jsx
import React, { useState } from 'react';

function Form({ addPet }) {
  const [petData, setPetData] = useState({
    name: '',
    type: '',
    age: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!petData.name) errs.name = 'Pet name is required';
    if (!petData.type) errs.type = 'Pet type is required';
    if (!petData.age || isNaN(petData.age) || petData.age <= 0)
      errs.age = 'Valid age is required';
    if (!petData.description) errs.description = 'Description is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    addPet(petData);
    setPetData({ name: '', type: '', age: '', description: '' });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1rem', backgroundColor: '#ffffffcc', margin: '2rem', borderRadius: '10px' }}>
      <h2>Add a Pet</h2>
      <div>
        <label>Pet Name:</label><br />
        <input name="name" value={petData.name} onChange={handleChange} />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      <div>
        <label>Pet Type:</label><br />
        <input name="type" value={petData.type} onChange={handleChange} />
        {errors.type && <p style={{ color: 'red' }}>{errors.type}</p>}
      </div>
      <div>
        <label>Pet Age:</label><br />
        <input name="age" value={petData.age} onChange={handleChange} type="number" />
        {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
      </div>
      <div>
        <label>Description:</label><br />
        <textarea name="description" value={petData.description} onChange={handleChange} />
        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
      </div>
      <button type="submit" style={{ marginTop: '10px' }}>Add Pet</button>
    </form>
  );
}

export default Form;
