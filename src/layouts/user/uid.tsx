import QRCode from 'react-qr-code';

import { useAuthContext } from '../../contexts/auth.context';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function UserUID() {

    //  get user
    const { user } = useAuthContext();


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <section id='app-user-uid'>

        <QRCode value={ user?.uid || '' } className='user-qr-code' />

    </section>
)};