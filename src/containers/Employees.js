import React, { useEffect, useState } from 'react';
// import Employee from './Employee';
// import apiService from './api';
import Employee from '../components/Employee';
import apiService from '../components/api';

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await apiService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      {employees.map((employee) => (
        <Employee key={employee.id} {...employee} />
      ))}
    </div>
  );
};

export default Employees;
