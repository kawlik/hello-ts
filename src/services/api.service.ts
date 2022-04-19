import axios from 'axios';


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
	async verifyOnServer( auth: {
		displayName?: string;
		photoURL?: string;
		uid: string;
    }): Promise<{
        displayName?: string;
		photoURL?: string;
		uid: string;
	}|null> {
        try {

            //  fetch user
            const user = ( await axios.post( this.base + '/user/verify', auth ))?.data;

            //  return result
            return user ? {
                displayName: user?.body?.displayName,
                photoURL: user?.body?.photoURL,
                uid: user?.auth
            } : null;

        } catch( err ) {
            return null;
        }
	}
};


/*  Export service
/*   *   *   *   *   *   *   *   *   *   */
export default new ApiService();