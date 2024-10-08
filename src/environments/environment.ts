export const environment = {
  production: false,
  apiUrl: 'http://localhost:8763/',
  authEndpoint: {
    login: 'auth/login',
    register: 'auth/register',
    getUserInfo: 'auth/user-info',
    delete: 'auth/deActive/{id}',
    update: 'auth/update/{id}',
    getAll: 'auth/user-list',
    getById: 'auth/',

  },
  adminEndpoint: {
    manga: {
      getAll: 'manga/get-all',
      getById: 'manga/',
      push: 'manga/create',
      update: 'manga/update',
      delete: 'manga/deActive/{id}',
    },
    genre: {
      getAll: 'manga/genre/get-all',
      getById: 'manga/genre/',
      push: 'manga/genre/create',
      update: 'manga/genre/update',
      delete: 'manga/genre/deActive/{id}',
    },
    author: {
      getAll: 'manga/author/get-all',
      getById: 'manga/author/',
      push: 'manga/author/create',
      update: 'manga/author/update',
      delete: 'manga/author/deActive/{id}',
    },
    chapter: {
      getAll: 'manga/story/{id}/chapters',
      getById: 'manga/chapter/',
      push: 'manga/chapter/create',
      update: 'manga/chapter/update',
      delete: 'manga/chapter/deActive/{id}',
    },
  },
  galleryEndpoint: {
    multiUpload: 'gallery/multi-upload',
    upload: 'gallery/upload',
  }
};
