import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../contexts/auth.context';

import routerService from '../services/router.service';
import swipeService from '../services/swipe.service';

import InfobarBottom from '../components/infobar-bottom';
import InfobarTop from '../components/infobar-top';

import Login from '../components/login';
import Apps from './apps';
import News from './news';
import User from './user';

import AppTest from './apps/test';

import UserAdd from './user/add';
import UserUID from './user/uid';
import UserQRS from './user/qrs';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function MainContent() {
	
	// 	get location and navigate
	const location = useLocation()
	const navigate = useNavigate()

	// 	order of routes and current path
	const order = [ routerService.pathNews, routerService.pathApps, routerService.pathUser ];
	const cpath = location.pathname.split( /\//g )[1];

	// 	get auth values
    const { user, logout, loginAnonymously } = useAuthContext();

	// 	swipe handling
	useEffect(() => {
		swipeService.start({
			curr: cpath,
			prev: () => navigate( order[ order.indexOf( cpath ) - 1 ] || location.pathname ),
			next: () => navigate( order[ order.indexOf( cpath ) + 1 ] || location.pathname )
		});
	return(() => {
		swipeService.stop();
	})});

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


		<main key={ location.pathname } id='app-main-content' >
		<Routes>
		{
			user
			/*	when user is set fallbacks
			/*	*	*	*	*	*	*	*	*/
			? <>
				
				<Route path={ routerService.pathApps } >
					<Route path={ '' } element={ <Apps /> } />
					<Route path={ routerService.pathAppTest } element={ <AppTest /> } />
				</Route>

				<Route path={ routerService.pathNews } element={ <News /> } />

				<Route path={ routerService.pathUser } >
					<Route path={ '' } element={ <User /> } />
					<Route path={ routerService.pathUserAdd } element={ <UserAdd /> } />
					<Route path={ routerService.pathUserQRS } element={ <UserQRS /> } />
					<Route path={ routerService.pathUserUID } element={ <UserUID /> } />
				</Route>

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
			current={ location.pathname.split( /\//g )[1] }
			names={{
				apps: routerService.nameApps,
				news: routerService.nameNews,
				user: routerService.nameUser,
			}}
			paths={{
				apps: routerService.pathApps,
				news: routerService.pathNews,
				user: routerService.pathUser,
			}}
		/>

	</>
)};