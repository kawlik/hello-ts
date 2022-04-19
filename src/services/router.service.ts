import routerConfig from '../configs/router.config';


/*  Define service
/*   *   *   *   *   *   *   *   *   *   */
class RouterService{

	private readonly parser = new Map<string, string>();

	/*	constructor
	/*	*	*	*	*	*	*	*	*/
	constructor() {
		this.parser.set( '/' + this.pathApps, this.nameApps );
		this.parser.set( '/' + this.pathApps + '/' + this.pathAppTest, this.nameAppTest );
		this.parser.set( '/' + this.pathApps + '/' + this.pathAppTodo, this.nameAppTodo );
		this.parser.set( '/' + this.pathApps + '/' + this.pathAppShoppingList, this.nameAppShoppingList );

		this.parser.set( '/' + this.pathNews, this.nameNews );

		this.parser.set( '/' + this.pathUser, this.nameUser );
		this.parser.set( '/' + this.pathUser + '/' + this.pathUserAdd, this.nameUserAdd );
		this.parser.set( '/' + this.pathUser + '/' + this.pathUserQRS, this.nameUserQRS );
		this.parser.set( '/' + this.pathUser + '/' + this.pathUserUID, this.nameUserUID );

		this.parser.set( '/' + this.pathLogin, this.nameLogin );
	}

	// 	names parser
	parse( path: string ) {
		return this.parser.get( path ) || '';
	}


	/*	apps based routes
	/*	*	*	*	*	*	*	*	*/
	get pathApps(): string { return `${ routerConfig.next?.apps.path }`; }
	get nameApps(): string { return `${ routerConfig.next?.apps.name }`; }
	get pathAppTest(): string { return `${ routerConfig.next?.apps.next?.test.path }`; }
	get nameAppTest(): string { return `${ routerConfig.next?.apps.next?.test.name }`; }
	get pathAppTodo(): string { return `${ routerConfig.next?.apps.next?.todo.path }`; }
	get nameAppTodo(): string { return `${ routerConfig.next?.apps.next?.todo.name }`; }
    get pathAppShoppingList(): string { return `${ routerConfig.next?.apps.next?.shoping_list.path }`; }
	get nameAppShoppingList(): string { return `${ routerConfig.next?.apps.next?.shoping_list.name }`; }



	/*	news based routes
	/*	*	*	*	*	*	*	*	*/
	get pathNews(): string { return `${ routerConfig.next?.news.path }`; }
	get nameNews(): string { return `${ routerConfig.next?.news.name }`; }


	/*	user based routes
	/*	*	*	*	*	*	*	*	*/
	get pathUser(): string { return `${ routerConfig.next?.user.path }`; }
	get nameUser(): string { return `${ routerConfig.next?.user.name }`; }
	get pathUserAdd(): string { return `${ routerConfig.next?.user.next?.add.path }`; }
	get nameUserAdd(): string { return `${ routerConfig.next?.user.next?.add.name }`; }
	get pathUserQRS(): string { return `${ routerConfig.next?.user.next?.qrs.path }`; }
	get nameUserQRS(): string { return `${ routerConfig.next?.user.next?.qrs.name }`; }
	get pathUserUID(): string { return `${ routerConfig.next?.user.next?.uid.path }`; }
	get nameUserUID(): string { return `${ routerConfig.next?.user.next?.uid.name }`; }



	/*	login based routes
	/*	*	*	*	*	*	*	*	*/
	get pathLogin(): string { return `${ routerConfig.next?.login.path }`; }
	get nameLogin(): string { return `${ routerConfig.next?.login.name }`; }

};


/*  Export service
/*   *   *   *   *   *   *   *   *   *   */
export default new RouterService();