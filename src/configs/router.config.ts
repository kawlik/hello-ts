/*  Define config
/*   *   *   *   *   *   *   *   *   *   */
interface Route {

	name: string;
	path: string;

	next?: {
		[key: string]: Route,
	};
};


/*  Export config
/*   *   *   *   *   *   *   *   *   *   */
export default <Route> {
	
	name: 'Hello',
	path: 'hello',

	next: {
		
		'apps': {
			name: 'Apps',
			path: 'apps',

			next: {

				'test': {
					name: 'App Test',
					path: 'test',
				},

				'todo': {
					name: 'App Todo',
					path: 'todo',
				}
			}
		},

		'login': {
			name: 'Login',
			path: 'login',
		},
		
		'news': {
			name: 'News',
			path: 'news',
		},

		'user': {
			name: 'User',
			path: 'user',

			next: {

				'add': {
					name: 'Add friend',
					path: 'add',
				},

				'qrs': {
					name: 'QR Code scaner',
					path: 'qrs',
				},
				
				'uid': {
					name: 'User ID',
					path: 'uid',
				}
			}
		},
	},
};