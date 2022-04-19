import { createContext, useContext, useEffect, useState } from 'react';

import firebaseService from '../services/firebase.service';
import storageService from '../services/storage.service';
import apiService from '../services/api.service';


/*  Component Context
/*   *   *   *   *   *   *   *   *   *   */


//  export context object
export const AuthContext = createContext<any>( null );

//  export context domain
export function useAuthContext() {
    return useContext( AuthContext );
};


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function AuthProvider( prop: {
	children: JSX.Element | JSX.Element[]
}) {

	// 	user ref
	const [ user, setUser ] = useState<{
		displayName?: string;
		photoURL?: string;
		uid: string;
	}|null>( null )

	// 	user utility functions
	function logout(): void {
		storageService.deleteUser();
		setUser( null );
	}

	function readSavedUser() {
		if( user ) return;
		setUser( storageService.readUser())
	}

	function saveLogedUser() {
		if( !user ) return;
		storageService.saveUser( user );
	}

	// 	user login types
	async function loginAnonymously() {

		// 	fetch auth
		const auth = await firebaseService.getAuthAnonymously();

		// 	set user
		setUser({
			uid: auth?.uid || 'Anonymous',
		});
	}

	async function loginWithGoogle() {

		// 	fetch and test auth
		const auth = await firebaseService.getAuthWithGoogle();

        //  verify user
        const user = await apiService.verifyOnServer({
            displayName: auth?.displayName || '',
		    photoURL: auth?.photoURL || '',
		    uid: auth?.uid || ''
        });

		// 	set user
		setUser( user );
	}


	// 	on effect
	useEffect(() => {

		// 	user cashing
		readSavedUser();
		saveLogedUser();

		// 	debug
		console.log( user );

	}, [ user ]);


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <AuthContext.Provider value={{
		user,
		logout,
		loginAnonymously,
		loginWithGoogle,
	}} >

	{ prop.children }

    </AuthContext.Provider>
)};