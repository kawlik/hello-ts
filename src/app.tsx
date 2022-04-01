import { HashRouter as Router } from 'react-router-dom';

import AuthProvider from './contexts/auth.context';
import Content from './layouts/content';

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

		<Content />
		
	</AuthProvider>
    </Router>
)};