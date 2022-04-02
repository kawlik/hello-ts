import { createContext, useContext, useEffect, useState } from 'react';

import firebaseService from '../services/firebase.service';
import storageService from '../services/storage.service';


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
	children: JSX.Element	
}) {

	// 	user ref
	const [ user, setUser ] = useState<any>( null )

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
		setUser( await firebaseService.getAuthAnonymously());
	}


	// 	on effect
	useEffect(() => {

		// 	user cashing
		readSavedUser();
		saveLogedUser();	

		// 	user debug
		console.log( user );

	}, [ user ]);


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <AuthContext.Provider value={{
		user,
		logout,
		loginAnonymously,
	}} >

        { prop.children }

    </AuthContext.Provider>
)};