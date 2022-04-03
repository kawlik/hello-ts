import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import { useState } from 'react';

/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function PromptPWA( prop: {
	getInstallPrompt(): Promise<any>,
}) {
	
	prop.getInstallPrompt();


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
	<>
	{
		<section className='app-prompt-pwa' >

			<button className='btn btn-dark shadow' onClick={ () => {} } >
				<InstallMobileIcon />
				<small className='align-middle fw-bold p-2' >Install as PWA</small>
			</button>
	
			<button className='btn btn-secondary shadow' onClick={ () => {} } >
				<AppBlockingIcon />
				<small className='align-middle fw-bold p-2' >Dismiss</small>
			</button>
	
		</section>
	}
	</>
)};