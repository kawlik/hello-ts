import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth, signInAnonymously } from 'firebase/auth';

import firebaseConfig from '../configs/firebase.config';


/*  Define service
/*   *   *   *   *   *   *   *   *   *   */
class FirebaseService{

	private firebaseApp: FirebaseApp;
	private firebaseAuth: Auth;

	constructor() {
		this.firebaseApp = initializeApp( firebaseConfig );
		this.firebaseAuth = getAuth();
	}


	/*	auth functions
	/*	*	*	*	*	*	*	*	*/

	async getAuthAnonymously() {
		return ( await signInAnonymously( this.firebaseAuth ))?.user;
	};
};


/*  Export service
/*   *   *   *   *   *   *   *   *   *   */
export default new FirebaseService();