import React, { useEffect, useState } from 'react';
import apiService from '../components/api';
import Project from '../components/Project';
// import Project from './Project';
// import apiService from './api';

const ManagedProjects = ({ employeeId }) => {
  const [projects, setProjects] = useState([]);
  const [assignedProjects, setAssignedProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await apiService.getProjects();
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const fetchAssignedProjects = async () => {
    try {
      const response = await apiService.getEmployeeById(employeeId);
      setAssignedProjects(response.data.projectList || []);
    } catch (error) {
      console.error('Error fetching assigned projects:', error);
    }
  };

  useEffect(() => {
    if (employeeId) {
      fetchAssignedProjects();
    }
  }, [employeeId]);

  const handleAssignProject = async (projectId) => {
    try {
      await apiService.assignProject(employeeId, projectId);
      fetchAssignedProjects();
    } catch (error) {
      console.error('Error assigning project:', error);
    }
  };

  const handleUnassignProject = async (projectId) => {
    try {
      await apiService.unassignProject(employeeId, projectId);
      fetchAssignedProjects();
    } catch (error) {
      console.error('Error unassigning project:', error);
    }
  };

  return (
    <div>
      <h2>Managed Projects</h2>
      <div>
        <h3>All Projects</h3>
        {projects.map((project) => (
          <div key={project.id}>
            <Project {...project} />
            <button onClick={() => handleAssignProject(project.id)}>Assign</button>
          </div>
        ))}
      </div>
      <div>
        <h3>Assigned Projects</h3>
        {assignedProjects.map((project) => (
          <div key={project.id}>
            <Project {...project} />
            <button onClick={() => handleUnassignProject(project.id)}>Unassign</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagedProjects;
