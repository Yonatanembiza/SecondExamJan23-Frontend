import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Employees from '../Employees';
import EmployeeDetails from '../../components/EmployeeDetails';
import NewEmployee from '../../components/NewEmployee';
import ManagedProjects from '../ManageProjects';
import Header from '../Headers/Header';


const Dashboard = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="/new-employee" element={<NewEmployee />} />
        <Route path="/manage-projects/:id" element={<ManagedProjects />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
