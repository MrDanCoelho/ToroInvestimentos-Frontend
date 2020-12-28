// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

class CrudUrl {
  getAll!: string;
  getPaginated!: string;
  insert!: string;
  update!: string;
  delete!: string;
}

export const environment = {
  production: false,
  appName: ".Net Simple Auth",

  apiUrl: 'http://localhost:5000/api',

  accountUrl: {
    login: "/v1/account/login"
  },

  logInsertBatchUrl: "/v1/log/batch",

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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
