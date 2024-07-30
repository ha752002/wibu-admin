export const environment = {
  production: false,
  apiUrl: 'http://localhost:8763/',
  authEndpoint: {
    login: 'auth/login',
    register: 'auth/register',
    getUserInfo: 'auth/user-info',
  },
  adminEndpoint: {
    manga: {
      getAll: 'admin/manga',
      getById: 'admin/manga/{id}',
      push: 'admin/manga',
      update: 'admin/manga/{id}',
    },
    genre: {
      getAll: 'admin/genre',
      getById: 'admin/genre/{id}',
      push: 'admin/genre',
      update: 'admin/genre/{id}',
    },
    author: {
      getAll: 'admin/author',
      getById: 'admin/author/{id}',
      push: 'admin/author',
      update: 'admin/author/{id}',
    },
    chapter: {
      getAll: 'admin/chapter',
      getById: 'admin/chapter/{id}',
      push: 'admin/chapter',
      update: 'admin/chapter/{id}',
    },
  },
};
