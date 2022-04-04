import UserView from '../components/user-view';

import DisplayUser from '../components/display-user';

import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function User() {

    //  all user's friends
    const users = [
        'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj', 'kkk',
        'lll', 'mmm', 'nnn', 'ooo', 'ppp', 'rrr', 'sss', 'ttt', 'uuu', 'www', 'zzz'
    ];


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <section id='app-user'>

        <UserView user={{
            
        }} getID={ () => {} } />

        <div className='user-firends' >
        {
            users
            .map( user => <DisplayUser
                key={ user }
                onClickName={ 'delete' }
                selectedUser={ user }
                unselectUser={ () => alert( 'Remove user from your friends list?' ) }
            /> )
        }
        </div>

        <aside className='app-add-user'>

            <button className='btn btn-light' onClick={ () => {} } >
                <QrCodeScannerIcon />
            </button>

            <button className='btn btn-light' onClick={ () => {} } >
                <PersonAddIcon />
            </button>

        </aside>

    </section>
)};