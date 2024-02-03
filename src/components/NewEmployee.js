import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import apiService from './api';

const NewEmployee = () => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.addEmployee({ name, salary });
      history.push('/employees');
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
