import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">Employees</Link>
      <p></p>
      <Link to="/new-employee">Add Employee</Link>
    </div>
  );
};

export default Header;
