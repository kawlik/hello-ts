import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../contexts/auth.context';

import InfobarTop from '../components/infobar-top';

import routerService from '../services/router.service';
import InfobarBottom from '../components/infobar-bottom';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function Content() {

	// 	get location and navigate
	const location = useLocation()
	const navigate = useNavigate()

	// 	get auth values
    const { user, logout } = useAuthContext();

	
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
	<>
		<InfobarTop
			goBack={ () => logout( -1 ) }
			logout={ logout }
			userUID={ user?.ID }
			pathURL={ routerService.parse( location.pathname ) }
		/>


		<main id='app-main-content' >
		<Routes>

			<Route path={ routerService.pathLogin } element={ <h1>Login</h1> } />

				<Route path={ routerService.pathApps } element={ <h1>Apps</h1> } />

				<Route path={ routerService.pathNews } element={ <h1>News</h1> } />
				
				<Route path={ routerService.pathUser } element={ <h1>User</h1> } />
			

			<Route path='*' element={ <Navigate replace to={ routerService.pathLogin } /> } />

		</Routes>
		</main>

		<InfobarBottom
			toApps={ () => navigate( routerService.pathApps ) }
			toNews={ () => navigate( routerService.pathNews ) }
			toUser={ () => navigate( routerService.pathUser ) }
			userUID={ user?.ID }
			current={ routerService.parse( location.pathname ) }
			names={{
				apps: routerService.nameApps,
				news: routerService.nameNews,
				user: routerService.nameUser,
			}}
		/>

	</>
)};