import axios from "axios";


/*  Define service
/*   *   *   *   *   *   *   *   *   *   */
class ApiService{

	private readonly base: string = 'http://localhost:8080';

	/*	constructor
	/*	*	*	*	*	*	*	*	*/
	constructor() {
	}

	/*	user
	/*	*	*	*	*	*	*	*	*/
	async testUserOnServer( user: {
		displayName?: string|null;
		photoURL?: string|null;
		uid?: string;
	}): Promise<{
		displayName?: string|null;
		photoURL?: string|null;
		uid?: string;
	}|null> {
		try {
			return ( await axios.post( this.base + '/user/test', user ))?.data;
		} catch( err ) {
			return null;
		}
	}
};


/*  Export service
/*   *   *   *   *   *   *   *   *   *   */
export default new ApiService();