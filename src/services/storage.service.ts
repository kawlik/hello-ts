import storageConfig from '../configs/storage.config';


/*  Define service
/*   *   *   *   *   *   *   *   *   *   */
class StorageService{


	/*	constructor
	/*	*	*	*	*	*	*	*	*/
	constructor() {

	}

	/*	utilities
	/*	*	*	*	*	*	*	*	*/
	private save( path: string, data: any ): void {
		localStorage.setItem( path, JSON.stringify( data ));
	}

	private read( path: string ): any|null {
		return JSON.parse( localStorage.getItem( path ) || 'null' );
	}

	private delete( path: string ): void {
		localStorage.removeItem( path );
	}


	/*	user based storages
	/*	*	*	*	*	*	*	*	*/
	private get pathUser(): string { return `${ storageConfig.path }.${ storageConfig.next?.user.path }`; }

	saveUser( payload: any ): void {
		this.save( this.pathUser, payload );
	}

	readUser(): any {
		return this.read( this.pathUser );
	}
	
	deleteUser(): void {
		this.delete( this.pathUser );
	}
};


/*  Export service
/*   *   *   *   *   *   *   *   *   *   */
export default new StorageService();