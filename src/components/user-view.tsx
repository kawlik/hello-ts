import QrCodeIcon from '@mui/icons-material/QrCode';
import ShareIcon from '@mui/icons-material/Share';

import imgAnonymous from '../assets/anonymous.png';

/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function UserView( prop: {
    getID(): void,
    user: {
        displayName?: string,
        photoURL?: string,
    },
}) {



/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <section className='app-user-view' >

        <img src={ prop.user?.photoURL || imgAnonymous } alt={  prop.user?.displayName || 'Anonymous' } className='user-photo' />

        <h2 className='lead mb-4' >{  prop.user?.displayName || 'Anonymous' }</h2>

        <div className='info-block' >
            <button className='btn btn-dark btn-id' onClick={ () => prop.getID() } >
                <QrCodeIcon />
                <small className='ms-2' >Get ID</small>
            </button>
        </div>

        <div className='info-block' >
            <button className='btn btn-dark btn-id' >
                <ShareIcon />
                <small className='ms-2' >Share</small>
            </button>
        </div>

    </section>
)};