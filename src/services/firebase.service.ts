import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth, GoogleAuthProvider, signInAnonymously, signInWithPopup } from 'firebase/auth';

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
		try {
			return ( await signInAnonymously( this.firebaseAuth ))?.user;
		} catch( err ) {
			console.error( err );
		}
		return null;
	};

	async getAuthWithGoogle() {
		try {
			return ( await signInWithPopup( this.firebaseAuth, new GoogleAuthProvider()))?.user;
		} catch( err ) {
			console.error( err );
		}
		return null;
	}
};


/*  Export service
/*   *   *   *   *   *   *   *   *   *   */
export default new FirebaseService();