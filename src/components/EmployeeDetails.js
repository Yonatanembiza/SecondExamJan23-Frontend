import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiService from './api';
// import apiService from './api';

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await apiService.getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleDelete = async () => {
    try {
      await apiService.deleteEmployeeById(id);
      // Navigate to the Employees component
      navigate('/employees');
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleManageProjects = () => {
    // Navigate to the ManageProjects component
    navigate(`/manage-projects/${id}`);
  };

  return (
    <div>
      {employee && (
        <>
          <h2>Employee Details</h2>
          <p>ID: {employee.id}</p>
          <p>Name: {employee.name}</p>
          {/* Display other employee details */}
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleManageProjects}>Manage Projects</button>
          <button onClick={() => navigate('/employees')}>Back</button>
        </>
      )}
    </div>
  );
};

export default EmployeeDetails;
