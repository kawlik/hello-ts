import { useAuthContext } from '../../contexts/auth.context';

import SelectUser from '../../components/select-user';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function UserAdd() {

    //  get user
    const { user } = useAuthContext();


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <section id='app-user-add'>
    
        <SelectUser setSelectedUser={ () => confirm( 'Add selected user?' ) }/>

    </section>
)};