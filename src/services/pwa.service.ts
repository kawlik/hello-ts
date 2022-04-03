import { registerSW } from 'virtual:pwa-register';


/*  Mutable data with refrence
/*   *   *   *   *   *   *   *   *   *   */

let installPrompt: any;


/*  Define service
/*   *   *   *   *   *   *   *   *   *   */
class PWAService{

	private updateSW: ( reloadPage?: boolean | undefined ) => Promise<void>;
	private installPromptReady: Event = new Event( 'isInstallPromptReady' );

	constructor() {

		// 	register SW
		this.updateSW = registerSW({
			onNeedRefresh() {},
			onOfflineReady() {},
		});

		// 	listen for install prompt
		window.addEventListener( 'beforeinstallprompt', ( event ) => {

			//  prevent default event
			event.preventDefault();

			//  fetch event
			installPrompt = event;

			//  dispatch ecent
			window.dispatchEvent( this.installPromptReady );
		});
	}

	public async getInstallPrompt(): Promise<any> {
		return new Promise(( resolve, reject ) => {
	
			//  resolve when already set
			if( installPrompt ) return resolve( installPrompt );
	
			//  await for dispatch event
			window.addEventListener( 'isInstallPromptReady', ( event ) => {
	
				//  resolve when ready
				return resolve( installPrompt );
			});
		});
	}
};


/*  Export service
/*   *   *   *   *   *   *   *   *   *   */
export default new PWAService();