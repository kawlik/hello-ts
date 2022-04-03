import { useNavigate } from 'react-router-dom';

import routerService from '../services/router.service';

import ButtonApp from '../components/button-app';

import QuizIcon from '@mui/icons-material/Quiz';


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
		/><ButtonApp
		open={ () => navigate( routerService.pathAppTest ) }
		icon={ <QuizIcon /> }
		name={ routerService.nameAppTest }
	/><ButtonApp
	open={ () => navigate( routerService.pathAppTest ) }
	icon={ <QuizIcon /> }
	name={ routerService.nameAppTest }
/><ButtonApp
			open={ () => navigate( routerService.pathAppTest ) }
			icon={ <QuizIcon /> }
			name={ routerService.nameAppTest }
		/><ButtonApp
			open={ () => navigate( routerService.pathAppTest ) }
			icon={ <QuizIcon /> }
			name={ routerService.nameAppTest }
		/><ButtonApp
			open={ () => navigate( routerService.pathAppTest ) }
			icon={ <QuizIcon /> }
			name={ routerService.nameAppTest }
		/>

	</section>
)};