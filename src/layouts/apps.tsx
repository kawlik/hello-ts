import { useNavigate } from 'react-router-dom';

import routerService from '../services/router.service';

import ButtonApp from '../components/button-app';

import QuizIcon from '@mui/icons-material/Quiz';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import LocalMallIcon from '@mui/icons-material/LocalMall';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function Apps() {

	// 	get navigate
	const navigate = useNavigate()


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
	<section id='app-apps-container' >

		
		<ButtonApp
			open={ () => navigate( routerService.pathAppTest ) }
			icon={ <QuizIcon /> }
			name={ routerService.nameAppTest }
		/>
		
		<ButtonApp
			open={ () => navigate( routerService.pathAppTodo ) }
			icon={ <FactCheckIcon /> }
			name={ routerService.nameAppTodo }
		/>

        <ButtonApp
			open={ () => navigate( routerService.pathAppShoppingList ) }
			icon={ <LocalMallIcon /> }
			name={ routerService.nameAppShoppingList }
		/>

	</section>
)};