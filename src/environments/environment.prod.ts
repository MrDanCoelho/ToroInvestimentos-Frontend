class CrudUrl {
  getAll!: string;
  getPaginated!: string;
  insert!: string;
  update!: string;
  delete!: string;
}

export const environment = {
  production: true,
  appName: "Toro Investimentos",

  apiUrl: 'http://localhost:5000/api',

  accountUrl: {
    login: "/v1/account/login"
  },

  logInsertBatchUrl: "/v1/log/batch",

  bankUrl: {
    getUserPosition: "/v1/Bank/GetUserPosition"
  },

  brokerUrl: {
    getTrending: "/v1/Broker/Trending",
    sendOrder: "/v1/Broker/Order"
  },

  crudUrl: new Map<string, CrudUrl>().set(
    'log', {
      getAll: "/v1/log",
      getPaginated: "/v1/log",
      insert: "/v1/log",
      update: "/v1/log",
      delete: "/v1/log",
    }
  ),
};
