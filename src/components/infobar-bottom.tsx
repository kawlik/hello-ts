import AppsIcon from '@mui/icons-material/Apps';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function InfobarBottom( prop: {
	toApps(): void,
	toNews(): void,
	toUser(): void,
	userUID: string,
	current: string,
	names: {
		apps: string,
		news: string,
		user: string,
	}
}) {


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <section className='app-infobar-bottom' key={ prop.userUID } >
    {
        prop.userUID
        ?   <>
                <button className={ `btn ${ prop.current === prop.names.news ? 'active' : '' }` } onClick={ () => prop.toNews() } >
                    <MessageIcon />
                    <small className='text-muted d-block' >{ prop.names.news }</small>
                </button>

                <button className={ `btn ${ prop.current === prop.names.apps ? 'active' : '' }` } onClick={ () => prop.toApps() } >
                    <AppsIcon />
                    <small className='text-muted d-block' >{ prop.names.apps }</small>
                </button>

                <button className={ `btn ${ prop.current === prop.names.user ? 'active' : '' }` } onClick={ () => prop.toUser() } >
                    <PersonIcon />
                    <small className='text-muted d-block' >{ prop.names.user }</small>
                </button>
            </>
        :   <>
                <button className='btn' onClick={ () => { } } >
                    <LocalPoliceIcon />
                    <small className='text-muted d-block' >Our policy</small>
                </button>
            </>
    }
    </section>
)};