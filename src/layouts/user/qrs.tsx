import { QrReader } from 'react-qr-reader';
import { useAuthContext } from '../../contexts/auth.context';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function UserQRS() {

    //  get user
    const { user } = useAuthContext();


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <section id='app-user-qrs' >

        <QrReader className='user-qr-reader' onResult={ ( result ) => result && confirm( 'Add scaned user?' ) } constraints={{
            facingMode: 'environment',
            aspectRatio: 1,
        }} />

    </section>
)};