/*  Mutable data with refrence
/*   *   *   *   *   *   *   *   *   *   */

let element: HTMLElement;
let prev: ( () => void );
let next: ( () => void );
let curr: string;


/*  Define service
/*   *   *   *   *   *   *   *   *   *   */
class SwipeService{

	private x: number = 0;
	private y: number = 0;


	/*	constructor
	/*	*	*	*	*	*	*	*	*/
	constructor( private selector: string ) {
	}
	
	start( prop: {
		curr: string,
		prev(): void,
		next(): void
	}): void {
		element = document.querySelector<HTMLElement>( this.selector ) as HTMLElement;

		prev = prop?.prev;
		next = prop?.next;
		curr = prop?.curr;

		element.addEventListener( 'touchstart', this.onTouchStart );
		element.addEventListener( 'touchmove', this.onTouchMove );
		element.addEventListener( 'touchend', this.onTouchEnd );
	}

	stop(): void {
		element.removeEventListener( 'touchstart', this.onTouchStart );
		element.removeEventListener( 'touchmove', this.onTouchMove );
		element.removeEventListener( 'touchend', this.onTouchEnd );
	}


	/*	utilities
	/*	*	*	*	*	*	*	*	*/
	
	private onTouchStart( event: TouchEvent ): void {
		this.x = event.touches[0].clientX;
		this.y = event.touches[0].clientY;
	}

	private onTouchMove( event: TouchEvent ): void {

		//  get swipe data
		const swipe_w = Math.min( window.innerWidth / 3, 333 );
		const swipe_v = 0.33;
	
		const next_x = event.touches[0].clientX;
		const next_y = event.touches[0].clientY;
		
		const delta_x = this.x - next_x;
		const delta_y = this.y - next_y;


		//  swipe effect
		if( Math.abs( delta_x ) > Math.abs( delta_y )) {
			
			//  parse swipe data
			const direction = delta_x <= 0 ? 1 : -1;
			const opacity =  Math.max( 1 - (( Math.abs( delta_x ) - Math.abs( delta_y )) / swipe_w ), 0 );
			const transform = direction * swipe_v * ( Math.abs( delta_x ) - Math.abs( delta_y ));
			
			//  set swipe effect
			element.style.opacity = `${ opacity }`;
			element.style.transform = `translateX( ${ transform }px )`;
			element.style.transition = 'none';
		};


		//  swipe overflow
	    if( Math.abs( delta_x ) > Math.abs( delta_y ) && Math.abs( delta_x ) - Math.abs( delta_y ) > swipe_w  ) {

			//  on swipe left
	        if( delta_x < 0 ) {
	            return prev();
	        };

	        //  on swipe right
	        if( delta_x > 0 ) {
	            return next();
	        };
	    };
	}

	private onTouchEnd( event: TouchEvent ): void {

		// 	remove styling
		element.style.opacity = '';
		element.style.transform = '';
		element.style.transition = '';

		// 	reset touch
		this.x = 0;
		this.y = 0;
	}
};


/*  Export service
/*   *   *   *   *   *   *   *   *   *   */
export default new SwipeService( '#app-main-content' );