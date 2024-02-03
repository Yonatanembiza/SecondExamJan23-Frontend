import React from 'react';
import { Link } from 'react-router-dom';

const Employee = ({ id, name }) => {
  return (
    <Link to={`/employees/${id}`}>
      <div>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
      </div>
    </Link>
  );
};

export default Employee;
