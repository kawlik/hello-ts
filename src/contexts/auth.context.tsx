import { createContext, useContext, useState } from 'react';

import firebaseService from '../services/firebase.service';


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
		setUser( null );
	}

	// 	user login types
	async function loginAnonymously() {
		setUser( await firebaseService.getAuthAnonymously());
	}


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