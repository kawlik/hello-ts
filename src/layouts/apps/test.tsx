import { useState } from 'react';

import AppContent from '../../components/app-content';
import DisplayUser from '../../components/display-user';
import SelectUser from '../../components/select-user';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function AppTest() {

    //  app needs to select user
    const [ selectedUser, setSelectedUser ] = useState<string>( '' );


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <>
    {
        !selectedUser
        ? <SelectUser setSelectedUser={ ( user: string ) => setSelectedUser( user ) } />
        : <article id='app-layout-test' >

            <DisplayUser
                selectedUser={ selectedUser }
                unselectUser={ () => setSelectedUser( '' ) }
            />

            <AppContent>

            </AppContent>
        </article>
    }
    </>
)};