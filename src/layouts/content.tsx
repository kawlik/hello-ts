import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../contexts/auth.context';

import routerService from '../services/router.service';

import InfobarBottom from '../components/infobar-bottom';
import InfobarTop from '../components/infobar-top';
import Login from '../components/login';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function Content() {

	// 	get location and navigate
	const location = useLocation()
	const navigate = useNavigate()

	// 	get auth values
    const { user, logout, loginAnonymously } = useAuthContext();

	
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
	<>
		<InfobarTop
			goBack={ () => navigate( -1 ) }
			logout={ () => logout() }
			userUID={ user?.uid }
			pathURL={ routerService.parse( location.pathname ) }
		/>


		<main id='app-main-content' >
		<Routes key={ user?.uid }>
		{
			user
			/*	when user is set fallbacks
			/*	*	*	*	*	*	*	*	*/
			? <>
				
				<Route path={ routerService.pathApps } element={ <h1>Apps</h1> } />

				<Route path={ routerService.pathNews } element={ <h1>News</h1> } />

				<Route path={ routerService.pathUser } element={ <h1>User</h1> } />

				<Route path='*' element={ <Navigate to={ routerService.pathApps } /> } />

			</>
			/*	when user is not set fallbacks
			/*	*	*	*	*	*	*	*	*/
			: <>

				<Route path={ routerService.pathLogin } element={
					<Login loginAnonymously={ () => loginAnonymously() } />
				} />

				<Route path='*' element={ <Navigate to={ routerService.pathLogin } /> } />
			</>
		}
		</Routes>
		</main>

		<InfobarBottom
			toApps={ () => navigate( routerService.pathApps ) }
			toNews={ () => navigate( routerService.pathNews ) }
			toUser={ () => navigate( routerService.pathUser ) }
			userUID={ user?.uid }
			current={ routerService.parse( location.pathname ) }
			names={{
				apps: routerService.nameApps,
				news: routerService.nameNews,
				user: routerService.nameUser,
			}}
		/>

	</>
)};