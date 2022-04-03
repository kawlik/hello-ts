import { useState } from 'react';

import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';

/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function PromptPWA( prop: {
	getInstallPrompt(): Promise<any>,
}) {
	
	// 	install prompt handler
	const [ install, setInstall ] = useState<any>( null );
	const [ visible, setVisible ] = useState<boolean>( false );

	// 	set ready at first
	!install && prop.getInstallPrompt()
	.then( install => setInstall( install ))
	.then(() => setVisible( true ));

	// 	installing PWA
	async function installPWA() {

		// 	prompt
		install.prompt();

		// 	await for outcome
		const { outcome } = await install.userChoice;

		// 	test outcome
		if( outcome === 'accepted' ) dismissPWA();
	}

	// 	dismisnig PWA
	function dismissPWA() { setVisible( false ); }


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
	<section className='app-prompt-pwa' >
	{
		visible && <>

			<button className='btn btn-dark shadow' onClick={ () => installPWA() } >
				<InstallMobileIcon />
				<small className='align-middle fw-bold p-2' >Install as PWA</small>
			</button>
	
			<button className='btn btn-secondary shadow' onClick={ () => dismissPWA() } >
				<AppBlockingIcon />
				<small className='align-middle fw-bold p-2' >Dismiss</small>
			</button>
	
		</>
	}
	</section>
)};