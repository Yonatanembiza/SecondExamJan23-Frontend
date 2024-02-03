import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from './api';

const NewEmployee = () => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.addEmployee({ name, salary });
      // Use navigate to go to the Employees component
      navigate('/employees');
    } catch (error) {
      console.error('Error adding new employee:', error);
    }
  };

  return (
    <div>
      <h2>New Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Salary:</label>
        <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewEmployee;
