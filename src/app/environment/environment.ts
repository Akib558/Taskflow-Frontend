const baseUrl = 'http://localhost:5109';

export const environment = {
  production: false,
  baseUrl,
  loginUrl: `${baseUrl}/api/Auth/login`,
  getUserInfoUrl: `${baseUrl}/api/User/GetUserById`,
  addTask: `${baseUrl}/api/Task/AddTask`,
  updateTask: `${baseUrl}/api/Task/UpdateTask`,
  getAllTask: `${baseUrl}/api/Task/GetAllTaskForUser`,
};
