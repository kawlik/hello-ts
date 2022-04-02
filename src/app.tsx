import { HashRouter as Router } from 'react-router-dom';

import AuthProvider from './contexts/auth.context';
import MainContent from './layouts/main';

import pwaService from './services/pwa.service';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function App() {

	pwaService.getInstallPrompt();
	

/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <Router>
	<AuthProvider>

		<MainContent />
		
	</AuthProvider>
    </Router>
)};