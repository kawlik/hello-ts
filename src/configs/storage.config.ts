/*  Define config
/*   *   *   *   *   *   *   *   *   *   */
interface Store {

	path: string;

	next?: {
		[key: string]: Store,
	};
};


/*  Export config
/*   *   *   *   *   *   *   *   *   *   */
export default <Store> {
	
	path: 'hello',

	next: {
		
		'user': {

			path: 'user',
		},
	},
};