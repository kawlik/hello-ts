import { registerSW } from 'virtual:pwa-register';


/*  Define service
/*   *   *   *   *   *   *   *   *   *   */
class PWAService{

	private updateSW: ( reloadPage?: boolean | undefined ) => Promise<void>;
	private installPromptReady: Event = new Event( 'isInstallPromptReady' );
	private installPrompt: null|Event = null;

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
			this.installPrompt = event;
		
			//  dispatch ecent
			window.dispatchEvent( this.installPromptReady );
		});
	}

	public async getInstallPrompt() {
		return new Promise(( resolve, reject ) => {
	
			//  resolve when already set
			if( this.installPrompt ) return resolve( this.installPrompt );
	
			//  await for dispatch event
			window.addEventListener( 'isInstallPromptReady', ( event ) => {
	
				//  resolve when ready
				return resolve( this.installPrompt );
			});
		});
	}
};


/*  Export service
/*   *   *   *   *   *   *   *   *   *   */
export default new PWAService();