import { useState } from 'react';

import AppContent from '../../components/app-content';
import DisplayUser from '../../components/display-user';
import SelectUser from '../../components/select-user';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */
export default function AppTodo() {

    //  app needs to select user
    const [ selectedUser, setSelectedUser ] = useState<string>( '' );


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */
return(
    <>
	<article id='app-layout-todo' >

    </article>
    </>
)};