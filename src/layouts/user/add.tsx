import { useAuthContext } from '../../contexts/auth.context';

import FindUser from '../../components/find-user';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function UserAdd() {

    //  get user
    const { user } = useAuthContext();


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <section id='app-user-add'>
    
        <FindUser setSelectedUser={ () => confirm( 'Add selected user?' ) }/>

    </section>
)};