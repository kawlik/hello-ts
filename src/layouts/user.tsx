import { useNavigate } from 'react-router-dom';

import routerService from '../services/router.service';

import { useAuthContext } from '../contexts/auth.context';

import UserView from '../components/user-view';
import DisplayUser from '../components/display-user';

import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function User() {

    //  get user
    const { user } = useAuthContext();

    // 	get navigate
	const navigate = useNavigate()

    //  all user's friends
    const users = [
        'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj', 'kkk',
        'lll', 'mmm', 'nnn', 'ooo', 'ppp', 'rrr', 'sss', 'ttt', 'uuu', 'www', 'zzz'
    ];


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <section id='app-user'>

        <UserView
            getID={ () => navigate( routerService.pathUserUID ) }
            user={{
                displayName: user?.displayName || '',
                photoURL: user?.photoURL || '',
            }}
        />

        <div className='user-firends' >
        {
            users
            .map( user => <DisplayUser
                key={ user }
                onClickName={ 'delete' }
                selectedUser={ user }
                unselectUser={ () => confirm( `Are you sure you want to remove ${ user } from your Friends List?` ) }
            /> )
        }
        </div>

        <aside className='app-add-user'>

            <button className='btn btn-light' onClick={ () => navigate( routerService.pathUserQRS ) } >
                <QrCodeScannerIcon />
            </button>

            <button className='btn btn-light' onClick={ () => navigate( routerService.pathUserAdd ) } >
                <PersonAddIcon />
            </button>

        </aside>

    </section>
)};