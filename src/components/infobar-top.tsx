import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function InfobarTop( prop: {
	goBack(): void,
	logout(): void,
	userUID: string,
	pathURL: string,
}) {


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
	<>
		<section className='app-infobar-top' key={ prop.userUID } >
	    {
	        prop.userUID
	        ? <>
	            <button className='btn' onClick={ () => prop.goBack() } >
	                <ArrowCircleLeftIcon />
	                <small className='text-muted align-middle p-2' >{ prop.pathURL }</small>
	            </button>

	            <button className='btn' onClick={ () => prop.logout() } >
	                <LogoutIcon />
	            </button>
	        </>
	        : <>
	            <button className='btn' >
	                <InfoIcon />
	                <small className='text-muted align-middle p-2' >Need help?</small>
	            </button>
	        </>
	    }
	    </section>
	</>
)};