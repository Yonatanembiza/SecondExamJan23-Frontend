// api.js
import axios from 'axios';

const baseURL = 'http://localhost:5030/api/v1';

const api = axios.create({
  baseURL,
});

export const getEmployees = () => api.get('http://localhost:5030/api/v1/employees');
export const getEmployeeById = (id) => api.get(`http://localhost:5030/api/v1/employees/${id}`);
export const addEmployee = (employee) => api.post('http://localhost:5030/api/v1/employees', employee);
export const deleteEmployeeById = (id) => api.delete(`http://localhost:5030/api/v1/employees/${id}`);
export const getProjects = () => api.get('/projects');
export const assignProject = (employeeId, projectId) => api.post(`http://localhost:5030/api/v1/employees/${employeeId}/assign/${projectId}`);
export const unassignProject = (employeeId, projectId) => api.post(`http://localhost:5030/api/v1/employees/${employeeId}/unassign/${projectId}`);

const apiService = {
  getEmployees,
  getEmployeeById,
  addEmployee,
  deleteEmployeeById,
  getProjects,
  assignProject,
  unassignProject,
};

export default apiService;
