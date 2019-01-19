// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export class BaseConfig {

	// Firebase Config
	public static FirebaseConfig = {
		apiKey: 'AIzaSyA4F0nMzylCQn_d5BWks_3FqNuIXedKuaM',
		authDomain: 'connectioncounter.firebaseapp.com',
		databaseURL: 'https://connectioncounter.firebaseio.com',
		projectId: 'connectioncounter',
		storageBucket: 'connectioncounter.appspot.com',
		messagingSenderId: '287279683654'
	};

	// Firebase Collection
	public static CollectionEndpoint = 'callcenter';
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
