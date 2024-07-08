export const environment = {
  production: false,
  apiUrl: 'https://training-api-timesheet.nccsoft.vn/api/',
  authEndpoint: {
    login: 'TokenAuth/Authenticate',
    getUserInfo: 'services/app/Session/GetCurrentLoginInformations',
  },
  projectEndpoint: {
    getAllProjects: 'services/app/Project/getAll',
    getAllCustomers: 'services/app/Customer/getAll',
  }
};
