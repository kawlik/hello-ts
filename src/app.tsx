import { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import AuthProvider from './contexts/auth.context';
import PromptPWA from './components/prompt-pwa';
import MainContent from './layouts/main';
import pwaService from './services/pwa.service';



/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function App() {


	
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
	<>
		<PromptPWA getInstallPrompt={ pwaService.getInstallPrompt } />
		
	    <Router>
		<AuthProvider>


			<MainContent />

		</AuthProvider>
	    </Router>
	</>
)};