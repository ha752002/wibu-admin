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
      getAll: 'manga/get-all',
      getById: 'manga/{id}',
      push: 'manga/create',
      update: 'manga/update/{id}',
    },
    genre: {
      getAll: 'genre/get-all',
      getById: 'genre/{id}',
      push: 'genre/create',
      update: 'genre/update/{id}',
    },
    author: {
      getAll: 'author/get-all',
      getById: 'author/{id}',
      push: 'author/create',
      update: 'author/update/{id}',
    },
    chapter: {
      getAll: 'story/{id}/chapters',
      getById: 'chapter/{id}',
      push: 'chapter/create',
      update: 'chapter/update/{id}',
    },
  }
};
